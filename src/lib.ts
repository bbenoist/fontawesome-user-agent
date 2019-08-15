import * as Bowser from "bowser";
import { DefaultOptions } from "./default-options";
import { FaUserAgentOptions, FaUserAgentOptionsBuilder } from ".";
import { FaUserAgentIcon, FaUserAgentIcons } from "./model";

function sanitizeName(key: string): string {
  return key.replace(" ", "").toLowerCase();
}

function compareName(a: string, b: string): boolean {
  return sanitizeName(a) === sanitizeName(b);
}

function getBaseIcon(
  category: string,
  name: string | undefined,
  options: FaUserAgentOptions
): FaUserAgentIcon {
  const cat = options.icons[category];
  const found = name && Object.keys(cat).find(k => compareName(k, name));
  if (found) {
    return cat[found];
  }
  return options.default[category];
}

function getPrefixedName(
  icon: FaUserAgentIcon,
  options: FaUserAgentOptions
): string {
  return `${options.prefix}${icon.name}`;
}

function getIconHtml(
  icon: FaUserAgentIcon,
  options: FaUserAgentOptions
): string {
  return `<i class="${icon.style} ${getPrefixedName(icon, options)}"/>`;
}

function getIcon(
  category: string,
  name: string | undefined,
  options: FaUserAgentOptions
): FaUserAgentIcon {
  const icon = getBaseIcon(category, name, options);
  return {
    name: getPrefixedName(icon, options),
    style: icon.style,
    html: getIconHtml(icon, options)
  };
}

export function faUserAgent(
  userAgent: string,
  options?: FaUserAgentOptionsBuilder
): FaUserAgentIcons<FaUserAgentIcon> {
  const opts = options ? options(DefaultOptions) : DefaultOptions;
  const info = Bowser.parse(userAgent);
  return {
    browser: getIcon("browser", info.browser.name, opts),
    os: getIcon("os", info.os.name, opts),
    platform: getIcon("platform", info.platform.type, opts)
  };
}
