# Markdown to Pug CLI

Convert your markdown code to pug easily from the command line.

## Install

```shell
npm i -g markdown-to-pug-cli
```

## Usage

Run this simple command, and it will create a pug file with the same name, but `.pug` ending.

```bash
md2pug README.md
```

If you want syntax highlight, you can convert with `md2pugHl` and use [highlight.js](https://highlightjs.org/).

>Note that, you have to import highlight.js manualy by yourself in your pug code

For highlight.js visit their [site](https://highlightjs.org/), or just copy this

```pug
//- highlight.js css
link(rel="stylesheet" href="//cdn.jsdelivr.net/gh/highlightjs/cdn-release@10.0.3/build/styles/gml.min.css")
//- highlight.js code
script(src="//cdn.jsdelivr.net/gh/highlightjs/cdn-release@10.0.3/build/highlight.min.js")
//- highlight.js trigger
script hljs.initHighlightingOnLoad()
```
> You can switch theme by chanhing the css file name. Try themes [here](https://highlightjs.org/static/demo/)  

## Dependencies

- [istextorbinary](https://www.npmjs.com/package/istextorbinary)
- [markdown-it](https://www.npmjs.com/package/markdown-it)
- [markdown-to-pug](https://www.npmjs.com/package/markdown-to-pug)
- [markdown-it-anchor](https://www.npmjs.com/package/markdown-it-anchor)
- [markdown-it-highlightjs](https://www.npmjs.com/package/markdown-it-highlightjs)
- [log-symbols](https://www.npmjs.com/package/log-symbols)
- [chalk](https://www.npmjs.com/package/chalk)

## Example

```bash
md2pug mySite.md
```

Creates mySite.pug

### Mixin support

With the folliwing PugJS mixin

```pugjs
mixin list
  ul
    li first
    li second
    li third    
```

```md
<!-- +list -->
```

### Layout support

```md
<!-- extends layout.pug -->

<!-- block content -->
# Title
```

will yield to

```pugjs
extend layout.pug

block content
  h1 Title
```

## Contribution

Check out the [GitHub repo](https://github.com/szaffo/markdown-to-pug-cli) or email me at `szaffo@szabomartin.com`