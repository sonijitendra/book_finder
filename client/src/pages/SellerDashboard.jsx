import { useState } from "react";
import axios from "axios";

function SellerDashboard() {
  const [form, setForm] = useState({
    name: "",
    price: 0,
    stock: 0,
    expiryDate: ""
  });
  const [success, setSuccess] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      await axios.post(
        `${import.meta.env.VITE_API_URL}/api/products`,
        form,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setSuccess("Product added!");
      setForm({ name: "", price: 0, stock: 0, expiryDate: "" });
    } catch (err) {
      alert(err.response?.data?.message || err.message);
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Add Product</h2>
      {success && <p className="text-green-600">{success}</p>}
      <form onSubmit={submit} className="space-y-3">
        <input
          className="w-full border p-2 rounded"
          placeholder="Name"
          name="name"
          value={form.name}
          onChange={handleChange}
        />
        <input
          type="number"
          className="w-full border p-2 rounded"
          placeholder="Price"
          name="price"
          value={form.price}
          onChange={handleChange}
        />
        <input
          type="number"
          className="w-full border p-2 rounded"
          placeholder="Stock"
          name="stock"
          value={form.stock}
          onChange={handleChange}
        />
        <input
          type="date"
          className="w-full border p-2 rounded"
          placeholder="Expiry Date"
          name="expiryDate"
          value={form.expiryDate}
          onChange={handleChange}
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Add
        </button>
      </form>
    </div>
  );
}

export default SellerDashboard;
