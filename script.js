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

function secondNumberText(text_value, text_operator){
    sub_number.innerText = `${text_value} ${text_operator}`;
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
    firstNum = ""
    secondNum = ""
    //script to the number appear in the secondary
}

function calculatorSum(val1, val2){
    result = (Number(val1) + Number(val2))
    console.log(result)
}

function calculatorPlus(){
    operator = "+"
    resultCalculation("sum");
}

function resultCalculation(type){
    const finisher = partCheck();

    if(finisher == false) {
        if(type == "sum") { 
            calculatorSum(firstNum, secondNum) 
            calculatorReset()
        }
    }else{
        secondNumberText(firstNum, operator)
        part = 1
    }
}