
// You should implement your task here.

module.exports = towelSort;
function towelSort(matrix) {
  if(arguments.length===0) return [];
  const result = [];
  let sortMode = true;
  matrix.forEach(row => {
    const sortedRow = (sortMode) ? row.sort((a, b) => a - b) : row.sort((a, b) => -a - b);
    sortMode = !sortMode;
    sortedRow.forEach(element => result.push(element));
  });
  return result;
}


const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(towelSort());
