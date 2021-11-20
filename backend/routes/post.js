const express = require('express');
const Trips = require('../models/trip');
const router = express.Router();


router.post('/trips', async function (req, res, next) { //to post a trip
    let post = new Post_Trips({
        username: req.body.username,
        description: req.body.description,
        maxlimit: req.body.maxlimit,
        time: req.body.time,
        place: req.body.place
    });
    try {
        trip = await post.save();
        res.redirect('/'); // defines the url to be redirected to 
    } catch (e) {
        res.redirect("/admin/404");//load error
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