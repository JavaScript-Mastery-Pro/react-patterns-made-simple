const users = [
  { name: "Alice", email: "alice@example.com", role: "Admin" },
  { name: "Bob", email: "bob@example.com", role: "Editor" },
  { name: "Charlie", email: "charlie@example.com", role: "Viewer" },
];

const columns = [
  { header: "Name", accessor: "name" },
  { header: "Email", accessor: "email" },
  { header: "Role", accessor: "role" },
];

const UserTable = () => {
  // Extract headers from columns
  const headers = columns.map((col) => col.header);

  // Build rows from data
  const rows = users.map((user) => {
    return columns.map((col) => user[col.accessor]);
  });

  return (
    <table>
      <thead>
        <tr>
          {headers.map((header, i) => (
            <th key={i}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((cells, i) => (
          <tr key={i}>
            {cells.map((cell, j) => (
              <td key={j}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const App = () => (
  <main className="container flex flex-col gap-5">
    <h1>User Management</h1>
    <UserTable />
  </main>
);

export default App;
