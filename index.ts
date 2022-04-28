import {question} from "readline-sync";


type Operator = '+' | '-' | '*' | '/'

function main(): void
{
    const firstString: string = question("Enter First Number: \n")
    const operator: string = question("Enter operator: \n")
    const secondString: string = question("Enter second number: \n")

    const validInput: boolean = isNumber(firstString) && isNumber(secondString) && isOperator(operator)

    if(validInput){
        const firstNum: number = parseFloat(firstString)
        const secondNum: number = parseFloat(secondString)
        const result: number = calculate(firstNum,operator as Operator,secondNum)
    }
    else{
        console.log("Invalid Input\n")
        main()
    }

}

function isNumber(str: string): boolean 
{
    const numb = parseInt(str)
    const isNumb: boolean = !(isNaN(numb))
    return isNumb
}

function isOperator(operator: string): boolean 
{
    switch (operator)
    {
        case '*':
        case '-':
        case '+':
        case '/':
            return true
        default:
            return false
    }
}

function calculate(firstNum: number, operator: Operator, secondNum: number): number
{
    switch (operator)
    {
        case '+':
           return  firstNum + secondNum;
        case '-':
            return firstNum - secondNum;
        case '*':
            return firstNum * secondNum;
        case '/':
            return firstNum / secondNum;
    }
}