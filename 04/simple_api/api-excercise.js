const express = require("express");
const app = express();
const port = 8000;

app.use(express.json());

const cars = [
  { id: "C001", brand: "Toyota", model: "Camry", price: "1,450,000" },
  { id: "C002", brand: "Honda", model: "Accord", price: "1,500,000" },
  { id: "C003", brand: "Nissan", model: "Altima", price: "1,350,000" },
  { id: "C004", brand: "Ford", model: "Mustang", price: "2,500,000" },
  { id: "C005", brand: "Chevrolet", model: "Malibu", price: "1,600,000" },
];

app.get("/api/cars", (req, res) => {
  res.json(cars);
});

app.get("/api/querycar", (req, res) => {
  const carId = req.query.id;
  if (Object.keys(carId).length != 0) {
    const car = cars.find((car) => car.id === carId);
    if (car) {
      res.send(car);
    } else {
      res.send("Car not found!");
    }
  } else {
    res.status(400).send("Bad Request! Please provide a query string.");
  }
});

app.post("/api/addcars", (req, res) => {
  const carId = req.body.id;
  const carBrand = req.body.brand;
  const carModel = req.body.model;
  const carPrice = req.body.price;
  const newCar = {
    id: carId,
    brand: carBrand,
    model: carModel,
    price: carPrice,
  };
  cars.push(newCar);
  res.send(newCar);
});

app.put("/api/editcars/:id", (req, res) => {
  const carId = req.body.id;
  const carBrand = req.body.brand;
  const carModel = req.body.model;
  const carPrice = req.body.price;

  let carData = cars.find((car) => car.id === carId);
  if (carId) {
    carData.brand = carBrand;
    carData.model = carModel;
    carData.price = carPrice;
  } else {
    res.status(400).send("Car not found!");
  }
  res.send(cars);
});

app.delete("/api/deletecars/:id", (req, res) => {
  const carId = req.params.id;
  const index = cars.findIndex((car) => car.id === carId);
  if (index !== -1) {
    const deletedCar = cars.splice(index, 1);
    res.send(deletedCar);
  } else {
    res.status(400).send("Car not found!");
  }
});

app.listen(port, "127.0.0.1", () => {
  console.log(`Listening to request on port ${port}`);
});
