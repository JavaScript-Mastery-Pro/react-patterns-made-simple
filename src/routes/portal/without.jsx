import { useState } from "react";

function WithoutPortal() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => setIsOpen(!isOpen);

  return (
    <main className="container">
      <h2>Modal Without Portal</h2>

      <button onClick={toggleModal} className="portal-btn">
        Open Modal
      </button>

      {isOpen && (
        <div className="portal">
          <div>
            <h2>Modal Title</h2>
            <p>This is a modal rendered without using the Portal Pattern</p>
            <button onClick={toggleModal}>Close</button>
          </div>
        </div>
      )}
    </main>
  );
}

export default WithoutPortal;
