
const inquirer = require("inquirer");
const fs = require('fs').promises

function quests(arr){
   const obj = {
      question:arr[0],
      answers: arr[1]
   }
   obj.answers = obj.answers.map((el, i) => newObj = {name: el, value: i})
   return obj
}

