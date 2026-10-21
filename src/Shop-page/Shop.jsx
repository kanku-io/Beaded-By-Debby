import NavBar from "../Components/NavBar"
import Footer from "../Components/Footer"
import { supabase } from "../supabaseClient"
import { useEffect, useState } from "react";

const BUCKET = "product-images";

const getImageUrl = (path) =>
  supabase.storage.from(BUCKET).getPublicUrl(path).data.publicUrl;


const Products = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getData = async () => {
            setLoading(true);
            setError(null)

            const {data, error} = await supabase
            .from('product_variants')
            .select('*, products(*)')

            if(!error) {
                setData(data);
            }

            if(error) {
                console.error('Could not fetch data', error.message)
                setData([])
                setError(error.message)
            }

            setLoading(false)
        }

        getData();
    }, [])




  return (
    <div>
    <NavBar/>
      <p>shop</p>
      <hr />
      <div className="shop-action-btns">
        <ul>
            <li>all</li>
            <li>bags</li>
            <li>accessories</li>
        </ul>
      </div>

      <div className="bag-grid">
        {data.map((item) => (
            <div key={item.id}>
                {item.image_paths.map((p) => (
                <img key={p} src={getImageUrl(p)} alt={item.products.name} />
                ))}
            </div>
        ))}
      </div>


    </div>
  )
}

export default Products
