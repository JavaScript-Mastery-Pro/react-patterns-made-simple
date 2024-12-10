import clsx from "clsx";
import { useState } from "react";

function WithoutComposition() {
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

      <form onSubmit={handleSubmit} className="form">
        <div className="form-item">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className={clsx(
              "form-input",
              errors.name ? "border-red-500" : "border-gray-600"
            )}
          />
          {errors.name && <p className="form-message">{errors.name}</p>}
        </div>

        <div className="form-item">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className={clsx(
              "form-input",
              errors.name ? "border-red-500" : "border-gray-600"
            )}
          />
          {errors.email && <p className="form-message">{errors.email}</p>}
        </div>

        <button type="submit">Submit</button>
      </form>
    </main>
  );
}

export default WithoutComposition;
