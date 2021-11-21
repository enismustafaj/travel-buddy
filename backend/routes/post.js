const express = require('express');
const Trips = require('../models/trip');
const Createdactivities = require('../models/createdactivities');
const router = express.Router();
// const User = require('../models/profile')


router.post('/join', async (req, res, next) => {
    console.log(req.body)
    let post = new Createdactivities({
        userID: req.body.userId,
        activityID: req.body.activityId,
    });
    try {
        await post.save();
        res.redirect('/'); // defines the url to be redirected to 
    } catch (e) {
        console.log(e)
        // res.redirect("/admin/404");//load error
    }
    // next()
})

router.get('/trips/:query', function (req, res, next) {
    console.log(req.params)
    Trips.find({ place: req.params.query }).then((result) => {
        res.send(result)
    }).catch((err) => {
        console.log("here", err)
    })

})

router.post('/trips', async (req, res) => { //to post a trip
    console.log(req.body)
    let post = new Trips({
        username: req.body.username,
        description: req.body.description,
        maxlimit: req.body.maxlimit,
        // time: new Date(req.body.time),
        place: req.body.place
    });
    try {
        await post.save();
        res.redirect('/'); // defines the url to be redirected to 
    } catch (e) {
        console.log(e)
        // res.redirect("/admin/404");//load error
    }
});



router.get('/', function (req, res, next) { //to show all trips
    Trips.find().then((result) => {
        res.send(result);
    }).catch((err) => {
        console.log(err);
    });
})



router.get('/trip/:id', function (req, res, next) {
    Trips.findById(id).then((result) => {
        res.send(result)
    }).catch((err) => {
        console.log(err);
    })
    // next()
})

router.get('/users/:id', function (req, res, next) {
    Profile.findById(id).then((result) => {
        res.send(result)
    }).catch((err) => {
        console.log(err);
    })
    next()
})





module.exports = router