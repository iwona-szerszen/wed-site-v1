import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const guestSchema = new Schema({
	_id: { type: Schema.Types.ObjectId, required: true, unique: true },
	names: { type: 'String', required: true },
	relationship: { type: 'String', required: true },
	totalMembers: { type: 'Number', required: true },
	responded: { type: 'Boolean', default: false },
	attended: { type: 'Boolean', required: false },
	presents: [{ type: Schema.ObjectId, ref: 'Present', required: false }],
	dedications: [{ type: Schema.ObjectId, ref: 'Dedication', required: false }],
});

function populatePresentsAndDedications(next) {
	this.populate('presents').populate('dedications');
	next();
}

guestSchema.pre('findOne', populatePresentsAndDedications);
guestSchema.pre('findOneAndUpdate', populatePresentsAndDedications);

export default mongoose.model('Guest', guestSchema);