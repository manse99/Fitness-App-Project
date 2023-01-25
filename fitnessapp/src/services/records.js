import api from "./apiConfig.js";

export const getExercisesRecs = async () => {
    try {
        const response = await api.get('/exerciserecs')
        return response.data
    } catch (error) {
        throw error
    }
}

export const getExerciseRec  = async id => {
    try {
        const response = await api.get(`/exerciserecs/${id}`)
        return response.data
    } catch (error) {
        throw error
    }
}

export const createExerciseRec = async exercise => {
    try {
        const response = await api.post('/exerciserecs', exercise)
        return response.data
    } catch (error) {
        throw error
    }
}

export const updateExerciseRec = async (id, exercise) => {
    try {
        const response = await api.put(`/exerciserecs/${id}`, exercise)
        return response.data
    } catch (error) {
        throw error
    }
}

export const deleteExerciseRec = async id => {
    try {
        const response = await api.delete(`/exerciserecs/${id}`)
        return response.data
    } catch (error) {
        throw error
    }
}

