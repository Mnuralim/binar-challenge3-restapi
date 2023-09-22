import express from "express";
import morgan from "morgan";
import carRoute from "./routes/carRoute.js";

const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.status(200).json({ message: "ping successfully" });
});

app.use("/api/v1/cars", carRoute);

export default app;
