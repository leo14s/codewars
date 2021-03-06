/**
 * Write a function validSolution/ValidateSolution/valid_solution() that accepts
 * a 2D array representing a Sudoku board, and returns true if it is a valid
 * solution, or false otherwise. The cells of the sudoku board may also contain
 * 0's, which will represent empty cells. Boards containing one or more zeroes
 * are considered to be invalid solutions.
 */

function validSolution(board) {
  let hasZeros = false;

  board.forEach(arr => {
    arr.some(element => {
      if (element === 0) {
        hasZeros = true;
      }
    });
  });

  //check lines

  /**
   * check columns:
   * transform into new array and apply same validation from lines
   */
  let arrColumn = [];
  board.forEach(arr => {
    arrColumn.push(arr[0]);
  });

  console.log(arrColumn);
}

validSolution([[1, 2, 3], [2, 3, 1], [3, 1, 2]]);
