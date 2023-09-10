import express from "express";
import { deleteCar, getAllCars, getSingleCar, newCar, updateCar } from "../controller/Car.js";

const router = express.Router();

router.get("/cars", getAllCars);
router.get("/cars/:id", getSingleCar);
router.post("/cars", newCar);
router.put("/cars/:id", updateCar);
router.delete("/cars/:id", deleteCar);

const CarRoute = router;

export default CarRoute;
