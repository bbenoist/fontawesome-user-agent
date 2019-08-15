export interface FaUserAgentIconBase {
  name: string;
  style: string;
}

export interface FaUserAgentIcon extends FaUserAgentIconBase {
  html: string;
}

export interface FaUserAgentIconCategory<T> {
  [_: string]: T;
}

export interface FaUserAgentIconCategories<T> {
  browser: FaUserAgentIconCategory<T>;
  os: FaUserAgentIconCategory<T>;
  platform: FaUserAgentIconCategory<T>;
}

export interface FaUserAgentIcons<T> {
  browser: T;
  os: T;
  platform: T;
}

export interface FaUserAgentOptions {
  prefix: string;
  icons: FaUserAgentIconCategories<FaUserAgentIconBase>;
  default: FaUserAgentIcons<FaUserAgentIconBase>;
}

export interface FaUserAgentOptionsBuilder {
  (options: FaUserAgentOptions): FaUserAgentOptions;
}
