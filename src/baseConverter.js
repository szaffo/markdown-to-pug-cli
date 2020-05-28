const Md2pug = require('markdown-to-pug');
const anchor = require("markdown-it-anchor")

function getBaseConverter() {
    const converter = new Md2pug();
    converter.md.use(anchor)
    return converter;
}

module.exports = getBaseConverter;