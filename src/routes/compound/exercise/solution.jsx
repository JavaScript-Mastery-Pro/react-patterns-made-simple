import { createContext, useContext, useState, useEffect, useRef } from "react";

/* ---------------------------------------------------------------------------
   1. Create a context so every part of the dropdown can share the same state.
   We store:  
     • isOpen – whether the menu is visible  
     • toggle / open / close helpers  
     • onSelect – callback to parent app when an item is chosen
--------------------------------------------------------------------------- */
const DropdownContext = createContext(null);

/* ---------------------------------------------------------------------------
   2. Provider component holds the state and exposes a neat public API.
   Everything placed inside <Dropdown> will be able to access this context.
--------------------------------------------------------------------------- */
const Dropdown = ({ children, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Helper functions we pass down
  const toggle = () => setIsOpen((prev) => !prev);
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  /* Optional: close menu when user presses Escape */
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  /* Optional: close when user clicks outside */
  const menuRef = useRef(null);
  useEffect(() => {
    const handleClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        close();
      }
    };
    if (isOpen) document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [isOpen]);

  return (
    <DropdownContext.Provider
      value={{ isOpen, toggle, open, close, onSelect, menuRef }}
    >
      <div className="dropdown">{children}</div>
    </DropdownContext.Provider>
  );
};

/* ---------------------------------------------------------------------------
   3. Dropdown.Trigger – any element that toggles the menu open/closed.
--------------------------------------------------------------------------- */
const DropdownTrigger = ({ children, ...rest }) => {
  const { toggle } = useContext(DropdownContext);
  return (
    <button onClick={toggle} className="dropdown-trigger" {...rest}>
      {children}
    </button>
  );
};

/* ---------------------------------------------------------------------------
   4. Dropdown.Menu – renders its children only when the dropdown is open.
      We attach a ref so the outside‑click logic knows where the menu lives.
--------------------------------------------------------------------------- */
const DropdownMenu = ({ children }) => {
  const { isOpen, menuRef } = useContext(DropdownContext);
  if (!isOpen) return null;

  return (
    <ul ref={menuRef} className="dropdown-menu">
      {children}
    </ul>
  );
};

/* ---------------------------------------------------------------------------
   5. Dropdown.Item – selectable row. On click it notifies parent and closes.
--------------------------------------------------------------------------- */
const DropdownItem = ({ value, children, className = "" }) => {
  const { onSelect, close } = useContext(DropdownContext);

  const handleClick = () => {
    if (onSelect) onSelect(value);
    close();
  };

  return (
    <li
      onClick={handleClick}
      className={`cursor-pointer px-4 py-2 hover:bg-gray-100 ${className}`}
    >
      {children}
    </li>
  );
};

const options = [
  { id: 1, label: "Edit", value: "edit" },
  { id: 2, label: "Duplicate", value: "duplicate" },
  { id: 3, label: "Delete", value: "delete" },
];

const App = () => {
  const handleSelect = (value) => {
    console.log("Selected:", value);
  };

  return (
    <main className="container flex justify-center items-center">
      <Dropdown onSelect={handleSelect}>
        <DropdownTrigger>Actions</DropdownTrigger>
        <DropdownMenu>
          {options.slice(0, 2).map((opt) => (
            <DropdownItem key={opt.id} value={opt.value}>
              {opt.label}
            </DropdownItem>
          ))}
          <DropdownItem value="delete" className="text-red-600">
            Delete
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </main>
  );
};

export default App;

/* ---------------------------------------------------------------------------
   Why Compound Components work well here:

   • State Colocation: open/close logic lives in one place (Dropdown provider)
     instead of being duplicated or passed through several props layers.

   • Flexible Layouts: designers can reorder <Dropdown.Item>, insert headings,
     add icons, or build sub‑menus without touching internal JavaScript.

   • Encapsulation: each sub‑component is unaware of siblings; it only cares
     about context – leading to simpler, more focused code.
--------------------------------------------------------------------------- */
