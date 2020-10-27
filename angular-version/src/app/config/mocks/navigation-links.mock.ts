import { NavigationLinks, HeaderLinks } from './../../config/navigation-links';

export const headerLinks: HeaderLinks[] = [
    {
        Type: NavigationLinks.Header,
        Visible: false,
        Main: false,
        Directory: false,
        Text: 'Home',
        Path: '',
    },
    {
        Type: NavigationLinks.Header,
        Visible: true,
        Main: false,
        Directory: true,
        Text: 'Projects',
        Path: 'projects',
    },
    {
        Type: NavigationLinks.Header,
        Visible: true,
        Main: false,
        Directory: true,
        Text: 'Deliverables',
        Path: 'deliverables',
    },
    {
        Type: NavigationLinks.Header,
        Visible: true,
        Main: false,
        Directory: false,
        Text: 'About Me',
        Path: 'about-me',
    },
    {
        Type: NavigationLinks.Header,
        Visible: false,
        Main: false,
        Directory: false,
        Text: 'Blog',
        Path: 'blog',
    }
];
