const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
    constructor(fieldArray) {
        this.field = fieldArray;
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


fff