export interface NavBarItem {
  type: "url" | "list";
  title: string;
  navBarItemList?: NavBarListItem[];
  btnButton?: navBarInnerButton[][];
  url?: string;
}

export interface navBarInnerButton {
  title: string;
  icon: string;
  url?: string;
}

export interface NavBarListItem {
  title: string;
  icon?: string;
  url: string;
  subtitle?: string;
  nextIcon?: string;
  nextIconStyle?: string;
}
