import { useEffect, useState } from "react";

import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getUnProducto } from "../asyncmock";

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState(null);

  const { idItem } = useParams();

  useEffect(() => {
    getUnProducto(idItem)
      .then((respuesta) => {
        setProducto(respuesta);
      })
      .catch((error) => console.error("Error obteniendo el producto: ", error));
  }, [idItem]);

  return (
    <div>
      <ItemDetail {...producto} />
    </div>
  );
};

export default ItemDetailContainer;
