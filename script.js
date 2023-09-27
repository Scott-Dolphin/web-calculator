const PI = 3.14;

console.log(PI);

function add(a,b) {
    return a + b;
}

console.log(add(PI, 2));

const fruits = ["one", "two", "three", "four"];
var hello = "";
for (let i=0; i<fruits.length; i++) {
    hello += fruits[i] + " ";
}
console.log(hello)
var i = 0;
while (true) {
    if (i == 10) {
        break;
    }
    console.log("hello " + (i + 1));
    i++;
}

// to run: node script.js