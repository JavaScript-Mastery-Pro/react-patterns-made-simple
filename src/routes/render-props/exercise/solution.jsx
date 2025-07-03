/* ----------------------------------------------------------------------------
  Table: accepts columns + data and exposes render props for full flexibility
----------------------------------------------------------------------------- */
const Table = ({ columns, data, children }) => {
  // Create headers from column definitions
  const headers = columns.map((col) => col.header);

  // Map data to rows with cells
  const rows = data.map((row) => ({
    cells: columns.map((col) => row[col.accessor]),
  }));

  // Pass headers and rows to children via render props
  return children({ headers, rows });
};

/* ----------------------------------------------------------------------------
  Example usage: UserTable component renders custom UI using Table render prop
----------------------------------------------------------------------------- */
const UserTable = () => {
  const columns = [
    { header: "Name", accessor: "name" },
    { header: "Email", accessor: "email" },
    { header: "Role", accessor: "role" },
  ];

  const data = [
    { name: "Alice", email: "alice@example.com", role: "Admin" },
    { name: "Bob", email: "bob@example.com", role: "Editor" },
    { name: "Charlie", email: "charlie@example.com", role: "Viewer" },
  ];

  return (
    <Table columns={columns} data={data}>
      {({ headers, rows }) => (
        <table>
          <thead>
            <tr>
              {headers.map((header, i) => (
                <th key={i}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i}>
                {row.cells.map((cell, j) => (
                  <td key={j}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </Table>
  );
};

const App = () => (
  <main className="container flex flex-col gap-5">
    <h1>User Management</h1>
    <UserTable />
  </main>
);

export default App;

/* ----------------------------------------------------------------------------
  Why this works:

  - Data logic is handled inside <Table>, UI is handled outside via render prop
  - Makes it reusable for different datasets (users, products, orders)
  - Gives full control over table rendering (responsive layouts, custom cells)
  - You can extend it with sorting, filtering, pagination — just like React Table

 This is *exactly* the pattern that early React Table used under the hood.
----------------------------------------------------------------------------- */
