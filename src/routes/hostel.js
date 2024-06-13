const express = require("express");

const router = express.Router();

const Hostel = require("../models/hostel");

router.post("/", async (req, res) => {
  const { name, location, image } = req.body;
  try {
    const hostel = await Hostel.create({ name, location, image });
    res.status(201).json(hostel);
  } catch (error) {
    console.error("Error creating hostel:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/", async (req, res) => {
  try {
    const hostels = await Hostel.findAll();
    res.json(hostels);
  } catch (error) {
    console.error("Error fetching hostels:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/:id", async (req, res) => {
  const hostelId = req.params.id;
  try {
    const hostel = await Hostel.findByPk(hostelId);
    if (!hostel) {
      return res.status(404).json({ error: "Hostel not found" });
    }
    res.json(hostel);
  } catch (error) {
    console.error("Error fetching hostel:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.put("/:id", async (req, res) => {
  const hostelId = req.params.id;
  const { name, location } = req.body;
  try {
    const hostel = await Hostel.findByPk(hostelId);
    if (!hostel) {
      return res.status(404).json({ error: "Hostel not found" });
    }
    hostel.name = name;
    hostel.location = location;
    await hostel.save();
    res.json(hostel);
  } catch (error) {
    console.error("Error updating hostel:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.delete("/:id", async (req, res) => {
  const hostelId = req.params.id;
  try {
    const hostel = await Hostel.findByPk(hostelId);
    if (!hostel) {
      return res.status(404).json({ error: "Hostel not found" });
    }
    await hostel.destroy();
    res.json({ message: "Hostel deleted successfully" });
  } catch (error) {
    console.error("Error deleting hostel:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
