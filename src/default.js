#!/usr/bin/env node
const Md2pug = require('markdown-to-pug');
const {convert} = require('./function');

const converter = new Md2pug();
convert(converter);