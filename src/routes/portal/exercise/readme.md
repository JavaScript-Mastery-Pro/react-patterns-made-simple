## 💻 Exercise: Implement a global toast notification system using React Portals

You want to show success/error/info messages from anywhere in the app, but toasts must render above all content and not break layout.

### Goals

- Create a ToastProvider that:
    - Wraps the app once at the root
    - Exposes a showToast(message, type) function via context
- Render each toast with a portal into a global DOM node (#toast-root)
- Auto-dismiss toasts after a delay (e.g. 3s)
- Allow showing multiple toasts at once

