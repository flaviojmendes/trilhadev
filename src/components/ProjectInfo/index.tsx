import { cheatSheets } from '../../guides/cheatSheets';
import { GoPlus } from 'react-icons/go';

export default function ProjectInfo() {
  return (
    <section className="grid w-full grid-cols-1 items-stretch justify-center gap-10 bg-dark-brown py-10 px-10 shadow-inner lg:grid-cols-2 xl:px-64">
      <div className="flex flex-col gap-4">
        <div className="my-2 flex w-fit rounded-md bg-medium-brown px-2 font-title text-sm text-light-brown">
          <div className="m-auto mr-2 h-2 w-2 rounded-full bg-red"></div>
          Newsletter mensal sobre a trilha
        </div>
        <p className="m-auto font-title text-4xl text-yellow">
          Assine a <span className="text-red">newsletter</span> para não perder as últimas novidades
          da <span className="text-red">Trilha Info</span>
        </p>
        <div className="group relative flex h-fit w-fit">
          <a
            className="z-20 h-fit w-fit rounded-md bg-light-brown p-2 font-title shadow-brutalist-red transition-all duration-300 hover:bg-light-orange hover:shadow-brutalist-red-hover"
            href="http://eepurl.com/iknir1"
            target={'_blank'}
            rel="noreferrer"
          >
            Assine Agora!
          </a>
        </div>
        <h3 className="mt-8 font-title text-4xl font-semibold text-yellow">
          Open <span className="text-red">Source</span>
        </h3>
        <div className="text-yellow">
          <p className="my-2 font-title">
            A Trilha Info é um projeto{' '}
            <span className="font-semibold text-red hover:text-light-brown">
              <a
                target={'_blank'}
                href="https://github.com/flaviojmendes/trilhainfo"
                rel="noreferrer"
              >
                Open Source
              </a>
            </span>{' '}
            que nasceu em Junho/2022 com o objetivo de agregar e organizar conteúdos gratuitos em
            português para pessoas que querem ingressar na área de Tecnologia.
          </p>
          <p className="my-8 font-title">
            A motivação em criar esse aplicativo é por acreditar que a educação e o conhecimento
            devem ser democráticos. Qualquer pessoa deveria ter acesso aos assuntos que se interessa
            para que garanta um futuro cada vez mais próspero.
          </p>
          <p className="my-8 font-title">
            Encontrou um Bug 🐛, tem uma ideia 💡? É só abrir uma{' '}
            <a
              className="font-semibold text-red hover:text-light-brown"
              target={'_blank'}
              rel="noreferrer"
              href="https://github.com/flaviojmendes/trilhainfo/issues"
            >
              issue
            </a>
            .
          </p>
          <p className="my-8 font-title">
            Portanto, se você também acredita nisso compartilhe para que o conhecimento chegue cada
            vez mais longe. E participe da nossa comunidade no{' '}
            <span className="font-semibold text-red hover:text-light-brown">
              <a target={'_blank'} href="https://discord.gg/HJ3Spm6R" rel="noreferrer">
                Discord
              </a>
            </span>{' '}
          </p>
          <iframe
            src="https://ghbtns.com/github-btn.html?user=flaviojmendes&repo=trilhainfo&type=star&count=true&size=large&v=2"
            scrolling="0"
            width="170"
            height="30"
            title="Trilha Info"
          ></iframe>
        </div>
        <div className="grow"></div>
      </div>

      <div className="mt-10 flex w-full flex-col gap-4 lg:mt-0">
        <div className="my-2 flex w-fit rounded-md bg-medium-brown px-2 font-title text-sm text-light-brown">
          <div className="m-auto mr-2 h-2 w-2 rounded-full bg-blue"></div>
          Faça download gratuito
        </div>
        <h3 className="font-title text-4xl font-semibold text-yellow">
          <span className="text-blue">Guias</span> Cheat Sheets
        </h3>
        {cheatSheets.map((cheatSheet) => {
          return (
            <div key={cheatSheet.id} className="group relative m-auto flex h-full w-full">
              <div className="z-20 flex min-h-fit w-full space-y-2 rounded-md bg-brown p-3 shadow-brutalist-yellow transition-all duration-300 hover:bg-white hover:shadow-brutalist-yellow-hover">
                <a
                  className="flex gap-2 font-title text-lg md:text-2xl"
                  href={`/guide/${cheatSheet.id}`}
                >
                  <GoPlus className="my-auto" /> <span className="my-auto">{cheatSheet.title}</span>
                </a>
              </div>{' '}
            </div>
          );
        })}
      </div>
    </section>
  );
}
