#! /usr/bin/env node 

import inquirer from "inquirer";
console.log("\n\t 'Wellcome To Number Guessing Game'")
const randomNumber = Math.floor(Math.random() * 10 + 1);

const answers= await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number between 1-10:"
    }
])
if(answers.userGuessedNumber === randomNumber) {console.log("Congratulations! You guessed the right number.");}

else {console.log("OH! You guessed the wrong number.");}
