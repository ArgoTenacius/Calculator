let number = document.getElementById("number")
let sub_number = document.getElementById("sub_number")

let operator = ""
let firstNum = ""
let secondNum = ""
let result = 0
let part = 0

//#region you will probably dont need to mess here
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
//#endregion

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
}

function calculatorSub(val1, val2){
    operator = "="
    secondNumberText(`${val1} - ${val2}`)
    result = (Number(val1) - Number(val2))
    mainNumberText(result)
}

function calculatorMul(val1, val2){
    operator = "="
    secondNumberText(`${val1} x ${val2}`)
    result = (Number(val1) * Number(val2))
    mainNumberText(result)
}

function calculatorDiv(val1, val2){
    operator = "="
    secondNumberText(`${val1} / ${val2}`)
    result = (Number(val1) / Number(val2))
    mainNumberText(result)
}

function calculatorPlus(){
    if(part == 1){
        calculationEqual()
        secondNum = ""
        operator = "+"
        part = 1
    }else{
        operator = "+"
        resultCalculation("sum");
    }
}

function calculatorMinus(){
    if(part == 1){
        calculationEqual()
        secondNum = ""
        operator = "-"
        part = 1
    }else{
        operator = "-"
        resultCalculation("sub")
    }
}

function calculatorMult(){
    if(part == 1){
        calculationEqual()
        secondNum = ""
        operator = "x"
        part = 1
    }else{
        operator = "x"
        resultCalculation("mul")
    }
}

function calculatorDivs(){
    if(part == 1){
        calculationEqual()
        secondNum = ""
        operator = "/"
        part = 1
    }else{
        operator = "/"
        resultCalculation("div")
    }
}

function calculationEqual(){
    if(operator == "+") { resultCalculation("sum") }
    else if(operator == "-") { resultCalculation("sub") }
    else if(operator == "x") { resultCalculation("mul") }
    else if(operator == "/") { resultCalculation("div") }
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
        }else if(type == "mul"){
            calculatorMul(firstNum, secondNum)
            calculatorReset()
        }else if(type == "div"){
            calculatorDiv(firstNum, secondNum)
            calculatorReset()
        }
    }else{
        if(firstNum == "") { firstNum = "0"}
        secondNumberText(firstNum)
        part = 1
    }
}