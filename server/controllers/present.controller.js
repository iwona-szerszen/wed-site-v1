import Present from '../models/present';
import Guest from '../models/guest';

// Get all presents
export function getPresents(req, res) {
	Present.find().exec((err, presents) => {
		if (err) {
			res.status(500).send(err);
		}
		res.json(presents);
	});
}

// Reserve a present by id
export function reservePresent(req, res) {
	Present.findOneAndUpdate({ _id: req.params.id }, { $set: { reserved: true }}, {new: true})
		.then(presentUpdated => {
			Guest.findOneAndUpdate({ _id: req.body.guestId }, { $push: { presents: presentUpdated }})
				.then(() => res.json(presentUpdated))
				.catch(err => res.status(500).send(err));
		})
		.catch(err => res.status(500).send(err));
}

// Cancel present's reservation by id
export function cancelPresentReservation(req, res) {
	Present.findOneAndUpdate({ _id: req.params.id }, { $set: { reserved: false }}).exec(err => {
		if (err) {
			res.status(500).send(err);
		}
		Guest.findOne({ _id: req.body.guestId })
			.then(guest => {
				guest.presents.pull({ _id: req.params.id });
				return guest.save();
			})
			.then(guestUpdated => res.json(guestUpdated))
			.catch(err => res.status(500).send(err));
	});
}