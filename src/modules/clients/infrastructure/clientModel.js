const mongoose = require('../../core/mongoDb')

const clientSchema = new mongoose.Schema(
	{
		company_name: { type: String, required: true },
		address: { type: String, required: true },
		city: { type: String, required: true },
		state: { type: String, required: true },
		zip: { type: String, required: true },
		headcount: { type: String, required: true },
		public: { type: Boolean, required: true },
		created_at: { type: Date, required: true, default: new Date() },
		updated_at: { type: Date, required: true, default: new Date() },
		deleted_at: { type: Date, required: false, default: null },
	},
	{
		versionKey: false,
	}
);

clientSchema.virtual('members', {
	ref: 'Member',
	localField: '_id',
	foreignField: 'client_id'
})

clientSchema.pre('findOneAndUpdate', function (next) {
	this._update.updated_at = new Date();
	next();
});

const ClientModel = mongoose.model('Client', clientSchema);

module.exports = {
	ClientModel
}