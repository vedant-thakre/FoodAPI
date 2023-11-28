import { FoodItem } from "../Models/FoodItemModal.js";

// Adding a new food Item
export const newFoodItem = async (req, res, next) => {
  const { name, description, restaurants, price, imageurl } = req.body;
  await FoodItem.create({
    name,
    description,
    restaurants,
    price,
    imageurl,
  });

  res.status(201).json({
    success: true,
    message: "Food Item added successfully",
  });
};

// Adding multiple food item 
export const addMultipleFoodItems = async (req, res, next) => {
  try {
    const foodItemsData = req.body;
    const addedFoodItems = await FoodItem.insertMany(foodItemsData);

    res.status(201).json({
      success: true,
      message: "Food Items added successfully",
      data: addedFoodItems,
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

// Fetching all item
export const getAllItems = async (req, res, next) => {
  try {
    const items = await FoodItem.find({});

    res.status(200).json({
      success: true,
      items,
    });
  } catch (error) {
    res.status(err.statusCode).json({
      success: false,
      message: err.message,
    });
  }
};

// Updating a food Item
export const updateItem = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, description, restaurants, price, imageurl } = req.body;

    const updatedFoodItem = await FoodItem.findByIdAndUpdate(
      id,
      { name, description, restaurants, price, imageurl },
      { new: true }
    );

    if (!updatedFoodItem) {
      return res.status(404).json({
        success: false,
        message: "Food Item not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Food Item updated successfully",
      data: updatedFoodItem,
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

// Fetching a food item by ID
export const getItemById = async (req, res, next) => {
  try {
    const itemId = req.params.id;

    const FindFoodItem = await FoodItem.findById(itemId);

    if (!FindFoodItem) {
      return res.status(404).json({
        success: false,
        message: "Food Item not found",
      });
    }

    res.json({
      success: true,
      message: "Food Item deleted successfully",
      data: FindFoodItem,
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

// Deleting a food item
export const deleteItem = async (req, res, next) => {
  try {
    const itemId = req.params.id;

    const deletedFoodItem = await FoodItem.findByIdAndDelete(itemId);

    if (!deletedFoodItem) {
      return res.status(404).json({
        success: false,
        message: "Food Item not found",
      });
    }

    res.json({
      success: true,
      message: "Food Item deleted successfully",
      data: deletedFoodItem,
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};
