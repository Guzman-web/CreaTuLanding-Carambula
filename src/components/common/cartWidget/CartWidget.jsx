import "./CartWidget.css";

export const CartWidget = () => {
  return (
    <>
      <li class="cart">
        <a href="#carrito">
          <span class="cart-icon">🛒</span>
          <span class="cart-count">0</span>
        </a>
      </li>
    </>
  );
};
