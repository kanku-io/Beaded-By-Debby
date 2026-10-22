import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import ProductCard from "../Components/ProductCard";
import { supabase } from "../supabaseClient";
import { useEffect, useState } from "react";

const FEATURED_IDS = [
  "3cb49223-e1ac-4146-840f-54bbc2e56b38",
  "6ba13c0e-0ad9-446a-9f0d-4570e3d90d43",
  "a7361901-1bd5-4ed3-bbe2-aeb465a5e513",
  "b2fadf99-3542-41a3-9bba-950193ac2cc4",
  "c44b9d82-4ffc-4a48-beda-1045db209dae",
  "f58f19a9-9f33-4114-8932-cf2f62dfdc38",
];

const TABS = ["all", "bags", "accessories"];

const Products = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState("all");

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      setError(null);

      const { data, error } = await supabase
        .from("product_variants")
        .select("*, products(*)")
        .in("id", FEATURED_IDS);

      if (error) {
        console.error("Could not fetch data", error.message);
        setData([]);
        setError(error.message);
      } else {
        setData(data);
      }

      setLoading(false);
    };

    getData();
  }, []);

  const featured = FEATURED_IDS
    .map((id) => data.find((item) => item.id === id))
    .filter(Boolean);

  return (
    <div className="shop-page">
      <NavBar />

      <header className="shop-header">
        <h1 className="shop-title">Shop</h1>
        <span className="shop-rule" />
      </header>

      <nav className="shop-tabs">
        {TABS.map((tab) => (
          <button
            key={tab}
            className={`shop-tab ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </nav>

      <hr className="shop-divider" />

      {loading && <p className="shop-status">loading...</p>}
      {error && <p className="shop-status">something went wrong</p>}

      <div className="shop-grid">
        {featured.map((item) => (
          <ProductCard key={item.id} variant={item} />
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Products;