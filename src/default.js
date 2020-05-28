#!/usr/bin/env node
const getBaseConverter = require('./baseConverter');
const {convert} = require('./function');

const converter = getBaseConverter();
convert(converter);