import fs from "fs";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const cars = JSON.parse(fs.readFileSync(`${__dirname}/../data/data.json`));

export const checkId = (req, res, next, val) => {
  const car = cars.find((el) => el.id === val);

  if (!car) {
    return res.status(400).json({ message: `Car with id ${val} not found`, succes: false });
  }
  next();
};
