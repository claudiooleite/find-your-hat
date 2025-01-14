const prompt = require("prompt-sync")({ sigint: true });

const hat = "^";
const hole = "O";
const fieldCharacter = "░";
const pathCharacter = "*";

class Field {
  constructor(field) {
    this.field = field; // Initialize the field property
  }
  print() {
    this.field.forEach((row) => {
      console.log(row.join(" "));
    });
  }
}

const myField = new Field([
  ["*", "░", "O"],

  ["░", "O", "░"],

  ["░", "^", "░"],
]);

myField.print();
