import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useLocalStorage } from 'react-use';
import { Level, RoadmapItem } from '../../entity/RoadmapModel';
import LevelItem from '../LevelItem';
import { useLocation, useNavigate } from 'react-router-dom';
import { emojisplosion } from 'emojisplosion';
import Note from '../Note';
import RoadmapButtons from '../RoadmapButtons';
import { useAuth0 } from '@auth0/auth0-react';
import { AccordionContainer, RoadmapAccordion } from '../Accordion';
import { DrawerRoot, Drawer, DrawerTitle, DrawerDescription } from '../Drawer';
import { TbFileCertificate } from 'react-icons/tb';
import axios from 'axios';
import { CertificationResult } from '../../entity/CertificationModel';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

type Props = {
  data: Level[];
  title: string;
  name: string;
  isPreview: boolean;
};

export default function Roadmap(props: Props) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [lastSelectedElement, setLastSelectedElement] = useState<HTMLElement | null>(null);
  const { isAuthenticated } = useAuth0();

  const roadmapRef = useRef(null);
  const { pathname, hash, key } = useLocation();
  const [activeItem, setActiveItem] = React.useState<RoadmapItem>();
  const [mousePos, setMousePos] = useState<{ x: number; y: number }>();
  const [selectedItems, setSelectedItems] = useLocalStorage(
    'selectedItems',
    {} as Record<string, boolean>,
  );

  const handleOpenChange = useCallback(
    (isOpen: boolean) => {
      if (!isOpen) {
        window.history.pushState(props.name, props.name, `/roadmap/${props.name}`);
        setIsDrawerOpen(isOpen);
      }

      setIsDrawerOpen(isOpen);
    },
    [props.name],
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePos({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    if (localStorage.getItem('selectedItems')) {
      setSelectedItems(JSON.parse(localStorage.getItem('selectedItems') || '') || {});
    }
  }, [setSelectedItems]);

  useEffect(() => {
    if (hash) {
      const anchorItem = hash.replaceAll('#', '');
      if (anchorItem) {
        props.data.forEach((level) => {
          level.items.forEach((item) => {
            if (item.label === decodeURI(anchorItem)) {
              setActiveItem(item);
              handleOpenChange(true);
            }
          });
        });
      }
    }
  }, [pathname, hash, key, handleOpenChange, props.data]);

  function saveRead(label: string, checked: boolean) {
    let selected = selectedItems;
    if (!selected) {
      selected = {};
    }
    selected[label] = checked;
    setSelectedItems(selected);
    localStorage.setItem('selectedItems', JSON.stringify(selected));

    if (checked) {
      emojisplosion({
        emojiCount: 1,
        uniqueness: 1,
        position: {
          x: mousePos?.x || innerWidth / 2,
          y: mousePos?.y || innerHeight / 2,
        },
        emojis: ['🎉', '🎊', '🎈', '🤓'],
      });
    }
  }

  function isRead(label: string) {
    if (selectedItems) {
      return selectedItems[label];
    }
    return false;
  }

  function isAllContentRead(label: string, contentLength: number) {
    if (selectedItems) {
      const contentRead = Object.keys(selectedItems).filter(
        (key) => key.endsWith('-' + label) && selectedItems[key] === true,
      );
      return contentRead.length === contentLength;
    }

    return false;
  }

  function checkAllContent(label: string, check: boolean) {
    props.data.forEach((level) => {
      level.items.forEach((item) => {
        if (item.label === label) {
          item.children?.forEach((child) => {
            saveRead(child.label + '-' + item.label, check);
          });
        }
      });
    });

    if (check) {
      emojisplosion({
        emojiCount: 1,
        uniqueness: 1,
        position: {
          x: mousePos?.x || innerWidth / 2,
          y: mousePos?.y || innerHeight / 2,
        },
        emojis: ['🎉', '🎊', '🎈', '🤓'],
      });
    }
  }

  return (
    <DrawerRoot open={isDrawerOpen} onOpenChange={handleOpenChange}>
      <div className={`gap-2 pr-2 md:pr-4 ${props.isPreview ? 'hidden' : 'flex'}`}>
        <div className="flex-grow"></div>
        <RoadmapButtons
          buttons={
            isAuthenticated
              ? ['horizontalView', 'download', 'exportNotes']
              : ['horizontalView', 'download']
          }
          title={props.title}
          roadmapRef={roadmapRef}
        />
      </div>
      <section ref={roadmapRef} className="pb-8">
        <h2
          className={`c-yellow c-dark-brown my-6 text-center font-title text-3xl font-bold ${
            props.isPreview ? 'hidden' : ''
          }`}
        >
          {props.title}
        </h2>
        <div>
          {props.data.map((level, index, data) => {
            return (
              <LevelItem
                key={index}
                level={level}
                index={index}
                isAllContentRead={isAllContentRead}
                checkAllContent={checkAllContent}
                levelsQty={data.length}
                setActiveItem={setActiveItem}
                updateLastSelectedElement={setLastSelectedElement}
              />
            );
          })}
        </div>
      </section>

      <RoadmapDrawer
        activeItem={activeItem}
        isRead={isRead}
        saveRead={saveRead}
        isPreview={props.isPreview}
        lastSelectedElement={lastSelectedElement}
      />
    </DrawerRoot>
  );
}

