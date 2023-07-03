const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
    constructor(fieldArray) {
        this.field = fieldArray;
        this.playerHorizontal = 0;
        this.playerVertical = 0;
    }
    print() {
       this.field.forEach(e => console.log(e.join('')));
    }
};
const myField = new Field(
    [['*', '░', 'O'],
    ['░', 'O', '░'],
    ['░', '^', '░']]
);

myField.print();

userDir = prompt("Which way? ");

if ((userDir != 'd') & (userDir != 'u') & (userDir != 'l') & (userDir != 'r')) {
    console.log("Usage: u, d, l or r");
}

switch (userDir) {
    case 'd': 
    myField.playerVertical--;
    break;

    case 'u': 
    myField.playerVertical++;
    break;

    case 'l': 
    myField.playerHorizontal--;
    break;

    case 'r': 
    myField.playerHorizontal++;
    break;

    default: console.log('Incorrect Direction')
}

console.log(myField);
//After user dir
    //function to check if usage is correct - DONE
    //function to update player location based on userDir - DONE
    //function to check if updated player location is in a hole 
    //function to check if updated player location is out of bounds
    //function to move player character to the new location 
    //reprompt for direction 