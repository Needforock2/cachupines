import React, { useEffect, useState } from "react";
import { ItemList } from "./ItemList";
import "./itemListContainer.css";
import { Link, useParams } from "react-router-dom";
import { getDocs, collection, query, where } from "@firebase/firestore";
import { Spinner } from "react-bootstrap";
import { db } from "../../services/db";

export const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();
  const [category, setCategory] = useState(false);

  useEffect(() => {
    setCategory(true);
    function allProducts() {
      const productsDB = collection(db, "Items");
      getDocs(productsDB).then((products) => {
        setProducts(
          products.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        );
      });
    }
    function categoryProducts() {
      const q = query(
        collection(db, "Items"),
        where("category", "==", categoryId)
      );
      
      getDocs(q).then((products) => {
        if (products.docs.length) {
          
          setProducts(
            products.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
          );
          
        } else {
          setCategory(false);
        }
      });
    }

    categoryId ? categoryProducts() : allProducts();
  }, [categoryId]);

  return (
    <div className="itemListContainer col-11 card">
      <h2 className="mb-4">
        {" "}
        {greeting ? greeting : category ? categoryId.toUpperCase() : null}
      </h2>
      <>
        {products.length > 0 ? (
          <ItemList productos={products} />
        ) : category ? (
          <Spinner animation="grow" />
        ) : (
          <div className="nocat-msg d-flex flex-column">
            <h2>La categoría no existe</h2>
            <Link className="btn btn-outline-primary col-12" to={"/"}>
              Volver a la Tienda
            </Link>
          </div>
        )}
      </>
    </div>
  );
};
