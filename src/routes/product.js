const express = require("express");
const ProductController = require("../controllers/ProductsController");

const router = express.Router();

/**
 * PRODUCT
 */
// LIST
router.get("/", ProductController.index);

// CREATE
router.post("/", ProductController.store);

// SHOW
router.get("/:id", ProductController.show);

// UPDATE
router.put("/:id", ProductController.update);

// DELETE
router.delete("/:id", ProductController.delete);

module.exports = router;
