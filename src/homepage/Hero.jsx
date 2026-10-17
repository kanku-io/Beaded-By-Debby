import NavBar from "../Components/NavBar";

const IMG = "https://ddxyfgfmmnutlxpzlkfa.supabase.co/storage/v1/object/public/product-images";

const Hero = () => {
  return (
    <div className="hero-container">
      <NavBar/>

      <div className="hero-images">
        <img className="hero-extra" src={`${IMG}/bag-model.jpeg`} alt="Beaded By Debby bag" />
        <img className="hero-image" src={`${IMG}/Vanessa-1.jpeg`} alt="Beaded By Debby" />
        <img className="hero-extra" src={`${IMG}/Lesedi-1.jpeg`} alt="Beaded By Debby bag" />
      </div>

      <div className="hero-text mobile-only">
        <h2>vanessa</h2>
        <p>
          Hand-beaded from glossy white pearls and sharply faceted black beads,
          Vanessa is a study in contrast. Her structured silhouette is framed in black,
          with a softly looped top handle that adds a sculptural finish.
          Each bead is threaded by hand, so no two bags are exactly alike.
          Timeless in tone and made to be noticed.
        </p>
      </div>

      <div className="hero-btns mobile-only">
        <button>SHOP NOW</button>
        <button>DETAILS</button>
      </div>

      <div className="hero-desktop">
        <h1>Beaded By Debby</h1>
        <button>Shop now</button>
      </div>
    </div>
  )
}

export default Hero