import mongoose from "mongoose";

const ItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: { 
        type: String, 
        required: true 
    },
    restaurants: {
        type: Array,
    },
    price: {
        type: Number,
        required: true 
    },
    imageurl: {
        type: String, 
        required: true 
    },
    createdAt: { 
        type: Date, 
        default: Date.now 
    },
});

export const FoodItem = mongoose.model("FoodItem", ItemSchema);
