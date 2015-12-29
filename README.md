# Local DuckDuckGoog

> Use DuckDuckGo's powerful [!bangs](https://duckduckgo.com/bang) without sacrificing Google's search results, with the speed and privacy of a locally-hosted server!

Instead of sending searches to a slow remote server, a local web server handles requests instantaneously. This improves loading times in your browser, and keeps your searches private.

This is a stripped-down fork of [@mikecrittenden's original project](https://github.com/mikecrittenden/duckduckgoog), without the user-facing webpages.

Because I'm using Mac OS X's `launchd` to start the web server on login, this unfortunately doesn't work on Windows or Linux. In the future support could be added using `cron` jobs or something.

## Installation

Make sure you have Git, Node, and NPM installed.


### 1. Install local server
Review the [install script](install) before running this command---you should never trust random people on the internet.

If you are comfortable with what the install script does, copy and paste the following command into your terminal to download and run it:

```text
curl -fL https://raw.githubusercontent.com/evanrelf/duckduckgoog/master/install | bash
```

### 2. Add search engine to Google Chrome
1. After running the install script, go to [evanrelf.com/duckduckgoog](http://evanrelf.com/duckduckgoog) to add the search engine to Google Chrome
2. Copy and paste this into your URL bar to go to the search engine settings: `chrome://settings/searchEngines`
3. Find "Local DuckDuckGoog" in the list, hover over it, and click the "Make default" button that appears on the right

## Usage

Searches containing a DuckDuckGo bang (e.g. `!wiki George Washington`) are sent to DuckDuckGo, otherwise they are sent to Google.

### Custom port
The local web server can listen on a port of your choosing. Read comments in LaunchAgent .plist for configuration instructions.

### Custom search engine
Google can be replaced with a custom search engine of your choosing. Read comments in LaunchAgent .plist for configuration instructions.
