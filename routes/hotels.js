import express from "express"
import { createHotel, deleteHotel, getSpecificHotel, updateHotel, getHotels } from "../controller/hotel.js";
import Hotel from "../models/Hotel.js";
const router = express.Router();

//create
router.post("/add", createHotel);
//update
router.put("/update/:id", updateHotel);

//delete
router.delete("/delete/:id",deleteHotel);

//Get by id
router.get("/find/:id", getSpecificHotel);

//Get all
router.get("/all", getHotels);
export default router