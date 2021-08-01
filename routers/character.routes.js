const characterControler = require("../controllers/character.controller");
const express = require("express");
const router = express.Router();

router.post("/", characterControler.createCharacter);
router.get("/", characterControler.getCharacter);
router.get("/:id", characterControler.getCharacterById);

module.exports = router;
