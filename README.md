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
//- Stylesheet
link(rel="stylesheet" href="//cdn.jsdelivr.net/gh/highlightjs/cdn-release@10.0.3/build/styles/default.min.css")

//- highlight.js
script(src="//cdn.jsdelivr.net/gh/highlightjs/cdn-release@10.0.3/build/highlight.min.js")
```

**Dependencies**

- [markdown-to-pug](https://www.npmjs.com/package/markdown-to-pug)
- [markdown-it-highlightjs](https://www.npmjs.com/package/markdown-it-highlightjs)
- [markdown-it](https://www.npmjs.com/package/markdown-it)
- [istextorbinary](https://www.npmjs.com/package/istextorbinary)

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