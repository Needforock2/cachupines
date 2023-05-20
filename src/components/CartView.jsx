import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/cartContext";
import "./CartView.css";
import { CartItem } from "./CartItem";
import { Link } from "react-router-dom";
import { Button} from "react-bootstrap";



export const CartView = () => {
  const { cartList, deleteItem, cartTotalPrice, removeList, countItems } =
    useContext(CartContext);


  const eraseItem = (id) => {
    deleteItem(id);
  };
  const conteo = countItems();
  const precioTotal = cartTotalPrice(cartList);
  const envio = precioTotal * 0.1;
  const bruto = precioTotal + envio;

  

  return (
    <>
      {/*  {loading ? (
        <div className="checkout-msg d-flex flex-column">
          <h2>Generando Orden...</h2>
          <Spinner animation="grow" />
        </div>
      ) : !orderId ? ( */}
      <div className="d-flex flex-row  justify-content-evenly cart-view-container">
        <div className="cartContainer col-7 card">
          {cartList.length > 0 ? (
            <>
              <div className="cart-header">
                <h2>Artículos en el carrito: {conteo}</h2>
              </div>
              <div className="d-flex flex-row col-12">
                <div className="col-12 items-list">
                  {cartList.map((articulo) => (
                    <CartItem
                      key={articulo.id}
                      product={articulo}
                      eraseItem={() => eraseItem(articulo.id)}
                    />
                  ))}
                </div>
              </div>
              <div className="d-flex col-12 justify-content-evenly cart-footer">
                <Button className="btn btn-primary  col-3" onClick={removeList}>
                  Vaciar Carrito
                </Button>
                <Link className="btn btn-primary  col-3 " to="/">
                  Seguir comprando
                </Link>
              </div>
            </>
          ) : (
            <>
              <div className="cart-header-no-border ">
                <img
                  className="img-fluid"
                  src={require("./../assets/icons/empty-cart.png")}
                  alt="lskdf"
                />
                <h2>No hay Artículos en el carrito</h2>
                <Link
                  className="btn btn-outline-primary  col-12 mx-auto mt-4"
                  to="/"
                >
                  Volver a la tienda
                </Link>
              </div>
            </>
          )}
        </div>
        <div className="summaryContainer col-4 card">
          <div className="cart-header">
            <h2>Resumen</h2>
          </div>
          <div className="total-container d-flex justify-content-between">
            <h3 className="col-6">Productos:</h3>
            <h3 className="col-6">${precioTotal.toFixed(1)}</h3>
          </div>
          <div className="total-container d-flex justify-content-between">
            <h3 className="col-6">Envio:</h3>
            <h3 className="col-6">${precioTotal.toFixed(1) * 0.1}</h3>
          </div>
          <div className="total-container strong d-flex justify-content-between">
            <h3 className="col-6">Total IVA incluido:</h3>
            <h3 className="col-6">${bruto.toFixed(1)}</h3>
          </div>
          {conteo > 0 ? (
            <Link
              className="btn btn-outline-primary col-12 mt-1"
              to={"/checkout"}
            >
              Realizar Compra
            </Link>
          ) : null}
        </div>
      </div>
      {/*    ) : (
        <div className="checkout-msg d-flex flex-column">
          <h2>Muchas gracias por tu compra</h2>
          <h2>
            Orden finalizada con el Id: <strong> {orderId}</strong>
          </h2>
        </div>
      )} */}
    </>
  );
};
