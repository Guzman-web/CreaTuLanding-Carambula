import "./productCard.css";
import { Link } from "react-router";
export const ProductCard = ({ item }) => {
  return (
    <>
      <div className="container-card">
        <div className="card">
          <img
            src={item.imageUrl}
            className="imagenesProductos"
            alt={item.title}
          />
          <p className="price">${item.price}</p>
          <p>{item.title}</p>
          <p>
            <Link to={`/itemDetail/${item.id}`}>Ver detalle</Link>
          </p>
        </div>
        {/* Repite la estructura para cada producto */}
      </div>
    </>
  );
};
