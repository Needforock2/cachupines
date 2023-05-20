import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/cartContext";
import { UserContext } from "../context/userContext";
import { db } from "../services/db";
import { collection, addDoc } from "firebase/firestore";
import { Link } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import { SignInForm } from "./SignInForm";


export const Checkout = () => {
  const { cartList, removeList, cartTotalPrice } = useContext(CartContext);
  const { currentUser } = useContext(UserContext);
  const [orderId, setOrderId] = useState(null);
  const [loading, setLoading] = useState(false);
    const cartTotal = cartTotalPrice(cartList);
    const ordersCollection = collection(db, "Orders");
  useEffect(() => {
    if (orderId) {
      setLoading(false);
    }
  }, [orderId]);

  const finishOrder = (id) => {
    setOrderId(id);
    removeList();
  };

  const handleOrder = () => {
    
    setLoading(true);
    const newOrderObj = {
      items: cartList,
      userName: currentUser.displayName,
      userEmail: currentUser.email,
      date: new Date(),
      orderTotal: cartTotal,
    };

    addDoc(ordersCollection, newOrderObj)
      .then(({ id }) => finishOrder(id))
      .catch((error) => console.error(error));
    };
    const checkout = (formData) => {
         setLoading(true);
    const newOrderObj = {
      items: cartList,
      userName: formData.name,
      userEmail: formData.email,
      date: new Date(),
      orderTotal: cartTotal,
    };

    addDoc(ordersCollection, newOrderObj)
      .then(({ id }) => finishOrder(id))
      .catch((error) => console.error(error));
    };
    
  return (
    <>
      {loading ? (
        <div className="checkout-msg d-flex flex-column">
          <h2>Generando Orden...</h2>
          <Spinner animation="grow" />
        </div>
      ) : !orderId ? (
        currentUser ? (
          <div className="checkout-msg d-flex flex-column">
            <h2>
              Realizando compra como: {currentUser.displayName}
            </h2>
            <h2>
              Correo: {currentUser.email}
            </h2>
            <Link
              className="btn btn-primary col-3 mt-1"
              onClick={handleOrder}
              to={"/checkout"}
            >
              Checkout
            </Link>
          </div>
        ) : (
          <SignInForm checkout={(formData)=>checkout(formData)} />
        )
      ) : (
        <div className="checkout-msg d-flex flex-column">
          <h2>Muchas gracias por tu compra</h2>
          <h2>
            Orden finalizada con el Id: <strong> {orderId}</strong>
          </h2>
          <Link
            className="btn btn-outline-primary col-3 mt-1"
          
            to={"/"}
          >
            Volver a la Tienda
          </Link>
        </div>
      )}
    </>
  );
};
