function sumArray(array) {
    let sum = 0;
    for (let n of array) {
        sum += n
    }
    return sum
}


function reverseArray(array) {
    let newArray = [];
    let len = array.length - 1;
    for (let i = 0; i < len; i++) {
        newArray.push(array[len - i]);
    }

    return newArray;
}

function findMax(array) {
    let max = array[0] || null;
    for (let n of array) {
        if (max < n) {
            max = n;
        }
    }
    return max;
}

function findMin(array) {
    let min = array[0] || null;
    for (let n of array) {
        if (min > n) {
            min = n;
        }
    }
    return min;
}

function findOdd(array) {
    let newArray = [];
    for (let n of array) {
        if (n % 2 === 1) {
            newArray.push(n)
        }
    }

    return newArray;
}
function findEven(array) {
    let newArray = [];
    for (let n of array) {
        if (n % 2 === 0) {
            newArray.push(n)
        }
    }

    return newArray;
}

function findNegative(array) {
    let newArray = [];
    for (let n of array) {
        if (n < 0) {
            newArray.push(n)
        }
    }
    return newArray;
}

function factorial(number)
{
    let factorials = 1 || null;
    if (number === 0)
    {
        factorials = 1
    }else {
        for (let i = 1; i <= number; i++)
        {
            factorials *= i;
        }
    }
    return factorials;
}

module.exports = {
    sumArray,
    reverseArray,
    findNegative,
    findMin,
    findMax,
    findOdd,
    findEven,
    factorial,
}