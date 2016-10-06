Digest Email Generator
=============

Generator for DoCSoc digest emails. See [this blog post](http://pete-hamilton.co.uk/2013/11/07/society-newsletters-nodejs/)

# Installation

- `brew install nodejs`
- `git clone git@github.com:icdocsoc/digest-emails.git`
- `cd digest-emails`
- `npm install`
- `npm install coffee-script -g`

# Writing
Write emails in the `emails` folder

- `h1` tags are listed at the top as an agenda-style list, unless there aren't any.

# Generating Emails

`coffee compile.coffee`

Output will be placed in `compiled` folder

# Sending Emails

- Open the HTML file in a browser (I used chrome)
- Drag-Select from above the box, to the bottom fo the page
- Copy
- Open a new email in exchange
- Paste (it should center when you resize the window, if not, you copy/pasted wrong)
- Send!

# Contributing

Just follow the following recommended process:

- Fork it
- Create your feature branch (`git checkout -b my-new-feature`)
- Commit your changes (`git commit -am 'Add some feature'`)
- Push to the branch (`git push origin my-new-feature`)
- Create new Pull Request
