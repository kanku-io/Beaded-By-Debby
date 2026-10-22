import { Link } from "react-router-dom";
import { supabase } from "../supabaseClient";

const BUCKET = "product-images";

const getImageUrl = (path) =>
  supabase.storage.from(BUCKET).getPublicUrl(path).data.publicUrl;

const formatPrice = (cents) =>
  new Intl.NumberFormat("en-ZA", {
    style: "currency",
    currency: "ZAR",
  }).format(cents / 100);

const ProductCard = ({ variant }) => {
  const front = variant.image_paths?.find((p) => p.endsWith("-f.png"));
  const price = variant.price_cents;

  if (!front) return null;

  return (
    <Link to={`/shop/${variant.products?.slug}`} className="shop-card">
      <div className="shop-card-image">
        <img src={getImageUrl(front)} alt={variant.products?.name} />
      </div>

      <div className="shop-card-info">
        <p className="shop-card-name">{variant.products?.name}</p>
        {price != null && (
          <p className="shop-card-price">{formatPrice(price)}</p>
        )}
      </div>
    </Link>
  );
};

export default ProductCard;