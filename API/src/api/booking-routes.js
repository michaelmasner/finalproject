const express = require("express");

const router = express.Router();

const Booking = require('../models/booking-model');

router.get("/", (req, res) => {
    Booking.prototype
        .getAll()
        .then(users => {
            res.send(users);
        })
        .catch(err => {
            res.status(400).send(err);
        });
});
router.post("/create", (req, res) => {
    Booking.prototype
        .create(req.body)
        .then(users => {
            res.send(users);
        })
        .catch(err => {
            res.status(400).send(err);
        });
});

router.post("/update/:id", (req, res) => {
    Booking.prototype
        .updateByID(req.params.id, req.body)
        .then(users => {
            res.send(users);
        })
        .catch(err => {
            res.status(400).send(err);
        });
});

router.get('/propertyId/:id', (req, res) => {
    Booking.prototype
        .getByListingId(req.params.id)
        .then(bookings => {
            res.send(bookings);
        })
        .catch(err => {
            res.status(400).send(err);
        });
});

router.get("/:id", (req, res) => {
    Booking.prototype
        .getById(req.params.id)
        .then(users => {
            res.send(users);
        })
        .catch(err => {
            res.status(400).send(err);
        });
});

router.post("/delete/:id", (req, res) => {
    Booking.prototype
        .remove(req.params.id)
        .then(users => {
            res.send(users);
        })
        .catch(err => {
            res.status(400).send(err);
        });

});


module.exports = router;