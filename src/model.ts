export interface FaUserAgentIcon {
  name: string,
  style: string
}

export interface FaUserAgentIconCategory {
  [_: string]: FaUserAgentIcon;
}

export interface FaUserAgentIconCategories {
  browser: FaUserAgentIconCategory;
  os: FaUserAgentIconCategory;
  platform: FaUserAgentIconCategory;
}

export interface FaUserAgentIcons {
  browser: FaUserAgentIcon;
  os: FaUserAgentIcon;
  platform: FaUserAgentIcon;
}

export interface FaUserAgentOptions {
  prefix: string;
  icons: FaUserAgentIconCategories;
  default: FaUserAgentIcons;
}

export interface FaUserAgentOptionsBuilder {
  (options: FaUserAgentOptions): FaUserAgentOptions;
}
