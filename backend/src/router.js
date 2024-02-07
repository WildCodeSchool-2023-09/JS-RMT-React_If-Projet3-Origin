const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import itemControllers module for handling item-related operations
const itemControllers = require("./controllers/itemControllers");

// Route to get a list of items
router.get("/items", itemControllers.browse);

// Route to get a specific item by ID
router.get("/items/:id", itemControllers.read);

// Route to add a new item
router.post("/items", itemControllers.add);

const videoControllers = require("./controllers/videoControllers");
const validateVideo = require("./services/validator/validatevideo");

// Route to get a list of items
router.get("/videos", videoControllers.browse);

router.get("/videos/:id", videoControllers.read);

router.post("/videos", validateVideo, videoControllers.add);

const SportsControllers = require("./controllers/sportsControlers");

router.get("/sports", SportsControllers.browse);

const CategoryControllers = require("./controllers/categoryControleurs");

router.get("/categorys", CategoryControllers.browse);

const contactControllers = require("./controllers/contactControllers");

router.post("/contacts", contactControllers.send);

/* ************************************************************************* */

module.exports = router;
