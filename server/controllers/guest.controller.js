import Guest from '../models/guest';

// Get all guests
export function getGuests(req, res) {
	Guest.find().exec((err, guests) => {
		if (err) {
			res.status(500).send(err);
		}
		res.json(guests);
	});
}

// Get a guest by id
export function getGuest(req, res) {
	Guest.findOne({ _id: req.params.id }).exec((err, guest) => {
		if (err) {
			res.status(500).send(err);
		}
		res.json(guest);
	});
}

// Edit a guest by id
export function editGuest(req, res) {
	Guest.findOneAndUpdate({ _id: req.params.id }, req.body.guest, {new: true}).exec((err, guestUpdated) => {
		if (err) {
			res.status(500).send(err);
		}
		res.json(guestUpdated);
	});
}