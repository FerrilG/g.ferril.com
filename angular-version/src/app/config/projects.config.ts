interface contentStructure {
  section: string;
  content?: {
    text: string;
    image?: object[];
  };
}

export interface ProjectProperties {
  name: string;
  date?: string;
  number: number;
  enabled: boolean;
  lock?: boolean;
  folder: string;
  role?: string;
  type?: string;
  company?: string;
  cover: string;
  overview: string;
  content?: contentStructure[];
}
