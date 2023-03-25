import { FaRegCircle } from 'react-icons/fa';
import { Level, RoadmapItem } from '../../entity/RoadmapModel';
import ReactGA from 'react-ga4';
import { DrawerTrigger } from '../Drawer';
import { CheckIcon } from '../CheckIcon';
import { useNavigate } from 'react-router-dom';
import { TbGitFork } from 'react-icons/tb';

type Props = {
  level: Level;
  index: number;
  levelsQty: number;
  setActiveItem: (item: RoadmapItem) => void;
  isAllContentRead: (label: string, contentLength: number) => boolean;
  checkAllContent: (label: string, check: boolean) => void;
  updateLastSelectedElement: (element: HTMLElement | null) => void;
};

export default function LevelItem(props: Props) {
  const navigate = useNavigate();

  function triggerItemSelection(item: RoadmapItem) {
    props.setActiveItem(item);
    window.history.pushState(item.label, item.label, `#${encodeURI(item.label)}`);
    ReactGA.event({
      category: 'item_open',
      action: 'open_' + item.label,
    });
  }

  function triggerSubRoadmapSelection(url: string | undefined) {
    if (url) {
      navigate(url);
    }
  }

  function handleToggleAllSelection(
    event:
      | React.MouseEvent<SVGElement | HTMLButtonElement, MouseEvent>
      | React.KeyboardEvent<SVGElement>,
    item: RoadmapItem,
  ) {
    props.checkAllContent(
      item.label,
      !props.isAllContentRead(item.label, item.children?.length || -1),
    );
    event.stopPropagation();
  }

  return (
    <article className="relative flex flex-col">
      <div className="absolute left-[50%] -z-10 h-full translate-x-[-50%] border-l-4 border-yellow"></div>
      <div
        className={
          props.level.label ? ' self-center rounded-md  bg-light-yellow p-4 pb-5 lg:w-2/3' : ''
        }
      >
        {props.level.label && (
          <>
            <h3 className="my-2 text-center font-title text-xl">{props.level.label}</h3>
            <p className="mb-3 text-center">{props.level.description}</p>
          </>
        )}
        <>
          <div
            className={
              'flex place-content-center ' +
              (props.level.items.length >= 4 ? ' flex-wrap space-x-2' : '')
            }
          >
            {props.level.items.map((item, index, level) => {
              const quantity = item.children?.length || -1;
              const isAllContentRead = props.isAllContentRead(item.label, quantity);

              return (
                <div key={index}>
                  {item.url && (
                    <div
                      className={'relative flex h-fit w-fit' + (level.length >= 4 ? ' mb-3' : '')}
                    >
                      <button
                        onClick={() => {
                          triggerSubRoadmapSelection(item.url);
                        }}
                        id={item.label}
                        className={
                          'center z-20 mx-0 my-0 flex w-fit cursor-pointer rounded-md border-2 border-dark-brown p-1 text-center hover:bg-white  hover:shadow-md md:p-2' +
                          (isAllContentRead ? ' bg-light-orange' : ' bg-brown')
                        }
                      >
                        <TbGitFork className="m-auto mx-1" tabIndex={0} />

                        <p
                          className={
                            'c-dark-brown m-auto  whitespace-normal font-title text-lg md:whitespace-nowrap'
                          }
                        >
                          {item.label}
                        </p>

                        {/* <InfoIcon m="auto" mx="1" color={"#494443"} /> */}
                      </button>
                      <div className="absolute top-1 left-1 -right-1 -bottom-1 z-10 rounded-md bg-dark-brown"></div>
                    </div>
                  )}
                  {!item.url && (
                    <div
                      className={'relative flex h-fit w-fit' + (level.length >= 4 ? ' mb-3' : '')}
                    >
                      <DrawerTrigger
                        onClick={(e) => {
                          triggerItemSelection(item);
                          props.updateLastSelectedElement(e.currentTarget);
                        }}
                        id={item.label}
                        className={
                          'center z-20 mx-0 my-0 flex w-fit cursor-pointer rounded-md border-2 border-dark-brown p-1 text-center hover:bg-white  hover:shadow-md md:p-2' +
                          (isAllContentRead ? ' bg-light-orange' : ' bg-brown')
                        }
                      >
                        {isAllContentRead ? (
                          <div className="group relative my-auto flex">
                            <button
                              onClick={(e) => {
                                handleToggleAllSelection(e, item);
                              }}
                              className="flex h-full"
                            >
                              <span className="animate-checking">
                                <CheckIcon className="m-auto my-auto mx-1 stroke-[#228B22]" />
                              </span>
                            </button>
                            <div
                              className="absolute bottom-6 -left-16 w-40 rounded-md bg-dark-brown text-sm
                 text-light-brown opacity-0 transition-opacity group-hover:opacity-100"
                            >
                              Desmarcar Concluído
                            </div>
                          </div>
                        ) : (
                          <div className="group relative my-auto flex">
                            <FaRegCircle
                              className="hover: m-auto mx-1 animate-checking hover:fill-light-orange hover:text-light-orange"
                              onClick={(e) => {
                                handleToggleAllSelection(e, item);
                              }}
                              onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                  handleToggleAllSelection(e, item);
                                }
                              }}
                              tabIndex={0}
                            />
                            <div
                              className="absolute bottom-6 -left-16 w-40 rounded-md bg-dark-brown text-sm
                     text-light-brown opacity-0 transition-opacity group-hover:opacity-100"
                            >
                              Marcar Concluído
                            </div>
                          </div>
                        )}
                        <p
                          className={
                            'c-dark-brown m-auto  whitespace-normal font-title text-lg md:whitespace-nowrap'
                          }
                        >
                          {item.label}
                        </p>

                        {/* <InfoIcon m="auto" mx="1" color={"#494443"} /> */}
                      </DrawerTrigger>
                      <div className="absolute top-1 left-1 -right-1 -bottom-1 z-10 rounded-md bg-dark-brown"></div>
                    </div>
                  )}

                  {index < level.length - 1 && level.length < 4 && (
                    <div className="my-auto h-1 min-w-[10px] max-w-[20px] flex-grow border-b-4 border-dashed border-dark-brown md:max-w-[50px]"></div>
                  )}
                </div>
              );
            })}
          </div>
        </>
      </div>
      {props.index < props.levelsQty - 1 && (
        <div className="flex items-center justify-center">
          <div className="my-0 h-[30px]"></div>
        </div>
      )}
    </article>
  );
}
