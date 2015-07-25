# Code Queen

##Contributors:
Nicole Archambault, Cleri Philiastides, Michelle Waddell, Barbara Hazlett, Jenny Louthan, Joy Earl, Amy Johnson, Elizabeth Deering

##Description:
Studies show that beginning in middle school, girls tend to quit participating in their science and math education. This continues throughout a woman’s career, with many women reporting the tech field to be an unwelcoming, even hostile environment. Our goal is for Code Queen to be a website message board that is a safe place for anyone to ask a tech question without fear of sounding “stupid.” It will also be a place where women in tech can connect with mentors, grooming noobs for tech careers.

Users will be able to see previously asked questions and answers and, after registering, ask their own questions. Our hope is that these interactions will develop into mentor/mentee relationships.


## Required tools

If you don't already have these tools, download and install them before you start working with Code Queen.

* Modern web browser (may we suggest [Chrome?](https://www.google.com/chrome/browser))
* Command Line Interface (CLI)
	* Mac OSX: Terminal is already installed, or try [iTerm](https://www.iterm2.com/)
	* Windows: Command Prompt (DOS)
* [Node.js](https://nodejs.org/download/)
* A text editor or coding tool of your choice. [Sublime Text 2](http://www.sublimetext.com/2) is available for free for Mac and Windows, but will occassionally ask you to purchase a license when you save your files.

## Setup

Once you have all prerequisites installed, open your CLI and navigate to the project folder.

Navigate to the project folder 

To install the app, type `npm install` and press return. You should see several packages and dependencies being installed.

~~~
	npm WARN package.json apparel-listings@0.0.0 No repository field.
	npm WARN package.json apparel-listings@0.0.0 No license field.
	express@4.11.2 node_modules/express
	├── merge-descriptors@0.0.2
	├── utils-merge@1.0.0
	├── methods@1.1.1
	├── fresh@0.2.4
	├── cookie@0.1.2
	├── escape-html@1.0.1
	├── range-parser@1.0.2
	├── vary@1.0.1
	├── cookie-signature@1.0.5
	├── finalhandler@0.3.3
	├── media-typer@0.3.0
	├── parseurl@1.3.0
	├── serve-static@1.8.1
	├── content-disposition@0.5.0
	├── path-to-regexp@0.1.3
	├── depd@1.0.1
	├── qs@2.3.3
	├── on-finished@2.2.1 (ee-first@1.1.0)
	├── debug@2.1.3 (ms@0.7.0)
	├── etag@1.5.1 (crc@3.2.1)
	├── proxy-addr@1.0.8 (forwarded@0.1.0, ipaddr.js@1.0.1)
	├── send@0.11.1 (destroy@1.0.3, ms@0.7.0, mime@1.2.11)
	├── type-is@1.5.7 (mime-types@2.0.14)
	└── accepts@1.2.11 (negotiator@0.5.3, mime-types@2.1.3)

	body-parser@1.13.2 node_modules/body-parser
	├── bytes@2.1.0
	├── content-type@1.0.1
	├── depd@1.0.1
	├── qs@4.0.0
	├── on-finished@2.3.0 (ee-first@1.1.1)
	├── debug@2.2.0 (ms@0.7.1)
	├── raw-body@2.1.2 (unpipe@1.0.0)
	├── http-errors@1.3.1 (inherits@2.0.1, statuses@1.2.1)
	├── iconv-lite@0.4.11
	└── type-is@1.6.5 (media-typer@0.3.0, mime-types@2.1.3)
~~~

To start the app, type `node app.js` in the command line. After a few seconds, you should see a success message. Keep your command line tool open, and open a new tab in your web browser. In the URL bar, type `http://localhost:8889/static/landing_page.html`.

From there, the user is able to ask a question to the community or browse exisiting content.

To stop serving the page to your browser, press Control+C in the CLI.

MIT License
