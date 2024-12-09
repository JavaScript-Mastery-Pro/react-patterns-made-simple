import { useState } from "react";

function WithoutPortal() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => setIsOpen(!isOpen);

  return (
    <main className="container">
      <h1 className="text-3xl mb-6">Modal Without Portal</h1>
      <button
        onClick={toggleModal}
        className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
      >
        Open Modal
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-gray-700 bg-opacity-50 flex justify-center items-center">
          <div className="bg-black rounded-lg shadow-lg w-96 p-6">
            <h2 className="text-2xl font-semibold mb-4">Modal Title</h2>
            <p className="text-gray-300 mb-6">
              This is a modal rendered without using the Portal Pattern
            </p>
            <button
              onClick={toggleModal}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </main>
  );
}

export default WithoutPortal;
