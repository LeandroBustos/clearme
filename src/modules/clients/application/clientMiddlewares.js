const { clientSearchSchema, clientSchema, clientUpdateSchema } = require('./clientDtos')

const validateClientSearch = (req, res, next) => {
	const { error, value } = clientSearchSchema.validate(req.body)

	if (error) {
		return res.status(400).json({ error: error.details })
	}

	req.body = value
	next()
}

const validateClient = (req, res, next) => {
	const { error, value } = clientSchema.validate(req.body)

	if (error) {
		return res.status(400).json({ error: error.details })
	}

	req.body = value
	next()
}

const validateClientUpdate = (req, res, next) => {
	const { error, value } = clientUpdateSchema.validate(req.body)

	if (error) {
		return res.status(400).json({ error: error.details })
	}

	req.body = value
	next()

}

module.exports = {
	validateClientSearch,
	validateClient,
	validateClientUpdate
}