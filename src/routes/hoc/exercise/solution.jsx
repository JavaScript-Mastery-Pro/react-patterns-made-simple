import { useState } from "react";

// A Higher-Order Component is simply a function that takes a component
// and returns a new component with added behavior.

// In our case, we're building a `withAuth` HOC that adds authentication logic.
// This HOC will check if the user is logged in before showing the protected component.
// If not logged in, it will show a login form instead.
const withAuth = (WrappedComponent) => {
  // We return a new component from this function. React will treat it just like any other component.
  // Inside this new component, we handle whether the user is authenticated or not.
  return function AuthenticatedComponent(props) {
    // Local state to track authentication status.
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    // Local state to store email input from the login form.
    const [email, setEmail] = useState("");

    // This function handles the login logic.
    // If the user types an email and clicks login, we mark them as authenticated.
    const handleLogin = () => {
      // Simulate authentication if email is entered
      if (email.trim()) {
        setIsAuthenticated(true);
      }
    };

    // Now we conditionally render based on authentication status.
    // If the user is not authenticated, we show a login form.
    if (!isAuthenticated) {
      return (
        <div className="form">
          <h2>Login Required</h2>
          <input
            type="email"
            className="form-input"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Update email as user types
          />
          <button onClick={handleLogin}>Login</button>
        </div>
      );
    }

    // If the user is authenticated, we render the original component
    // passed into the HOC (like ProfilePage or SettingsPage).
    // We also forward any props that were originally passed in.
    return <WrappedComponent {...props} />;
  };
};

const ProfilePage = () => {
  return (
    <div className="flex flex-col gap-4 text-amber-50">
      <h1>User Profile</h1>
      <p>Welcome back, John!</p>
      <button>Edit Profile</button>
    </div>
  );
};

const SettingsPage = () => {
  return (
    <div className="flex flex-col gap-4 text-amber-50">
      <h1>Settings</h1>
      <p>Configure your preferences</p>
      <button>Save Settings</button>
    </div>
  );
};

// Here’s where the magic of the HOC happens.
// We pass ProfilePage and SettingsPage through the `withAuth` HOC.
// This gives us new components that will check for login before rendering.
const ProtectedProfilePage = withAuth(ProfilePage);
const ProtectedSettingsPage = withAuth(SettingsPage);

// Main Application Component
const App = () => {
  return (
    <main className="container flex flex-col gap-10">
      <ProtectedProfilePage />
      <ProtectedSettingsPage />
    </main>
  );
};

export default App;

/* ---------------------------------------------------------------------------
   Limitation of this demo:

   Each instance of `withAuth` maintains its own `isAuthenticated` state,
   so users must log in separately on every protected component. That’s why
   you have to submit the login form twice—once for ProfilePage and once
   for SettingsPage—before both pages appear.

   How to solve it:

   1. Lift the `isAuthenticated` state into a React Context (e.g., AuthContext).
   2. Provide the context high in the tree via an <AuthProvider>.
   3. Inside `withAuth`, use `useContext(AuthContext)` instead of local state.

   With shared context, a single successful login instantly unlocks every
   component that consumes the same auth state throughout the app.

   We will learn how to solve this in the next pattern: Provider Pattern.
--------------------------------------------------------------------------- */
