import {LinkContentType} from "../../entity/RoadmapModel";

export const apis = {
  items: [
    {
      label: "APIs",
      description:
        'API é um acrônimo para Application Programming Interface, ou Interface de Programação de Aplicação, em português. Trata-se de um conjunto de rotinas e padrões que facilitam a comunicação e troca de informações entre sistemas. ',
      children: [
        { label: "JSON APIs", links: [] },
        {
          label: 'Autenticação',
          links: [
            {
              label: 'Autenticação por Token | Dias de Dev',
              url: 'https://youtu.be/MZetkcs2xIo',
              contentType: LinkContentType.WATCH,
            },
            {
              label: 'Autenticação com JWT | Dias de Dev',
              url: 'https://youtu.be/B-7e-ZpIWAs',
              contentType: LinkContentType.WATCH,
            },
          ],
        },
        { label: 'Open API e Swagger', links: [] },
        { label: 'gRPC', links: [] },
        { label: 'SOAP', links: [] },
        { label: 'HATEOAS', links: [] },
      ],
    },
  ],
};
