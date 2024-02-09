const inquirer = require("inquirer");
const fs = require('fs').promises

inquirer

  .prompt([
    {
      name: "hello",

      message: "Привет. Как тебя зовут?",

      default: "Незнакомец"
    },
  ])

  .then((answers) => {
    console.info("Привет, ", answers.hello);
   fs.writeFile('./log.txt', answers.hello)
  });

  inquirer

  .prompt([
    {
      name: "chooseTopic",

      message: "Выбери тему",
    },
  ])

  .then((answers) => {
    console.info("Привет, ", answers.chooseTopic);
   fs.writeFile('./log.txt', answers.hello)
  });