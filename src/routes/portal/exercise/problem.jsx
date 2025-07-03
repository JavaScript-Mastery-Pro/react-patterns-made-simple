import { useState } from "react";

// Simple Toast component that accepts message and type
const Toast = ({ message, type }) => {
  const colors = {
    success: "success",
    error: "error",
    warning: "warning",
  };

  return (
    <div className={`toast-message ${colors[type] ?? colors.info}`}>
      {message}
    </div>
  );
};

const ProfileSettings = () => {
  const [toast, setToast] = useState(null);

  const handleSave = () => {
    // Show a toast message
    setToast({ message: "Profile updated!", type: "success" });

    // Auto-dismiss after 3 seconds
    setTimeout(() => {
      setToast(null);
    }, 3000);
  };

  return (
    <div className="flex flex-col gap-4">
      <h2>Edit Profile</h2>
      <button onClick={handleSave}>Save Changes</button>

      {/* Toast renders inside component, not portaled */}
      <div className="toast">
        {toast && <Toast message={toast.message} type={toast.type} />}
      </div>
    </div>
  );
};

const App = () => (
  <main className="container relative">
    <ProfileSettings />
  </main>
);

export default App;
