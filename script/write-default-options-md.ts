import { DefaultOptions } from "../src/default-options";
import { writeFileSync } from "fs";
import { join as joinPath } from "path";
import { FaUserAgentIcon } from "../src";

function code(txt: string) {
  return `\`${txt}\``;
}

function jsonCode(value: any) {
 return code(JSON.stringify(value));
}

function row(...cells: string[]) {
  return cells.join(" | ");
}

function codeRow(name: string, value: string) {
  return `${row(code(name), code(value))} |`;
}

function iconRow(name: string, icon: FaUserAgentIcon) {
  const className = `${DefaultOptions.prefix}${icon.name}`;
  const iconHtml = `<i class="${icon.style} ${className}" />`;
  const prefixed = {
    name: className,
    style: icon.style
  };
  return row(code(name), jsonCode(prefixed), iconHtml);
}

function css(url: string) {
  return `<link rel="stylesheet" type="text/css" media="all" href=${url} />`;
}

const md = `# Default Options

${[
  "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.min.css",
  "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/brands.min.css"
]
  .map(css)
  .join("\n")}

Name | Value | Icon
--- | --- | ---
${codeRow("prefix", DefaultOptions.prefix)}
${Object.keys(DefaultOptions.icons)
  .map(category => {
    const cIcons = DefaultOptions.icons[category];
    return Object.keys(cIcons).map(key =>
      iconRow(`icons.${category}.${key}`, cIcons[key])
    );
  })
  .reduce((acc, arr) => [...acc, ...arr], [])
  .join("\n")}
${Object.keys(DefaultOptions.default)
  .map(category =>
    iconRow(`default.${category}`, DefaultOptions.default[category])
  )
  .join("\n")}
`;

const file = joinPath(__dirname, "..", "doc", "default-options.md");

writeFileSync(file, md);
