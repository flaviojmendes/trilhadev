import { Level, LinkContentType } from '../entity/RoadmapModel';
import { bash } from './items/bash';
import { go } from './items/go';
import { javascript } from './items/javascript';
import { python } from './items/python';
import { rust } from './items/rust';
import { ruby } from './items/ruby';
import { cplusplus } from './items/cplusplus';
import { unix } from './items/unix';
import { monitoring } from './items/monitoring';
import { cicd } from './items/cicd';
import { configManagement } from './items/configManagement';
import { infrastructureProvisioning } from './items/infrastructureProvisioning';

export const data: Level[] = [
  {
    label: 'Escolha uma linguagem',
    description: 'Tente aprender alguma dessas com a finalidade de usar para automação de tarefas.',
    items: [bash, python, go, javascript, rust, ruby, cplusplus],
  },
  {
    label: 'Conceitos de Sistemas Operacionais',
    description:
      'Aqui você vai aprender Conceitos referente a Sistema Operacionais, como Processos, Threads, Sockets, Rede',
    items: [
      {
        label: 'Gerenciamento de Processos',
        description:
          'Aqui Você vai entender mais sobre o gerenciamento de processos no Sistema Operacional',
        children: [
          {
            label: 'Linux',
            links: [
              {
                label: 'Gerenciamento de Processos - LinuxTips',
                url: 'https://www.youtube.com/watch?v=-bEVlQv_O-8&list=PLf-O3X2-mxDlx6sRx2WB-xv3Q9YHJ23ZN',
                contentType: LinkContentType.WATCH,
              },
            ],
          },
        ],
      },
      { label: 'Threads e Concorrência', links: [] },
      {
        label: 'Sockets',
        description:
          'Sockets são a forma de acessarmos algum destino em uma rede. Utilizamos sockets o tempo todo, mesmo que indiretamente.',
        links: [
          {
            label: 'Sockets de rede - Como funciona a comunicação na Web | Dias de Dev',
            url: 'https://youtu.be/qel4jIrh7Z0',
            contentType: LinkContentType.WATCH,
          },
        ],
      },
      { label: 'Básico POSIX', links: [] },
      { label: 'Conceitos de Rede', links: [] },
      { label: 'initd (Gerenciamento de Inicialização)', links: [] },
      {
        label: 'systemd (Gerenciamento de Serviço)',
        description: 'Systemd é um sistema gerenciador de serviços para Linux.',
        children: [
          {
            label: 'systemd (Gerenciamento de Serviço)',
            links: [
              {
                label: 'O que é Systemd? - LinuxTips',
                url: 'https://www.youtube.com/watch?v=1uGqXhhberk&t',
                contentType: LinkContentType.WATCH,
              },
              {
                label: 'O que é Systemd? - Diolinux',
                url: 'https://www.youtube.com/watch?v=7mXCxj4SWqU',
                contentType: LinkContentType.WATCH,
              },
            ],
          },
        ],
      },
      { label: 'I/O', links: [] },
      { label: 'Virtualização', links: [] },
      { label: 'Memória/Storage', links: [] },
      {
        label: 'Sistemas de Arquivos',
        links: [
          {
            label: 'Sistemas de Arquivos - Guia Foca',
            url: 'https://www.guiafoca.org/guiaonline/intermediario/ch05.html',
            contentType: LinkContentType.READ,
          },
          {
            label: 'BTRFS, o sistema de arquivos “do futuro”',
            url: 'https://diolinux.com.br/editorial/btrfs-o-sistema-de-arquivos-do-futuro.html',
            contentType: LinkContentType.READ,
          },
        ],
      },
    ],
  },
  {
    label: 'Aprenda a gerenciar servidores',
    description: 'Aprenda conceitos de administração em algum Sistema Operacional.',
    items: [
      {
        label: 'Linux',
        children: [
          {
            label: 'Guiafoca',
            links: [
              {
                label: 'Documentação Oficial',
                url: 'https://www.guiafoca.org/',
                contentType: LinkContentType.READ,
              },
            ],
          },
          {
            label: 'Certificação',
            links: [
              {
                label: 'Descomplicando LPI Day 1 - LinuxTips',
                url: 'https://www.youtube.com/watch?v=QstQd6-3cnY&list=PLf-O3X2-mxDlwFxiS-VZR1kOewf0XjyAW',
                contentType: LinkContentType.READ,
              },
              {
                label: 'Descomplicando LPI Day 2 - LinuxTips',
                url: 'https://www.youtube.com/watch?v=68NdygyTJXQ&list=PLf-O3X2-mxDlzNexUj5zS3RT8qMjTfBLL',
                contentType: LinkContentType.READ,
              },
              {
                label: '#BondeDaLPI - LinuxTips',
                url: 'https://www.youtube.com/watch?v=xn_E4v_vRXQ',
                contentType: LinkContentType.READ,
              },
            ],
          },
          {
            label: 'Arch',
            links: [
              {
                label: 'Documentação Oficial',
                url: 'https://wiki.archlinux.org/title/Main_page_(Portugu%C3%AAs)',
                contentType: LinkContentType.READ,
              },
            ],
          },
          {
            label: 'Debian',
            links: [
              {
                label: 'Documentação Oficial',
                url: 'https://wiki.debian.org/pt_BR/FrontPage',
                contentType: LinkContentType.READ,
              },
            ],
          },
          { label: 'Fedora', links: [] },
          {
            label: 'Ubuntu',
            links: [
              {
                label: 'Documentação Oficial',
                url: 'https://help.ubuntu.com/community/PortugueseDocumentation',
                contentType: LinkContentType.READ,
              },
            ],
          },
          { label: 'CentOS', links: [] },
          { label: 'RHEL', links: [] },
        ],
      },
      {
        label: 'BSD',
        description:
          'Berkeley Software Distribution (BSD) é um sistema operacional UNIX com desenvolvimento derivado e distribuído pela Universidade da Califórnia em Berkeley. Hoje o termo "BSD" é frequentemente usado de forma não específica para se referir a qualquer descendente que juntos, formam uma ramificação dessa família de sistemas operacionais.',
        children: [
          { label: 'FreeBSD', links: [] },
          { label: 'OpenBSD', links: [] },
          { label: 'NetBSD', links: [] },
        ],
      },
      unix,
      { 
        label: 'Windows',
        children: [
          { 
            label: 'O básico', links: [
              {
                label: 'Curso Windows Server 2019 - Iago Ferreira TI)',
                url: 'https://youtube.com/playlist?list=PLPqoPgWuohm48cyOCSIHl0a_daKv9Hx0j&si=mb-I7eOYlQwyXtZh',
                contentType: LinkContentType.WATCH,
              },
            ] 
          }
        ] 
      },
    ],
  },
  {
    items: [
      {
        label: 'Usando o Terminal',
        children: [
          {
            label: 'Bash Script',
            links: [
              {
                label: 'Curso Shell GNU - debxp (Blau Araujo)',
                url: 'https://www.youtube.com/watch?v=Daasn9IjwMQ&list=PLXoSGejyuQGqJEEyo2fY3SA-QCKlF2rxO',
                contentType: LinkContentType.WATCH,
              },
              {
                label: 'Além do Bash - debxp (Blau Araujo)',
                url: 'https://www.youtube.com/watch?v=_W51nj5JTwk&list=PLXoSGejyuQGpen1lAlhngkpuldmot8DV0',
                contentType: LinkContentType.WATCH,
              },
              {
                label: 'Curso Básico de Programação em Bash - debxp (Blau Araujo)',
                url: 'https://www.youtube.com/watch?v=spIRwXEF3XY&list=PLf-O3X2-mxDlfAv8IOfic1sHArdwrrkgh&index',
                contentType: LinkContentType.WATCH,
              },
              {
                label: 'Shell Scripting - Boson Treinamentos',
                url: 'https://www.youtube.com/watch?v=EOLPUc6oo-w&list=PLucm8g_ezqNrYgjXC8_CgbvHbvI7dDfhs',
                contentType: LinkContentType.WATCH,
              },
            ],
          },
          { label: 'Ferramentas de Texto', links: [] },
          {
            label: 'Editores de Texto',
            links: [
              {
                label: 'Descomplicando VIM - LinuxTips',
                url: 'https://www.youtube.com/watch?v=TxSulvPxqic&list=PLf-O3X2-mxDnp9OpR8ZfbiRdq9CFPN5RE',
                contentType: LinkContentType.WATCH,
              },
            ],
          },
          { label: 'Compilação', links: [] },
          { label: 'System Performance', links: [] },
          { label: 'Monitoramento de Processos', links: [] },
          { label: 'Rede', links: [] },
          { label: 'Outros', links: [] },
        ],
      },
    ],
  },
  {
    items: [
      {
        label: 'Rede, Segurança e Protocolos',
        children: [
          { label: 'HTTP', links: [] },
          { label: 'HTTPS', links: [] },
          { label: 'FTP', links: [] },
          { label: 'SSL/TLS', links: [] },
          {
            label: 'SSH',
            description:
              'SSH é um protocolo que permite acesso a um terminal remoto. Basicamente, você pode acessar servidores pela rede e executar comandos, transferir arquivos, etc.',
            links: [
              {
                label: 'O que é SSH - Como acessar servidores remotos',
                url: 'https://youtu.be/M_Pe7jdr8QE',
                contentType: LinkContentType.WATCH,
              },
            ],
          },
          { label: 'Port Forwarding', links: [] },
          { label: 'SMTP', links: [] },
          { label: 'IMAPS', links: [] },
          { label: 'POP3', links: [] },
        ],
      },
    ],
  },
  {
    label: 'O que é, e como configurar:',
    items: [
      {
        label: 'Proxy Reverso',
        children: [
          { label: 'Nginx', links: [] },
          { label: 'Traefik', links: [] },
        ],
      },
      { label: 'Caching Server', children: [{ label: 'O Básico', links: [] }] },
      { label: 'Forward Proxy', children: [{ label: 'O Básico', links: [] }] },
      {
        label: 'Load Balancer',
        description:
          'Um load balancer serve como ponto único de entrada em uma aplicação. O balanceador de carga distribui o tráfego de entrada entre vários servidores diferentes, por exemplo.',
        children: [
          {
            label: 'O Básico',
            links: [
              {
                label: 'Load balancer - O que é um balanceador de carga? | Dias de Dev',
                url: 'https://youtu.be/TNl08-PgimE',
                contentType: LinkContentType.WATCH,
              },
            ],
          },
        ],
      },
      {
        label: 'Firewall',
        description:
          'Um firewall é um dispositivo de segurança de rede que monitora o tráfego que entra e sai da sua rede. É extremamente imortante para a segurança de uma rede.',
        children: [
          {
            label: 'O Básico',
            links: [
              {
                label: 'Firewalls - O mínimo que todo dev deve saber | Dias de Dev',
                url: 'https://youtu.be/w-wKctaMGpU',
                contentType: LinkContentType.WATCH,
              },
            ],
          },
        ],
      },
      {
        label: 'Web Server',
        children: [
          { label: 'Nginx', links: [] },
          { label: 'Apache', links: [] },
          { label: 'IIS', links: [] },
          { label: 'Tomcat', links: [] },
          { label: 'Caddy', links: [] },
        ],
      },
    ],
  },
  {
    label: 'Infraestrutura como Código',
    items: [
      {
        label: 'Containers',
        children: [
          {
            label: 'Docker',
            links: [
              {
                label: 'Descomplicando o Docker - Linux Tips',
                url: 'https://www.youtube.com/watch?v=Wm99C_f7Kxw&list=PLf-O3X2-mxDn1VpyU2q3fuI6YYeIWp5rR',
                contentType: LinkContentType.WATCH,
              },
              {
                label: 'Curso Docker - Robert Silva',
                url: 'https://www.youtube.com/watch?v=c2y_yz9B6_M&list=PLg7nVxv7fa6dxsV1ftKI8FAm4YD6iZuI4',
                contentType: LinkContentType.WATCH,
              },
              {
                label: 'Livro Descomplicando Docker',
                url: 'https://livro.descomplicandodocker.com.br/',
                contentType: LinkContentType.WATCH,
              },
              {
                label: 'Docker em 22 Minutos - Programador a Bordo',
                url: 'https://livro.descomplicandodocker.com.br/',
                contentType: LinkContentType.WATCH,
              },
              {
                label: 'Curso Docker DCA - Caio Delgado',
                url: 'https://youtube.com/playlist?list=PL4ESbIHXST_TJ4TvoXezA0UssP1hYbP9_&si=T5p-STHjCV_lfF40',
                contentType: LinkContentType.WATCH,
              },
            ],
          },
          { label: 'LXC', links: [] },
        ],
      },
      configManagement,
      {
        label: 'Orquestração de Containers',
        children: [
          { label: 'Kubernetes', links: [] },
          { label: 'Mesos', links: [] },
          { label: 'Docker Swarm', links: [] },
          { label: 'Nomad', links: [] },
        ],
      },
      infrastructureProvisioning,
    ],
  },
  cicd,
  monitoring,
  {
    label: 'Escolha um provedor de Nuvem',
    items: [
      {
        label: 'AWS',
        children: [
          {
            label: 'Certificação',
            links: [
              {
                label:
                  '#BondeDaAWS - Treinamento preparatório para a certificação da AWS - LinuxTips',
                url: 'https://www.youtube.com/watch?v=VrQVDbgwFDs&t',
                contentType: LinkContentType.WATCH,
              },
            ],
          },
        ],
      },
      {
        label: 'Oracle Cloud',
        children: [
          {
            label: 'Certificação',
            links: [
              {
                label:
                  '#BondeDoOCI - Workshop completo rumo a certificação Oracle Cloud - LinuxTips',
                url: 'https://www.youtube.com/watch?v=jWG3gVf2YWEs',
                contentType: LinkContentType.WATCH,
              },
            ],
          },
        ],
      },
      { label: 'Google Cloud', children: [{ label: 'O básico', links: [] }] },
      { label: 'Azure', children: [{ label: 'O básico', links: [] }] },
      { label: 'Heroku', children: [{ label: 'O básico', links: [] }] },
      { label: 'Digital Ocean', children: [{ label: 'O básico', links: [] }] },
      { label: 'Linode', children: [{ label: 'O básico', links: [] }] },
      { label: 'Vultr', children: [{ label: 'O básico', links: [] }] },
    ],
  },
  {
    items: [
      {
        label: 'Design Patterns para Nuvem',
        children: [
          { label: 'Disponibilidade', links: [] },
          { label: 'Gerenciamento de Dados', links: [] },
          { label: 'Design e Implementação', links: [] },
          { label: 'Gerenciamento e Monitoramento', links: [] },
          {
            label: 'FinOps',
            links: [
              {
                label: 'Você sabe o que é FINOPS? - Zappts',
                url: 'https://www.youtube.com/watch?v=mJjeDENeqTE',
                contentType: LinkContentType.WATCH,
              },
            ],
          },
          {
            label: 'GitOps',
            links: [
              {
                label: 'O que é GitOps? - FullCycle',
                url: 'https://www.youtube.com/watch?v=qCYmn1RwHZM',
                contentType: LinkContentType.WATCH,
              },
            ],
          },
        ],
      },
    ],
  },
];
