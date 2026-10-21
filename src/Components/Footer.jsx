const Footer = () => {
  return (
    <div className="footer-container">
      <div className="top-footer">
        <h3>Beaded By Debby</h3>
        <p>Beaded with love</p>
      </div>

      <div className="newsletter-signup">
        <h5>Join the list</h5>
        <p>New designs and restocks, straight to your inbox</p>
        <input type="email" placeholder="example@email.com"/>
        <button>Subscribe</button>
      </div>

      <hr />

      <div className="mid-footer">

            <div className="shop-column">
                <p className="shop-footer-text">Shop</p>
                <div className="shop-list">
                    <ul>
                        <li>New arrivals</li>
                        <li>Bags</li>
                        <li>Accessories</li>
                        <li>Custom order</li>
                    </ul>
                </div>
            </div>

            <div className="help-list">
                <p>Help</p>
                <div className="help-dropdown">
                    <ul>
                        <li>Shipping & Deliveries</li>
                        <li>Returns</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
            </div>
            
            <div className="social-links">
                <p>Instagram</p>
                <p>Tik Tok</p>
            </div>

            <hr />

            <div className="lower-footer">
                <div className="legal">
                    <p>Privacy policy</p>
                    <p>Terms of service</p>
                </div>

                <p>© 2026 Beaded By Debby</p>
            </div>
        
      </div>
    </div>
  )
}

export default Footer