// https://www.hackerrank.com/challenges/time-conversion/problem?isFullScreen=true

function timeConversion(s) {
    // Write your code here
    

    const diff = s.split(":");

    const type = diff[2].slice(-2);

    if(type === "AM" && diff[0] === "12") {
        diff[0] = "00";
    } if(type === "PM" && parseInt(diff[0]) < 12) diff[0] = parseInt(diff[0]) + 12;

    return ""+diff[0]+":"+diff[1]+":"+diff[2].slice(0, 2);
}

console.log(timeConversion('07:05:45AM'));