import CartItems from "./CartItems";

const CartScreen = ({ open }) => {
  return (
    <div className={`cart-menu ${open ? "open" : ""}`}>
      <CartItems />
    </div>
  );
};

export default CartScreen;