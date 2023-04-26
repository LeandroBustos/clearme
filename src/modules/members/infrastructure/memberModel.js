const mongoose = require('../../core/mongoDb')

const memberSchema = new mongoose.Schema(
	{
		client_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Client', require: true },
		name: { type: String, required: true },
		phone_number: { type: String, required: true },
		email: { type: String, required: true },
		created_at: { type: Date, required: true, default: new Date() },
		updated_at: { type: Date, required: true, default: new Date() },
		deleted_at: { type: Date, required: false, default: null }
	},
	{
		versionKey: false,
	}
);

memberSchema.virtual('notes', {
	ref: 'Note',
	localField: '_id',
	foreignField: 'member_id'
})

memberSchema.pre('findOneAndUpdate', function (next) {
	this._update.updated_at = new Date();
	next();
});

const MemberModel = mongoose.model('Member', memberSchema);

module.exports = {
	MemberModel
}