import { NavigationLinks, HeaderLinks } from './../../config/navigation-links';

export const headerLinks: HeaderLinks[] = [
    {
        Type: NavigationLinks.Header,
        Visible: false,
        Main: false,
        Text: 'Home',
        Path: '',
    },
    {
        Type: NavigationLinks.Header,
        Visible: true,
        Main: false,
        Text: 'Projects',
        Path: 'projects',
    },
    {
        Type: NavigationLinks.Header,
        Visible: true,
        Main: false,
        Text: 'Deliverables',
        Path: 'deliverables',
    },
    {
        Type: NavigationLinks.Header,
        Visible: true,
        Main: false,
        Text: 'About Me',
        Path: 'about-me',
    },
    {
        Type: NavigationLinks.Header,
        Visible: false,
        Main: false,
        Text: 'Blog',
        Path: 'blog',
    }
];
