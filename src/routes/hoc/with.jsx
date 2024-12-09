import { useState, useEffect } from "react";

function withLoading(Component, delay = 2000) {
  return function WithLoading(props) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, delay);

      return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
      return (
        <div>
          <h2>{props.title}</h2>
          <div className="spinner" />
        </div>
      );
    }

    return <Component {...props} />;
  };
}

function Profile() {
  const user = { name: "John Doe", email: "john@example.com" };

  return (
    <div>
      <h2>Profile</h2>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
}

function Dashboard() {
  const data = { key: "value" };

  return (
    <div>
      <h2>Dashboard</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

const ProfileWithLoading = withLoading(Profile, 2000);
const DashboardWithLoading = withLoading(Dashboard, 3000);

function WithHoc() {
  return (
    <main>
      <ProfileWithLoading title="Profile" />
      <DashboardWithLoading title="Dashboard" />
    </main>
  );
}

export default WithHoc;
