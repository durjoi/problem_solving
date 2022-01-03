// https://leetcode.com/problems/valid-sudoku/

/**
 * @param {character[][]} board
 * @return {boolean}
 */
 var isValidSudoku = function(board) {
    let state = true;
    for(let i = 0; i < 9; i++) {
        state = board[i].some((element, index) => board[i].indexOf(element) !== index && element !== ".");
        
        if(state) return false;

        const col = board.map(d => d[i]);

        state = col.some((element, index) => col.indexOf(element) !== index && element !== ".");
        
        if(state) return false;
    }

    for(let i = 0; i < 9; i = i + 3) {
        for(let j = 0; j < 9; j = j + 3) {
            let temp3x3 = [];
            temp3x3.push(...board[i].slice(j, j+3))
            temp3x3.push(...board[i+1].slice(j, j+3))
            temp3x3.push(...board[i+2].slice(j, j+3))
            console.log(temp3x3);
            state = temp3x3.some((element, index) => temp3x3.indexOf(element) !== index && element !== ".");
            if(state) return false;
        }
    }

    return true;
};

console.log(isValidSudoku([
[".",".",".",".","5",".",".","1","."],
[".","4",".","3",".",".",".",".","."],
[".",".",".",".",".","3",".",".","1"],
["8",".",".",".",".",".",".","2","."],
[".",".","2",".","7",".",".",".","."],
[".","1","5",".",".",".",".",".","."],
[".",".",".",".",".","2",".",".","."],
[".","2",".","9",".",".",".",".","."],
[".",".","4",".",".",".",".",".","."]]
))