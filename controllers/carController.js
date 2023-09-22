import fs from "fs";
import { fileURLToPath } from "url";
import { dirname } from "path";
import crypto from "crypto";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const cars = JSON.parse(fs.readFileSync(`${__dirname}/../data/data.json`));

export const getAllCars = (req, res, next) => {
  try {
    res.status(200).json({
      message: "Success",
      data: {
        cars,
      },
    });
  } catch (error) {
    next(error);
  }
};

export const getSingleCar = (req, res, next) => {
  const { id } = req.params;
  try {
    const car = cars.find((car) => car.id === id);
    if (!car) res.status(404).json({ message: "Data not found" });
    res.status(200).json({
      message: "Success",
      data: {
        car,
      },
    });
  } catch (error) {
    next(error);
  }
};

export const newCar = (req, res, next) => {
  const id = crypto.randomUUID();
  try {
    const addNewCar = {
      id,
      ...req.body,
    };
    cars.push(addNewCar);
    fs.writeFile(`${__dirname}/../data/data.json`, JSON.stringify(cars), (err) => {
      res.status(201).json({
        message: "Success",
        data: {
          car: addNewCar,
        },
      });
    });
  } catch (error) {
    next(error);
  }
};

export const updateCar = (req, res, next) => {
  const { id } = req.params;
  try {
    const carIndex = cars.findIndex((el) => el.id === id);

    cars[carIndex] = {
      ...cars[carIndex],
      ...req.body,
    };

    fs.writeFile(`${__dirname}/../data/data.json`, JSON.stringify(cars), (err) => {
      res.status(200).json({
        message: "Success",
        data: {
          car: cars[carIndex],
        },
      });
    });
  } catch (error) {
    next(error);
  }
};

export const deleteCar = (req, res, next) => {
  const { id } = req.params;

  try {
    const carIndex = cars.findIndex((el) => el.id === id);
    cars.splice(carIndex, 1);

    fs.writeFile(`${__dirname}/../data/data.json`, JSON.stringify(cars), (err) => {
      res.status(200).json({
        message: "Success",
        data: {
          car: null,
        },
      });
    });
  } catch (error) {
    next(error);
  }
};
