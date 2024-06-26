const express = require("express");
const router = express.Router();
const { auth, authRole } = require("../../middlewares/auth");
const { upload } = require("../../utils/s3");
const {
  createEvent,
  deleteEvent,
  createGenre,
  getUpcomingEvents,
} = require("./event.controller");

const authCreator = authRole(["Admin"]);

router.post("/create", upload.single("thumbnail"), auth, createEvent);

router.delete("/delete/:eventId", auth, deleteEvent);

router.route("/genre").post(auth, authCreator, createGenre);

module.exports = router;
