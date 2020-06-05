#!/usr/bin/env node
const Md2pug = require('markdown-to-pug');
const anchor = require("markdown-it-anchor");
const highlight = require('markdown-it-highlightjs');
const { Command } = require('commander');
const chalk = require('chalk');
const { isBinary } = require('istextorbinary');
const path = require('path');
const isRelative = require('is-relative');
const isFile = require('is-file');
const isDirectory = require('is-directory');

// Exit codes
const NO_CONTENT_TO_CONVERT = 1;
const INPUT_FILE_PATH_INVALID = 2;
const FILE_IS_BINARY = 3;
const INPUT_DIR_PATH_INVALID = 4;
const OUTPUT_DIR_PATH_INVALID = 5;

// Setup commander
const program = new Command();
program.name('md2pug');
program.description('Convert your markdown files into pug code');
program.version('2.0', '-v, --version', 'output the current version');
program.option('-s, --syntax-highlight', 'use markdown-it-highlightjs plugin');
program.option('-a, --anchor', 'use markdown-it-anchor plugin');
program.option('-f, --file <file>', 'file to convert');
program.option('-d, --directory <dir>', 'convert every file in directory');
program.option('-o, --output <dir>', 'set where to save the converted file (only directory)');
program.option('-r, --recursive', 'convert directory recursively');
program.option('-V, --verbose', 'verbose mode');

// Parser given arguments
program.parse(process.argv);

// Function to log errors
const errorLog = (text) => console.log(`${chalk.magenta(program.name())} ${chalk.bgBlack.red('ERROR')} ${text}`);

// Function to log infos
const infoLog = (text, force = false) => {
    if (program.verbose || force) console.log(`${chalk.magenta(program.name())} ${chalk.bgYellow.black('INFO')} ${text}`);
}

// Check if the user is specified a file or a directory
if ((!program.file) && (!program.directory)) {
    errorLog('No such file or directory specified');
    process.exit(NO_CONTENT_TO_CONVERT);
}

// #######################################################################

// Make the converter instance
const converter = new Md2pug();

// Add plugins
if (program.anchor) {
    infoLog('Using markdown-it-anchor plugin');
    converter.md.use(anchor);
}

if (program.syntaxHighlight) {
    infoLog('Using markdown-it-highlightjs plugin');
    converter.md.use(highlight);
}

// #######################################################################

// Set the output directory
let outputDir;
if (program.output) {
    outputDir = path.normalize((isRelative(program.output)) ? process.cwd() + path.sep + program.output : program.output);

    if (!isDirectory.sync(outputDir)) {
        errorLog(`Output is not a directory or not exist: ${outputDir}`);
        process.exit(OUTPUT_DIR_PATH_INVALID);
    }
} else {
    outputDir = (program.directory)? program.directory : //TODO // process.cwd(); 
}

// #######################################################################

// File mode
if (program.file) {
    const file = path.normalize((isRelative(program.file))?  process.cwd() + path.sep + program.file : program.file);
    
    // Check if file exists
    if (!isFile(file)) {
        errorLog(`Input is not a file or not exists: ${file}`);
        process.exit(INPUT_FILE_PATH_INVALID);
    }
    
    // Check if file is a binary
    if (isBinary(file)) {
        errorLog(`This is a binary file: ${file}`)
        process.exit(FILE_IS_BINARY);
    }
}

// #######################################################################

if (program.directory) {
    const dir = path.normalize((isRelative(program.directory)) ? process.cwd() + path.sep + program.directory : program.directory);
    
    if (!isDirectory.sync(dir)) {
        errorLog(`Input is not a directory or not exists: ${dir}`)
        process.exit(INPUT_DIR_PATH_INVALID);
    }
}

// #######################################################################
//  -o --output option
// TODO convert file
//  check if -o is file, or directory
//  check directory path in -d and -o options (is-directory?)
// TODO get all files from director
// TODO get only .md file from directory
// TODO watch mode
// TODO recusive mode in -d option

// console.log(program.opts())