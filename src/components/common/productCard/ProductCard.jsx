import "./productCard.css";

export const ProductCard = () => {
  return (
    <>
      <h1>Mapache</h1>
      <img src="../src/logo.png" className="imagenesProductos"></img>
      <p class="price">$12.99</p>
      <p>Descripcion del producto</p>
      <p>
        <button>Add to Cart</button>
      </p>
    </>
  );
};
