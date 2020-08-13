export interface PageTemplate {
    sidePanel: boolean;
    pageSectionScroller: boolean;
    sidePanelType?: string;
    pageBlog?: boolean;
    breadCrumb?: string;
}

export class PageConfigDefault implements PageTemplate {
  sidePanel: false;
  pageSectionScroller: false;
  sidePanelType?: '';
  pageBlog?: false;
  breadCrumb?: '';
}