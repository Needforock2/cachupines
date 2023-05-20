import React, { useState } from "react";
import "./SignInForm.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";




export const SignInForm = ({ checkout }) => {
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
      if (formData.name && formData.email) {
          setFormData({ name: "", email: "" });
          checkout(formData);        
      } else {
      toast.error("Debes ingresar tus datos", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
        
    }
  };
    return (
      <>
        <ToastContainer
          position="bottom-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <form
          onSubmit={handleSubmit}
          className="mx-auto checkout-form "
          style={{ maxWidth: "400px" }}
        >
          <h2 className="text-center mb-4">
            Inicia sesión ó <br /> Ingresa tus Datos
          </h2>
          <div className="mb-3">
            <label htmlFor="name" className="form-label" required>
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
            <label htmlFor="email" className="form-label" required>
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
      </>
    );
};
