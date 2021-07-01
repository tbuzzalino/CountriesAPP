//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require("./src/app.js");
const { conn, Country } = require("./src/db.js");
const { ALL_COUNTRIES } = require("./utils/urls");
const axios = require("axios").default;
const port = process.env.PORT || 5000;
// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
    server.listen(port, () => {
        console.log("%s at 3001", "The countries has been loaded succesfully");
        axios.get(ALL_COUNTRIES).then(
            (countrie) =>
                countrie.data &&
                countrie.data.forEach((c) =>
                    Country.create({
                        id: c.alpha3Code,
                        name: c.name,
                        flag: c.flag,
                        region: c.region,
                        capital: c.capital,
                        subregion: c.subregion,
                        area: c.area,
                        population: c.population,
                    }).catch((err) => res.status(500, { msg: err }))
                )
        ); // eslint-disable-line no-console
    });
});
