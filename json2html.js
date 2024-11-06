export default function json2html(data) {
  // Get all unique column headers from the data
  const headers = Array.from(new Set(
    data.reduce((cols, row) => cols.concat(Object.keys(row)), [])
  ));

  // Create the table header
  const thead = `
    <thead>
      <tr>${headers.map(header => `<th>${header}</th>`).join('')}</tr>
    </thead>`;

  // Create table rows
  const tbody = `
    <tbody>
      ${data.map(row => `
        <tr>${headers.map(header => 
          `<td>${row[header] || ''}</td>`
        ).join('')}</tr>
      `).join('')}
    </tbody>`;

  // Return the complete table with the required data-user attribute
  return `<table data-user="ajithgera63@gmail.com">${thead}${tbody}</table>`;
}
