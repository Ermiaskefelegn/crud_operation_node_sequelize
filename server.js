const express = require("express");
const db = require("./models/index");
const app = express();
const port = 5000;

app.use(express.json({ extended: false }));

app.get("/", (req, res) => {
  res.send("Api is running!");
});

const startServer = async () => {
  try {
    db.sequelize.authenticate().then(() => {
      // db.sequelize.sync({force:true}).then(() => {
         // db.sequelize.sync({alter:true}).then(() => {
      app.listen(process.env.PORT || port, () => {
        console.log(`Server listening at http://localhost:${port}`);
      });
    });
  } catch (err) {
    console.log(err);
    return err;
  }
};
startServer();
