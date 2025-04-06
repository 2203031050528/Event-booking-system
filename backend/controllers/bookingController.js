const Booking = require('../models/Booking');

exports.bookEvent = async (req, res) => {
	try {
		const userId = req.user.id; // From middleware
		const { eventId } = req.body;

		const existing = await Booking.findOne({ user: userId, event: eventId });
		if (existing) return res.status(400).json({ message: 'You already booked this event.' });

		const booking = new Booking({ event: eventId, user: userId });
		await booking.save();

		res.status(201).json({ message: '✅ Booking successful', booking });
	} catch (err) {
		res.status(500).json({ message: '❌ Server error', err });
	}
};

exports.getAllBookings = async (req, res) => {
	const bookings = await Booking.find().populate('user', 'name email').populate('event', 'title date');
	res.json(bookings);
};

exports.getMyBookings = async (req, res) => {
	const bookings = await Booking.find({ user: req.user.id }).populate('event', 'title date location');
	res.json(bookings);
};

exports.cancelBooking = async (req, res) => {
    const booking = await Booking.findById(req.params.id);
    if (!booking) return res.status(404).json({ msg: 'Booking not found' });
  
    if (booking.user.toString() !== req.user.id) {
      return res.status(403).json({ msg: 'Not authorized' });
    }
  
    await booking.deleteOne();
    res.json({ msg: 'Booking cancelled' });
  };
  