/* eslint-disable no-console */
const chalk = require('chalk');

class Chalk {
    static Important(elementOne, elementTwo) {
        if (elementOne && elementTwo) {
            return console.log(`${elementOne} --> `, chalk.redBright(elementTwo));
        }

        return console.log(chalk.redBright(elementOne));
    }

    static Good(elementOne, elementTwo) {
        if (elementOne && elementTwo) {
            return console.log(`${elementOne} --> `, chalk.green(elementTwo));
        }

        return console.log(chalk.green(elementOne));
    }

    static Blue(elementOne, elementTwo) {
        if (elementOne && elementTwo) {
            return console.log(`${elementOne} --> `, chalk.blue(elementTwo));
        }

        return console.log(chalk.blue(elementOne));
    }

    static Debug(elementOne, elementTwo) {
        if (elementOne && elementTwo) {
            return console.log(`${elementOne} --> `, chalk.magenta(elementTwo));
        }

        return console.log(chalk.magenta(elementOne));
    }
}


module.exports = Chalk;
