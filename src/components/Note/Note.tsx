import { useAuth0 } from "@auth0/auth0-react";
import { DeleteIcon } from "@chakra-ui/icons";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  Badge,
  Box,
  Button,
  IconButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import Cookies from "universal-cookie";
import getUuidByString from "uuid-by-string";

import { ChangeEvent, useEffect, useState } from "react";
import { NoteModel } from "../../entity/Notes";
import axios, { AxiosError } from "axios";
import { ThreeDots } from "react-loader-spinner";
import { FaTrash, FaTrashAlt } from "react-icons/fa";

const cookies = new Cookies();

type Props = {
  id: string;
  title: string;
};

export default function Note(props: Props) {
  const { isAuthenticated, user, isLoading, logout } = useAuth0();

  const { isOpen, onOpen, onClose } = useDisclosure();
  let [noteText, setNoteText] = useState("");
  let [notes, setNotes] = useState<NoteModel[]>([]);
  let [isSavingNote, setSavingNote] = useState(false);
  let [isDeletingNote, setDeletingNote] = useState(false);

  useEffect(() => {
    if (user) {
      getNotes();
    }
  }, []);

  async function getNotes() {
    // setLoadingRoadmaps(true);
    try {
      console.log(getUuidByString(props.id));
      let response = await axios.get(
        import.meta.env.VITE_API_URL +
          `/notes/${getUuidByString(props.id)}` || "",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: cookies.get("api_token"),
          },
        }
      );

      setNotes(response.data);
    } catch (e) {
      if (e instanceof AxiosError) {
      }
    }
  }

  async function handleDeleteComment(commentId: string) {
    const answer = window.confirm("Tem certeza que quer deletar?");
    if (answer) {
      setDeletingNote(true);
      let response = await axios.delete(
        import.meta.env.VITE_API_URL + `/notes/${commentId}` || "",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: cookies.get("api_token"),
          },
        }
      );
      getNotes();
      setDeletingNote(false);
    }
  }

  let handleCommentTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    let inputValue = e.target.value;
    setNoteText(inputValue);
  };

  let saveCommentText = async () => {
    setSavingNote(true);
    let comment: NoteModel = {
      text: noteText,
      author: user?.nickname,
      createdAt: new Date(),
      contentId: getUuidByString(props.id),
    };

    await axios.post(import.meta.env.VITE_API_URL + `/note` || "", comment, {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
        Authorization: cookies.get("api_token"),
      },
    });
    setNoteText("");
    getNotes();
    setSavingNote(false);
  };

  return (
    <div className="bg-yellow rounded-lg p-4 mt-4">
      {isAuthenticated && (
        <>
          <h2 className="txt-title text-dark-brown text-center font-semibold text-xl">
            Minhas Anotações
          </h2>
          {notes.length > 0 && (
            <hr className="w-2/3 m-auto my-2 border-yellow" />
          )}

          {notes.map((note, index) => {
            return (
              <>
                <div className="mb-4 ">
                  <p className="mb-0 text-dark-brown">{note.text}</p>
                  <div className="flex align-middle">
                    <button
                      aria-label="Deletar Comentário"
                      onClick={() => handleDeleteComment(note.id || "")}
                      disabled={isDeletingNote}
                      className="mr-2 p-1 rounded-sm bg-red"
                    >
                      <FaTrashAlt className="w-3 text-dark-brown " />
                    </button>

                    <span className="text-red text-xs inline-block align-middle h-fit txt-title my-auto">
                      {new Date(note.createdAt!).toLocaleString()}
                    </span>
                  </div>
                </div>
                {/* <hr className="my-2 mx-auto w-1/2" /> */}
              </>
            );
          })}

          <div>
            <Textarea
              value={noteText}
              onChange={handleCommentTextChange}
              placeholder="Salve aqui suas anotações para não esquecer!"
              size="sm"
              borderColor={"#eabc54"}
              borderWidth={"2px"}
              rounded={"md"}
              _focus={{ borderColor: "#ee8561" }}
              className="text-dark-brown"
            />
            <Button
              mx={"auto"}
              mt={2}
              fontWeight={"normal"}
              onClick={saveCommentText}
              disabled={isSavingNote}
              className="txt-title"
              backgroundColor={"#e9dad5"}
            >
              {isSavingNote ? (
                <ThreeDots
                  height="30"
                  width="30"
                  radius="9"
                  color="#d56a47"
                  ariaLabel="three-dots-loading"
                  wrapperStyle={{}}
                  visible={true}
                />
              ) : (
                <>Salvar Anotação </>
              )}
            </Button>
          </div>
        </>
      )}
    </div>
  );
}