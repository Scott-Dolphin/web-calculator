var queue = "";
var finished_calculating = true;
var operator = "";
var num1 = "";
var num2 = "";
// var stackNum = "";

function hi_professor() {
    alert("Hi professor i wasn't too sure what I wanted to do with this so here's a cookie 🍪 \n:)");
}


function Clear() {
    document.getElementById("result").innerText = "‎";
    console.log('clear');
    queue = "";
    operator = "";
    console.log("queue: " + queue);
    console.log("num1: " + num1);
    console.log("num2: " + num2);


}
/* 
===================================================================

FIX ME: Issue with stacked operations. Suspected issue with line 55.

===================================================================
*/

function getNum(value) {

    if (finished_calculating) {
        document.getElementById("result").innerText = "‎";
        queue = "";
        num1 = "";
        num2 = "";
        finished_calculating = true;
    }
    finished_calculating = false;
    let x = value;
    console.log("received " + x);
    queue += (x);
    console.log("queue: " + queue);

    document.getElementById("result").innerText += x;

}

function getOp(value) {
    operator = value;

    if (num1 != "") {
        queue = calculate();
    }

    num1 = queue;
    console.log("current operator: " + operator);
    console.log("current num1: " + num1);




    switch (operator) {
        case "+":
            document.getElementById("result").innerText = num1 + "+";
            // console.log(1);                  for debugging
            break;
        case "-":
            document.getElementById("result").innerText = num1 + "-";
            // console.log(2);                  for debugging
            break;
        case "x":
            document.getElementById("result").innerText = num1 + "x";
            // console.log(3);                  for debugging
            break;
        case "÷":
            document.getElementById("result").innerText = num1 + "÷";
            // console.log(4);                  for debugging
            break;

    }
    queue = "";
    console.log("queue cleared");
    finished_calculating = false;


}

function calculate() {
    console.log("calling calculate()");
    num2 = queue;

    console.log("current num1: " + num1);
    console.log("current num2: " + num2);

    if (num2 == "") {
        num2 = num1;
    }

    let ans = 0;
    switch (operator) {
        case "+":
            ans = parseInt(num1) + parseInt(num2);
            console.log(1);
            break;

        case "-":
            ans = parseInt(num1) - parseInt(num2);
            console.log(2);
            break;

        case "x":
            ans = parseInt(num1) * parseInt(num2);
            console.log(3);
            break;

        case "÷":
            if (num2 == "0") {
                document.getElementById("result").innerText = "divide by zero";
                console.log("divide by zero")
            }

            ans = parseInt(num1) / parseInt(num2);
            console.log(4);
            break;
    }
    console.log("answer: " + ans);
    document.getElementById("result").innerText = ans;
    queue = ans;
    finished_calculating = true;
    return ans;
}







// to run: node script.js