let firstNum = ""
let secondNum = ""
let result = 0
let part = 0

function numberAdd(value){
    part == 0 ? firstNum += value : secondNum += value
    console.log(`${firstNum} | ${secondNum}`)
}

function partCheck(){
    if (part == 1) { return false } else { return true } 
}

function calculatorSum(val1, val2){
    result = (Number(val1) + Number(val2))
    console.log(result)
}
function calculatorPlus(){
    resultCalculation("sum");
}

function resultCalculation(type){
    const finisher = partCheck();

    if(finisher == false) {
        if(type == "sum") { calculatorSum(firstNum, secondNum) }
    }else{
        part = 1
        //all changes related to - + / x will go here in future!
    }
}