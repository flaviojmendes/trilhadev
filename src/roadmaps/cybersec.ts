import { Link } from 'react-router-dom';
import { Level, LinkContentType } from '../entity/RoadmapModel';

export const data: Level[] = [
  {
    label: 'Cibersegurança',
    description:
      'Aprenda sobre cibersegurança, um campo que se concentra na proteção de sistemas, redes e programas de computador contra roubo, danos ou acesso não autorizado.',
    items: [
      {
        label: 'Computação Básica',
        description:
          'A Computação básica compreende a compreensão essencial do funcionamento de computadores, abrangendo desde o sistema binário e a distinção entre software e hardware até conhecimentos sobre sistemas operacionais como Windows e Linux',
        children: [
          {
            label: 'Como o computador funciona?',
            links: [
              {
                label: 'Funcionamento do Computador - Portal Easy Learning',
                url: 'https://www.youtube.com/watch?v=R8rkkkfXThA',
                contentType: LinkContentType.WATCH,
              },
            ],
          },
        ],
      },

      {
        label: 'Rede de Computadores',
        description:
          'A Redes de Computadores compreende a interconexão de dispositivo e suas tecnologias',
        children: [
          {
            label: 'Redes de Computadores',
            links: [
              {
                label: 'Como a internet Funciona? - Curso em Vídeo',
                url: 'https://www.youtube.com/watch?v=nlO5hySqJFA',
                contentType: LinkContentType.WATCH,
              },
            ],
          },
          {
            label: 'Ip Vs Mac - Guia Anônima',
            links: [
              {
                label: 'Ip Vs Mac - Guia Anônima',
                url: 'https://www.youtube.com/watch?v=0CQjQfRZJ2Y',
                contentType: LinkContentType.WATCH,
              },
            ],
          },
          {
            label: 'O que é rede interna e externa? ',
            links: [
              {
                label: 'Rede Interna e Externa - Guia Anônima',
                url: 'https://www.youtube.com/watch?v=chmVvePfU7w&pp=ygUccmVkZSBpbnRlcm5hIHZzIHJlZGUgZXh0ZXJuYQ%3D%3D',
                contentType: LinkContentType.WATCH,
              },
            ],
          },
          {
            label: 'Modelo OSI',
            links: [
              {
                label: 'Modelo OSI -  Guia Anônima',
                url: 'https://youtu.be/FU58q40l_j8?si=1Vv8tveHIsLLHCKZ',
                contentType: LinkContentType.WATCH,
              },
            ],
          },
          {
            label: 'Protocolo TCP/IP',
            links: [
              {
                label: 'Protocolo TCP/IP',
                url: 'https://www.youtube.com/watch?v=Qmz3PGKT4KY&pp=ygUVdGNwIGlwIGN1cnNvIGVtIHZpZGVv',
                contentType: LinkContentType.WATCH,
              },
            ],
          },
          {
            label: 'IPV4 e IPV6',
            links: [
              {
                label: 'IPV4 e IPV6 - Código Fonte',
                url: 'https://www.youtube.com/watch?v=O8DmpmBMUSw',
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
        label: 'Lógica de Programação e de Desenvolvimento',
        description:
          'A Lógica de Programação compreende a compreensão de algoritmos e a criação de sistemas e softwares',
        children: [
          {
            label: 'O Desenvolvimento compreende o entendimento e criação de sistemas e softwares ',
            links: [
              {
                url: 'https://www.youtube.com/watch?v=BHzaKTxNFgI',
                label: 'Lógica de Programação - Guia Anônima',
                contentType: LinkContentType.WATCH,
              },
            ],
          },
          {
            label: 'Linguagens de Marcação: HTML e CSS',
            links: [
              {
                url: 'https://www.youtube.com/watch?v=B4FU3NFRTDw&t=544s',
                label: 'HTMl,CSS e JavaScript - Curso em Vídeo',
                contentType: LinkContentType.WATCH,
              },
            ],
          },
          {
            label: 'O que são Bibliotecas e Frameworks?',
            links: [
              {
                url: 'https://www.freecodecamp.org/portuguese/news/a-diferenca-entre-um-framework-e-uma-biblioteca/',
                label: 'A diferença entre um framework e uma biblioteca',
                contentType: LinkContentType.READ,
              },
            ],
          },
          {
            label: 'O que são CMS?',
            links: [
              {
                url: 'https://youtu.be/oznfjj67ZP0?si=gXMqD8vQNOo76Yw_',
                label: 'O que é CMS? - Guia Anônima',
                contentType: LinkContentType.WATCH,
              },
            ],
          },
        ],
      },
      {
        label: 'Banco de Dados',
        description:
          'Banco de Dados compreende a compreensão de sistemas de armazenamento de dados',
        children: [
          {
            label: 'Banco de Dados',
            links: [
              {
                url: 'https://www.youtube.com/watch?v=XfO3TRvESBo&t=76s&pp=ygUPYmFuY28gZGUgZGFkb3Mg',
                label: 'O que é BANCO DE DADOS e porque INTERESSA APRENDER isso? - DBA PRO',
                contentType: LinkContentType.WATCH,
              },
            ],
          },
          {
            label: 'Banco de Dados Relacional VS Não-Relacional',
            links: [
              {
                url: 'https://www.youtube.com/watch?v=Ofktsne-utM',
                label: 'NoSQL x SQL - Quais as Diferenças? Qual Mais SEGURO? - Guia Anônima',
                contentType: LinkContentType.WATCH,
              },
            ],
          },
          {
            label: 'NoSQL',
            links: [
              {
                url: 'https://www.youtube.com/watch?v=9d6J3H9wBbI',
                label: 'NoSQL - Guia Anônima',
                contentType: LinkContentType.WATCH,
              },
            ],
          },
          {
            label: 'SGBD',
            links: [
              {
                url: 'https://www.youtube.com/watch?v=2oFepn1KXQM',
                label: 'Sistema Gerenciador de Banco de Dados SGBD - Dicionário da Informática',
                contentType: LinkContentType.WATCH,
              },
            ],
          },
          {
            label: 'PostgreSQL vs MySQL',
            links: [
              {
                url: 'https://www.youtube.com/watch?v=5dvLV2GLsDI',
                label: 'Qual banco de dados escolher? | Postgresql vs MySQL',
                contentType: LinkContentType.WATCH,
              },
            ],
          },
        ],
      },
      {
        label: 'Linguagens de Programação',
        description:
          'Linguagens de Programação compreende a compreensão de sistemas de armazenamento de dados',
        children: [
          {
            label: 'SQL',
            links: [
              {
                url: 'https://www.youtube.com/watch?v=XQkf-6Yl3WM&t=2493s',
                label:
                  'Curso de SQL e MySQL fundamental | Aprenda SQL em 1 hora - Matheus Battisti - Hora de Codar',
                contentType: LinkContentType.WATCH,
              },
            ],
          },
          {
            label: 'Linguagem C',
            links: [
              {
                url: 'https://www.youtube.com/watch?v=2w8GYzBjNj8&list=PLpaKFn4Q4GMOBAeqC1S5_Fna_Y5XaOQS2&pp=iAQB',
                label: 'Linguagem C - Começando do absoluto zero - Pietro Martins De Oliveira',
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
        label: 'Terminologias de Segurança da Informação',
        description:
          'As Terminologias de Segurança da Informação compreendem os principais conceitos, termos técnicos, e afins da SI',
        children: [
          {
            label: 'O que é Segurança da Informação?',
            links: [
              {
                url: 'https://www.youtube.com/watch?v=dg7ukJANHkg',
                label: 'O que é segurança da informação? -  E-Commerce Brasil',
                contentType: LinkContentType.WATCH,
              },
            ],
          },
          {
            label: 'Hacker VS Cracker',
            links: [
              {
                url: 'https://www.youtube.com/watch?v=tKUlilZmkUk',
                label: 'Hacker vs Cracker - Guia Anônima',
                contentType: LinkContentType.WATCH,
              },
            ],
          },
          {
            label: 'RedTeam VS BlueTeam',
            links: [
              {
                url: 'https://www.youtube.com/watch?v=-v2ExAbGT8E',
                label: 'Red Team vs Blue Team - Guia Anônima',
                contentType: LinkContentType.WATCH,
              },
            ],
          },
          {
            label: 'CyberSecurity Color Whee',
            links: [
              {
                url: 'https://www.youtube.com/watch?v=6JqxfbFXn0g',
                label: 'CyberSecurity Color Wheel - Guia Anônima',
                contentType: LinkContentType.WATCH,
              },
            ],
          },
          {
            label: 'OWASP TOP 10',
            links: [
              {
                url: 'https://www.youtube.com/watch?v=8Ao-wCaBF6o',
                label: 'OWASP Top 10 - Guia Anônima',
                contentType: LinkContentType.WATCH,
              },
            ],
          },
          {
            label: 'OWASP API TOP 10',
            links: [
              {
                url: 'https://youtu.be/fKDWqx4Qbyw?si=55SDaNVoy6ddPP0y',
                label: 'OWASP API TOP 10',
                contentType: LinkContentType.WATCH,
              },
            ],
          },
          {
            label: 'Metodologias de Segurança Ofensiva',
            links: [
              {
                url: 'https://youtu.be/iFV9sgCptcs?si=uI98gTzvK3hWoBz3',
                label: 'Metodologias de Segurança Ofensiva',
                contentType: LinkContentType.WATCH,
              },
            ],
          },
          {
            label: 'PTES',
            links: [
              {
                url: 'https://youtu.be/hV2wYIB9Frs',
                label: 'PTES',
                contentType: LinkContentType.WATCH,
              },
            ],
          },
          {
            label: 'OWASP WSTG',
            links: [
              {
                url: 'https://youtu.be/JyXu0BccFhw',
                label: 'OWASP WSTG',
                contentType: LinkContentType.WATCH,
              },
            ],
          },
          {
            label: 'OWASP MSTG',
            links: [
              {
                url: 'https://youtu.be/WG_K2BLGpQs?si=OixchTHDELw5aJBk',
                label: 'OWASP MSTG',
                contentType: LinkContentType.WATCH,
              },
            ],
          },
          {
            label: 'OWASP FSTM',
            links: [
              {
                url: 'https://youtu.be/zfR5Gg6ju3g',
                label: 'OWASP FSTM',
                contentType: LinkContentType.WATCH,
              },
            ],
          },
          {
            label: 'NIST SP 800-115',
            links: [
              {
                url: 'https://youtu.be/mKyvE4M4Fxg',
                label: 'O Guia Técnico do NIST, vale a pena? - Guia Anônima',
                contentType: LinkContentType.WATCH,
              },
            ],
          },
          {
            label: 'O que é OSINT?',
            links: [
              {
                url: 'https://youtu.be/z8u3lV9IItQ?si=AchsX8PkZ7KMiJyj',
                label: 'O que é OSINT?',
                contentType: LinkContentType.WATCH,
              },
            ],
          },
          {
            label: 'LGPD e GDPR',
            links: [
              {
                url: 'https://youtu.be/Yp2M-hm2lWM?si=oWRYtEDeWXkxapRH',
                label: 'LGPD e GDPR',
                contentType: LinkContentType.WATCH,
              },
            ],
          },
          {
            label: 'Principais Vulnerabilidades',
            links: [
              {
                url: 'https://youtu.be/BZxqH3ORoqU',
                label: 'SQL Injection',
                contentType: LinkContentType.WATCH,
              },
            ],
          },
          {
            label: 'Principais Vulnerabilidades',
            links: [
              {
                url: 'https://youtu.be/LQphDiymt8I',
                label: 'HTML Injection',
                contentType: LinkContentType.WATCH,
              },
            ],
          },
          {
            label: 'Principais Vulnerabilidades',
            links: [
              {
                url: 'https://youtu.be/jUHeZrKLIw8',
                label: 'Cross-Site Scripting (XSS)',
                contentType: LinkContentType.WATCH,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    label: 'Criptografia',
    description:
      'A Criptografia compreende os principais algoritmos criptográficos e algoritmos de Hash, suas particularidades e aplicações.',
    items: [
      {
        label: 'Decifrando a Criptografia:',
        description:
          'A Criptografia compreende os principais algoritmos criptográficos e algoritmos de Hash, suas particularidades e aplicações.',
        children: [
          {
            label: 'Criptografia',
            links: [
              {
                label: 'A História da Criptografia ',
                url: 'https://blog.guiaanonima.com/decifrando-a-criptografia-uma-jornada-desde-suas-origens-ate-a-era-digital/',
                contentType: LinkContentType.READ,
              },
            ],
          },
          {
            label: 'Criptografia Simétrica VS Assimétrica',
            links: [
              {
                label: 'AES VS DES',
                url: 'https://youtu.be/WRX6sWGRAY0?si=b-Jn8O5fuFxKvrSe',
                contentType: LinkContentType.WATCH,
              },
            ],
          },
          {
            label: 'Chave Pública VS Chave privada',
            links: [
              {
                label: 'Criptografia, Chave privada e Chave pública',
                url: 'https://www.youtube.com/watch?v=pEfEgCEKcJ0',
                contentType: LinkContentType.WATCH,
              },
            ],
          },
          {
            label: 'Criptografia de Fluxo VS Criptografia de Bloco',
            links: [
              {
                label: 'Cifras de Stream versus Cifra de Bloco - Prof. Raphael Machado',
                url: 'https://www.youtube.com/watch?v=3swWYy48Zzg',
                contentType: LinkContentType.WATCH,
              },
            ],
          },
          {
            label: 'Função Hash',
            links: [
              {
                label: 'MD5, SHA-1 e SHA-256',
                url: 'https://youtu.be/OIZGE-ry6j4?si=9p5W4Is_ePi_Ag92',
                contentType: LinkContentType.WATCH,
              },
            ],
          },
        ],
      },
    ],
  },
];
