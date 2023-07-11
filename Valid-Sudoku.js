//https://leetcode.com/problems/valid-sudoku/

let allSubRows = [];
let checkAllColumns = (board, operator) => {
    let allColValues = [];
    for (let column = 0; column < board.length; column++) {
        if (board[column][operator] === '.') continue;
        if (board[column][operator] < 1 || board[column][operator] > 9 || allColValues.includes(board[column][operator])) {
            console.log('Found a rule-breaking number at Row: ', column, ', Column: ', operator);
            return false;
        }
        allColValues.push(board[column][operator]);
    }
    return true;
}

let checkAllRows = (board, operator) => {
    //Each row must contain the digits 1-9 without repetition.
    //A row is each array 1 by one
    let allRowValues = [];
    let subRows = [];
    for (let row = 0; row < board[operator].length; row++) {
        subRows.push(board[operator][row]);
        if ((row + 1) % 3 === 0) {
            allSubRows.push(subRows);
            subRows = [];
        }
        if (board[operator][row] === '.') continue;
        if (board[operator][row] < 1 || board[operator][row] > 9 || allRowValues.includes(board[operator][row])) {
            console.log('Found a rule-breaking number at Column: ', operator, ', Row: ', row);
            return ({
                status: false,
                subRows: []
            });;
        }
        allRowValues.push(board[operator][row]);
    }
    return ({
        status: true,
        subRows: allSubRows
    });
}

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {

    //Checking operator
    let allSubRows = []
    for (let operator = 0; operator < board.length; operator++) {

        //Each column must contain the digits 1-9 without repetition.
        let columnResponse = checkAllColumns(board, operator);
        console.log('columnResponse', columnResponse);
        if (!columnResponse) {
            return false;
        }

        let {status, subRows} = checkAllRows(board, operator);
        if (!status) {
            return false;
        }
        allSubRows = subRows;
    }
    console.log( allSubRows);

    return true;
};

console.log(`IsValid Soduku? `, isValidSudoku([
    ["5", "3", ".", ".", "7", ".", ".", ".", "."]
    , ["6", ".", ".", "1", "9", "5", ".", ".", "."]
    , [".", "9", "8", ".", ".", ".", ".", "6", "."]
    , ["8", ".", ".", ".", "6", ".", ".", ".", "3"]
    , ["4", ".", ".", "8", ".", "3", ".", ".", "1"]
    , ["7", ".", ".", ".", "2", ".", ".", ".", "6"]
    , [".", "6", ".", ".", ".", ".", "2", "8", "."]
    , [".", ".", ".", "4", "1", "9", ".", ".", "5"]
    , [".", ".", ".", ".", "8", ".", ".", "7", "9"]]), '. Expected Answer? ', true);

// console.log(`IsValid Soduku? `, isValidSudoku([
//     ["8", "3", ".", ".", "7", ".", ".", ".", "."]
//     , ["6", ".", ".", "1", "9", "5", ".", ".", "."]
//     , [".", "9", "8", ".", ".", ".", ".", "6", "."]
//     , ["8", ".", ".", ".", "6", ".", ".", ".", "3"]
//     , ["4", ".", ".", "8", ".", "3", ".", ".", "1"]
//     , ["7", ".", ".", ".", "2", ".", ".", ".", "6"]
//     , [".", "6", ".", ".", ".", ".", "2", "8", "."]
//     , [".", ".", ".", "4", "1", "9", ".", ".", "5"]
//     , [".", ".", ".", ".", "8", ".", ".", "7", "9"]]), '. Expected Answer? ', false);