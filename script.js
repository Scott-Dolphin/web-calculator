var queue = "";
var finished_calculating = true;
var operator = "";
var num1 = 0;
var num2 = 0


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

FIX ME: Calculator only calculates the last 3 chars

my strategy: split getNum() into two functions and use
variables to calculate instead of accessing the queue
directly

- getNum(): 
  counts number of usages since last operator
  Stores in @buffer. Adds inputs to @queue

- getOp():
  Gets the @buffer chars and stores in
  @num1. After, get the type of operator and store
  in @operator

- calculate(): 
  To be used after more usages of getNum()
  Gets the @buffer chars and stores in @num2.
  After, perform the execution based on the 3
  variables instead of directly
  parsing it

===================================================================
*/

function getNum(value) {

    if (finished_calculating) {
        queue = "";
        num1 = "";
        num2 = "";
    }
    finished_calculating = false;
    let x = value;
    console.log("received " + x);
    queue += (x);
    console.log("queue: " + queue);

    document.getElementById("result").innerText += x;

}

function getOp(value) {

    num1 = queue;

    operator = value;
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
}







// function getNum(value) {
//     // if (document.getElementById("result").innerText.slice(-1) == '‎') {
//     //     Clear();
//     // }



//     if (finished_calculating && ((queue != '+') || (queue != '-') || (queue != 'x') || (queue != '÷'))) {
//         Clear();
//         document.getElementById("result").innerTextText = queue.charAt(queue.length - 1);
//     }
//     finished_calculating = false;


//     let x = value;
//     queue += x;
//     console.log("input: " + x);
//     console.log("queue: " + queue);
//     document.getElementById("result").innerText += x;
// }


// function calculate() {
//     let q = document.getElementById("result").innerText;
//     console.log("screen showing: " + q);


//     //remember to start parsing at 1 because of the stupid blank char lmao

//     let a = queue.charAt(queue.length - 1);
//     let operator = queue.charAt(queue.length - 2);
//     let b = queue.charAt(queue.length - 3);


//     let ans = 0;
//     switch (operator) {
//         case '+':
//             ans = parseInt(a) + parseInt(b);
//             document.getElementById("result").innerText = ans.toString();
//             break;
//         case '-':
//             ans = parseInt(a) - parseInt(b);
//             document.getElementById("result").innerText = ans.toString();
//             break;
//         case 'x':
//             ans = parseInt(a) * parseInt(b);
//             console.log(ans);
//             document.getElementById("result").innerText = ans.toString();
//             break;
//         case '÷':
//             ans = parseInt(a) / parseInt(b);
//             document.getElementById("result").innerText = ans.toString();
//             break;
//     }



//     console.log("queue: " + queue);
//     console.log("calculating " + a + operator + b);
//     console.log("result:" + ans);
//     console.log("adding result to queue...");
//     queue += ans;
//     finished_calculating = true;
//     console.log("finished calculating: " + finished_calculating);


//     // document.getElementById("result").innerText = ans;
// }

// to run: node script.js