import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    shop: { type: mongoose.Schema.Types.ObjectId, ref: "Shop", required: true },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    stock: { type: Number, default: 0 },
    expiryDate: { type: Date },
    category: { type: String }
  },
  { timestamps: true }
);

export const Product = mongoose.model("Product", productSchema);
