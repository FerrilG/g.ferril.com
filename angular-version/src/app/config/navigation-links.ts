export enum NavigationLinks {
    Header,
    SideBar,
}

export interface HeaderLinks {
    Type: NavigationLinks.Header;
    Visible: boolean;
    Main: boolean;
    Text: string;
    Path: string;
}
