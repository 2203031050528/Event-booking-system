const express = require('express');
const router = express.Router();
const { bookEvent,getAllBookings,getMyBookings,cancelBooking } = require('../controllers/bookingController');
const auth = require('../middleware/authMiddleware');
const admin = require('../middleware/admin');

router.post('/', auth, bookEvent);
router.get('/', auth,admin, getAllBookings);
router.get('/:id',auth,getMyBookings)
router.delete('/:id',auth,cancelBooking)
 // Get all bookings
 // POST /api/bookings

module.exports = router;
