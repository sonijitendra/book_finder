import { Shop } from "../models/Shop.js";

export const createShop = async (req, res) => {
  const { name, address, geo } = req.body;
  try {
    const shop = await Shop.create({ owner: req.user._id, name, address, geo });
    res.json(shop);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getShops = async (req, res) => {
  try {
    const shops = await Shop.find().populate("owner", "name email");
    res.json(shops);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
