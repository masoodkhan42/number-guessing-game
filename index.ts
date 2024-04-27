import inquirer from "inquirer";
const randomnumber = Math.floor(Math.random() * 10 + 1);
//console.log(randomnumber)
const answer = await inquirer.prompt([
    {
        name: "numberguessed",
        type: "number",
        message: "plz guess a number between 1 to 10:",
    }
]);
if (answer.numberguessed == randomnumber) {
    console.log("congrats!you guessed right number");
}
else {
    console.log("you guessed wrong number");
}
