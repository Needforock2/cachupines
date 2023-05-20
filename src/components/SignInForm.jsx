import React, { useState } from "react";
import "./SignInForm.css";

export const SignInForm = ({ checkout }) => {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setFormData({ name: "", phone: "", email: "" });
    checkout(formData);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto checkout-form "
      style={{ maxWidth: "400px" }}
    >
      <h2 className="text-center mb-4">Ingresa tus Datos</h2>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Nombre
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Correo Electrónico
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="btn btn-primary w-100">
        Checkout
      </button>
    </form>
  );
};
