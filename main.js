const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
    constructor(fieldArray) {
        this.field = fieldArray;
        this.playerX = 0;
        this.playerY = 0;
    }
    print() {
       this.field.forEach(e => console.log(e.join('')));
    }
};

const myField = new Field( // creates new instance of Field
    [['*', '░', 'O'],
    ['░', 'O', '░'],
    ['░', '^', '░']]
);

let gameOver = false;

while (gameOver === false) {
    myField.print(); //prints out field position 

    userDir = prompt("Which way? ");

    if ((userDir != 'd') & (userDir != 'u') & (userDir != 'l') & (userDir != 'r')) { //checks for correct usage
        console.log("Usage: u, d, l or r");
    } else {
            switch (userDir) {
                case 'd': 
                myField.playerY++;
                break;

                case 'u': 
                myField.playerY--;
                break;

                case 'l': 
                myField.playerX--;
                break;

                case 'r': 
                myField.playerX++;
                break;

                default: console.log('Incorrect Direction')
            }

            //check if new location is out of bounds
            if ((myField.playerX > 2) || (myField.playerY > 2) || (myField.playerX < 0) || (myField.playerY < 0)){
                console.log("Out of bounds. Goodbye.");
        
            } else {
                    let playerLocation = myField.field[myField.playerY][myField.playerX];

                    if (playerLocation === '^') { //check if player has found hat
                        gameOver = true;
                        console.log("You found your hat!");
                    } else if (playerLocation === 'O') {  //check if player is in a hole
                        console.log("YOU ARE IN A HOLEEEEE!");
                        gameOver = true;
                    }
                    myField.field[myField.playerY][myField.playerX] = '*'; //updates new player location
                    }
            }}