import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const presentSchema = new Schema({
	_id: { type: Schema.Types.ObjectId, required: true, unique: true },
	name: { type: 'String', required: true },
	price: { type: 'Number', required: true },
	image: { type: 'String', required: true },
	reserved: { type: 'Boolean', default: false },
});

export default mongoose.model('Present', presentSchema);