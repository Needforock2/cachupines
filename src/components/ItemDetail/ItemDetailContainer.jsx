import React, { useEffect, useState } from "react";
import { ItemDetail } from "./ItemDetail";
import { Link, useParams } from "react-router-dom";
import "./../ItemList/itemListContainer.css";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../services/db";
import { Spinner } from "react-bootstrap";

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});

  const params = useParams();
  const { productId } = params;
const [loading, setLoading] = useState(true)
  useEffect(() => {
  
    const itemDB = doc(db, "Items", productId);
    getDoc(itemDB).then((product) => {
      if (product.exists()) {
        setProduct({ id: product.id, ...product.data() });
        setLoading(false)
      } else {
        setProduct({});
        setLoading(false)
      }
    });
  }, [productId]);

  return (
    <>   
        <div className="itemDetailContainer col-7 d-flex flex-column">
          {product.id && !loading ? (
            <ItemDetail {...product} />
          ) : !product.id && loading ? (
            <Spinner animation="grow" />
          ) : (
            <div className="checkout-msg d-flex flex-column">
              <h2>El producto no existe</h2>
              <Link className="btn btn-outline-primary col-12" to={"/"}>
                Volver a la Tienda
              </Link>
            </div>
          )}
        </div>      
    </>
  );
};
