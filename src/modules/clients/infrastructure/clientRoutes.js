const express = require('express')

const { validateClientSearch, validateClient, validateClientUpdate } = require('../application/clientMiddlewares')
const clientService = require('../domain/clientServices')

const router = express.Router()

router.get('/', validateClientSearch, async (req, res) => {
	try {
		const clients = await clientService.searchClients(req.body)
		return res.status(200).send(clients)
	} catch (err) {
		return res.status(500).send(err)
	}
})

router.post('/', validateClient, async (req, res) => {
	try {
		const client = await clientService.createClient(req.body)
		return res.status(201).send(client)
	} catch (err) {
		return res.status(500).send(err)
	}
})

router.put('/:id', validateClientUpdate, async (req, res) => {
	const { id } = req.params
	try {
		const updatedClient = await clientService.updateClientById(id, req.body)
		return res.status(200).send(updatedClient)
	} catch (err) {
		return res.status(500).send(err)
	}
})

router.delete('/:id', async (req, res) => {
	const { id } = req.params
	try {
		await clientService.deleteClientById(id)
		return res.status(200).send()
	} catch (err) {
		return res.status(500).send(err)
	}
})

module.exports = router