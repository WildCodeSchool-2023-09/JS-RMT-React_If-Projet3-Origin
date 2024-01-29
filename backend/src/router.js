const express = require("express");

const router = express.Router();

const clientControllers = require("./controllers/clientControllers");
// const validateClient = require("./validators/validateClient");

router.get("/clients", clientControllers.browse);
router.get("/clients/:id", clientControllers.read);
// router.post("/clients", validateClient, clientControllers.add);
// router.put("/clients/:id", validateClient, clientControllers.edit);
// router.delete("/clients/:id", clientControllers.destroy);

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

const SportsControllers = require("./controllers/sportsControllers");

router.get("/sports", SportsControllers.browse);

const CategoryControllers = require("./controllers/categoryControlleurs");

router.get("/categorys", CategoryControllers.browse);

const AdmincontactControllers = require("./controllers/admincontactControlleurs");

router.post("/admincontact", AdmincontactControllers.send);

/* ************************************************************************* */

module.exports = router;
