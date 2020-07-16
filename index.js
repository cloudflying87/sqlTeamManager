const inquirer = require("inquirer");
const questions = require('./assets/questions.js')
const orm = require('./config/orm.js');

inquirer
    .prompt(questions)
    .then(answers => {
        
      }
    ).catch(err => console.log(err))

    