const { memberSchema, memberUpdateSchema, memberPatchClientSchema } = require('./memberDtos')

const validateMember = (req, res, next) => {
	const { error, value } = memberSchema.validate(req.body)

	if (error) {
		return res.status(400).json({ error: error.details })
	}

	req.body = value
	next()
}

const validateMemberUpdate = (req, res, next) => {
	const { error, value } = memberUpdateSchema.validate(req.body)

	if (error) {
		return res.status(400).json({ error: error.details })
	}

	req.body = value
	next()
}

const validateMemberPatchClient = () => {
	const { error, value } = memberPatchClientSchema.validate(req.body)

	if (error) {
		return res.status(400).json({ error: error.details })
	}

	req.body = value
	next()
}

module.exports = {
	validateMember,
	validateMemberUpdate,
	validateMemberPatchClient
}