import { data as frontendData } from '../roadmaps/frontend';
import { data as reactData } from '../roadmaps/react';
import { data as backendData } from '../roadmaps/backend';
import { data as devopsData } from '../roadmaps/devops';
import { data as testData } from '../roadmaps/test';
import { data as communityData } from '../roadmaps/community';
import { data as fullstackData } from '../roadmaps/fullstack';
import { data as entrevistasData } from '../roadmaps/entrevistas';
import { data as cybersecData } from '../roadmaps/cybersec';
import { dataEngineeringData } from '../roadmaps/dataEngineering';
import { RoadmapFileModel } from '../entity/RoadmapFileModel';

export const roadmaps: RoadmapFileModel = {
  frontend: { file: frontendData, title: 'Frontend' },
  react: { file: reactData, title: 'React' },
  backend: { file: backendData, title: 'Backend' },
  fullstack: { file: fullstackData, title: 'Fullstack' },
  devops: { file: devopsData, title: 'Devops' },
  'data-engineer': { file: dataEngineeringData, title: 'Data Engineer' },
  community: { file: communityData, title: 'Comunidade' },
  test: { file: testData, title: 'Test/QA' },
  entrevistas: { file: entrevistasData, title: 'Entrevistas' },
  cybersec: { file: cybersecData, title: 'Cibersegurança' },
};
