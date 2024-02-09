const inquirer = require("inquirer");
inquirer
  .prompt([
    {
      type: "list",
      name: "quest1",
      message: "Что является основным источником пищи для ночных ястребов?",
      choices: [
        { name: "насекомые", value: true },
        { name: "Люди", value: false },
        { name: "Ястребы - вегетарианцы", value: false },
      ],
    },
    {
      type: "list",
      name: "quest2",
      message: "Что является основным источником пищи для ночных ястребов?",
      choices: [
        { name: "насекомые", value: true },
        { name: "Люди", value: false },
        { name: "Ястребы - вегетарианцы", value: false },
      ],
    },
  ])
  .then((answers) => console.log(answers));
