// https://www.hackerrank.com/challenges/grading/problem?isFullScreen=true

function gradingStudents(grades) {
    // Write your code here
    let result = [];
    for(let i = 0; i < grades.length; i++) {
        if(grades[i] < 38) {
            result.push(grades[i]);
            continue;
        } else if(grades[i] % 5 === 0) {
            result.push(grades[i]);
            continue
        } else {
            const value = ((Math.floor(grades[i] / 5) + 1) * 5 );
            console.log(value);
            if(value - grades[i] < 3) {
                result.push(value);
                continue;
            }

            result.push(grades[i]);
        }

    }

    return result;
}

console.log(gradingStudents([39, 38, 42, 76, 97]));