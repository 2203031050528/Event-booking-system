const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const isAdmin = require('../middleware/admin');
const { createEvent,getAllEvents,getEventById} = require('../controllers/eventController');

router.post('/create', auth, isAdmin, createEvent);
router.get('/', getAllEvents);                     // Get all events
router.get('/:id', getEventById);  

module.exports = router;
