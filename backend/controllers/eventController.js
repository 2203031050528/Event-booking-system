const Event = require('../models/Event');

exports.createEvent = async (req, res) => {
	try {
		const { title, description, date, location, price } = req.body;

		const newEvent = new Event({
			title,
			description,
			date,
			location,
			price,
			createdBy: req.user.id
		});

		await newEvent.save();

		res.status(201).json({ message: 'Event created successfully', event: newEvent });
	} catch (err) {
		res.status(500).json({ message: 'Server error', err });
	}
};

exports.getAllEvents = async (req, res) => {
	try {
		const events = await Event.find().populate('createdBy', 'name email');
		res.status(200).json(events);
	} catch (err) {
		res.status(500).json({ message: 'Server error', error: err.message });
	}
};

exports.getEventById = async (req, res) => {
	try {
		const event = await Event.findById(req.params.id);
		if (!event) return res.status(404).json({ message: 'Event not found' });
		res.status(200).json(event);
	} catch (err) {
		res.status(500).json({ message: 'Server error', error: err.message });
	}
};
