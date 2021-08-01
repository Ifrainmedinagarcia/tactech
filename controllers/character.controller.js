const express = require("express");
const axios = require("axios");
const Character = require("../database/models/character");

const createCharacter = async (req, res, next) => {
  const arrCharacter = [];
  try {
    const response = await axios.get(
      "https://api.got.show/api/show/characters"
    );

    await response.data.map((d) => {
      arrCharacter.push({
        name: d.name,
        image: d.image,
        house: d.house,
        slug: d.slug,
        gender: d.gender,
        rank: d.pagerank.rank,
        titles: d.titles[0],
      });
    });
    await Character.bulkCreate(arrCharacter, { returning: true })
      .then((ch) => res.status(201).json(ch))
      .catch((e) => res.status(401).json(e));
  } catch (error) {
    res.status(500).json(error);
  }
};

const getCharacter = async (req, res) => {
  try {
    await Character.findAll()
      .then((character) => {
        res.status(200).json({ data: character });
      })
      .catch((error) => {
        res.status(401).json(error);
      });
  } catch (error) {
    res.status(500).json(error);
  }
};

const getCharacterById = async (req, res) => {
  try {
    await Character.findByPk(req.params.id).then((ch) => {
      res.status(200).json(ch);
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.createCharacter = createCharacter;
exports.getCharacter = getCharacter;
exports.getCharacterById = getCharacterById;
