import { customAxios, customAxiosWithAuth } from './api'

export async function getAllProjects() {
    const axios = customAxios()
    try {
        const response = await axios.get('/projects/c/')
        return response.data
    } catch(err) {
        console.log(err.message)
        return []
    }
}

export async function deleteProjectFromContact(projectId, contactId) {
    const axios = customAxiosWithAuth()
    try {
        await axios.delete(`/projects/c/${contactId}/p/${projectId}`)
    } catch(err) {
        console.log(err.message)
    }
}

export async function createProjectForContact(project, contactId) {
    const axios = customAxiosWithAuth()
    try {
        const response = await axios.post(`/projects/c/${contactId}`, project)
        return response.data
    } catch(err) {
        console.log(err.message)
    }
}

export async function getProjectFromContact(projectId, contactId) {
    const axios = customAxiosWithAuth()
    try {
        const response = await axios.get(`/projects/c/${contactId}/p/${projectId}`)
        return response.data
    } catch(err) {
        console.log(err.message)
    }
}

export async function updateCommentOfIdFromPost(project, projectId, contactId) {
    const axios = customAxiosWithAuth()
    try {
        await axios.put(`/projects/c/${contactId}/p/${projectId}`, project)
    } catch(err) {
        console.log(err.message)
    }
}