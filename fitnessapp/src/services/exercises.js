import api from "./apiConfig.js";

export const getExercises = async () => {
    try {
        const response = await api.get('/exercises')
        return response.data
    } catch (error) {
        throw error
    }
}

export const getExercise  = async id => {
    try {
        const response = await api.get(`/exercises/${id}`)
        return response.data
    } catch (error) {
        throw error
    }
}

export const createExercise = async exercise => {
    try {
        const response = await api.post('/exercises', exercise)
        return response.data
    } catch (error) {
        throw error
    }
}

export const updateExercise = async (id, exercise) => {
    try {
        const response = await api.put(`/exercises/${id}`, exercise)
        return response.data
    } catch (error) {
        throw error
    }
}

export const deleteExercise = async id => {
    try {
        const response = await api.delete(`/exercises/${id}`)
        return response.data
    } catch (error) {
        throw error
    }
}

