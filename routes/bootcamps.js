const express = require("express");
const router = express.Router();

const {
  getBootcamps,
  getBootcamp,
  createBootcamp,
  updateBootcamp,
  deleteBootcamp
} = require("../controllers/bootcamps");

router
  .route("/")
  .get(getBootcamps)
  .post(createBootcamp);
router
  .route("/:id")
  .put(updateBootcamp)
  .get(getBootcamp)
  .delete(deleteBootcamp);

module.exports = router;
