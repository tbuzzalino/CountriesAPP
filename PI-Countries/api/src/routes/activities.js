const { Router } = require("express");
const router = Router();
const { Activity, Country } = require("../db");

router.post("/", async (req, res) => {
    let { name, difficulty, duration, season, idCountry } = req.body;
    let newActivity = await Activity.create({
        name: name,
        difficulty: difficulty,
        duration: duration,
        season: season,
    });

    // console.log(newActivity)
    // Esto me agrega a la tabla intermedia
    idCountry.forEach(async (pais) => {
        let country = await Country.findOne({
            where: { id: pais },
        });
        await newActivity.addCountry(country);
    });

    res.send(newActivity);
});

router.get("/", async (req, res) => {
    var activities = await Activity.findAll();

    res.json(activities);
});

module.exports = router;
