import { useCart } from "../Context/CartContext";
import { supabase } from "../supabaseClient";

const BUCKET = "product-images";

const getImageUrl = (path) =>
  supabase.storage.from(BUCKET).getPublicUrl(path).data.publicUrl;

const formatPrice = (cents) =>
  new Intl.NumberFormat("en-ZA", {
    style: "currency",
    currency: "ZAR",
  }).format(cents / 100);

const CartItems = () => {
  const { items, updateQty, removeItem, subtotal } = useCart();

  if (items.length === 0) {
    return <p className="cart-empty">your cart is empty</p>;
  }

  return (
    <div className="cart-items">
      {items.map((item) => (
        <div className="cart-item" key={item.variantId}>
          {item.image && (
            <img
              className="cart-item-image"
              src={getImageUrl(item.image)}
              alt={item.name}
            />
          )}

          <div className="cart-item-info">
            <p className="cart-item-name">{item.name}</p>
            {item.label && <p className="cart-item-label">{item.label}</p>}
            <p className="cart-item-price">{formatPrice(item.price_cents)}</p>

            <div className="cart-qty">
              <button
                aria-label="decrease quantity"
                onClick={() => updateQty(item.variantId, item.qty - 1)}
              >
                −
              </button>
              <span>{item.qty}</span>
              <button
                aria-label="increase quantity"
                onClick={() => updateQty(item.variantId, item.qty + 1)}
              >
                +
              </button>
            </div>
          </div>

          <button
            className="cart-remove"
            onClick={() => removeItem(item.variantId)}
          >
            remove
          </button>
        </div>
      ))}

      <div className="cart-subtotal">
        <span>Subtotal</span>
        <span>{formatPrice(subtotal)}</span>
      </div>

      <button className="cart-checkout">Checkout</button>
    </div>
  );
};

export default CartItems;