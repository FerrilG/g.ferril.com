import projList from 'src/app/config/params/project-list.json';
import deliverableList from 'src/app/config/params/deliverable-list.json';
interface contentStructure {
  section: string;
  content?: {
    text: string;
    image?: object[];
  };
}

export interface ProjectProperties {
  name: string;
  navName?: string;
  date?: string;
  number: number;
  enabled: boolean;
  lock?: boolean;
  folder: string;
  role?: string;
  type?: string;
  company?: string;
  cover: string;
  coverFormat: string;
  overview: string;
  content?: contentStructure[];
  pol?: Array<contentStructure>;
}

export interface DeliverableProperties {
  name: string;
  navName?: string;
  enabled: boolean;
  lock?: boolean;
  folder: string;
  cover: string;
  coverFormat: string;
  overview: string;
  content?: contentStructure[];
}

export const ProjectList: ProjectProperties[] = projList;
export const DeliverableList: DeliverableProperties[] = deliverableList;
