/* eslint-disable no-console */
const chalk = require('chalk');

class Chalk {
  static Important(msg) {
    return console.log(chalk.redBright(msg));
  }

  static Good(msg) {
    return console.log(chalk.green(msg));
  }

  static Blue(msg) {
    return console.log(chalk.blue(msg));
  }

  static Debug(msg) {
    return console.log(chalk.magenta(msg));
  }
}


module.exports = Chalk;
