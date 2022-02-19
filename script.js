let number = document.getElementById("number")
let sub_number = document.getElementById("sub_number")

let operator = ""
let firstNum = ""
let secondNum = ""
let result = 0
let part = 0

function operatorEqualizer(_operator){ //This script it's used when you press an operator instead of equal
    calculationEqual()
    secondNum = ""
    operator = _operator
    part = 1
}

function mainNumberText(text_value){ number.innerText = text_value }
function secondNumberText(text_value){ sub_number.innerText = `${text_value} ${operator}` }

function numberAdd(value){
    if(part == 0){
        firstNum += value
        mainNumberText(firstNum)
    }else{
        secondNum += value
        mainNumberText(secondNum)
    }
}

function numberAddDot(){
    if(part == 0){
        if(firstNum.includes(".") == false){
            firstNum += "."
            mainNumberText(firstNum)
        }
    }else{
        if(secondNum.includes(".") == false){
            secondNum += "."
            secondNumberText(secondNum)
        }
    }
}

function partCheck(){
    if (part == 1) { return false } else { return true } 
}

function calculatorReset(){
    part = 0
    firstNum = result
    secondNum = ""
}

function fullReset(){
    part = 0
    result = 0
    operator =""
    firstNum = ""
    secondNum = ""
    number.innerText = ""
    sub_number.innerText = ""
}

function calculatorSum(val1, val2){
    operator = "="
    secondNumberText(`${val1} + ${val2}`)
    result = (Number(val1) + Number(val2))
    mainNumberText(result)
    calculatorReset()
}

function calculatorSub(val1, val2){
    operator = "="
    secondNumberText(`${val1} - ${val2}`)
    result = (Number(val1) - Number(val2))
    mainNumberText(result)
    calculatorReset()
}

function calculatorMul(val1, val2){
    operator = "="
    secondNumberText(`${val1} x ${val2}`)
    result = (Number(val1) * Number(val2))
    mainNumberText(result)
    calculatorReset()
}

function calculatorDiv(val1, val2){
    operator = "="
    secondNumberText(`${val1} / ${val2}`)
    result = (Number(val1) / Number(val2))
    mainNumberText(result)
    calculatorReset()
}

function calculatorPlus(){
    if(part == 1){ operatorEqualizer("+") }
    else{
        operator = "+"
        resultCalculation("sum");
    }
}

function calculatorMinus(){
    if(part == 1){ operatorEqualizer("-") }
    else{
        operator = "-"
        resultCalculation("sub")
    }
}

function calculatorMult(){
    if(part == 1){ operatorEqualizer("x") }
    else{
        operator = "x"
        resultCalculation("mul")
    }
}

function calculatorDivs(){
    if(part == 1){ operatorEqualizer("/") }
    else{
        operator = "/"
        resultCalculation("div")
    }
}

function calculationEqual(){
    if     (operator == "+") { resultCalculation("sum") }
    else if(operator == "-") { resultCalculation("sub") }
    else if(operator == "x") { resultCalculation("mul") }
    else if(operator == "/") { resultCalculation("div") }
}

function resultCalculation(type){
    const finisher = partCheck();

    if(finisher == false) {
        if     (type == "sum"){ calculatorSum(firstNum, secondNum) }
        else if(type == "sub"){ calculatorSub(firstNum, secondNum) }
        else if(type == "mul"){ calculatorMul(firstNum, secondNum) }
        else if(type == "div"){ calculatorDiv(firstNum, secondNum) }
    }else{
        if(firstNum == "") { firstNum = "0" }
        secondNumberText(firstNum)
        part = 1
    }
}