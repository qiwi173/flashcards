const inquirer = require("inquirer");
const fs = require('fs').promises

  inquirer

  .prompt([

    {

      type: 'list',

      name: 'chooseTopic',

      message: 'Выбери тему',

      choices: ['alligator', 'crocodile'],

    },

  ])

  .then(answers => {

    console.info('Ваша тема:', answers.chooseTopic);

  });