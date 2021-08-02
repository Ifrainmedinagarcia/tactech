const characterControler = require("../controllers/character.controller");
const express = require("express");
const bdCharacters = require("../middleware/characters.middleware");
const router = express.Router();

router.post("/", bdCharacters, characterControler.createCharacter);
router.get("/:limit/:offset", characterControler.getCharacter);
router.get("/:id", characterControler.getCharacterById);

module.exports = router;
