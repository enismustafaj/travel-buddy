const express = require('express');
const Trips = require('../models/trip');
const Activities = require('../models/activities');
const router = express.Router();
// const User = require('../models/profile')

router.get('/trips/:query', function (req, res, next) { //to show all trips
    Trips.find({ place: { $regex: `.*${req.params.query}.*` } }).then((result) => {
        res.send(result);
    }).catch((err) => {
        console.log(err);
    });
})

router.post('/activity', async (req, res, next) => {
    console.log(req.body)
    let post = new Activities({
        userID: req.body.userId,
        activityID: req.body.activityId,
        type: req.body.type
    });
    try {
        await post.save();
        // res.redirect('/'); // defines the url to be redirected to 
    } catch (e) {
        console.log(e)
    }
})

router.get('/activity', async (req, res, next) => {
    console.log(req.body)
    Activities.find().then((result) => {
        res.send(result);
    }).catch((err) => {
        console.log(err);
    });
})




router.get('/trips/:query', function (req, res, next) {
    console.log(req.params)
    Trips.find({ place: req.params.query }).then((result) => {
        res.send(result)
    }).catch((err) => {
        console.log("here", err)
    })

})


router.post('/trips', async function (req, res, next) { //to post a trip
    let post = new Trips({
        userID: req.body.username,
        description: req.body.description,
        maxlimit: req.body.maxlimit,
        time: new Date(req.body.time),
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