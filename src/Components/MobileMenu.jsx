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
        <div>
          <p>Shop All</p>
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/></svg>
        </div>

        <div>
            <p>About</p>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/></svg>
        </div>

        <div>
          <p>Contact</p>
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/></svg>
        </div>
        
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

      <div className="hamburger-btm">
        <div className="hb-acc">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M367-527q-47-47-47-113t47-113q47-47 113-47t113 47q47 47 47 113t-47 113q-47 47-113 47t-113-47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm296.5-343.5Q560-607 560-640t-23.5-56.5Q513-720 480-720t-56.5 23.5Q400-673 400-640t23.5 56.5Q447-560 480-560t56.5-23.5ZM480-640Zm0 400Z"/></svg>
          <p>Account</p>
          </div>
          <svg className="svg2" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/></svg>
        </div>
        <div className="hb-cart">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M240-80q-33 0-56.5-23.5T160-160v-480q0-33 23.5-56.5T240-720h80q0-66 47-113t113-47q66 0 113 47t47 113h80q33 0 56.5 23.5T800-640v480q0 33-23.5 56.5T720-80H240Zm0-80h480v-480h-80v80q0 17-11.5 28.5T600-520q-17 0-28.5-11.5T560-560v-80H400v80q0 17-11.5 28.5T360-520q-17 0-28.5-11.5T320-560v-80h-80v480Zm160-560h160q0-33-23.5-56.5T480-800q-33 0-56.5 23.5T400-720ZM240-160v-480 480Z"/></svg>
          <p>Cart (0)</p>
          </div>
          <svg className="svg2" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/></svg>
        </div>
      </div>

      <hr/>

      <div className="cta">
        <button>Join the list</button>
        <input type="email" placeholder="example@email.com" className="email-input" />
      </div>
      
      <div className="hamburger-footer">
        <div className="hb-contact">
          <p>Instagram</p>
          <p>Whatsapp</p>
        </div>
        <hr/>
        <p>© 2026 Beaded By Debby</p>
      </div>
    </div>
  );
};

export default MobileMenu;