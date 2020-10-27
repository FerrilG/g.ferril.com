export enum NavigationLinks {
    Header,
    SideBar,
}

export interface HeaderLinks {
    Type: NavigationLinks;
    Visible: boolean;
    Main: boolean;
    Directory: boolean;
    Text: string;
    Path: string;
}
