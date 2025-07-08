import mongoose from "mongoose";

const shopSchema = new mongoose.Schema(
  {
    owner: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    name: { type: String, required: true },
    address: { type: String, required: true },
    geo: {
      lat: Number,
      lng: Number
    },
    rating: { type: Number, default: 4.0 }
  },
  { timestamps: true }
);

export const Shop = mongoose.model("Shop", shopSchema);
