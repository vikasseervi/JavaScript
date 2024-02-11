import { useEffect, useState } from "react"
import { deleteTodoApi, retrieveAllTodosForUsernameApi } from "./api/TodoApiService";
import { useAuth } from "./security/AuthContext";
import { useNavigate } from "react-router-dom";

export default function ListTodosComponent() {
    
    const authContext = useAuth()
    const username = authContext.username;
    const today = new Date()
    const targetDate = new Date(today.getFullYear() + 12, today.getMonth(), today.getDate());
    const navigate = useNavigate()
    const [todos, setTodos] = useState([])
    const [message, setMessage] = useState(null)

    // UseEffect tells react that your componenet needs to do something after render
    useEffect( () => refreshTodos(), [] )

    function refreshTodos() {
        retrieveAllTodosForUsernameApi(username)
        .then(response => {
            setTodos(response.data)
        })
        .catch(response => console.log(response))
    }

    function deleteTodo(id) {
        deleteTodoApi(username, id)
        .then(
            () => {
                setMessage(`Delete of todo with id:${id} is successful`)
                refreshTodos()
            }
        )
        .catch()
    }

    function updateTodo(id) {
        navigate(`/todo/${id}`)
    }
     
    function addNewTodo() {
        navigate(`/todo/-1`)
    }

    return(
        <div className="container">
            <h3>Things you want to do!</h3>
            { message && <div className="alert alert-warning">{message}</div> }
            <div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Description</th>
                            <th>Is Done?</th>
                            <th>Target Date</th>
                            <th>Delete</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        todos.map(
                            todo => (
                                <tr key={todo.id}>
                                    <td>{todo.id}</td>
                                    <td>{todo.description}</td>
                                    <td>{todo.done.toString()}</td>
                                    {/* <td>{todo.targetDate.toDateString()}</td> */}
                                    <td>{todo.targetDate.toString()}</td>
                                    <td> <button className="btn btn-warning" onClick={() => deleteTodo(todo.id)}>Delete</button> </td>
                                    <td> <button className="btn btn-success" onClick={() => updateTodo(todo.id)}>Update</button> </td>
                                </tr>
                            )
                        )
                    }
                    </tbody>
                </table>
            </div>
            <div>
                <button className="btn btn-success m-5" onClick={addNewTodo}>Add new Todo</button>
            </div>
        </div>
    )
}