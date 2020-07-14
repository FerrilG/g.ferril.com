import { NavigationLinks, HeaderLinks } from './../../config/navigation-links';

export const headerLinks: HeaderLinks[] = [
    {
        Type: NavigationLinks.Header,
        Visible: true,
        Main: true,
        Text: 'Home',
        Path: '',
    },
    {
        Type: NavigationLinks.Header,
        Visible: false,
        Main: false,
        Text: 'Projects',
        Path: 'projects',
    },
    {
        Type: NavigationLinks.Header,
        Visible: true,
        Main: false,
        Text: 'Work',
        Path: 'work',
    }
]