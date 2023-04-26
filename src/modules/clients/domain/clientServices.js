const clientRepository = require('./clientRepository')

const searchClients = async client => {
	try {
		return await clientRepository.getClientsBySearch(client)
	} catch (err) {
		throw err
	}
}

const createClient = async client => {
	try {
		return await clientRepository.createClient(client)
	} catch (err) {
		throw err
	}
}

const updateClientById = async (clientId, client) => {
	try {
		return await clientRepository.updateClientById(clientId, client)
	} catch (err) {
		throw err
	}
}

const deleteClientById = async clientId => {
	try {
		await clientRepository.softDeleteClientById(clientId)
	} catch (err) {
		throw err
	}
}

module.exports = {
	searchClients,
	createClient,
	updateClientById,
	deleteClientById
}