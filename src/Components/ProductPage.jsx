import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import { supabase } from "../supabaseClient";
import { useCart } from "../Context/CartContext";



const BUCKET = "product-images";

const getImageUrl = (path) =>
  supabase.storage.from(BUCKET).getPublicUrl(path).data.publicUrl;

const formatPrice = (cents) =>
  new Intl.NumberFormat("en-ZA", {
    style: "currency",
    currency: "ZAR",
  }).format(cents / 100);

const ProductPage = () => {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [variantId, setVariantId] = useState(null);
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      setError(null);

      const { data, error } = await supabase
        .from("products")
        .select("*, product_variants(*)")
        .eq("slug", slug)
        .maybeSingle();

      if (error) {
        console.error("Could not fetch product", error.message);
        setError(error.message);
        setProduct(null);
      } else if (data) {
        const variants = (data.product_variants ?? [])
          .filter((v) => v.is_active)
          .sort((a, b) => a.sort_order - b.sort_order);

        setProduct({ ...data, product_variants: variants });
        setVariantId(variants[0]?.id ?? null);
        setImageIndex(0);
      } else {
        setProduct(null);
      }

      setLoading(false);
    };

    getProduct();
  }, [slug]);

  const variants = product?.product_variants ?? [];
  const variant = variants.find((v) => v.id === variantId);
  const images = variant?.image_paths ?? [];

  const selectVariant = (id) => {
    setVariantId(id);
    setImageIndex(0);
  };




const { addItem } = useCart();
const [added, setAdded] = useState(false);

const handleAdd = () => {
  if (!variant) return;

  addItem({
    variantId: variant.id,
    slug: product.slug,
    name: product.name,
    label: [variant.label, variant.size].filter(Boolean).join(" · "),
    price_cents: variant.price_cents,
    image:
      variant.image_paths?.find((p) => p.endsWith("-f.png")) ??
      variant.image_paths?.[0],
  });

  setAdded(true);
  setTimeout(() => setAdded(false), 1500);
};

  return (
    <div className="shop-page">
      <NavBar />

      <Link to="/shop" className="product-back">
        Back to shop
      </Link>

      {loading && (
        <div className="product-layout">
          <div className="product-main-image skeleton" />
          <div className="product-details">
            <span className="skeleton skeleton-name" />
            <span className="skeleton skeleton-price" />
          </div>
        </div>
      )}

      {!loading && (error || !product) && (
        <p className="shop-status">
          {error ? "something went wrong" : "product not found"}
        </p>
      )}

      {!loading && product && (
        <div className="product-layout">
          <div className="product-gallery">
            <div className="product-main-image">
              {images[imageIndex] && (
                <img
                  src={getImageUrl(images[imageIndex])}
                  alt={product.name}
                />
              )}
            </div>

            {images.length > 1 && (
              <div className="product-thumbs">
                {images.map((path, i) => (
                  <button
                    key={path}
                    className={`product-thumb ${i === imageIndex ? "active" : ""}`}
                    onClick={() => setImageIndex(i)}
                  >
                    <img src={getImageUrl(path)} alt="" />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="product-details">
            <h1 className="product-name">{product.name}</h1>
            <span className="shop-rule" />

            {variant?.price_cents != null && (
              <p className="product-price">{formatPrice(variant.price_cents)}</p>
            )}

            {product.description && (
              <p className="product-description">{product.description}</p>
            )}

            {variants.length > 1 && (
              <div className="product-variants">
                {variants.map((v) => (
                  <button
                    key={v.id}
                    className={`product-variant ${v.id === variantId ? "active" : ""}`}
                    onClick={() => selectVariant(v.id)}
                  >
                    {[v.label, v.size].filter(Boolean).join(" · ")}
                  </button>
                ))}
              </div>
            )}

            <button className="product-add" onClick={handleAdd} disabled={!variant}>
            {added ? "Added" : "Add to cart"}
            </button>          
            </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default ProductPage;