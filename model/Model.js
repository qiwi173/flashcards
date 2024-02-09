const fs = require("fs").promises;

const folder = "../topics/nighthawk_flashcard_data.txt";

class Model {
  constructor(folder) {
    this.folder = folder;
  }

  static async getFiles(folder) {
    try {
      const filesArr = await fs.readFile(folder, "utf-8"); //читаем папку топик
      // console.log(filesArr);
      const file = await filesArr.split("\r\n").filter((el) => el !== "");
      //   console.log(file);
      const fileMap = await file.map((el, i) =>
        i % 2 !== 0 ? el.split(" ") : el
      );
      //   console.log(fileMap, 1111);
      const pairedFiles = [];

      for (let i = 0; i < fileMap.length; i += 2) {
        pairedFiles.push([fileMap[i], fileMap[i + 1]]);
      }

      // console.log(pairedFile, 222);
      return pairedFiles;
    } catch (err) {
      console.log("Ошибка:", err);
    }
  }
}

module.exports = Model;
