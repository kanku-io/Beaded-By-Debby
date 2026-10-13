import { supabase } from "../supabaseClient"

const MobileMenu = ({ open }) => {
  return (
    <div className={`mobile-menu ${open ? "open" : ""}`}>
      <div className="menu-tabs">
        <p>NEW</p>
        <p>BAGS</p>
        <p>ACCESSORIES</p>
      </div>

      <div className="menu-rows">
        <p>Beaded By Debby</p>
        <p>Shop All</p>
        <p>About</p>
        <p>Contact</p>
      </div>

      <div className="images-container">
        <div className="img-cont">
            <img src="https://ddxyfgfmmnutlxpzlkfa.supabase.co/storage/v1/object/public/product-images/Lesedi-1.jpeg" alt="lesedi" />
            <p>Lesedi</p>
        </div>
        <div className="img-cont">
            <img src="https://ddxyfgfmmnutlxpzlkfa.supabase.co/storage/v1/object/public/product-images/Amara-1.jpeg" alt="amara" />
            <p>Amara</p>
        </div>
        <div className="img-cont">
            <img src="https://ddxyfgfmmnutlxpzlkfa.supabase.co/storage/v1/object/public/product-images/Chiamaka-1.jpeg" alt="chiamaka" />
            <p>Chiamaka</p>
        </div>
      </div>
    </div>
  )
}

export default MobileMenu
