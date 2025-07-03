## 💻 Exercise: Build a withAuth Higher-Order Component

You're given two simple components: `ProfilePage` and `SettingsPage`.

Your task is to create a reusable **Higher-Order Component (HOC)** called `withAuth` that:
- ✅ Checks if the user is authenticated using a mock `isAuthenticated` variable.
- 🔐 If not authenticated, shows a login form (email input and login button).
- 🙌 If authenticated, renders the wrapped component.
- 🧪 Apply the `withAuth` HOC to both ProfilePage and SettingsPage.

