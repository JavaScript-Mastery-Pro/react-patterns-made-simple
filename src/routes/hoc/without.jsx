import { useState, useEffect } from "react";

function Profile() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div>
        <h2>Profile</h2>
        <div className="spinner" />
      </div>
    );
  }

  const user = { name: "John Doe", email: "john@example.com" };

  return (
    <div>
      <h2>Profile</h2>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
}

function Dashboard() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div>
        <h2>Dashboard</h2>
        <div className="spinner" />
      </div>
    );
  }

  const data = { key: "value" };

  return (
    <div>
      <h2>Dashboard</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

function WithoutHoc() {
  return (
    <main className="container">
      <Profile />
      <Dashboard />
    </main>
  );
}

export default WithoutHoc;
