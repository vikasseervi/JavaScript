import { apiCLient } from "./ApiClient"
    
export const retrieveAllTodosForUsernameApi = (username) => apiCLient.get(`/users/${username}/todos`)
export const deleteTodoApi = (username, id) => apiCLient.delete(`/users/${username}/todos/${id}`)
export const retrieveTodoApi = (username, id) => apiCLient.get(`/users/${username}/todos/${id}`)
export const updateTodoApi = (username, id, todo) => apiCLient.put(`/users/${username}/todos/${id}`, todo)
export const createTodoApi = (username, todo) => apiCLient.put(`/users/${username}/todos`, todo)