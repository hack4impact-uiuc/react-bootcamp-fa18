import fetch from 'node-fetch'

const API_URL = "http://localhost:6000/";

const getAllTodos = async (API_URL) => {
    const data = await fetch(API_URL) 
    const parsedData = await data.text()
    console.log(parsedData)
    return parsedData
}

const postNewTodo = async (name) => {
    const data = await fetch(API_URL + posts', {
        method: 'POST',
        body: formData
      })
    const parsedData = await data.text()
    console.log(parsedData)
    return parsedData
}

export {
    getAllTodos, 
    postNewTodo
}