# Local DuckDuckGoog

> Use DuckDuckGo's powerful [!bangs](https://duckduckgo.com/bang) without sacrificing Google's search results, with the speed and privacy of a locally-hosted server!

Instead of sending searches to a slow remote server, a local web server handles requests instantaneously. This improves loading times in your browser, and keeps your searches private.

This is a stripped-down fork of [@mikecrittenden's original project](https://github.com/mikecrittenden/duckduckgoog), without the user-facing webpages.

Because I'm using Mac OS X's `launchd` to start the web server on login, this unfortunately doesn't work on Windows or Linux. In the future support could be added using `cron` jobs or something.

## Installation

Make sure you have Git, Node, and NPM installed.

**ATTENTION:** Review the [install script](install) before running this command---you should never trust random people on the internet.

```bash
curl -fL https://raw.githubusercontent.com/evanrelf/duckduckgoog/master/install | bash
```

If you aren't comfortable pasting that in, just follow the commands in the install script manually.

## Usage

Searches containing a DuckDuckGo bang (e.g. `!wiki George Washington`) are sent to DuckDuckGo, otherwise they are sent to Google.
