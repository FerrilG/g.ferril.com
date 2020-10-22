import deliverableList from 'src/app/config/params/deliverable-list.json';

interface contentStructure {
    section: string;
    content?: {
        text: string;
        image?: object[];
    };
}

export interface DeliverableProperties {
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
    overview: string;
    content?: contentStructure[];
    pol?: Array<contentStructure>;
}

export const DeliverableList: DeliverableProperties[] = deliverableList;
