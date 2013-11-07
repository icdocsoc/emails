Digest Email Generator
=============

Generator for DoCSoc digest emails.

# Installation

- `brew install nodejs`
- `git clone git@github.com:icdocsoc/digest-emails.git`
- `cd digest-emails`
- `npm install`

# Writing
Write emails in the `emails` folder

- `h1` tags are listed at the top as an agenda-style list, unless there aren't any.

# Generating Emails

`node compile.js`

Output will be placed in `compiled` folder

# Sending Emails

- Open the HTML file in a browser (I used chrome)
- Drag-Select from above the box, to the bottom fo the page
- Copy
- Open a new email in exchange
- Paste (it should center when you resize the window, if not, you copy/pasted wrong)
- Send!
