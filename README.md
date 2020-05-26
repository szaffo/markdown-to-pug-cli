# Markdown to Pug CLI

Convert your markdown code to pug easily from the command line.

## Install

**NodeJS**

```shell
npm i -g markdown-to-pug-cli
```

## Usage

Run this simple command, and it will create a pug file with the same name, but `.pug` ending.

```bash
md2pug README.md
```
**Dependencies**

- [Markdown to Pug](https://www.npmjs.com/package/markdown-to-pug)

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