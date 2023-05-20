import React from "react";
import { CartWidget } from "../CartWidget/CartWidget";
import { Button } from "../button/Button";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import CurrentUser from "../CurrentUser/CurrentUser";

export const NavBar = () => {
  return (
    <>
      <header className="App-header d-flex col-12 justify-content-between">
        <div className="">
          <NavLink className={"brand"} to={`/`}>
            Cachupines.cl
          </NavLink>
        </div>
        <div className="cart-user">
          <Button className="gradient-button" text="Ropa" />
          <Button className="gradient-button" text="Accesorios" />
          <Button className="gradient-button" text="Menaje" />
          <CartWidget />
          <CurrentUser />
        </div>
      </header>
    </>
  );
};
