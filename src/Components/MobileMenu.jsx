const MobileMenu = ({ open }) => {
  return (
    <div className={`mobile-menu ${open ? "open" : ""}`}>
      <div className="menu-tabs">
        <p>NEW</p>
        <p>BAGS</p>
        <p>ACCESSORIES</p>
      </div>

      <hr />

      <div className="menu-rows">
        <p>Shop All</p>
        <p>About</p>
        <p>Contact</p>
      </div>

      <hr />

      <div className="images-container">
        <div className="img-cont">
          <img
            src="https://ddxyfgfmmnutlxpzlkfa.supabase.co/storage/v1/object/public/product-images/Lesedi-1.jpeg"
            alt="Lesedi bag"
            loading="lazy"
          />
          <p>Lesedi</p>
        </div>
        <div className="img-cont">
          <img
            src="https://ddxyfgfmmnutlxpzlkfa.supabase.co/storage/v1/object/public/product-images/Amara-1.jpeg"
            alt="Amara bag"
            loading="lazy"
          />
          <p>Amara</p>
        </div>
        <div className="img-cont">
          <img
            src="https://ddxyfgfmmnutlxpzlkfa.supabase.co/storage/v1/object/public/product-images/Chiamaka-1.jpeg"
            alt="Chiamaka bag"
            loading="lazy"
          />
          <p>Chiamaka</p>
        </div>
      </div>

      <hr/>
    </div>
  );
};

export default MobileMenu;