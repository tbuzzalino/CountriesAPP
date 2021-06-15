const { Router } = require("express");
const router = Router();
const { Country, Activity } = require("../db");
const axios = require("axios").default;
const { Op } = require("sequelize");

router.get("/", async (req, res) => {
    const { name, region } = req.query;
    if (name) {
        let searchCountries = await Country.findAll({
            where: { name: { [Op.iLike]: `%${name}%` } },
            include: [Activity],
        });
        return res.json(searchCountries);
    }
    if (region) {
        let searchRegion = await Country.findAll({
            where: { region: { [Op.iLike]: `%${region}%` } },
            include: [Activity],
        });
        return res.json(searchRegion);
    }

    return Country.findAll().then((countries) => res.json(countries));
});

router.get("/:id", (req, res) => {
    const { id } = req.params;
    console.log(id); // Me llegan los paises
    if (id) {
        Country.findOne({
            where: { id: { [Op.iLike]: `%${id}%` } },
            include: [Activity],
        })
            .then((id) => {
                res.send(id);
            })
            .catch((err) => {
                return res.send({ err: err });
            });
    }
});

module.exports = router;
