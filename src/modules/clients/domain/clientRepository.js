const { ClientModel } = require('../infrastructure/clientModel')

const getClientsBySearch = async clientData => {
	let query = {}
	try {
		if (clientData.company_name) {
			query = {
				company_name: {
					$regex: clientData.company_name,
					$options: 'i'
				},
				deleted_at: null
			}
		}

		if (clientData.state) {
			query = {
				state: clientData.state,
				deleted_at: null
			}
		}

		return ClientModel.find(query).lean().populate({
			path: 'members',
			match: { deleted_at: null }
		});
	} catch (err) {
		console.log("Error searching clients", err)
		throw new Error(`Error searching clients: ${err}`)
	}

}

const createClient = async clientData =>
	new ClientModel(clientData).save().catch(err => {
		console.log("Error creating client", err)
		throw new Error(`Error creating client: ${err}`)
	})

const updateClientById = async (clientId, clientData) =>
	ClientModel.findByIdAndUpdate(
		clientId,
		clientData,
		{ new: true }
	).catch(err => {
		console.log("Error updating client", err)
		throw new Error(`Error updating client: ${err}`)
	})

const softDeleteClientById = async clientId =>
	ClientModel.findByIdAndUpdate(
		clientId,
		{ deleted_at: new Date() },
		{ new: true }
	).catch(err => {
		console.log("Error deleting client", err)
		throw new Error(`Error deleting client: ${err}`)
	})

module.exports = {
	getClientsBySearch,
	createClient,
	updateClientById,
	softDeleteClientById
}