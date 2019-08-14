# fontawesome-user-agent

A simple, yet extensible, TypeScript (and JavaScript) library which tries to determine browser, os and platform icons from user-agent string (thanks to [Bowser](https://github.com/lancedikson/bowser)).

## Installation

### npm

```text
npm install --save fontawesome-user-agent
```

### yarn

```text
yarn add fontawesome-user-agent
```

## Usage

The most basic usage should look like this:

```js
import { faUserAgent } from "faUserAgent";

const userAgent = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.100 Safari/537.36";

const icons = faUserAgent(userAgent);
// {
//     browser: { name: "fa-chrome", style: "fab" },
//     os: { name: "fa-apple", style: "fab" },
//     platform: { name: "fa-desktop", style: "fas" }
// }
```

## Options

If you need to customize some options, you can use the optional `options` argument:

```js
const icons = faUserAgent(userAgent, options => {
    options.prefix = "";
    options.icons.browser["Custom Browser"] = {
        name: "icon-name-without-prefix",
        style: "fas-or-fab";
    }
    options.icons.os.MacOS = "money-bill";
});
```

Available options:

### FaUserAgentOptions

Name | Type | Description
--- | --- | ---
`prefix` | `string` | Icon name prefix (e.g. `fa-`).
`icons.browser.<name>` | `FaUserAgentIcon` | Icon for browser with name `<name>`.
`icons.os.<name>` | `FaUserAgentIcon` | Icon for OS with name `<name>`.
`icons.platform.<name>` | `FaUserAgentIcon` | Icon for platform with name `<name>`.
`default.browser` | `FaUserAgentIcon` | Default browser icon to use when not found in icon set.
`default.os` | `FaUserAgentIcon` | Default OS icon to use when not found in icon set.
`default.platform` | `FaUserAgentIcon` | Default platform icon to use when not found in icon set.

### FaUserAgentIcon

Name | Type | Description
--- | --- | ---
`name` | `string` | Font Awesome icon class name.
`style` | `string` | Font Awesome icon _Style Prefix_ class name.

See [Font Awesome Basic Use](https://fontawesome.com/how-to-use/on-the-web/referencing-icons/basic-use) for more information about how to use these properties.

## Supported Icons

See [`doc/default-options.md`](doc/default-options.md) for a list of the supported browsers, platforms and OS icons.

## Develop

* build: `npm run build`
* test: `npm run test`
* code coverage: `npm run coverage`
