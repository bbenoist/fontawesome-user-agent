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
      "Android Browser": fab("android"),
      "Internet Explorer": fab("internet-explorer"),
      "Opera Coast": fab("opera"),
      BlackBerry: fab("blackberry"),
      Chrome: fab("chrome"),
      Chromium: fab("chrome"),
      Edge: fab("edge"),
      Googlebot: fab("google"),
      Opera: fab("opera"),
      PhantomJS: fas("ghost"),
      Safari: fab("safari"),
    },
    os: {
      Android: fab("android"),
      BlackBerry: fab("blackberry"),
      iOS: fab("apple"),
      Linux: fab("linux"),
      MacOS: fab("apple"),
      PlayStation4: fab("playstation"),
      Windows: fab("windows"),
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
