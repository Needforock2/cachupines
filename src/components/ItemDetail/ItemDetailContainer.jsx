import React, { useEffect, useState } from "react";
import { ItemDetail } from "./ItemDetail";
import { Link, useParams } from "react-router-dom";
import "./../ItemList/itemListContainer.css";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../services/db";

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});

  const params = useParams();
  const { productId } = params;

  useEffect(() => {
    const itemDB = doc(db, "Items", productId);
    getDoc(itemDB).then((product) => {
      if (product.exists()) {
        setProduct({ id: product.id, ...product.data() });
      } else {
        setProduct({});
      }
    });
  }, [productId]);

  return (
    <>
      {product.id ? (
        <div className="itemDetailContainer col-7 d-flex flex-column">
          <ItemDetail {...product} />
        </div>
      ) : (
        <div className="checkout-msg d-flex flex-column">
          <h2>El producto no existe</h2>
          <Link className="btn btn-outline-primary col-3 mt-1" to={"/"}>
            Volver a la Tienda
          </Link>
        </div>
      )}
    </>
  );
};
