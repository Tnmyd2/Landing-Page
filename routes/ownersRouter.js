const express = require("express");
const router = express.Router();
const owner = require("../models/owner-model");

// console.log("NODE_ENV:", process.env.NODE_ENV);


    router.post("/create", async function (req, res) {
        try {
            let owners = await owner.find();
            console.log("Number of owners:", owners.length);
            
            if (owners.length > 0){
                return res
                    .status(500)
                    .send("You don't have permission to create a new owner.");
            }
            
            let { fullname, email, password } = req.body;
            let createdOwner = await owner.create({
                fullname,
                email,
                password,
            });

            res.status(201).send(createdOwner);
        } catch (error) {
            console.error("Error:", error);
            res.status(500).send("Internal server error");
        }
    });


// This route will respond to "/owners" because it is mounted on "/owners" in the main app
router.get("/", function (req, res) {
    res.send("Hey, it is working");
});

module.exports = router;
