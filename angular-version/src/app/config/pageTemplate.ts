export interface PageTemplate {
  pageTitle: string;
  sidePanel: boolean;
  pageScroller: boolean;
  sidePanelType?: string;
  pageBlog?: boolean;
  breadCrumb?: string;
  pageScrollList?: Array<any>;
  firstPage?: boolean;
}

export class PageConfigDefault implements PageTemplate {
  pageTitle: 'Geoffrey\u0027s Portfolio';
  sidePanel: false;
  pageScroller: false;
  sidePanelType?: '';
  pageBlog?: false;
  breadCrumb?: '';
}
