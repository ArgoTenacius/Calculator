let number = document.getElementById("number")
let sub_number = document.getElementById("sub_number")

let operator = ""
let firstNum = ""
let secondNum = ""
let result = 0
let part = 0

function mainNumberText(text_value){
    number.innerText = text_value;
}

function secondNumberText(text_value){
    sub_number.innerText = `${text_value} ${operator}`;
}

function numberAdd(value){
    if(part == 0){
        firstNum += value
        mainNumberText(firstNum)
    }else{
        secondNum += value
        mainNumberText(secondNum)
    }

    console.log(`${firstNum} | ${secondNum}`)
}

function partCheck(){
    if (part == 1) { return false } else { return true } 
}

function calculatorReset(){
    part = 0
    firstNum = result
    secondNum = ""
    //script to the number appear in the secondary
}

function calculatorSum(val1, val2){
    operator = "="
    secondNumberText(`${val1} + ${val2}`)
    result = (Number(val1) + Number(val2))
    mainNumberText(result)
}

function calculatorSub(val1, val2){
    operator = "="
    secondNumberText(`${val1} - ${val2}`)
    result = (Number(val1) - Number(val2))
    mainNumberText(result)
}

function calculatorPlus(){
    operator = "+"
    resultCalculation("sum");
}

function calculatorMinus(){
    operator = "-"
    resultCalculation("sub")
}

function calculationEqual(){
    if(operator == "+") { resultCalculation("sum") }
    if(operator == "-") { resultCalculation("sub") }
}

function resultCalculation(type){
    const finisher = partCheck();

    if(finisher == false) {
        if(type == "sum") { 
            calculatorSum(firstNum, secondNum) 
            calculatorReset()
        }else if(type == "sub"){
            calculatorSub(firstNum, secondNum)
            calculatorReset()
        }
    }else{
        if(firstNum == "") { firstNum = "0"}
        secondNumberText(firstNum)
        part = 1
    }
}