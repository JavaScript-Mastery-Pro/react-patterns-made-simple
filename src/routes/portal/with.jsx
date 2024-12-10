import { useState } from "react";
import ReactDOM from "react-dom";

function WithPortal() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => setIsOpen(!isOpen);

  return (
    <main className="container">
      <h2>Modal With Portal</h2>

      <button onClick={toggleModal} className="portal-btn">
        Open Modal
      </button>

      {isOpen &&
        ReactDOM.createPortal(
          <div className="portal">
            <div>
              <h2>Modal Title</h2>
              <p>This is a modal using Portal Pattern</p>
              <button onClick={toggleModal}>Close</button>
            </div>
          </div>,
          document.body
        )}
    </main>
  );
}

export default WithPortal;
