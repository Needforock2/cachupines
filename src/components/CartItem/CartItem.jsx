import { useContext, useState } from "react";
import "./CartItem.css";
import { Contador } from "../Contador/Contador";
import { CartContext } from "../../context/cartContext";

export const CartItem = ({
  product: { id, title, pictureUrl, price, qty, stock },
  eraseItem,
}) => {
  const [contador, setContador] = useState(qty);

  const { updateItemQty } = useContext(CartContext);

  const aumentaContador = () => {
    if (contador < stock) {
      const n = contador + 1;
      setContador(n);
      updateItemQty(id, n);
    }
  };
  const disminuyeContador = () => {
    if (contador > 1) {
      const n = contador - 1;
      setContador(n);
      updateItemQty(id, n);
    }
  };

  return (
    <div className="card item-container d-flex flex-row p-4 mt-4 col-12 justify-content-evenly align-items-center">
      <img className="imgCartItem" src={pictureUrl} alt="articulo"></img>
      <h3 className="p-2 col-4"> {title}</h3>
      <h4 className="p-2 col-3">Precio ${price}</h4>
      <Contador
        className="col-4"
        aumentaContador={aumentaContador}
        disminuyeContador={disminuyeContador}
        contador={contador}
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        onClick={eraseItem}
        width="30"
        height="30"
        fill="currentColor"
        className=" dlt-btn col-1 bi bi-trash3"
        viewBox="0 0 16 16"
      >
        <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
      </svg>
    </div>
  );
};
