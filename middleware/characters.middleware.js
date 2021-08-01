const express = require("express");
const Character = require("../database/models/character");

const characters = async (req, res, next) => {
  try {
    await Character.findAll()
      .then((character) => {
        if (character.length === 0) {
          next();
        } else {
          res.status(401).json({ message: "Characters ya creados" });
        }
      })
      .catch((error) => {
        res.status(401).json(error);
      });
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = characters;
