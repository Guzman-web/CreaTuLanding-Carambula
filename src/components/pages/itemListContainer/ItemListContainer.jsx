import "./itemListContainer.css";
import { ProductCard } from "../../common/productCard/ProductCard";
export const ItemListContainer = ({ mensaje }) => {
  return (
    <>
      <h2>{mensaje}</h2>
      <div className="card">
        <ProductCard />
      </div>
    </>
  );
};
