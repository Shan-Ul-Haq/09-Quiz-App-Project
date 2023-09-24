import chalk from "chalk";
import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 3000);
    });
};
async function welcome() {
    let rainbowTitle = chalkAnimation.neon("Welcome to Typescript Quiz App Made By Shan");
    await sleep();
    rainbowTitle.stop();
}
await welcome();
let mcqs = await inquirer.prompt([{
        message: "Multiple Choice Questions:-",
        name: "quiz",
    },
    {
        message: "Student Name:",
        name: "student",
    },
    {
        message: "Attempt Question # 01: What is JS stands for?",
        name: "Q1",
        type: "list",
        choices: ["Java Script", "Java"],
    },
    {
        message: "Attempt Question # 02: What is TypeScript?",
        name: "Q2",
        type: "list",
        choices: ["TypeScript is a superset of JavaScript", "TypeScript is a subset of JavaScript", "TypeScript High-level programming language"],
    },
    {
        message: "Attempt Question # 03: Which are Correct Primitive Types Data?",
        name: "Q3",
        type: "list",
        choices: ["String, Number, Boolean, Eplicit", "String, Number, Boolean, Undefined, Implicit", "String, Number, Boolean, Undefined, Null"],
    },
    {
        message: "Attempt Question # 04: Which are Correct Arithmetic operators:",
        name: "Q4",
        type: "list",
        choices: ["Addition, Subtraciton, Multiplication, Division", "Addition, Subtraciton, Multiplication, Division, Exponentiation, Modulus",],
    },
]);
if (mcqs.Q1 === "Java Script") {
    console.log(chalk.bold.greenBright("Ans # 01: You are Excellent!!"));
}
else {
    console.log(chalk.bold.italic.red("Ans # 01: You are Fail!!"));
}
if (mcqs.Q2 === "TypeScript is a superset of JavaScript") {
    console.log(chalk.bold.greenBright("Ans # 02: You are Excellent!!"));
}
else {
    console.log(chalk.bold.italic.red("Ans # 02: You are Fail!!"));
}
if (mcqs.Q3 === "String, Number, Boolean, Undefined, Null") {
    console.log(chalk.bold.greenBright("Ans # 03: You are Excellent!!"));
}
else {
    console.log(chalk.bold.italic.red("Ans # 03: You are Fail!!"));
}
if (mcqs.Q4 === "Addition, Subtraciton, Multiplication, Division, Exponentiation, Modulus") {
    console.log(chalk.bold.greenBright("Ans # 04: You are Excellent!!"));
}
else {
    console.log(chalk.bold.italic.red("Ans # 04: You are Fail!!"));
}
