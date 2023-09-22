import express from "express";
import { deleteCar, getAllCars, getSingleCar, newCar, updateCar } from "../controllers/carController.js";
import { checkId } from "../middleware/validation.js";

const router = express.Router();

router.param("id", checkId);

router.route("/").get(getAllCars).post(newCar);
router.route("/:id").get(getSingleCar).patch(updateCar).delete(deleteCar);

const carRoute = router;

export default carRoute;
