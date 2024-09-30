import { Level, LinkType, LinkContentType } from '../entity/RoadmapModel';
import { controleDeVersao } from './items/controleDeVersao';
import { css } from './items/css';
import { html } from './items/html';
import { http } from './items/http';
import { javascript } from './items/javascript';
import { db } from './items/db';
import { SO } from './items/SO';
import { cloudComputing } from './items/cloudComputing';
import { containers } from './items/containers';
import { backendLanguages } from './items/backendLanguages';
import { apis } from './items/apis';
import { security } from './items/security';
import { cicd } from './items/cicd';
export const data: Level[] = [
  {
    label: 'Conhecimento básico sobre internet',
    description:
      'Para ser uma pessoa desenvolvedora backend ou frontend, independente da tecnologia que você ira utilizar, é importante saber os conceitos básicos sobre a internet.',
    items: [http],
  },
  {
    label: 'Conhecimento básico de Frontend',
    description:
      'Apesar de ser controverso estar aqui, um conhecimento básico não vai fazer mal 😅 em algum momento do aprendizado.',
    items: [html, css, javascript],
  },
  {
    items: [SO],
  },
  backendLanguages,
  {
    items: [controleDeVersao],
  },
  db,
  {
    items: [
      {
        label: 'Conceitos Importantes de Banco de Dados',
        children: [
          { label: "ORM's", links: [] },
          {
            label: 'ACID',
            links: [
              {
                label: 'O que são as propriedades ACID em Bancos de Dados - Bóson Treinamentos',
                url: 'https://www.youtube.com/watch?v=fVRY554MHWc&ab_channel=B%C3%B3sonTreinamentos',
                contentType: LinkContentType.WATCH,
              },
            ],
          },
          {
            label: 'Transações',
            links: [
              {
                label: 'Playlist Entity Framework | por Milton Sampaio',
                url: 'https://www.youtube.com/playlist?list=PLAwbaTeLc4u3M-3aOIBMasoDNAKMYSGnj',
                type: LinkType.FREE,
                votes: 0,
                contentType: LinkContentType.WATCH,
              },
            ],
          },
          {
            label: 'N+1',
            description:
              'O problema de consulta N+1 acontece quando seu código executa N instruções de consulta adicionais para buscar os mesmos dados que poderiam ter sido recuperados ao executar a consulta primária.',
            links: [],
          },
          {
            label: 'Normalização',
            links: [
              {
                label: 'Banco de Dados - Normalização - Parte 1',
                url: 'https://www.youtube.com/watch?v=Mhd2bI5pJuo',
                contentType: LinkContentType.WATCH,
              },
              {
                label: 'Curso de modelagem de dados - Bóson Treinamentos',
                url: 'https://www.youtube.com/playlist?list=PLucm8g_ezqNoNHU8tjVeHmRGBFnjDIlxD',
                contentType: LinkContentType.WATCH,
              },
            ],
          },
          {
            label: 'Índices',
            links: [
              {
                label: 'Índices | Por Milton Sampaio',
                url: 'https://www.youtube.com/watch?v=hjiYLR2KEDQ&list=PLAwbaTeLc4u3G-JelKmIO5k_emd0cJjBO&index=4',
                contentType: LinkContentType.WATCH,
              },
            ],
          },
          { label: 'Replicação de Dados', links: [] },
          { label: 'Sharding', links: [] },
          {
            label: 'CAP',
            description:
              'CAP é um acrônimo que significa consistência, disponibilidade e tolerância de partição. De acordo com o teorema CAP, qualquer sistema distribuído pode garantir apenas duas das três propriedades em qualquer ponto do tempo. Você não pode garantir todas as três propriedades de uma vez.',
            links: [],
          },
          {
            label: 'Relacionamento',
            description:
              'É a capacidade que um banco relacional tem de criar vínculos entre registros de diversas tabelas.',
            links: [
              {
                label: 'Relacionamentos | Por Milton Sampaio',
                url: 'https://www.youtube.com/watch?v=jL3Surq1-Tk&list=PLAwbaTeLc4u3G-JelKmIO5k_emd0cJjBO&index=3',
                contentType: LinkContentType.WATCH,
              },
              {
                label: 'Integridade Referencial no SQL | Por Milton Sampaio',
                url: 'https://www.youtube.com/watch?v=hjiYLR2KEDQ&list=PLAwbaTeLc4u3G-JelKmIO5k_emd0cJjBO&index=5',
                contentType: LinkContentType.WATCH,
              },
            ],
          },
        ],
      },
    ],
  },
  apis,
  {
    items: [
      {
        label: 'Caching',
        description:
          'Um cache é uma camada de armazenamento físico de dados de alta velocidade que guarda um subconjunto de dados, geralmente temporário por natureza, para que futuras solicitações referentes a esses dados sejam atendidas de modo mais rápido do que é possível fazer ao acessar o local de armazenamento principal de dados. O armazenamento em cache permite reutilizar com eficiência dados recuperados ou computados anteriormente.',
        children: [
          {
            label: 'Conceito',
            links: [
              {
                label:
                  'Tudo o que você precisa saber sobre cache: como funciona e onde é usado | Dias de Dev',
                url: 'https://youtu.be/zfTw5AUS0K0',
                contentType: LinkContentType.WATCH,
              },
            ],
          },
          {
            label: 'CDN',
            links: [
              {
                label:
                  'CDN: Entenda o que é e porque você PRECISA de uma para sua aplicação web | Dias de Dev',
                url: 'https://youtu.be/2geXZqSeulA',
                contentType: LinkContentType.WATCH,
              },
            ],
          },
          {
            label: 'Redis',
            links: [
              {
                label: 'Redis #1 - Introducción de Redis | Jeison Peguero',
                url: 'https://www.youtube.com/watch?v=GU6N8Qk2dBE&list=PLwGP6T2wG3jbsuEYPqCswwlx4aU0qhgW1',
                contentType: LinkContentType.WATCH,
              },
            ],
          },
          { label: 'Memcached', links: [] },
          {
            label: 'Client Side',
            links: [
              {
                label: 'Como usar Cache HTTP - Entenda melhor sobre performance na Web',
                url: 'https://www.youtube.com/watch?v=IrwIYywpvbM',
                contentType: LinkContentType.WATCH,
              },
            ],
          },
        ],
      },
    ],
  },
  security,

  {
    items: [
      {
        label: 'Testes',
        description:
          'Uma chave para construir um software que atenda aos requisitos sem defeitos é o teste. O teste de software ajuda quem está desenvolvendo a saber que estão criando o software certo. Quando os testes são executados como parte do processo de desenvolvimento (geralmente com ferramentas de integração contínua), eles criam confiança e evitam regressões no código.',
        children: [
          { label: 'Testes de Integração', links: [] },
          {
            label: 'Testes Unitários',
            links: [
              {
                url: 'https://www.youtube.com/watch?v=9e81T1B5MlI',
                label: 'O que são Testes de Unidade',
                contentType: LinkContentType.WATCH,
              },
            ],
          },
          { label: 'Testes Funcionais', links: [] },
        ],
      },
    ],
  },

  cicd,

  {
    items: [
      {
        label: 'Princípios de Design e Desenvolvimento',
        description:
          'Programar é mais do que apenas digitar código. Precisamos pensar na melhor forma de solucionar problemas. Nessa etapa você vai estudar algumas técnicas para que seu código fique, de certa forma, melhor.',
        children: [
          {
            label: 'Design Patterns',
            links: [
              {
                label: 'Padrões de Projeto - Refatoring Guru',
                url: 'https://refactoring.guru/pt-br/design-patterns',
                contentType: LinkContentType.WATCH,
              },
              {
                label: 'Repositório Padrões de Projeto com linguagem C#',
                url: 'https://github.com/JessicaNathany/design-patterns',
                contentType: LinkContentType.WATCH,
              },
            ],
          },
          {
            label: 'Domain Driven Design',
            links: [
              {
                label: 'Tech em 10 Minutos DDD - Road to Agility',
                url: 'https://www.youtube.com/watch?v=wmg3xB0aUv8',
                contentType: LinkContentType.WATCH,
              },
              {
                label: 'DDD não é sobre arquitetura - O que é Domain-Driven Design | Dias de Dev',
                url: 'https://youtu.be/SNdGV0c40yo',
                contentType: LinkContentType.WATCH,
              },
            ],
          },
          {
            label: 'Test Driven Development',
            links: [
              {
                label: 'O que é TDD - Test-Driven Development',
                url: 'https://www.youtube.com/watch?v=o_C_qxhPws4',
                contentType: LinkContentType.WATCH,
              },
            ],
          },
          {
            label: 'SOLID',
            links: [
              {
                label: 'SOLID fica FÁCIL com Essas Ilustrações - Filipe Deschamps',
                url: 'https://youtu.be/6SfrO3D4dHM',
                contentType: LinkContentType.WATCH,
              },
            ],
          },
          { label: 'KISS', links: [] },
          { label: 'YAGNI', links: [] },
          {
            label: 'DRY',
            links: [
              {
                label: 'Você sabe o que é DRY e WET? - Flávio Mendes',
                url: 'https://www.youtube.com/watch?v=UHvuCfpVDsg',
                contentType: LinkContentType.WATCH,
              },
            ],
          },
          {
            label: 'Object Calisthenics',
            links: [
              {
                label:
                  'NUNCA USE ELSE - Aprenda uma das regras de Object Calisthenics | Dias de Dev',
                url: 'https://youtu.be/z4fxFU5MoAA',
                contentType: LinkContentType.WATCH,
              },
              {
                label: 'Object Calisthenics: Apenas 1 nível de indentação por método | Dias de Dev',
                url: 'https://youtu.be/u_bg3k82uCE',
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
        label: 'Padrões de Arquitetura',
        description: '',
        children: [
          { label: 'Monolitos', links: [] },
          {
            label: 'Microsserviços',
            links: [
              {
                label: 'Microsserviços, o mínimo que você precisa saber - Otavio Lemos',
                url: 'https://www.youtube.com/watch?v=eN8dFfTrEtQ',
                contentType: LinkContentType.WATCH,
              },
            ],
          },
          { label: 'SOA', links: [] },
          { label: 'CQRS e Event Sourcing', links: [] },
          {
            label: 'Orientação a eventos',
            links: [
              {
                url: 'https://www.youtube.com/watch?v=MaPWf_mt1uA',
                label: 'Arquitetura Orientada a Eventos com Java, Spring Boot e Kafka',
                contentType: LinkContentType.WATCH,
              },
              {
                url: 'https://www.youtube.com/watch?v=oUJbuFMyBDk&t=185s',
                label: 'Conceitos sobre Message Queue',
                contentType: LinkContentType.WATCH,
              },
            ],
          },
          {
            label: 'Serverless',
            links: [
              {
                url: 'https://www.youtube.com/watch?v=ktH_HhQDgLY',
                label: 'Primeiros Passos - Tiago Boeing',
                contentType: LinkContentType.WATCH,
              },
            ],
          },
          {
            label: 'System Design',
            links: [
              {
                url: 'https://www.youtube.com/watch?v=SqcXvc3ZmRU',
                label: 'Basics Concepts about System Design',
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
        label: 'Engines de Busca',
        children: [
          {
            label: 'Elasticsearch',
            links: [
              {
                url: 'https://www.youtube.com/c/EduardoNeves/videos',
                label: 'Canal Eduardo Neves Elasticsearch',
                contentType: LinkContentType.WATCH,
              },
            ],
          },
          { label: 'Solr', links: [] },
        ],
      },
    ],
  },
  {
    items: [
      {
        label: 'Message Brokers',
        description:
          'Os intermediários de mensagens são uma tecnologia de comunicação entre aplicativos para ajudar a criar um mecanismo de integração comum para dar suporte a arquiteturas de nuvem híbrida, sem servidor, baseadas em microsserviços e nativas da nuvem. Dois dos corretores de mensagens mais famosos são RabbitMQ e Apache Kafka',
        children: [
          {
            label: 'Conceito',
            links: [
              {
                label:
                  'Processamento assíncrono com mensageria - Escalando aplicações Web | Dias de Dev',
                url: 'https://youtu.be/Rx80QRZRgHc',
                contentType: LinkContentType.WATCH,
              },
            ],
          },
          {
            label: 'RabbitMQ',
            links: [
              {
                label: 'Primeiros Passos - Otavio Lemos',
                url: 'https://www.youtube.com/watch?v=ZHj44_0a1yA',
                contentType: LinkContentType.WATCH,
              },
              {
                label: 'RabbitMQ Direto Ao Ponto - DevDojo',
                url: 'https://www.youtube.com/watch?v=JqNH6nRANh0&list=PL62G310vn6nF-iJF7v3DWhk5Mngup-sub',
                contentType: LinkContentType.WATCH,
              },
            ],
          },
          { label: 'Kafka', links: [] },
          {
            label: 'Redis',
            links: [
              {
                label: 'Background jobs (filas) no Node.js com Redis',
                url: 'https://youtu.be/uonKHztGhko',
                contentType: LinkContentType.WATCH,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    items: [containers],
  },
  {
    items: [
      {
        label: 'GraphQL',
        description:
          'GraphQL é uma linguagem de consulta para APIs e um tempo de execução para atender a essas consultas com seus dados existentes. O GraphQL fornece uma descrição completa e compreensível dos dados em sua API, oferece aos clientes o poder de solicitar exatamente o que eles precisam e nada mais, facilita a evolução de APIs ao longo do tempo e permite ferramentas de desenvolvedor poderosas.',
        children: [
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
          { label: 'Relay Modern', links: [] },
        ],
      },
    ],
  },
  {
    items: [
      {
        label: 'Bancos de Dados em Grafos',
        description:
          'Um banco de dados gráfico armazena nós e relacionamentos em vez de tabelas ou documentos. Os dados são armazenados da mesma forma que você esboça ideias em um quadro branco. Seus dados são armazenados sem restringi-los a um modelo pré-definido, permitindo uma maneira muito flexível de pensar sobre eles e usá-los.',
        children: [
          {
            label: 'Neo4j',
            links: [
              {
                label: 'Neo4j (Graph Database) Crash Course',
                url: 'https://www.youtube.com/watch?v=8jNPelugC2s',
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
        label: 'Websockets',
        description:
          'Web sockets são definidos como uma comunicação bidirecional entre os servidores e os clientes, o que significa que ambas as partes se comunicam e trocam dados ao mesmo tempo. Este protocolo define uma comunicação full duplex desde o início. Os soquetes da Web dão um passo à frente ao trazer funcionalidades ricas da área de trabalho para os navegadores da Web.',
        children: [
          {
            label: 'WebSockets',
            links: [
              {
                label: 'Comunicação em Tempo Real com WebSockets | Dias de Dev',
                url: 'https://www.youtube.com/watch?v=QkhbQoajdCw',
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
        label: 'Web Servers',
        description:
          'Servidor web é um software responsável por aceitar pedidos em HTTP de clientes, geralmente os navegadores, e servi-los com respostas em HTTP, incluindo opcionalmente dados, que geralmente são páginas web, tais como documentos em HTML com objetos embutidos (imagens, etc) ou um computador que executa um programa que provê a funcionalidade descrita anteriormente',
        children: [
          {
            label: 'Nginx',
            links: [
              {
                label:
                  '00 - Introducción a NGINX e Instalación [Debian/Fedora/CentOS/OpenSuse] [NGINX - Español]',
                url: 'https://www.youtube.com/watch?v=eyxpLa9hUS8&list=PLYAyQauAPx8kwPdi9v1d_FGdJ50_li_WE',
                contentType: LinkContentType.WATCH,
              },
            ],
          },
          { label: 'Apache', links: [] },
          { label: 'Caddy', links: [] },
          { label: 'MS IIS', links: [] },
        ],
      },
    ],
  },
  {
    label: 'Desenvolver com escalabilidade em mente',
    items: [
      {
        label: 'Mitigação de Erros',
        children: [
          {
            label: 'Graceful Degradation',
            links: [
              {
                label: 'Graceful Degradation - Georgia Tech - Advanced Operating Systems',
                url: 'https://www.youtube.com/watch?v=Tk7e0LMsAlI',
                contentType: LinkContentType.WATCH,
              },
            ],
          },
          { label: 'Throttling', links: [] },
          { label: 'Backpressure', links: [] },
          { label: 'Loadshifting', links: [] },
          {
            label: 'Circuit Breaker',
            links: [
              {
                label: 'Circuit Breaker: Não trabalhe com microsserviços sem saber disso',
                url: 'https://www.youtube.com/watch?v=hxRn8y5KTzQ',
                contentType: LinkContentType.WATCH,
              },
            ],
          },
        ],
      },
      {
        label: 'Migração',
        children: [{ label: 'O básico', links: [] }],
      },
      {
        label: 'Escalabilidade Vertical e Horizontal',
        children: [{ label: 'O básico', links: [] }],
      },

      {
        label: 'Observabilidade',
        children: [{ label: 'O básico', links: [] }],
      },
    ],
  },
  {
    items: [cloudComputing],
  },
];
