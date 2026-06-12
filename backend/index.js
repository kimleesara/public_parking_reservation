const express = require("express");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("주차 예약 서버 실행중");
});

let reservations = [];

app.post("/reservations", (req, res) => {
  const { user, spot, time } = req.body;

  const newReservation = {
    id: reservations.length + 1,
    user,
    spot,
    time,
  };

  reservations.push(newReservation);

  res.json(newReservation);
});

app.get("/reservations", (req, res) => {
  res.json(reservations);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
