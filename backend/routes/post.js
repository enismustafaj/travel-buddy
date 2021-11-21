const express = require('express');
const Trips = require('../models/trip');
const router = express.Router();

router.get('/trips/:query', function (req, res, next) { //to show all trips
    Trips.find({place: {$regex: `.*${req.params.query}.*`}}).then((result) => {
        res.send(result);
    }).catch((err) => {
        console.log(err);
    });
})

router.post('/trips', async function (req, res, next) { //to post a trip
    let post = new Trips({
        userID: req.body.username,
        description: req.body.description,
        maxlimit: req.body.maxlimit,
        time: req.body.time,
        place: req.body.place
    });
    try {
        await post.save();
        res.redirect('/'); // defines the url to be redirected to 
    } catch (e) {
        // res.redirect("/admin/404");//load error
        console.log(e);
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

})


module.exports = router