import { useEffect, useState } from "react";
import { products } from "../../../products";
import { useParams } from "react-router";

const ItemDetail = () => {
  const [item, setItem] = useState({});

  const { id } = useParams(); // { propiedad: valor }
  console.log(id);

  useEffect(() => {
    let product = products.find((elemento) => elemento.id === id);
    setItem(product);
  }, [id]);

  return (
    <div className="container-card">
      <div className="card">
        <img
          src={item.imageUrl}
          className="imagenesProductos"
          alt={item.title}
        />
        <p className="price">${item.price}</p>
        <p>{item.title}</p>
        <p>{item.description}</p>
        <p>Cantidad disponible: {item.stock}</p>
      </div>
      {/* Repite la estructura para cada producto */}
    </div>
  );
};

export default ItemDetail;
