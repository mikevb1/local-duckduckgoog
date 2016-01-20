# Local DuckDuckGoog

Use DuckDuckGo's powerful [!bangs](https://duckduckgo.com/bang) without sacrificing Google's search results, with the speed and privacy of a locally-hosted server.

## About

Instead of sending searches to a slow remote server, a local web server handles requests instantaneously. This improves loading times in your browser, and keeps your searches private.

This is a stripped-down fork of [@mikecrittenden's original project](https://github.com/mikecrittenden/duckduckgoog) designed for use on your local machine. I've added an install script and removed user-facing webpages, so it's just an [Express](http://expressjs.com/) web server running in the background. There currently is no support for Windows.

## Installation

Make sure you have Git and Node installed.


### 1. Install local server
Copy and paste the following command into your terminal to run the install script:

```text
curl -fL https://raw.githubusercontent.com/evanrelf/duckduckgoog/master/install | bash
```

To customize the install directory, port, and search engine, download the install script and edit [these lines](install#L4-L6) before running.

### 2. Add search engine to Google Chrome
1. After running the install script, go to [evanrelf.com/duckduckgoog](http://evanrelf.com/duckduckgoog) to add the search engine to Google Chrome
2. Copy and paste this into your URL bar to go to the search engine settings: `chrome://settings/searchEngines`
3. Find "Local DuckDuckGoog" in the list and choose "Make default"

## Usage

Searches containing a DuckDuckGo bang (e.g. `!wiki George Washington`) are sent to DuckDuckGo, otherwise they are sent to Google.

If your search query starts with "\\" or "! " (the space is important), the first search result from DuckDuckGo will be loaded ("I'm Feeling Lucky").
