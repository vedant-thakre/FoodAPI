import express from "express";
import {
  newFoodItem,
  getAllItems,
  addMultipleFoodItems,
  updateItem,
  deleteItem,
  getItemById,
} from "../Controllers/FoodItemControllers.js";

const router = express.Router();

router.post("/new", newFoodItem);
router.post("/addmany", addMultipleFoodItems);
router.get("/all", getAllItems);

router.route("/:id").
get(getItemById).
put(updateItem).
delete(deleteItem);

export default router;
