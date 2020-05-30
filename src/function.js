
const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const logSymbols = require('log-symbols');
const { isBinary } = require('istextorbinary')
const cwd = process.cwd();
const fileName = process.argv[2];
const usageText = "Usage: md2pug <filepath>";

function convert(converter) {


    // STEP 1 Get the filename from argv
    if (fileName === undefined) {
        console.error(chalk.bgBlack.yellow("No filename found. Aborted."));
        process.exit(1);
    }

    const filePath = cwd + path.sep + fileName;

    // STEP 2 Check if the given file is text or binary
    if (isBinary(filePath)) {
        console.log(chalk.bgBlack.yellow("File is not a text file. Aborted."));
        process.exit(2);
    }

    //  STEP 3 Get file content
    try {
        var content = fs.readFileSync(filePath, 'utf8');
    } catch (error) {
        console.log(chalk.bgBlack.yellow("No such file: " + filePath));
        process.exit(3);
    }

    // STEP 4 Convert it with markdown-to-pug
    const pug = converter.render(content);

    // STEP 5 Print converted code to the file
    let pugFileName = fileName.split(".");
    pugFileName.pop();
    pugFileName.push("pug");
    pugFileName = pugFileName.join(".");
    try {
        fs.writeFileSync(pugFileName, pug);
        console.log(chalk.blue(`${fileName} --> ${pugFileName}`) + chalk.green(`\t${logSymbols.success} DONE`));
    } catch (error) {
        console.log(chalk.bgBlack.yellow(error.message));
        process.exit(4);
    }
}

exports.convert = convert;