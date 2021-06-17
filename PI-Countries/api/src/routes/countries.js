const { Router } = require("express");
const router = Router();
const { Country, Activity } = require("../db");
const axios = require("axios").default;
const { Op } = require("sequelize");

router.get("/", async (req, res) => {
    const { name, region } = req.query;

    if (name) {
        try {
            let searchCountries = await Country.findAll({
                where: { name: { [Op.iLike]: `%${name}%` } },
                include: [Activity],
            });
            res.json(searchCountries);
        } catch (err) {
            res.status(404).send("The name was not found.");
        }
    }
    if (region) {
        try {
            let searchRegion = await Country.findAll({
                where: { region: { [Op.iLike]: `%${region}%` } },
                include: [Activity],
            });
            res.json(searchRegion);
        } catch (err) {
            res.status(404).send("The region was not found.");
        }
    }

    Country.findAll().then((countries) => res.json(countries));
});

router.get("/:id", async (req, res) => {
    const { id } = req.params;
    console.log(id); // Me llegan los paises
    if (id) {
        try {
            let foundCountry = await Country.findOne({
                where: { id: { [Op.iLike]: `%${id}%` } },
                include: [Activity],
            });
            res.json(foundCountry);
        } catch (err) {
            res.status(404).send("The id was not found.");
        }
    }
});

module.exports = router;
