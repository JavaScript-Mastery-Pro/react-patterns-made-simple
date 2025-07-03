## 💻 Exercise: Refactor a monolithic DropdownMenu into Compound Components

You are given a single dropdown that manages all its own state and rendering.

### Goals

Build a Dropdown provider that owns the shared state (isOpen, selection). 

Create the following compound parts that read that shared context:

- Dropdown.Trigger – button (or any element) that toggles the menu
- Dropdown.Menu – wrapper that shows children when open
- Dropdown.Item – selectable option
- Dropdown.Separator – visual divider

Make the API flexible so designers can compose arbitrary layouts:

```jsx
<Dropdown onSelect={handleSelect}>
  <Dropdown.Trigger>Menu</Dropdown.Trigger>
  <Dropdown.Menu>
    <Dropdown.Item value="edit">Edit</Dropdown.Item>
    <Dropdown.Item value="duplicate">Duplicate</Dropdown.Item>
    <Dropdown.Separator />
    <Dropdown.Item value="delete" className="text-red-600">
      Delete
    </Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
```


### Requirements

- Internal open/close state lives in context, not props drilling.

- Clicking an item calls onSelect(value) and closes the menu.

- Escape key or outside click also closes the menu (stretch goal).