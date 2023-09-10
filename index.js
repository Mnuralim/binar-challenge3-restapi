import express from "express";
import CarRoute from "./routes/CarRoute.js";

const app = express();

app.use(express.json());
app.get("/", (req, res) => {
  res.status(200).json({ message: "ping successfully" });
});

app.use(CarRoute);

const port = 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
