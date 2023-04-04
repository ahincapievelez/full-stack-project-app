import { customAxios, customAxiosWithAuth } from './api'

export async function getAllLeads() {
    const axios = customAxios()
    try {
        const response = await axios.get('/leads')
        return response.data
    } catch(err) {
        console.log(err.message)
        return []
    }
}

export async function getLead(id) {
    const axios = customAxios()
    try {
        const response = await axios.get(`/leads/${id}`)
        return response.data
    } catch(err) {
        console.log(err.message)
    }
}

export async function deleteLead(id) {
    const axios = customAxiosWithAuth()
    try {
        await axios.delete(`/leads/${id}`)
    } catch(err) {
        console.log(err.message)
    }
}

export async function createLead(lead) {
    const axios = customAxiosWithAuth()
    try {
        const response = await axios.post('/leads', lead)
        return response.data
    } catch(err) {
        console.log(err.message)
    }
}

export async function updateLead(id, lead) {
    const axios = customAxiosWithAuth()
    try {
        await axios.put(`/leads/${id}`, lead)
    } catch(err) {
        console.log(err.message)
    }
}