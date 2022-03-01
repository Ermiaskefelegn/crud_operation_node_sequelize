const express = require("express");
const router = express.Router();
const fs = require("fs");
const db = require("../models");
const { Op } = require("sequelize");

// @route  POST api/users
// @desc   Create a post
// @access private

router.post("/adduser", async (req, res) => {
  try {
    const { firstname, middlename, lastname, age, city, subcity } = req.body;
    return db.User.findOne({ where: { firstname, middlename, lastname } })
      .then((result) => {
        if (result) {
          return res
            .status(400)
            .json({ err: "There is already a User with this name." });
        }
        return db.User.create({
          firstname,
          middlename,
          lastname,
          age,
          city,
          subcity,
        })
          .then(() => {
            return res.json({ message: "User successfully added" });
          })
          .catch((err) => {
            return res.status(400).json({ err: err.message });
          });
      })
      .catch((err) => {
        return res.status(400).json({ err: "Error finding a User." });
      });
  } catch (err) {
    if (err.message) return res.status(400).json({ err: err.message });

    return res.status(500).send({
      err,
    });
  }
});
// @route  Get api/users
// @desc   Get all users
// @access public

router.get("/getall/all", async (req, res) => {
  return db.User.findAll({
    // include: [{}],
    // where: {},
  })
    .then((result) => {
      return res.json({ result });
    })
    .catch((err) => {
      return res.status(400).json({ err: err.message });
    });
});
// @route  Get api/user/:id
// @desc   Get user by id
// @access private

router.get("/getbyid/:id", async (req, res) => {
  const Id = req.params.id;
  return db.User.findOne({
    // include: [{}],
    where: { Id },
  })
    .then((result) => {
      return res.json({ result });
    })
    .catch((err) => {
      return res.status(400).json({ err: err.message });
    });
});

// @route  DELETE /delete/:id
// @desc   Delete a user
// @access public
router.delete("/delete/:id", async (req, res) => {
  const Id = req.params.id;
  return db.User.destroy({ where: { Id } })
    .then(() => {
      return res.json({ message: "User successfully deleted." });
    })
    .catch((err) => {
      return res.status(400).json({ err: "Error deleting the User." });
    });
});
// @route  PUT /update/:id
// @desc   update a user
// @access public

router.put("/update/:id", async (req, res) => {
  try {
    const { firstname, middlename, lastname, age, city, subcity } = req.body;
    const Id = req.params.id;

    return db.User.findOne({ where: { firstname, middlename, lastname } })
      .then((result) => {
        if (result && result.Id != Id) {
          return res
            .status(400)
            .json({ err: "There is already a User with this name." });
        }
        return db.User.findOne({
          // include: { model: db.Address },
          where: { Id },
        }).then((result) => {
          if (!result) {
            return res.status(400).json({ err: err.message });
          }
          return result
            .update({
              firstname,
              middlename,
              lastname,
              age,
              city,
              subcity,
            })
            .then(() => {
              return res.json({ message: "User successully updated." });
            });
        });
      })
      .catch((err) => {
        message = res.status(400).json({ err: err.message });
      });
  } catch (err) {
    if (err.message) return res.status(400).json({ err: err.message });

    return res.status(400).json({ err });
  }
});

// @route  PUT api/posts/unlike/:id
// @desc   Like a post
// @access private

module.exports = router;
