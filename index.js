function add(x,y) {
    return x + y;
}

function subtract(x,y) {
    return x - y;
}

function multiply(x,y) {
    return x * y;
}

function divide(x,y) {
    return x / y;
}

function increment(number) {
    return number += 1;
}

function decrement(number) {
    return number -= 1;

}

function makeInt(n) {
    return parseInt(n, 10);
}

makeInt('0x2328');



function preserveDecimal(n) {
     return parseFloat(n);
    }

preserveDecimal('2.222');