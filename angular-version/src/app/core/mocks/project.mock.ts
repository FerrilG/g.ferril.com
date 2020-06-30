import { ProjectProp } from 'src/app/config/projects.config';

export const ProjectList: ProjectProp[] = [
    {
        name: 'Online Portfolio',
        number: 1,
        enabled: true,
        lock: false,
        folder: 'folio-study',
        role: 'string',
        type: 'string',
        company: 'g.ferril.com',
        cover: 'string',
        overview: '',
        selected: '',
    },
    {
        name: 'eCommerce Rewards',
        number: 2,
        enabled: true,
        lock: false,
        folder: 'ecommerce-rewards',
        role: 'string',
        type: 'string',
        company: 'cxLoyalty, Inc.',
        cover: 'string',
        overview: '',
        selected: ''
    },
    {
        name: 'Billable Time Software',
        number: 3,
        enabled: true,
        lock: false,
        folder: 'time-entry',
        role: 'string',
        type: 'string',
        company: 'C.H. Robinson',
        cover: 'string',
        overview: '',
        selected: ''
    },
    {
        name: 'Design System',
        number: 4,
        enabled: true,
        lock: true,
        folder: 'design-system',
        role: 'string',
        type: 'string',
        company: 'cxLoyalty, Inc.',
        cover: 'string',
        overview: '',
        selected: ''
    }
];
