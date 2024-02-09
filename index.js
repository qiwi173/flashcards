function quests(arr) {
  const obj = {
    question: arr[0],
    answers: arr[1],
  };
  function trFl(num) {
    if (num === 0) {
      return true;
    } else {
      return false;
    }
  }
  obj.answers = obj.answers.map(
    (el, i) => (newObj = { name: el, value: trFl(i) })
  );
  return obj;
}
//console.log(quests(["adsfghj", ["sdfg", "dsafgh", "dfyguh"]]));

module.exports = { quests };
