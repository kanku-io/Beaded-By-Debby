const ProductCardSkeleton = () => (
  <div className="shop-card" aria-hidden="true">
    <div className="shop-card-image skeleton" />
    <div className="shop-card-info">
      <span className="skeleton skeleton-name" />
      <span className="skeleton skeleton-price" />
    </div>
  </div>
);

export default ProductCardSkeleton;