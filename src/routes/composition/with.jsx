import clsx from "clsx";
import { useState } from "react";

function Form({ children, onSubmit }) {
  return (
    <form onSubmit={onSubmit} className="space-y-5">
      {children}
    </form>
  );
}

function FormField({ name, render }) {
  return <div>{render(name)}</div>;
}

function FormItem({ children }) {
  return <div className="space-y-2">{children}</div>;
}

function FormLabel({ htmlFor, children }) {
  return (
    <label
      htmlFor={htmlFor}
      className="block text-sm font-medium text-gray-300"
    >
      {children}
    </label>
  );
}

function FormControl({ children }) {
  return <div>{children}</div>;
}

function FormMessage({ message }) {
  return <p className="text-red-500 text-sm">{message}</p>;
}

export function FormDescription({ children }) {
  return <p className="text-gray-400 text-sm">{children}</p>;
}

function WithComposition() {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.email) newErrors.email = "Email is required.";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted:", formData);
      setFormData({ name: "", email: "" });
      setErrors({});
    }
  };

  return (
    <main className="container">
      <h2 className="text-2xl font-bold mb-4">Contact Form</h2>

      <Form onSubmit={handleSubmit}>
        <FormField
          name="name"
          render={(name) => (
            <FormItem>
              <FormLabel htmlFor={name}>Name</FormLabel>
              <FormControl>
                <input
                  type="text"
                  name={name}
                  id={name}
                  value={formData.name}
                  onChange={handleChange}
                  className={clsx(
                    "block w-full px-3 py-2 bg-gray-700 border",
                    errors.name && "border-red-500",
                    "rounded-md text-white focus:ring-indigo-500 focus:border-indigo-500"
                  )}
                />
              </FormControl>
              <FormMessage message={errors.name} />
            </FormItem>
          )}
        />

        <FormField
          name="email"
          render={(name) => (
            <FormItem>
              <FormLabel htmlFor={name}>Email</FormLabel>
              <FormControl>
                <input
                  type="email"
                  name={name}
                  id={name}
                  value={formData.email}
                  onChange={handleChange}
                  className={clsx(
                    "block w-full px-3 py-2 bg-gray-700 border outline-none ring-1",
                    errors.name ? "border-red-500" : "border-gray-600",
                    "rounded-md text-white focus:ring-indigo-500 focus:border-indigo-500"
                  )}
                />
              </FormControl>
              <FormMessage message={errors.email} />
            </FormItem>
          )}
        />

        <button
          type="submit"
          className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600"
        >
          Submit
        </button>
      </Form>
    </main>
  );
}

export default WithComposition;
