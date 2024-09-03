let a = 0;
let b = "";
let c = 0;
function calculation(a,b,c){
    console.log("a:"+a+" b:"+b+" c:"+c);
    if (b=="+"){
        return a+c;
    }
    else if (b=="-"){
        return a-c;
    }
    else if(b=="*"){
        return a*c;
    }
    else if (b=="/"){
        return a/c;
    }
    else{
        alert("try again");
    }
}

for (let i=0;i<10;i++){
    let numBtn = document.createElement("button");
    numBtn.textContent = i;
    let numBtns = document.querySelector(".num-buttons");
    numBtns.appendChild(numBtn);
}

let inputtedValue = [];
let buttons = document.querySelectorAll("button:not(.clear-button)");
buttons.forEach(item =>{
    item.addEventListener("click",()=>{
        inputtedValue.push(item.textContent)
        displayValue(inputtedValue);
    })
})


let clearBtn = document.querySelector(".clear-button");
clearBtn.addEventListener("click",()=>{
    if (confirm("clear?")){
        let display = document.querySelector(".display");
        let content = document.querySelector(".content");
        display.textContent = "";
        inputtedValue = []
    }
})

function displayValue(num){
    num = num.join("")
    let display = document.querySelector(".display");
    
    display.textContent = num;

}

let equalBtn = document.querySelector("#equal-btn");
equalBtn.addEventListener("click",()=>{
    let formula = separateDisplayNums();
    console.log(calculation(Number(formula[0]),formula[1],Number(formula[2])));
    let result = calculation(Number(formula[0]),formula[1],Number(formula[2]));
    let display = document.querySelector(".display");
    display.textContent += result;
})

function separateDisplayNums(){
    let display = document.querySelector(".display").textContent;
    let num1 = [];
    let num2 = [];
    let str = [];
    for (let i=0;i<display.length-1;i++){
        if((!isNaN(display[i]))&&(!str[0])){
            num1.push(display[i]);
        }
        else if(isNaN(display[i])){
            str = display[i];
        }
        else if((!isNaN(display[i]))&&(str[0])){
            num2.push(display[i]);
        }
    }
    let formula = [num1.join(""),str,num2.join("")];
    console.log("formula"+formula);
    return formula;
}

console.log(calculation(2,"+",6));
console.log(calculation(2,"-",6));
console.log(calculation(2,"*",6));
console.log(calculation(2,"/",6));
// console.log(displayValue);