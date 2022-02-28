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
    const { firstname, middlename, lastname, age, city, subCity } = req.body;
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
          subCity,
        })
          .then(() => {
            return res.json({ message: "User successfully added" });
          })
          .catch((err) => {
            return res.status(400).json({ err: "Error Creating a User." });
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

router.get("/user/all", async (req, res) => {
  return db.User.findAll({
    include: [{}],
    where: {},
  })
    .then((result) => {
      return res.json({ result });
    })
    .catch((err) => {
      return res.status(400).json({ err: "Error finding any user data" });
    });
});
// @route  Get api/user/:id
// @desc   Get user by id
// @access private
router.get("/user/:id", async (req, res) => {
  const Id = req.params.id;
  return db.User.findOne({
    include: [{}],
    where: { Id },
  })
    .then((result) => {
      return res.json({ result });
    })
    .catch((err) => {
      return res.status(400).json({ err: "error finding thetargeted user" });
    });
});



// @route  DELETE api/posts/:id
// @desc   Delete a post
// @access private
router.delete("/user/delete", auth, async (req, res) => {
  
  
});


// @route  PUT api/posts/like/:id
// @desc   Like a post
// @access private


router.put("/user/update/:id", auth, async (req, res) => {
 
});

// @route  PUT api/posts/unlike/:id
// @desc   Like a post
// @access private


module.exports = router;
