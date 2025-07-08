import { useEffect, useState } from "react";
import axios from "axios";

function HomePage() {
  const [query, setQuery] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/products`,
        { params: { q: query } }
      );
      setProducts(data);
    };
    fetchProducts();
  }, [query]);

  return (
    <div className="p-4">
      <div className="max-w-lg mx-auto">
        <input
          className="w-full border rounded p-2"
          placeholder="Search for a product..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => (
          <div key={p._id} className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold">{p.name}</h3>
            <p>Price: ₹{p.price}</p>
            <p>Stock: {p.stock}</p>
            {p.expiryDate && (
              <p className="text-sm text-gray-500">
                Expires: {new Date(p.expiryDate).toLocaleDateString()}
              </p>
            )}
            <p className="text-sm text-gray-500">
              Shop: {p.shop?.name || "Unknown"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
