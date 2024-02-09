const inquirer = require("inquirer");
const Model = require("./model/Model");
const { quests } = require("./index");

async function viev() {
  const inqHello = await inquirer.prompt([
    {
      name: "Игрок",

      message: "Привет. Как тебя зовут?",

      default: "Незнакомец",
    },
    {
      type: "list",

      name: "Тема",

      message: "Выбери тему",

      choices: ["Спорт", "Музыка"],
    },
  ]);
  let path;
  if (inqHello["Тема"] === "Спорт") {
    path = "./topics/nighthawk_flashcard_data.txt";
  } else {
    path = "./topics/otter_flashcard_data.txt";
  }
  const readyQuests = await Model.getFiles(path).then((data) =>
    data.map((el) => quests(el))
  );
  const inq = await inquirer.prompt([
    {
      type: "list",
      name: "quest1",
      message: readyQuests[0].question,
      choices: readyQuests[0].answers,
    },
    {
      type: "list",
      name: "quest2",
      message: readyQuests[1].question,
      choices: readyQuests[1].answers,
    },
    {
      type: "list",
      name: "quest3",
      message: readyQuests[2].question,
      choices: readyQuests[2].answers,
    },
    {
      type: "list",
      name: "quest4",
      message: readyQuests[3].question,
      choices: readyQuests[3].answers,
    },
  ]);
  return inq;
}

viev().then(console.log);
