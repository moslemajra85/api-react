import { useState, useEffect } from "react"
import axios from "axios"
import { FaTrash, FaEdit } from "react-icons/fa" // Import icons

const App = () => {

  const [users, setUsers] = useState([])


  const getUsers = () => {

    // Nextime
  }

  const fetchUsers = () => {

    axios.get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err.message))
  }
  // after rendering
  useEffect(() => {

    //Fetch users from API

    fetchUsers()


  }, [])


  const handleRemoveUser = (id) => {

    // update The Ui
    setUsers(users.filter((user) => user.id !== id))



    // Update The Server

    axios.delete(`https://jsonplaceholder.typicode.com/xxxusers/${id}`)
      .then((res) => console.log("User Deleted"))
      .catch((err) => console.log(err.message))


  }

  return (
    <div className="container mt-4">
      <div className="row">
        {
          users.map((user) => (
            <div key={user.id} className="col-md-4 mb-4">
              <div className="card text-bg-light h-100">
                <div className="card-header position-relative">
                  {user.name}
                  <span className="position-absolute top-0 end-0 d-flex align-items-center" style={{ gap: "0.5rem", padding: "0.25rem" }}>
                    <FaEdit className="text-primary" style={{ cursor: "pointer" }} title="Update user" />
                    <FaTrash onClick={() => handleRemoveUser(user.id)} className="text-danger" style={{ cursor: "pointer" }} title="Remove user" />
                  </span>
                </div>
                <div className="card-body">
                  <h5 className="card-title">{user.username}</h5>
                  <p className="card-text">{user.email}</p>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default App