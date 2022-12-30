import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@chakra-ui/react";
import { FaDiscord, FaGithubSquare, FaHandHoldingUsd, FaNewspaper } from "react-icons/fa";
import { ThreeDots } from "react-loader-spinner";
import Logo from "../Logo/Logo";
import MobileMenu from "../MobileMenu/MobileMenu";

export default function Header() {
  const {
    loginWithRedirect,
    user,
    isAuthenticated,
    isLoading,
    logout,
    loginWithPopup,
  } = useAuth0();
  return (
    <header className="w-full p-2 flex flex-wrap space-x-0 space-y-2 mx-auto bg-[#2A2827] shadow-md">
      <MobileMenu />
      <div className="flex-grow">
        {" "}
        <Logo />
      </div>
      <nav className="hidden md:flex" aria-label="navegação principal">
        <ul className="flex">
        <li className="flex">
            <a
              target={"_blank"}
              className="flex border-r-2 border-r-yellow text-yellow hover:text-red pr-4 mr-4 my-2"
              href=""
            >
              <FaHandHoldingUsd className="m-auto w-7 h-7 " />
              <span className="my-auto text-base ml-1  hidden md:block txt-title">
                Apoia.se
              </span>
            </a>
          </li>
          <li className="flex">
            <a
              target={"_blank"}
              className="flex border-r-2 border-r-yellow text-yellow hover:text-red pr-4 mr-4 my-2"
              href="https://discord.gg/TmneeHgTBp"
            >
              <FaDiscord className="m-auto w-7 h-7 " />
              <span className="my-auto text-base ml-1  hidden md:block txt-title">
                Discord
              </span>
            </a>
          </li>
          <li className="flex">
            <a
              target={"_blank"}
              className="flex border-r-2 border-r-yellow text-yellow hover:text-red pr-4 mr-4 my-2"
              href="https://github.com/flaviojmendes/trilhadev"
            >
              <FaGithubSquare className="m-auto w-7 h-7 " />
              <span className="my-auto text-base ml-1  hidden md:block txt-title">
                Github
              </span>
            </a>
          </li>
          <li className="flex">
            <a
              target={"_blank"}
              className="flex border-r-2 border-r-yellow text-yellow hover:text-red pr-4 mr-4 my-2"
              href="https://www.getrevue.co/profile/flaviojmendes"
            >
              <FaNewspaper className="m-auto w-7 h-7 " />
              <span className="my-auto text-base ml-1 hidden md:block txt-title">
                Assine a Newsletter
              </span>
            </a>
          </li>

          <li className="flex">
            {isAuthenticated && (
              <>
                <div className="w-200 flex text-yellow align-middle">
                  <img
                    className="m-auto rounded-full w-10 h-10"
                    src={user?.picture}
                    alt={user?.name}
                  />
                  <span className="m-auto ml-2 mr-4 text-base txt-title">
                    {user?.name}
                  </span>
                </div>
                <Button
                  margin={"auto"}
                  onClick={() => logout({ returnTo: window.location.origin })}
                >
                  Logout
                </Button>
              </>
            )}
          </li>
          <li className="flex">
            {!isAuthenticated && !isLoading && (
              <Button margin={"auto"} onClick={() => loginWithRedirect()}>
                Log In
              </Button>
            )}
            {isLoading && (
              <ThreeDots
                height="30"
                width="30"
                radius="9"
                color="#d56a47"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                visible={true}
              />
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}
