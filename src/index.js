const express = require("express");
const bodyParser = require("body-parser");
const { PORT, SYNC_DB } = require("./config/serverConfig");
const ApiRoutes = require("./routes/index");

const db = require("./models/index");

const setupAndStartServer = async () => {
  // create the express object
  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use("/api", ApiRoutes);

  app.listen(PORT, () => {
    console.log(`Server Started At Port ${PORT}`);

    if (!!+SYNC_DB) {
      db.sequelize.sync({
        alter: true,
      });
    }

    // const airports = await Airport.findAll({
    //   include: [
    //     {
    //       model: City,
    //       where: { id: 5 },
    //     },
    //   ],
    // });
    // console.log(airports);
    // const city = await City.findOne({
    //   where: {
    //     id: 1
    //   }
    // });
    // const airports = await city.getAirports();
    // console.log(city, airports)
  });
};

setupAndStartServer();
