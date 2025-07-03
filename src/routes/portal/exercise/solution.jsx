import { createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";

/* ----------------------------------------------------------------------------
  1. Create a DOM node to mount all toasts outside the app root.
     This avoids layout conflicts and z-index issues.
----------------------------------------------------------------------------- */
const toastRoot =
  document.getElementById("toast-root") ??
  (() => {
    const node = document.createElement("div");
    node.id = "toast-root";
    document.body.appendChild(node);
    return node;
  })();

/* ----------------------------------------------------------------------------
  2. Toast context to allow any component to trigger a toast.
----------------------------------------------------------------------------- */
const ToastContext = createContext(null);

// Unique ID generator for toasts
let toastId = 0;

/* ----------------------------------------------------------------------------
  3. Provider manages all toasts in state and renders them through a portal.
----------------------------------------------------------------------------- */
const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  // Add a new toast with optional type (info, success, error)
  const showToast = (message, type = "info") => {
    const id = toastId++;
    setToasts((prev) => [...prev, { id, message, type }]);

    // Auto-remove after 3 seconds
    setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, 3000);
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}

      {/* Portaled toast list */}
      {createPortal(
        <div className="toast">
          {toasts.map((toast) => (
            <Toast key={toast.id} message={toast.message} type={toast.type} />
          ))}
        </div>,
        toastRoot
      )}
    </ToastContext.Provider>
  );
};

/* ----------------------------------------------------------------------------
  4. useToast() hook to access the toast context cleanly
----------------------------------------------------------------------------- */
const useToast = () => {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used within <ToastProvider>");
  return ctx;
};

/* ----------------------------------------------------------------------------
  5. Toast component: styles differ based on type (info, success, error)
----------------------------------------------------------------------------- */
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

/* ----------------------------------------------------------------------------
  6. Example usage: user updates profile, show toast from anywhere
----------------------------------------------------------------------------- */
const ProfileSettings = () => {
  const { showToast } = useToast();

  const handleSave = () => {
    showToast("Profile updated!", "success");
  };

  return (
    <div className="flex flex-col gap-4">
      <h2>Edit Profile</h2>
      <button onClick={handleSave}>Save Changes</button>
    </div>
  );
};

/* ----------------------------------------------------------------------------
  7. App root wraps everything in <ToastProvider> so any child can fire toasts
----------------------------------------------------------------------------- */
const App = () => {
  return (
    <ToastProvider>
      <main className="container relative">
        <ProfileSettings />
      </main>
    </ToastProvider>
  );
};

export default App;

/* ----------------------------------------------------------------------------
  Why Portal + Context work well here:

  • Context gives us global access to showToast() from any component.
  • Portal ensures the UI renders above everything, outside normal DOM flow.
  • Clean separation: logic lives in provider, styles in <Toast>.

  This is the same principle used by libraries like Radix UI, Chakra UI,
  and React Hot Toast.
----------------------------------------------------------------------------- */
