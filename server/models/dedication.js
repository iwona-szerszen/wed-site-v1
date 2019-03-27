import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const dedicationSchema = new Schema({
	_id: { type: Schema.Types.ObjectId, required: true, unique: true },
	videoId: { type: 'String', required: true },
	song: { type: 'String', required: true },
	content: { type: 'String', required: true },
	from: { type: Schema.Types.ObjectId, ref: 'Guest', required: true }
});

export default mongoose.model('Dedication', dedicationSchema);