const { Router } = require("express");
const router = Router();
const { Activity, Country } = require("../db");

router.post("/", async (req, res) => {
    let { name, difficulty, duration, season, idCountry } = req.body;
    try {
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

        return res.send(newActivity);
    } catch (err) {
        return res.status(400).send("The activity was not created");
    }
});

router.get("/", async (req, res) => {
    try {
        let activities = await Activity.findAll();

        return res.json(activities);
    } catch (err) {
        return res.status(404).send("The activities was not found");
    }
});

module.exports = router;
