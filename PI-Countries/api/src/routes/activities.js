const express = require("express");
// const server = express();
const { Router } = require("express");
const router = Router();
const { Activity, Country } = require("../db");

router.post("/", async (req, res) => {
    let { name, difficulty, duration, season, ic } = req.body;
    let newActivity = await Activity.create({
        name: name,
        difficulty: difficulty,
        duration: duration,
        season: season,
    });
    console.log(ic);
    // console.log(newActivity)
    // Esto me agrega a la tabla intermedia
    ic.forEach(async (pais) => {
        let country = await Country.findOne({
            where: { id: pais },
        });
        await newActivity.addCountry(country);
    });

    res.send(newActivity);
});

module.exports = router;
