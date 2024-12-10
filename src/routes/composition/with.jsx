import clsx from "clsx";
import { useState } from "react";

function Form({ children, onSubmit }) {
  return (
    <form onSubmit={onSubmit} className="form">
      {children}
    </form>
  );
}

function FormField({ name, render }) {
  return <div>{render(name)}</div>;
}

function FormItem({ children }) {
  return <div className="form-item">{children}</div>;
}

function FormLabel({ htmlFor, children }) {
  return (
    <label htmlFor={htmlFor} className="form-label">
      {children}
    </label>
  );
}

function FormControl({ children }) {
  return <div>{children}</div>;
}

function FormMessage({ message }) {
  return <p className="form-message">{message}</p>;
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
      <h2>Contact Form</h2>

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
                    "form-input",
                    errors.name ? "border-red-500" : "border-gray-600"
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
                    "form-input",
                    errors.name ? "border-red-500" : "border-gray-600"
                  )}
                />
              </FormControl>
              <FormMessage message={errors.email} />
            </FormItem>
          )}
        />

        <button type="submit">Submit</button>
      </Form>
    </main>
  );
}

export default WithComposition;
