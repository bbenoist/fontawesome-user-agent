import * as Bowser from "bowser";
import { DefaultOptions } from "./default-options";
import { FaUserAgentOptions, FaUserAgentOptionsBuilder } from ".";
import { FaUserAgentIcon, FaUserAgentIcons } from "./model";

function getBaseIcon(
  category: string,
  name: string | undefined,
  options: FaUserAgentOptions
): FaUserAgentIcon {
  const cat = options.icons[category];
  if (!!name && Object.keys(cat).some(k => k === name)) {
    return cat[name];
  }
  return options.default[category];
}

function getIcon(
  category: string,
  name: string | undefined,
  options: FaUserAgentOptions
): FaUserAgentIcon {
  const icon = getBaseIcon(category, name, options);
  return {
    name: `${options.prefix}${icon.name}`,
    style: icon.style
  };
}

export function faUserAgent(
  userAgent: string,
  options?: FaUserAgentOptionsBuilder
): FaUserAgentIcons {
  const opts = options ? options(DefaultOptions) : DefaultOptions;
  const info = Bowser.parse(userAgent);
  return {
    browser: getIcon("browser", info.browser.name, opts),
    os: getIcon("os", info.os.name, opts),
    platform: getIcon("platform", info.platform.type, opts)
  };
}
