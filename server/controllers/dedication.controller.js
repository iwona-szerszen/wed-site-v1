import mongoose from 'mongoose';
import sanitizeHtml from 'sanitize-html';
import Dedication from '../models/dedication';
import Guest from '../models/guest';

// Get all dedications
export function getDedications(req, res) {
	
	Dedication.find().populate('from', 'names').exec((err, dedications) => {
		if (err) {
			res.status(500).send(err);
		}
		res.json(dedications);
	});
}

// Add a new dedication
export function addDedication(req, res) {
	if (!req.body.dedication.videoId || !req.body.dedication.song || !req.body.dedication.content || !req.body.dedication.from) {
		res.status(403).end();
	}

	const newDedication = new Dedication(req.body.dedication);
	newDedication._id = new mongoose.Types.ObjectId();

	// Sanitize inputs
	newDedication.videoId = sanitizeHtml(newDedication.videoId);
	newDedication.song = sanitizeHtml(newDedication.song);
	newDedication.content = sanitizeHtml(newDedication.content);
	newDedication.from = sanitizeHtml(newDedication.from);

	newDedication.save((err, dedicationSaved) => {
		if (err) {
			res.status(500).send(err);
		}

		Guest.findOneAndUpdate({ _id: req.body.dedication.from }, { $push: { dedications: { $each: [dedicationSaved], $position: 0 } }}, {new: true})
			.then(guestUpdated => res.json(guestUpdated))
			.catch(err => res.status(500).send(err));
	});
}

// Delete a dedication by id
export function deleteDedication(req, res) {
	Dedication.findOne({ _id: req.params.id }).exec((err, dedication) => {
		if (err) {
			res.status(500).send(err);
		}
		dedication.remove();
		Guest.findOne({ _id: req.body.guestId })
			.then(guest => {
				guest.dedications.pull({ _id: req.params.id });
				return guest.save();
			})
			.then(guestUpdated => res.json(guestUpdated))
			.catch(err => res.status(500).send(err));
	});
}