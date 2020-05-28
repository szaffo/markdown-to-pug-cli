#!/usr/bin/env node
const Md2pug = require('markdown-to-pug');
const { convert } = require('./function');
const highlight = require('markdown-it-highlightjs')

const converter = new Md2pug();
converter.md.use(highlight);
convert(converter);