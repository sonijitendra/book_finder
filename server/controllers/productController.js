import { Product } from "../models/Product.js";

export const addProduct = async (req, res) => {
  try {
    const product = await Product.create({ ...req.body, shop: req.user._id });
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getProducts = async (req, res) => {
  const { q } = req.query;
  const keyword = q ? { name: { $regex: q, $options: "i" } } : {};
  try {
    const products = await Product.find(keyword).populate("shop");
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
