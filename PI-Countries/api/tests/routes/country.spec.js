/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require("chai");
const session = require("supertest-session");
const app = require("../../src/app.js");
const { Country, conn } = require("../../src/db.js");

const agent = session(app);
const country = {
    name: "Brazil",
};

describe("Country routes", () => {
    before(() =>
        conn.authenticate().catch((err) => {
            console.error("Unable to connect to the database:", err);
        })
    );
    beforeEach(() =>
        Country.sync({ force: false }).then(() =>
            Country.findOne({
                where: {
                    name: country.name,
                },
            })
        )
    );
    describe("/GET ", () => {
        it('It should retrive a 200 when i look for "Brazil"', () =>
            agent.get("/countries?name=Brazil").expect(200));
        it('It should return a 200 when searching by ID "BRA"', () =>
            agent.get("/countries/BRA").expect(200));
    });
});
