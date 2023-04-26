const Joi = require('joi')

const clientSearchSchema = Joi.object({
	company_name: Joi.string(),
	state: Joi.string().uppercase(),
}).xor(
	'company_name',
	'state'
)

const clientSchema = Joi.object({
	company_name: Joi.string().required(),
	address: Joi.string().uppercase().required(),
	city: Joi.string().uppercase().required(),
	state: Joi.string().uppercase().required(),
	zip: Joi.string().uppercase().required(),
	headcount: Joi.string().uppercase().required(),
	public: Joi.boolean().required()
})

const clientUpdateSchema = Joi.object({
	company_name: Joi.string(),
	address: Joi.string().uppercase(),
	city: Joi.string().uppercase(),
	state: Joi.string().uppercase(),
	zip: Joi.string().uppercase(),
	headcount: Joi.string().uppercase(),
	public: Joi.boolean()
}).or(
	'company_name',
	'address',
	'city',
	'state',
	'zip',
	'headcount',
	'public'
)

module.exports = {
	clientSearchSchema,
	clientSchema,
	clientUpdateSchema
}