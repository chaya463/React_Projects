class Calculator {
    constructor(previousOperandTextElement,currentOperandTextElement){
    this.previousOperandTextElement = previousOperandTextElement
    this.previousOperandTextElement = currentOperandTextElement
    this.clear()
}
clear() {
 this.currentOperand = ""
 this.previousOperand = ""
 this.operation = undefined
}
delete(){

}
appendNumber(number){
    if(number == '.' && this.currentOperand.includes('.'))return
    this.currentOperand = this.currentOperand.toString() + number.toString()

}
chooseOperation(operation){

}
compute(){

}
updateDisplay(){
    this.currentOperandTextElement.innerText = this.currentOperand

}
}
const numberButtons = document.querySelectorAll('[data-operation]')
const  operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const  deleteButton = document.querySelector('[data-delete]')
const  allClearButton = document.querySelector('[data-all-Clear]')
const  previousOperandTextElement  = document.querySelector('[data-previous-Operand]')
const currentOperandTextElement = document.querySelector('[data-equals]')

const Calculator=new Calculator( previousOperandTextElement, currentOperandTextElement)

numberButtons.forEach(button =>{
    button.addEventListener("click",() =>{
    Calculator.appendNumber(button.innerText)
    Calculator.updateDisplay()
})
})