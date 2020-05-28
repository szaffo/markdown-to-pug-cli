#!/usr/bin/env node
const getBaseConverter = require('./baseConverter');
const { convert } = require('./function');
const highlight = require('markdown-it-highlightjs')

const converter = getBaseConverter();
converter.md.use(highlight);
convert(converter);