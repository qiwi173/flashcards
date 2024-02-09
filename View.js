const inquirer = require("inquirer");
const Model = require("./model/Model");
const { quests } = require("./index");
const chalk = require("chalk");

function rand() {
  return Math.floor(Math.random() * 255);
}

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
    path = "./topics/sport.txt";
  } else {
    path = "./topics/pesni.txt";
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
    {
      type: "list",
      name: "quest5",
      message: readyQuests[4].question,
      choices: readyQuests[4].answers,
    },
  ]);
  return Object.entries(inq).map((el) => chalk.rgb(rand(), rand(), rand())(el)).join('\n').replaceAll(',', ': ')
}

viev().then(console.log);
