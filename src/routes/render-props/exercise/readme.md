## 💻 Exercise: Build a dynamic table using the render props pattern

You’re building a dashboard that needs to display:
- A list of users
- Dynamic headers


Instead of hardcoding a `<table>` with data and columns baked in, you’ll build a Table component that:

- Accepts columns and data
- Gives you back { headers, rows } via a render prop

This separates the logic of handling columns and data from the UI.