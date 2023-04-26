const mongoose = require('../../core/mongoDb')

const noteSchema = new mongoose.Schema(
	{
		member_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Member', require: true },
		content: { type: String, required: true },
		created_at: { type: Date, required: true, default: new Date() },
		updated_at: { type: Date, required: true, default: new Date() },
		deleted_at: { type: Date, required: false, default: null }
	},
	{
		versionKey: false,
	}
);

noteSchema.pre('findOneAndUpdate', function (next) {
	this._update.updated_at = new Date();
	next();
});


const NoteModel = mongoose.model('Note', noteSchema);

module.exports = {
	NoteModel
}