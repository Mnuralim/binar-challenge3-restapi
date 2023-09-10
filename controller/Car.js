import cars from "../data/data.json" assert { type: "json" };
import crypto from "crypto";

export const getAllCars = (req, res, next) => {
  try {
    const data = cars;
    res.status(200).json({ message: "Success", data });
  } catch (error) {
    next(error);
  }
};

export const getSingleCar = (req, res, next) => {
  const { id } = req.params;
  try {
    const data = cars.find((car) => car.id === id);
    if (!data) res.status(404).json({ message: "Data not found" });
    res.status(200).json({ message: "Success", data });
  } catch (error) {
    next(error);
  }
};

export const newCar = (req, res, next) => {
  const { plate, manufacture, model, image, rentPerDay, capacity, description, availableAt, transmission, available, type, year, options, specs } = req.body;
  const id = crypto.randomUUID();
  try {
    const addNewCar = {
      id,
      plate,
      manufacture,
      model,
      image,
      rentPerDay,
      capacity,
      description,
      availableAt,
      transmission,
      available,
      type,
      year,
      options,
      specs,
    };
    cars.push(addNewCar);
    res.status(201).json({ message: "Success", data: cars });
  } catch (error) {
    next(error);
  }
};

export const updateCar = (req, res, next) => {
  const { id } = req.params;
  const car = cars.find((car) => car.id === id);
  if (!car) return res.status(404).json({ message: "Data not found" });
  try {
    const { id, plate, manufacture, model, image, rentPerDay, capacity, description, availableAt, transmission, available, type, year, options, specs } = req.body;
    const NewCarData = {
      id,
      plate,
      manufacture,
      model,
      image,
      rentPerDay,
      capacity,
      description,
      availableAt,
      transmission,
      available,
      type,
      year,
      options,
      specs,
    };

    //update car data
    cars[id] = NewCarData;
    res.status(200).json({ message: "Success", data: cars[id] });
  } catch (error) {
    next(error);
  }
};

export const deleteCar = (req, res, next) => {
  const { id } = req.params;
  const car = cars.find((car) => car.id === id);
  if (!car) return res.status(404).json({ message: "Data not found" });
  try {
    const deleteCar = cars.filter((car) => car.id !== id);
    res.status(200).json({ message: "Success", data: car[id] });
  } catch (error) {
    next(error);
  }
};
