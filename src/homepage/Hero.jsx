import NavBar from "../Components/navbar";
import { supbase } from "../supabaseClient";

 
 const Hero = () => {
   return (
     <div className="hero-container">
       <NavBar/>
       <img src="https://ddxyfgfmmnutlxpzlkfa.supabase.co/storage/v1/object/public/product-images/Vanessa-1.jpeg" alt="Beaded By Debby" className="hero-image"/>

        <div className="hero-text">
            <h2>vanessa</h2>
            <p>Hand-beaded from glossy white pearls and sharply faceted black beads, 
                Vanessa is a study in contrast. Her structured silhouette is framed in black, 
                with a softly looped top handle that adds a sculptural finish. 
                Each bead is threaded by hand, so no two bags are exactly alike. 
                Timeless in tone and made to be noticed.</p>
        </div>

        <div className="hero-btns">
            <button>SHOP NOW</button>
            <button>DETAILS</button>
        </div>

     </div>
   )
 }
 
 export default Hero
 