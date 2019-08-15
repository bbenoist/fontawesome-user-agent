import { FaUserAgentOptions } from ".";

function fas(name: string) {
  return { name, style: "fas" };
}

function fab(name: string) {
  return { name, style: "fab" };
}

export const DefaultOptions: FaUserAgentOptions = {
  prefix: "fa-",
  icons: {
    browser: {
      androidBrowser: fab("android"),
      internetExplorer: fab("internet-explorer"),
      operaCoast: fab("opera"),
      blackBerry: fab("blackberry"),
      chrome: fab("chrome"),
      chromium: fab("chrome"),
      edge: fab("edge"),
      firefox: fab("firefox"),
      googlebot: fab("google"),
      opera: fab("opera"),
      phantomJS: fas("ghost"),
      safari: fab("safari"),
    },
    os: {
      android: fab("android"),
      blackBerry: fab("blackberry"),
      iOS: fab("apple"),
      linux: fab("linux"),
      macOS: fab("apple"),
      playStation4: fab("playstation"),
      windows: fab("windows"),
    },
    platform: {
      desktop: fas("desktop"),
      mobile: fas("mobile-alt"),
      tablet: fas("tablet-alt"),
      tv: fas("tv"),
    }
  },
  default: {
    browser: fas("question"),
    os: fas("question"),
    platform: fas("question"),
  }
};
