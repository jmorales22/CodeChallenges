'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(str => str.trim());

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the timeConversion function below.
 */
function timeConversion(s) {
  const arr = s.slice(0, 8).split(":");

  if (s.indexOf("AM") > -1 && arr[0] === "12") {
    arr[0] = "00";
    let newTime = arr.join(":");
    return newTime;
  } else if (s.indexOf("PM") > -1 && arr[0] === "12") {
    let time = arr.join(":");
    return time;
  } else if (s.indexOf("AM") > -1) {
    let time = arr.join(":");
    return time;
  } else {
    let hour = parseInt(arr[0], 0);
    let newHour = hour + 12;
    arr[0] = newHour.toString();
    let militaryTime = arr.join(":");
    return militaryTime;
  }
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    let result = timeConversion(s);

    ws.write(result + "\n");

    ws.end();
}