type RoadmapDrawerProps = {
  activeItem?: RoadmapItem;
  isRead: (label: string) => boolean;
  saveRead: (label: string, checked: boolean) => void;
  isPreview?: boolean;
  lastSelectedElement?: HTMLElement | null;
};

const RoadmapDrawer = ({
  activeItem,
  isPreview,
  isRead,
  saveRead,
  lastSelectedElement,
}: RoadmapDrawerProps) => {
  const [passedCertification, setPassedCertification] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      if (activeItem?.certification) {
        await checkPassedCertification(activeItem?.certification);
      }
    })();
  }, [activeItem?.certification]);

  async function checkPassedCertification(certification: string) {
    const response = await axios.get<CertificationResult>(
      `${import.meta.env.VITE_API_URL}/certification/${certification}/highest-score`,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: cookies.get('api_token'),
        },
      },
    );
    if (response.data.correctQuestions / response.data.questions.length >= 0.75) {
      setPassedCertification(true);
    }
  }

  function navigateCertification() {
    navigate(`/certification/${activeItem?.certification}`);
  }
  return (
    <Drawer lastSelectedElement={lastSelectedElement}>
      <DrawerTitle className="flex items-center gap-2 text-xl font-bold text-brown">
        {activeItem?.label}{' '}
        {activeItem?.certification && (
          <div className="group relative my-auto flex">
            <TbFileCertificate
              className={`m-auto my-auto mx-1 ${passedCertification ? 'stroke-green ' : ''}`}
            />
            <div
              className="absolute top-6 -left-16 flex w-40 rounded-md bg-dark-brown text-center text-sm
                 text-light-brown opacity-0 transition-opacity group-hover:opacity-100"
            >
              {passedCertification ? 'Certificação Concluída' : 'Fazer Certificação'}
            </div>
          </div>
        )}
        {activeItem?.certification && !passedCertification && (
          <button
            onClick={navigateCertification}
            className="rounded-md bg-light-yellow p-2 text-xs text-dark-brown shadow-brutalist-neg transition-all duration-300 hover:shadow-brutalist-neg-hover"
          >
            Fazer Certificação
          </button>
        )}
      </DrawerTitle>
      <DrawerDescription className="mb-4 pt-6 font-title text-light-brown">
        {activeItem?.description}
      </DrawerDescription>

      <div>
        <AccordionContainer
          defaultValue={activeItem?.children?.[0].label}
          className="w-full"
          collapsible
          type="single"
        >
          {activeItem?.children?.map((child) => {
            const label = child.label + '-' + activeItem?.label;

            return (
              <RoadmapAccordion
                key={child.label}
                section={child}
                isRead={isRead(label)}
                hasCertification={!!activeItem?.certification}
                saveRead={(checked: boolean) => saveRead(label, checked)}
              />
            );
          })}
        </AccordionContainer>
        {!isPreview && <Note id={activeItem?.label || 'asdasd'} title={activeItem?.label || ''} />}
      </div>
    </Drawer>
  );
};
