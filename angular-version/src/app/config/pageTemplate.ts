export interface PageTemplate {
  sidePanel: boolean;
  pageScroller: boolean;
  sidePanelType?: string;
  pageBlog?: boolean;
  breadCrumb?: string;
  pageScrollList?: Array<any>;
  firstPage?: boolean;
}

export class PageConfigDefault implements PageTemplate {
  sidePanel: false;
  pageScroller: false;
  sidePanelType?: '';
  pageBlog?: false;
  breadCrumb?: '';
}
