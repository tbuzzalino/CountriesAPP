const { Router } = require("express");
const router = Router();
const { Country, Activity } = require("../db");
const { Op } = require("sequelize");

router.get("/", async (req, res) => {
    const { name, region, activities } = req.query;

    if (activities) {
        try {
            let searchActivity = await Country.findAll({
                where: { activities: { [Op.iLike]: `%${activities}%` } },
                include: [Activity],
            });
            return res.json(searchActivity);
        } catch (err) {
            return res.status(404).send("The activity was not found.");
        }
    }

    if (name) {
        try {
            let searchCountries = await Country.findAll({
                where: { name: { [Op.iLike]: `%${name}%` } },
                include: [Activity],
            });
            return res.json(searchCountries);
        } catch (err) {
            return res.status(404).send("The name was not found.");
        }
    }

    if (region) {
        try {
            let searchRegion = await Country.findAll({
                where: { region: { [Op.iLike]: `%${region}%` } },
                include: [Activity],
            });
            return res.json(searchRegion);
        } catch (err) {
            return res.status(404).send("The region was not found.");
        }
    }

    Country.findAll({ include: [Activity] }).then((countries) =>
        res.status(200).json(countries)
    );
});

router.get("/:id", async (req, res) => {
    const { id } = req.params;
    console.log(id);
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
