import { useState } from "react";

const options = [
  { id: 1, label: "Edit", value: "edit" },
  { id: 2, label: "Duplicate", value: "duplicate" },
  { id: 3, label: "Delete", value: "delete" },
];

const DropdownMenu = ({ options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="dropdown">
      <button onClick={() => setIsOpen(!isOpen)}>Menu</button>
      {isOpen && (
        <ul className="dropdown-menu">
          {options.map((option) => (
            <li key={option.id} onClick={() => onSelect(option)}>
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const App = () => {
  const onSelect = (option) => {
    console.log(option);
  };

  return (
    <main className="container flex justify-center items-center">
      <DropdownMenu options={options} onSelect={onSelect} />
    </main>
  );
};

export default App;
