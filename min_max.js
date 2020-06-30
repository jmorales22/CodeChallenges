'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the miniMaxSum function below.
function miniMaxSum(arr) {
    let n = arr.length;
    let sum = 0;
    let sumArray = [];

    for (let i = 0; i < n; i++) {
        sum = arr[n - 1] + arr[n - 2] + arr[n - 3] + arr[n - 4] + arr[n - 5] - arr[i];
        sumArray.push(sum);
    }
    console.log(Math.min(...sumArray), Math.max(...sumArray));
}

function main() {
    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}
