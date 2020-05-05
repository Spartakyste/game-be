const chalk = require('chalk');

const ChalkImportant = (msg) => console.log(chalk.redBright(msg));

const ChalkGood = (msg) => console.log(chalk.green(msg));

const ChalkBlue = (msg) => console.log(chalk.blue(msg));

const ChalkDebug = (msg) => console.log(chalk.magenta(msg));
 
module.exports = {
    ChalkBlue,
    ChalkGood,
    ChalkImportant,
    ChalkDebug
}