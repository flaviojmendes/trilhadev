import { Level, LinkType, LinkContentType } from '../entity/RoadmapModel';
import { controleDeVersao } from './items/controleDeVersao';
import { css } from './items/css';
import { frameworksCSS } from './items/frameworksCSS';
import { frontendFramework } from './items/frontendFramework';
import { html } from './items/html';
import { javascript } from './items/javascript';
import { packageManager } from './items/packageManager';

export const data: Level[] = [
  {
    label: 'HTML, CSS e Javascript',
    description:
      'Esse é o básico. Aprendendo esses conceitos você poderá começar a desenvolver um projeto.',
    items: [html, css, javascript],
  },
  {
    items: [controleDeVersao],
  },
  {
    items: [
      {
        label: 'Segurança',
        description:
          'A segurança da Web refere-se às medidas de proteção tomadas pelos desenvolvedores para proteger os aplicativos da Web de ameaças que podem afetar os negócios.',
        children: [
          {
            label: 'O básico',
            links: [
              {
                url: 'https://www.youtube.com/watch?v=KvPtIl-Gz2E&list=PLHz_AreHm4dlaTyjolzCFC6IjLzO8O0XV',
                label: 'Curso Básico de Segurança da Informação - Gustavo Guanabara',
                contentType: LinkContentType.WATCH,
              },
            ],
          },
          {
            label: 'HTTPS',
            links: [
              {
                url: 'https://www.techtudo.com.br/noticias/2014/02/o-que-e-https-e-como-ele-pode-proteger-sua-navegacao-na-internet.ghtml',
                label: 'O que é HTTPS e como ele pode proteger a sua navegação na Internet',
                contentType: LinkContentType.READ,
              },
            ],
          },
          {
            label: 'CORS',
            links: [
              {
                url: 'https://www.youtube.com/watch?v=GZV-FUdeVwE',
                label: 'Cross-Origin Resource Sharing em 6 minutos - Codigo Fonte TV',
                contentType: LinkContentType.WATCH,
              },
              {
                url: 'https://www.treinaweb.com.br/blog/o-que-e-cors-e-como-resolver-os-principais-erros',
                label: 'O que é CORS e como resolver os principias erros - Gabriel Machado',
                contentType: LinkContentType.READ,
              },
            ],
          },
          {
            label: 'Content Security Policy',
            links: [
              {
                url: 'https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Headers/Content-Security-Policy',
                label: 'Content-Security-Policy',
                contentType: LinkContentType.READ,
              },
            ],
          },
          {
            label: 'Helmet',
            links: [
              {
                url: 'https://www.youtube.com/watch?v=Kc2yuSdoxnQ&t=1s',
                label: 'Helmet - Node.js & MongoDB Tips 04',
                contentType: LinkContentType.WATCH,
              },
            ],
          },
          {
            label: 'OWASP',
            links: [
              {
                url: 'https://www.youtube.com/watch?v=wC_epzVm780',
                label: 'Série OWASP Top 10 - Cássio B. Pereira',
                contentType: LinkContentType.WATCH,
              },
            ],
          },
          {
            label: 'Cookies',
            links: [
              {
                url: 'https://dias.dev/2022-09-27-cookies-e-seguranca/',
                label: 'Cookies e Segurança',
                contentType: LinkContentType.READ,
              },
              {
                url: 'https://tecnoblog.net/responde/o-que-sao-cookies-como-limpar-ativar-e-bloquear/',
                label: 'O que são cookies? [como limpar, ativar e bloquear] - Ronaldo Gogoni',
                contentType: LinkContentType.READ,
              },
            ],
          },
          {
            label: 'Prevenção de ataques',
            links: [
              {
                label: 'Segurança da Informação: Evitando Cross-site scripting (XSS) | Dias de Dev',
                url: 'https://youtu.be/lntsVxPZibw',
                contentType: LinkContentType.WATCH,
              },
              {
                label:
                  'Ataque com Regex - Negação de serviço com expressões regulares | Dias de Dev',
                url: 'https://youtu.be/MEfgCLE3Dw8',
                contentType: LinkContentType.WATCH,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    items: [
      {
        label: 'Performance',
        description:
          'Performance no frontend refere-se ao desempenho da interface de usuário de um site ou aplicativo web. Isso inclui coisas como velocidade de carregamento de página, tempo de resposta a interações do usuário e uso de recursos do dispositivo, como CPU e memória.',
        children: [
          {
            label: 'O básico',
            links: [
              {
                label:
                  'Como usar Cache HTTP - Entenda melhor sobre performance na Web | Dias de Dev',
                url: 'https://www.youtube.com/watch?v=IrwIYywpvbM',
                contentType: LinkContentType.WATCH,
              },
              {
                label:
                  'CDN: Entenda o que é e porque você PRECISA de uma para sua aplicação web | Dias de Dev',
                url: 'https://youtu.be/2geXZqSeulA',
                contentType: LinkContentType.WATCH,
              },
            ],
          },
        ],
      },
    ],
  },
  packageManager,
  {
    items: [
      {
        label: 'Pré Processadores CSS',
        description:
          'Os pré-processadores de CSS são linguagens de script que estendem os recursos padrão do CSS. Eles nos permitem usar lógica em nosso código CSS, como variáveis, aninhamento, herança, mixins, funções e operações matemáticas.',
        children: [
          {
            label: 'Sass',
            links: [
              {
                url: 'https://www.youtube.com/watch?v=Wo5t3uUV8n4',
                label: 'Aprenda Sass em 1 hora - Matheus Battisti (Hora de Codar)',
                contentType: LinkContentType.WATCH,
              },
              {
                url: 'https://www.sassmeister.com/',
                label: 'Editor e compilador online para praticar a sintaxe do SASS',
                contentType: LinkContentType.PRACTICE,
              },
            ],
          },
          {
            label: 'PostCSS',
            links: [
              {
                url: 'https://blog.umbler.com/br/introducao-ao-postcss/',
                label: 'Introdução ao PostCSS - Umbler Blog',
                contentType: LinkContentType.READ,
              },
              {
                url: 'https://tableless.com.br/comecando-desenvolver-com-o-postcss/',
                label: 'Começando desenvolver com o PostCSS',
                contentType: LinkContentType.READ,
              },
            ],
          },
          {
            label: 'Less',
            links: [
              {
                url: 'http://lesscss.loopinfinito.com.br',
                label: 'LessCSS - Loop Infinito',
                contentType: LinkContentType.READ,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    items: [
      {
        label: 'Acessibilidade na Web',
        description:
          'Acessibilidade web é a possibilidade de o conteúdo e os serviços da web estarem disponíveis para todas as pessoas e de pessoas diferentes poderem  entender, compreender, navegar, interagir e contribuir com a web.',
        children: [
          {
            label: 'O que é acessibilidade na web?',
            links: [
              {
                url: 'https://www.alura.com.br/artigos/o-que-e-acessibilidade-web',
                label: 'O que é acessibilidade na web? - Alura ',
                contentType: LinkContentType.READ,
              },
              {
                url: 'https://youtu.be/hna7hbg98z4',
                label: 'Desmistificando a Acessibilidade na Web - Frontinsampa 2014',
                contentType: LinkContentType.WATCH,
              },
              {
                url: 'https://pt.slideshare.net/MarinaDomingues7/acessibilidade-por-que-deixarmos-de-ser-amadores-para-um-pblico-que-espera-mais-de-ns',
                label:
                  'Acessibilidade - por que deixarmos de ser amadores para um público que espera mais de nós',
                contentType: LinkContentType.READ,
              },
              {
                url: 'https://issuu.com/codeclube/docs/ebook_raissav2',
                label: 'Introdução à acessibilidade na web para desenvolvedores',
                contentType: LinkContentType.READ,
              },
            ],
          },
          {
            label: 'HTML: Boas práticas em acessibilidade',
            links: [
              {
                url: 'https://developer.mozilla.org/pt-BR/docs/Learn/Accessibility/HTML#boa_sem%C3%A2ntica',
                label: 'Boa semântica',
                contentType: LinkContentType.READ,
              },
              {
                url: 'https://mwpt.com.br/acessibilidade-digital/boas-praticas/',
                label: 'Boas práticas de acessibilidade digital - Movimento Web para Todos',
                contentType: LinkContentType.READ,
              },
              {
                url: 'https://youtu.be/HaSgt1hK2Fs',
                label: 'Semântica na HTML5 é importante - @Curso em Vídeo HTML5 e CSS3',
                contentType: LinkContentType.WATCH,
              },
            ],
          },
          {
            label: 'JavaScript com Acessibilidade',
            links: [
              {
                url: 'https://developer.mozilla.org/pt-BR/docs/Learn/Accessibility/CSS_and_JavaScript',
                label: 'CSS e JavaScript - melhores práticas de acessibilidade - MDN Web Docs',
                contentType: LinkContentType.READ,
              },
              {
                url: 'https://medium.com/emanuelg-blog/escrevendo-javascript-com-acessibilidade-em-mente-3720e9779969',
                label: 'Escrevendo JavaScript com acessibilidade em mente',
                contentType: LinkContentType.READ,
              },
              {
                url: 'https://klauslaube.com.br/2010/11/18/acessibilidade-javascript-nao-obstrusivo.html',
                label: 'Garantindo acessibilidade com Javascript não obstrusivo',
                contentType: LinkContentType.READ,
              },
            ],
          },
          {
            label: 'WAI-ARIA',
            links: [
              {
                url: 'https://desenvolvimentoparaweb.com/miscelanea/aria-acessibilidade-web-a11y/',
                label: 'Introdução à ARIA para acessibilidade na Web',
                contentType: LinkContentType.READ,
              },
              {
                url: 'https://youtu.be/l_NBdzqYm44',
                label: 'WAI-ARIA: Acessibilidade em tempo real - Frontinsampa 2015 ',
                contentType: LinkContentType.WATCH,
              },
              {
                url: 'https://developer.mozilla.org/pt-BR/docs/Web/Accessibility/ARIA',
                label: 'WAI-ARIA - MDN Web Docs ',
                contentType: LinkContentType.READ,
              },
            ],
          },
          {
            label: 'Documentação sobre Acessibilidade na Web',
            links: [
              {
                url: 'https://www.w3c.br/traducoes/wcag/wcag21-pt-BR/',
                label: 'WCAG',
                contentType: LinkContentType.READ,
              },
              {
                url: 'https://www.w3.org/WAI/standards-guidelines/aria/',
                label: 'WAI-ARIA Overview',
                contentType: LinkContentType.READ,
              },
              {
                url: 'https://developer.mozilla.org/pt-BR/docs/Web/Accessibility',
                label: 'Acessibilidade - MDN Web Docs',
                contentType: LinkContentType.READ,
              },
              {
                url: 'https://guia-wcag.com/',
                label: 'WCAG - Guia de Consulta Rápida',
                contentType: LinkContentType.READ,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    label: 'Ferramentas de Build',
    items: [
      {
        label: 'Task Runners',
        children: [
          {
            label: 'npm scripts',
            links: [
              {
                url: 'https://acervolima.com/introducao-aos-scripts-npm/',
                label: 'Introdução aos scripts NPM',
                contentType: LinkContentType.READ,
              },
            ],
          },
        ],
      },
      {
        label: 'Module Bundlers',
        description:
          'Module Bundlers são ferramentas utilizadas para empacotar todas as dependências e módulos de um projeto em um novo arquivo capaz de ser processado pelo navegador.',
        children: [
          {
            label: 'Webpack',
            links: [
              {
                url: 'https://www.youtube.com/watch?v=sU3W2ZTt-8I',
                label: 'Webpack - Curso rápido para iniciantes - Ricardo Sanches',
                contentType: LinkContentType.WATCH,
              },
              {
                url: 'https://www.youtube.com/watch?v=u0euWX6CeIg',
                label: 'Webpack - Aprenda de uma vez por todas - Gean Developer',
                contentType: LinkContentType.WATCH,
              },
            ],
          },
          {
            label: 'esbuild',
            links: [
              {
                url: 'https://blog.logrocket.com/getting-started-esbuild/',
                label: 'Getting started with esbuild - LogRocket',
                contentType: LinkContentType.READ,
              },
            ],
          },
          { label: 'Rollup', links: [] },
          { label: 'Parcel', links: [] },
          {
            label: 'Vite',
            links: [
              {
                url: 'https://vitejs.dev/guide/',
                label: 'Documentação Oficial',
                votes: 0,
                type: LinkType.FREE,
                contentType: LinkContentType.READ,
              },
              {
                url: 'https://dev.to/lixeletto/vite-js-o-build-tool-que-vai-facilitar-a-sua-vida-15ho',
                label: 'Vite.js - O build tool que vai facilitar a sua vida - Camilo Micheletto',
                votes: 0,
                type: LinkType.FREE,
                contentType: LinkContentType.READ,
              },
              {
                url: 'https://eduardo-diogo.medium.com/vite-js-killer-na-cria%C3%A7%C3%A3o-de-frontend-9b083f8a77e6',
                label: 'ViteJS, O Killer na criação de frontend - Eduardo Garcia',
                votes: 0,
                type: LinkType.FREE,
                contentType: LinkContentType.READ,
              },
            ],
          },
        ],
      },
      {
        label: 'Formatadores e Linters',
        description:
          'Um linter é uma ferramenta usada para analisar código e descobrir bugs, erros de sintaxe, inconsistências estilísticas e construções suspeitas. Os linters populares para JavaScript incluem ESLint, JSLint e JSHint.',
        children: [
          {
            label: 'Prettier',
            links: [
              {
                url: 'https://www.youtube.com/watch?v=uem6ChxImEQ',
                label: 'Como instalar o Prettier | CURSO DE HTML E CSS - Front Beginners',
                votes: 0,
                type: LinkType.FREE,
                contentType: LinkContentType.WATCH,
              },
              {
                url: 'https://blog.cod3r.com.br/configurando-a-extensao-prettier-no-visual-studio-code/',
                label: 'Configurando a extensão Prettier no Visual Studio Code',
                votes: 0,
                type: LinkType.FREE,
                contentType: LinkContentType.READ,
              },
            ],
          },
          {
            label: 'ESLint',
            links: [
              {
                url: 'https://blog.cod3r.com.br/organizacao-e-padronizacao-com-eslint/',
                label: 'Organização e padronização com ESLint',
                votes: 0,
                type: LinkType.FREE,
                contentType: LinkContentType.READ,
              },
              {
                url: 'https://www.youtube.com/watch?v=i26sZrPj2zY',
                label: 'Eslint para iniciantes - Mayk Brito',
                votes: 0,
                type: LinkType.FREE,
                contentType: LinkContentType.WATCH,
              },
            ],
          },
          { label: 'StandardJS', links: [] },
        ],
      },
    ],
  },

  {
    items: [
      {
        label: 'Typescript',
        description:
          'TypeScript é uma extensão do JavaScript que adiciona tipagem estática ao código. Isso significa que, ao usar TypeScript, você pode declarar explicitamente o tipo de variáveis, funções e outros elementos do código, o que ajuda a evitar erros e torna o desenvolvimento mais previsível.',
        children: [
          {
            label: 'Introdução',
            links: [
              {
                url: 'https://www.youtube.com/watch?v=kg2-SMolAV0',
                label: 'TypeScript - O que é e quais os seus benefícios? | Diego Fernandes',
                votes: 0,
                type: LinkType.FREE,
                contentType: LinkContentType.WATCH,
              },
              {
                url: 'https://www.youtube.com/watch?v=lCemyQeSCV8',
                label:
                  'CURSO DE TYPESCRIPT NA PRÁTICA - APRENDA TYPESCRIPT EM 1 HORA - Matheus Battisti',
                votes: 0,
                type: LinkType.FREE,
                contentType: LinkContentType.WATCH,
              },
              {
                url: 'https://www.youtube.com/watch?v=fx7JqqCw1qg',
                label: 'Construindo um app fullstack com o melhor do TypeScript - Diego Fernandes',
                votes: 0,
                type: LinkType.FREE,
                contentType: LinkContentType.WATCH,
              },
            ],
          },
        ],
      },
    ],
  },
  frontendFramework,

  {
    items: [
      {
        label: 'CSS Moderno',
        children: [
          {
            label: 'Styled Components',
            links: [
              {
                url: 'https://www.youtube.com/watch?v=QdfjWRc4ySA',
                label: 'Styled Components, por onde começar? - Mario Souto Dev Soutinho',
                contentType: LinkContentType.WATCH,
              },
            ],
          },
          {
            label: 'Módulos CSS',
            links: [
              {
                url: 'https://medium.com/tableless/css-modules-m%C3%B3dulos-no-seu-css-hoje-cb81c4d51e16',
                label: 'CSS Modules: Módulos no seu CSS hoje - Pedro Tacla Yamada',
                contentType: LinkContentType.READ,
              },
            ],
          },
          { label: 'Styled JSX', links: [] },
          {
            label: 'Emotion',
            links: [
              {
                url: 'https://emotion.sh/docs/introduction',
                label: 'Introdução ao Emotion (documetação em inglês)',
                contentType: LinkContentType.READ,
              },
            ],
          },
        ],
      },
    ],
  },

  {
    items: [
      {
        label: 'Web Components',
        children: [
          {
            label: 'Templates HTML',
            links: [
              {
                url: 'https://rockcontent.com/br/blog/template/',
                label:
                  'Template: o que é, para que serve e como aplicar no site da sua empresa - Ivan de Souza',
                votes: 0,
                type: LinkType.FREE,
                contentType: LinkContentType.READ,
              },
            ],
          },
          {
            label: 'Custom Elements',
            links: [
              {
                url: 'https://www.youtube.com/watch?v=fZZAt0Sbz5k',
                label: 'Vamos construir um WEB Component e aprender Shadow DOM  - Mayk Brito',
                votes: 0,
                type: LinkType.FREE,
                contentType: LinkContentType.WATCH,
              },
              {
                url: 'https://www.youtube.com/watch?v=hnOpu1Q6qEk&t=1670s',
                label: 'Criando Web Components com Stencil JS - Matheus Castiglioni',
                votes: 0,
                type: LinkType.FREE,
                contentType: LinkContentType.WATCH,
              },
            ],
          },
          {
            label: 'Shadow DOM',
            links: [
              {
                url: 'https://www.youtube.com/watch?v=PMm-VRXz8I8',
                label:
                  'Web Components e Seus Três PRINCIPAIS CONCEITOS: DOM, Shadow DOM e Virtual DOM - Leonardo Leitão',
                votes: 0,
                type: LinkType.FREE,
                contentType: LinkContentType.WATCH,
              },
            ],
          },
        ],
      },
    ],
  },

  frameworksCSS,

  {
    items: [
      {
        label: 'Testes',
        description:
          "Antes de entregar seu aplicativo aos usuários, você precisa ter certeza de que seu aplicativo atende aos requisitos para os quais foi projetado e que ele não faz coisas estranhas e não intencionais (chamadas de 'bugs'). Para conseguir isso, 'testamos' nossos aplicativos de diferentes maneiras.",
        children: [
          {
            label: 'Jest',
            links: [
              {
                url: 'https://jestjs.io/pt-BR/docs/getting-started',
                label: 'Documentação',
                votes: 0,
                type: LinkType.FREE,
                contentType: LinkContentType.READ,
              },
              {
                url: 'https://www.devmedia.com.br/teste-unitario-com-jest/41234',
                label: 'Teste unitário com Jest',
                votes: 0,
                type: LinkType.FREE,
                contentType: LinkContentType.READ,
              },
            ],
          },
          {
            label: 'react-testing-library',
            links: [
              {
                url: 'https://testing-library.com/docs/react-testing-library/intro',
                label: 'Documentação',
                votes: 0,
                type: LinkType.FREE,
                contentType: LinkContentType.READ,
              },
              {
                url: 'https://blog.rocketseat.com.br/introducao-a-testing-library-testando-componentes-react/',
                label: 'Introdução à Testing Library — Testando componentes React',
                votes: 0,
                type: LinkType.FREE,
                contentType: LinkContentType.READ,
              },
            ],
          },
          {
            label: 'Cypress',
            links: [
              {
                url: 'https://docs.cypress.io/guides/getting-started/installing-cypress',
                label: 'Documentação',
                votes: 0,
                type: LinkType.FREE,
                contentType: LinkContentType.READ,
              },
              {
                url: 'https://www.youtube.com/playlist?list=PLnUo-Rbc3jjyx5BVnG8MB7vNd5ecu2yP1',
                label: 'Minicurso de Cypress - Agilizei',
                votes: 0,
                type: LinkType.FREE,
                contentType: LinkContentType.WATCH,
              },
              {
                url: 'https://softdesign.com.br/blog/cypress_passo_a_passo_para_comecar_a_usar/',
                label: 'Cypress: passo a passo para começar a usar - Ederson Meira dos Santos',
                votes: 0,
                type: LinkType.FREE,
                contentType: LinkContentType.READ,
              },
            ],
          },
          {
            label: 'Enzyme',
            links: [
              {
                url: 'https://enzymejs.github.io/enzyme/',
                label: 'Documentação',
                votes: 0,
                type: LinkType.FREE,
                contentType: LinkContentType.READ,
              },
              {
                url: 'https://medium.com/aurum-tech/testes-de-componentes-react-com-jest-e-enzyme-be3921fae8b1',
                label: 'Testes de componentes React com Jest e Enzyme',
                votes: 0,
                type: LinkType.FREE,
                contentType: LinkContentType.READ,
              },
            ],
          },
          {
            label: 'Playwright',
            links: [
              {
                url: 'https://playwright.dev/',
                label: 'Documentação',
                votes: 0,
                type: LinkType.FREE,
                contentType: LinkContentType.READ,
              },
            ],
          },
        ],
      },
    ],
  },

  {
    items: [
      {
        label: 'Type Checkers',
        children: [
          {
            label: 'Typescript',
            links: [
              {
                url: 'https://www.youtube.com/playlist?list=PLlAbYrWSYTiPanrzauGa7vMuve7_vnXG_',
                label: 'Mini Curso de Typescript - Willian Justen',
                votes: 0,
                type: LinkType.FREE,
                contentType: LinkContentType.WATCH,
              },
              {
                url: 'https://www.youtube.com/playlist?list=PLb2HQ45KP0Wsk-p_0c6ImqBAEFEY-LU9H',
                label: 'TypeScript - Zero to Hero - Glaucia Lemos',
                votes: 0,
                type: LinkType.FREE,
                contentType: LinkContentType.WATCH,
              },
              {
                url: 'https://www.w3schools.com/typescript/typescript_exercises.php',
                label: 'Exercícios TypeScript (em inglês)',
                votes: 0,
                type: LinkType.FREE,
                contentType: LinkContentType.PRACTICE,
              },
            ],
          },
          {
            label: 'Flow',
            links: [
              {
                url: 'https://pt-br.reactjs.org/docs/static-type-checking.html',
                label: 'Verificando Tipos Estáticos',
                votes: 0,
                type: LinkType.FREE,
                contentType: LinkContentType.READ,
              },
            ],
          },
        ],
      },
    ],
  },

  {
    items: [
      {
        label: 'PWA (Progressive Web Apps)',
        description:
          'Progressive Web Apps (PWAs) são sites que são progressivamente aprimorados para funcionar como aplicativos nativos instalados em plataformas de suporte, enquanto funcionam como sites normais em outros navegadores.',
        children: [
          { label: 'Storage', links: [] },
          {
            label: 'Web Sockets',
            links: [
              {
                url: 'https://developer.mozilla.org/pt-BR/docs/Web/API/WebSockets_API',
                label: 'Documentação',
                votes: 0,
                type: LinkType.FREE,
                contentType: LinkContentType.READ,
              },
            ],
          },
          {
            label: 'Service Workers',
            links: [
              {
                url: 'https://womakerscode.gitbook.io/pwa-workshop/2.-instalando-o-service-worker',
                label: 'Instalando o Service Worker',
                votes: 0,
                type: LinkType.FREE,
                contentType: LinkContentType.READ,
              },
            ],
          },
          { label: 'Localização', links: [] },
          { label: 'Notificações', links: [] },
          { label: 'Orientação', links: [] },
          { label: 'Pagamentos', links: [] },
          { label: 'Credenciais', links: [] },
        ],
      },
    ],
  },
  {
    items: [
      {
        label: 'SSR (Renderização no Servidor)',
        description:
          'SSR é a sigla para Server Side Rendering, ou Renderização do Lado do Servidor. O SSR vem para solucionar um pouco dos problemas das aplicações SPAs, tentando manter suas principais vantagens.',
        children: [
          {
            label: 'React - Next.js',
            links: [
              {
                url: 'https://www.youtube.com/watch?v=PHKaJlAeNLk',
                label: 'Next.JS e React: Curso Intensivo - Masterclass #01 [2021] - Cod3r Cursos',
                votes: 0,
                type: LinkType.FREE,
                contentType: LinkContentType.WATCH,
              },
            ],
          },
          { label: 'React - After.js', links: [] },
          { label: 'Angular - Universal', links: [] },
          {
            label: 'Vue.js - Nuxt.js',
            links: [
              {
                url: 'https://www.youtube.com/watch?v=jw6tRUGkpmo',
                label: 'Curso gratuito de Nuxt.js 2 - Tiago Matos',
                votes: 0,
                type: LinkType.FREE,
                contentType: LinkContentType.WATCH,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    items: [
      {
        label: 'GraphQL',
        description:
          'GraphQL é uma linguagem de consulta para APIs e um tempo de execução para atender a essas consultas com seus dados existentes. O GraphQL fornece uma descrição completa e compreensível dos dados em sua API, oferece aos clientes o poder de solicitar exatamente o que eles precisam e nada mais, facilita a evolução de APIs ao longo do tempo e permite ferramentas de desenvolvedor poderosas.',
        children: [
          {
            label: 'Introdução',
            links: [
              {
                label: 'Curso Completo de GraphQL Básico - Washington Developer',
                url: 'https://www.youtube.com/watch?v=RyqLvFhPNy8&list=PLK5FPzMuRKlyeZYiJNA54j4lpfxHGlz0j&index=1',
                contentType: LinkContentType.WATCH,
              },
            ],
          },
          {
            label: 'Apollo',
            links: [
              {
                label: 'Pra que serve, conceitos e Hello World - Mateus Silva',
                url: 'https://www.youtube.com/watch?v=7RoHxSGVAdU&list=PLPXWI3llyMiK9uw7tfljM2hnQl2qu6CeT',
                contentType: LinkContentType.WATCH,
              },
            ],
          },
          {
            label: 'Relay Modern',
            links: [
              {
                url: 'https://relay.dev/',
                label: 'Documentação',
                votes: 0,
                type: LinkType.FREE,
                contentType: LinkContentType.READ,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    items: [
      {
        label: 'Geradores de Sites Estáticos',
        description:
          'Um gerador de site estático é uma ferramenta que gera um site HTML estático completo com base em dados brutos e um conjunto de modelos. Essencialmente, um gerador de site estático automatiza a tarefa de codificar páginas HTML individuais e deixa essas páginas prontas para servir aos usuários com antecedência. Como essas páginas HTML são pré-criadas, elas podem ser carregadas muito rapidamente nos navegadores dos usuários.',
        children: [
          {
            label: 'Next.js',
            links: [
              {
                url: 'https://www.youtube.com/playlist?list=PLkFMdTTdI9c3m6R-JinONx3ha3CsBy2hB',
                label: 'Next.js - Lucas Nhimi',
                votes: 0,
                type: LinkType.FREE,
                contentType: LinkContentType.WATCH,
              },
            ],
          },
          {
            label: 'GatsbyJS',
            links: [
              {
                label: 'GatsbyJS - Thiago Franchin',
                url: 'https://www.youtube.com/watch?v=3b2PinXRqYU&list=PLN9uKzK0o3GR3ky2Q6zc2v0Dlej3oOBtT&index=1',
                contentType: LinkContentType.WATCH,
              },
            ],
          },
          {
            label: 'Nuxt.js',
            links: [
              {
                label: 'Curso Gratuito de Nuxt.js 2 - Tiago Matos',
                url: 'https://www.youtube.com/watch?v=jw6tRUGkpmo&list=PLcoYAcR89n-oU266D5Dy6DT-H8npny_qJ&index=1',
                contentType: LinkContentType.WATCH,
              },
            ],
          },
          {
            label: 'Vuepress',
            links: [
              {
                label: 'Conheça o Vuepress',
                url: 'https://vuejsbrasil.org/conheca-o-vuepress/',
                contentType: LinkContentType.READ,
              },
            ],
          },
          { label: 'Jekyll', links: [] },
          { label: 'Hugo', links: [] },
          {
            label: 'Gridsome',
            links: [
              {
                label: 'Introdução ao Gridsome',
                url: 'https://br.atsit.in/archives/24295',
                contentType: LinkContentType.READ,
              },
            ],
          },
          { label: 'Eleventy', links: [] },
        ],
      },
    ],
  },
  {
    label: 'Aplicações Mobile',
    items: [
      {
        label: 'React Native',
        children: [
          {
            label: 'O básico',
            links: [
              {
                url: 'https://www.youtube.com/playlist?list=PLdDT8if5attEd4sRnZBIkNihR-_tE612_',
                label: 'Curso React Native - One Bit Code',
                votes: 0,
                type: LinkType.FREE,
                contentType: LinkContentType.WATCH,
              },
              {
                label: 'Primeiros passos no React Native - One Bit Code',
                url: 'https://www.youtube.com/watch?v=Y8tP1jbRYHY&list=PLdDT8if5attEd4sRnZBIkNihR-_tE612_&index=1',
                contentType: LinkContentType.WATCH,
              },
              {
                label: 'Aprenda React Native - Canal Geek Dev',
                url: 'https://www.youtube.com/watch?v=DmUUsTC2YkA&list=PL8fIRnD1uUSnRqz3E2caAWDqbtIFXmNtW',
                contentType: LinkContentType.WATCH,
              },
            ],
          },
        ],
      },
      {
        label: 'NativeScript',
        children: [
          {
            label: 'O básico',
            links: [
              {
                label: 'Documentação',
                url: 'https://nativescript-vue.org/pt-br/docs/introduction/',
                contentType: LinkContentType.READ,
              },
            ],
          },
        ],
      },
      {
        label: 'Flutter',
        children: [
          {
            label: 'O básico',
            links: [
              {
                label: 'Curso de Flutter - Flutterando',
                url: 'https://www.youtube.com/watch?v=XeUiJJN0vsE&list=PLlBnICoI-g-d-J57QIz6Tx5xtUDGQdBFB',
                contentType: LinkContentType.WATCH,
              },
              {
                label: 'Curso Flutter para Iniciantes - Rodrigo Rahman',
                url: 'https://www.youtube.com/watch?v=qt20g3zuVbA&list=PLEXr-WZRgPjwk2v5wYi70WN--pCGvN-9u',
                contentType: LinkContentType.WATCH,
              },
            ],
          },
        ],
      },
      {
        label: 'Ionic',
        children: [
          {
            label: 'O básico',
            links: [
              {
                label: 'Introdução ao Ionic',
                url: 'https://www.devmedia.com.br/guia/ionic/38372',
                contentType: LinkContentType.READ,
              },
              {
                label: 'Ionic // Dicionário do Programador',
                url: 'https://www.youtube.com/watch?v=5QqvO_9LPzQ',
                contentType: LinkContentType.WATCH,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    items: [
      {
        label: 'Aplicações Desktop',
        children: [
          {
            label: 'Electron',
            links: [
              {
                label: 'Electron: Desenvolvendo uma aplicação desktop com HTML, CSS e JS - WDEV',
                url: 'https://www.youtube.com/watch?v=rBeEvzwI11c',
                contentType: LinkContentType.WATCH,
              },
              {
                label: 'Criando aplicativo DESKTOP com Electron js 0- Sujeito Programador',
                url: 'https://www.youtube.com/watch?v=P1gQ7Ppd48U',
                contentType: LinkContentType.WATCH,
              },
              {
                label: 'Documentação',
                url: 'https://www.electronjs.org/pt/docs/latest',
                contentType: LinkContentType.READ,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    items: [
      {
        label: 'Web Assembly',
        description:
          'WebAssembly é um novo tipo de código que pode ser executado em navegadores da Web modernos — é uma linguagem de baixo nível semelhante a assembly com um formato binário compacto que é executado com desempenho quase nativo e fornece linguagens como C/C++, C# e Rust com um destino de compilação para que possam ser executados na web. Ele também foi projetado para ser executado ao lado do JavaScript, permitindo que ambos trabalhem juntos.',
        children: [
          {
            label: 'O básico',
            links: [
              {
                url: 'https://developer.mozilla.org/pt-BR/docs/WebAssembly',
                label: 'O que é WebAssembly? - Mozilla',
                votes: 0,
                type: LinkType.FREE,
                contentType: LinkContentType.READ,
              },
              {
                url: 'https://www.youtube.com/watch?v=tCUd82UAVNg',
                label: 'WebAssembly // Dicionário do Programador',
                votes: 0,
                type: LinkType.FREE,
                contentType: LinkContentType.WATCH,
              },
            ],
          },
          {
            label: 'Blazor',
            links: [
              {
                url: 'https://dotnet.microsoft.com/en-us/learn/aspnet/blazor-tutorial/intro',
                label: 'Primeiro projeto usando Blazor',
                votes: 0,
                type: LinkType.FREE,
                contentType: LinkContentType.VISIT,
              },
              {
                url: 'https://www.youtube.com/watch?v=6YgtFfzheHY&list=PLJ4k1IC8GhW2v0nCR7K-tZeoHwqfPZs5t',
                label: 'Minicurso Blazor',
                votes: 0,
                type: LinkType.FREE,
                contentType: LinkContentType.WATCH,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    items: [
      {
        label: 'SEO',
        description:
          'SEO (Search Engine Optmization) é um conjunto de boas práticas adotadas tanto pelos desenvolvedores quanto por aqueles que inserem algum tipo de conteúdo no site para que este seja listado em melhores posições nos mecanismos de pesquisa (Google, Bing, Baidu, etc).',
        children: [
          {
            label: 'O básico',
            links: [
              {
                url: 'https://developer.mozilla.org/pt-BR/docs/Glossary/SEO',
                label: 'O que é SEO? - Mozilla',
                votes: 0,
                type: LinkType.FREE,
                contentType: LinkContentType.READ,
              },
              {
                url: 'https://university.br.rockcontent.com/courses/search-engine-optimization-seo-cert',
                label: 'Curso de Introdução ao SEO - Rock University',
                votes: 0,
                type: LinkType.FREE,
                contentType: LinkContentType.WATCH,
              },
              {
                url: 'https://dev.to/gabrielgomeso/introducao-ao-seo-seo-00-2bh6',
                label: 'Introdução ao SEO - Gabriel Gomes',
                votes: 0,
                type: LinkType.FREE,
                contentType: LinkContentType.READ,
              },
              {
                url: 'https://www.youtube.com/watch?v=v8LWhWVW9Ek',
                label: 'Guia SEO Completo (Básico ao Avançado) para Desenvolvedor - Rafael Perozin',
                votes: 0,
                type: LinkType.FREE,
                contentType: LinkContentType.WATCH,
              },
              {
                url: 'https://developers.google.com/search',
                label: 'Central de Pesquisa - Google',
                votes: 0,
                type: LinkType.FREE,
                contentType: LinkContentType.READ,
              },
            ],
          },
        ],
      },
    ],
  },
];
