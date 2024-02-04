function createTable() {
  // Prompt for the number of rows
  const numRows = prompt('Input number of rows');
  if (numRows === null || isNaN(numRows)) {
    return; // Cancelled or invalid input
  }

  // Prompt for the number of columns
  const numCols = prompt('Input number of columns');
  if (numCols === null || isNaN(numCols)) {
    return; // Cancelled or invalid input
  }

  const table = document.getElementById('myTable');
  table.innerHTML = ''; // Clear existing content

  for (let i = 0; i < numRows; i++) {
    const row = table.insertRow(i);
    for (let j = 0; j < numCols; j++) {
      const cell = row.insertCell(j);
      cell.textContent = Row-${i} Column-${j};
    }
  }
}

// Attach the createTable function to the button click event
const createButton = document.getElementById('createButton');
createButton.addEventListener('click', createTable);