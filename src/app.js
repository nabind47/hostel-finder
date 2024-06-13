const express = require("express");

const sequelize = require("./config/sequalize");

// ROUTES
const authRoutes = require("./routes/auth");
const roomRoutes = require("./routes/room");
const hostelRoutes = require("./routes/hostel");
const bookingRoutes = require("./routes/booking");

const app = express();

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/rooms", roomRoutes);
app.use("/api/hostels", hostelRoutes);
app.use("/api/bookings", bookingRoutes);

(async () => {
  try {
    await sequelize.sync();
    app.listen(8000, () => {
      console.log(`Server is running on port ${8000}`);
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();
