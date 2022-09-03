import express from "express"
import { createHotel, deleteHotel, getSpecificHotel, updateHotel, getHotels, countByCity, countByType, getHotelRooms } from "../controller/hotel.js";
import Hotel from "../models/Hotel.js";
import { verifyAdmin } from "../utils/verifyToken.js";
const router = express.Router();

//create
router.post("/add", verifyAdmin, createHotel);
//update
router.put("/update/:id",verifyAdmin, updateHotel);

//delete
router.delete("/delete/:id",verifyAdmin, deleteHotel);

//Get by id
router.get("/find/:id",getSpecificHotel);

//Get all
router.get("/all", getHotels);
router.get("/countByCity", countByCity);
router.get("/countByType", countByType);
router.get("/room/:id", getHotelRooms);
export default router