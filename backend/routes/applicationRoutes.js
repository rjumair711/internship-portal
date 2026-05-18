const express = require("express");
const router = express.Router();

const Application = require("../models/Application");


// =============================
// POST APPLICATION
// =============================
router.post("/apply", async (req, res) => {
  try {
    const { name, email, phone, domain, message } = req.body;

    // Basic Validation
    if (!name || !email || !phone || !domain || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // Save to DB
    const newApplication = new Application({
      name,
      email,
      phone,
      domain,
      message,
    });

    await newApplication.save();

    res.status(201).json({
      success: true,
      message: "Application submitted successfully",
      data: newApplication,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
});


// =============================
// GET ALL APPLICATIONS (ADMIN)
// =============================
router.get("/applications", async (req, res) => {
  try {
    const applications = await Application.find().sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      count: applications.length,
      data: applications,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
});

module.exports = router;