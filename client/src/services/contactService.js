import { customAxios, customAxiosWithAuth } from './api'

export async function getAllContacts() {
    const axios = customAxios()
    try {
        const response = await axios.get('/contacts')
        return response.data
    } catch(err) {
        console.log(err.message)
        return []
    }
}

export async function getContact(id) {
    const axios = customAxios()
    try {
        const response = await axios.get(`/contacts/${id}`)
        return response.data
    } catch(err) {
        console.log(err.message)
    }
}

export async function deleteContact(id) {
    const axios = customAxiosWithAuth()
    try {
        await axios.delete(`/contacts/${id}`)
    } catch(err) {
        console.log(err.message)
    }
}

export async function createContact(contact) {
    const axios = customAxiosWithAuth()
    try {
        const response = await axios.post('/contacts', contact)
        return response.data
    } catch(err) {
        console.log(err.message)
    }
}

export async function updateLead(id, contact) {
    const axios = customAxiosWithAuth()
    try {
        await axios.put(`/contacts/${id}`, contact)
    } catch(err) {
        console.log(err.message)
    }
}