import React, { useContext } from "react";
import "./cartWidget.css";
import "./../button/button.css";
import { CartContext } from "../../context/cartContext";
import { NavLink } from "react-router-dom";

export const CartWidget = () => {
  const { countItems } = useContext(CartContext);
  const cantidad = countItems();

  return (
    <NavLink to={"/cart"} className="btn btn-light bckg-color-primary">
      <i className="bi bi-cart4"></i>
      {cantidad ? (
        <span className="badge badge-warning" id="lblCartCount">
          {" "}
          {cantidad}{" "}
        </span>
      ) : null}
    </NavLink>
  );
};
