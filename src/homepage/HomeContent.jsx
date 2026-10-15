import { supabase } from "../supabaseClient"
import { useState, useEffect } from "react"

const BUCKET = "product-images";

const getImageUrl = (path) =>
  supabase.storage.from(BUCKET).getPublicUrl(path).data.publicUrl;

const BagIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="18px"
    width="18px"
    viewBox="0 -960 960 960"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M240-80q-33 0-56.5-23.5T160-160v-480q0-33 23.5-56.5T240-720h80q0-66 47-113t113-47q66 0 113 47t47 113h80q33 0 56.5 23.5T800-640v480q0 33-23.5 56.5T720-80H240Zm0-80h480v-480h-80v80q0 17-11.5 28.5T600-520q-17 0-28.5-11.5T560-560v-80H400v80q0 17-11.5 28.5T360-520q-17 0-28.5-11.5T320-560v-80h-80v480Zm160-560h160q0-33-23.5-56.5T480-800q-33 0-56.5 23.5T400-720ZM240-160v-480 480Z" />
  </svg>
);

const Bags = () => {
  const [bag, setBag] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getBags = async () => {
      setLoading(true);
      setError(null);

      const { data, error: fetchError } = await supabase
        .from("product_variants")
        .select("*, products(name)")
        .in("id", [
        "a7361901-1bd5-4ed3-bbe2-aeb465a5e513",
        "c44b9d82-4ffc-4a48-beda-1045db209dae",
        "7117d33b-d2e0-4e4e-af2f-1f8c10c86cc1",
        "6ba13c0e-0ad9-446a-9f0d-4570e3d90d43",
]);

      if (!fetchError) {
        setBag(data);
      }

      if (fetchError) {
        console.error("Could not fetch data", fetchError.message);
        setBag([]);
        setError(fetchError.message);
      }

      setLoading(false);
    };

    getBags();
  }, []);

  if (loading) return <p className="bag-status">Loading...</p>;
  if (error) return <p className="bag-status">Something went wrong: {error}</p>;

  return (
    <section className="home-content-container">
      <header className="bag-section-header">
        <h2 className="bag-section-title">Our Favourites</h2>
        <span className="bag-section-rule" aria-hidden="true" />
      </header>

      <div className="bag-grid">
        {bag.map((item) => {
          const path = item.image_paths.find((p) => p.includes("-f.png"));
          if (!path) return null;

          const name = item.products?.name || item.size;

          return (
            <article className="bag-card" key={item.id}>
              <div className="bag-card-media">
                <img src={getImageUrl(path)} alt={name} loading="lazy" />
                <button
                  className="bag-card-btn"
                  aria-label={`Add ${name} to bag`}
                  onClick={() => console.log("add to bag", item.id)}
                >
                  <BagIcon />
                </button>
              </div>

              <h3 className="bag-card-name">{name}</h3>
            </article>
          );
        })}
      </div>
    </section>

    
  );
};

export default Bags;