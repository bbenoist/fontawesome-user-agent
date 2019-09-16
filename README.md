# fontawesome-user-agent

[![NPM Version](https://img.shields.io/npm/v/fontawesome-user-agent.svg?style=flat)](https://npmjs.org/package/fontawesome-user-agent)
[![Build Status](https://travis-ci.org/bbenoist/fontawesome-user-agent.svg?branch=master)](https://travis-ci.org/bbenoist/fontawesome-user-agent)
[![Greenkeeper badge](https://badges.greenkeeper.io/bbenoist/fontawesome-user-agent.svg)](https://greenkeeper.io/)
[![Coverage Status](https://coveralls.io/repos/github/bbenoist/fontawesome-user-agent/badge.svg?branch=master)](https://coveralls.io/github/bbenoist/fontawesome-user-agent?branch=master)

A simple, yet extensible, TypeScript (and JavaScript) library which tries to determine browser, os and platform [Font Awesome](https://fontawesome.com/) icons from user-agent string (thanks to [Bowser](https://github.com/lancedikson/bowser)).

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

// Content of icons:
{
  browser: {
    name: "chrome",
    style: "fab",
    html: "<i class=\"fab fa-chrome\"/>"
  },
  os: {
    name: "apple",
    style: "fab",
    html: "<i class=\"fab fa-apple\"/>"
  },
  platform: {
    name: "desktop",
    style: "fas",
    html: "<i class=\"fas fa-desktop\"/>"
  }
}
```

Simplified content of [`doc/demo.html`](https://github.com/bbenoist/fontawesome-user-agent/blob/master/doc/demo.html):

```html
<html>
    <head>
        <link rel="stylesheet" type="text/css" media="all" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.min.css" />
    </head>
    <body>
        <p id="demo"></p>
        <script>
            var icons = FaUserAgent.faUserAgent(navigator.userAgent);
            html = icons.browser.html + icons.os.html + icons.platform.html;
            document.getElementById("demo").innerHTML = html;
        </script>
    </body>
</html>
```

## Options

If you need to customize some options, you can use the optional `options` argument:

```js
const icons = faUserAgent(userAgent, options => {
    options.prefix = "";
    options.icons.os.macOS = {
        name: "money-bill",
        style: "fas"
    }
    options.default.os = {
        name: "skull-crossbones",
        style: "solid"
    }
});
```

Available options:

### FaUserAgentOptions

Name | Type | Description
--- | --- | ---
`prefix` | `string` | Icon name prefix (e.g. `fa-`).
`icons.browser.<name>` | `FaUserAgentIconBase` | Icon for browser with name `<name>`.
`icons.os.<name>` | `FaUserAgentIconBase` | Icon for OS with name `<name>`.
`icons.platform.<name>` | `FaUserAgentIconBase` | Icon for platform with name `<name>`.
`default.browser` | `FaUserAgentIconBase` | Default browser icon to use when not found in icon set.
`default.os` | `FaUserAgentIconBase` | Default OS icon to use when not found in icon set.
`default.platform` | `FaUserAgentIconBase` | Default platform icon to use when not found in icon set.

### FaUserAgentIconBase

Name | Type | Description
--- | --- | ---
`name` | `string` | Font Awesome icon class name.
`style` | `string` | Font Awesome icon _Style Prefix_ class name.

See [Font Awesome Basic Use](https://fontawesome.com/how-to-use/on-the-web/referencing-icons/basic-use) for more information about how to use these properties.

## Supported Icons

See [`doc/default-options.md`](https://github.com/bbenoist/fontawesome-user-agent/blob/master/doc/default-options.md) for a list of the supported browsers, platforms and OS icons.

## Develop

* build: `npm run build`
* test: `npm run test`
* code coverage: `npm run coverage`

## License

[MIT](https://github.com/bbenoist/fontawesome-user-agent/blob/master/LICENSE)
