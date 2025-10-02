import { useState, useEffect } from "react";
import axios from "axios";
import { FaTrash, FaEdit } from "react-icons/fa"; // Import icons

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [name, setName] = useState("");
  const [username, setUserName] = useState("")
  const [email, setEmail] = useState("")


  const getUsers = () => {
    // Nextime
  };

  const fetchUsers = () => {
    setLoading(true);
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
        setLoading(false);
        setError(err.message);
      });
  };
  // after rendering
  useEffect(() => {
    //Fetch users from API

    fetchUsers();
  }, []);

  const handleRemoveUser = (id) => {
    // update The Ui
    setUsers(users.filter((user) => user.id !== id));

    // Update The Server

    axios
      .delete(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => console.log("User Deleted"))
      .catch((err) => console.log(err.message));
  };

  const handleSubmit = (e) => {
    e.preventDefault()

    /*create a new user */

    // 1- update the ui
    const newUser = {
      id: 0,
      name,
      username,
      email

    }
    setUsers([newUser, ...users])


    // 2- update the server
    setLoading(true)
    axios.post('https://jsonplaceholder.typicode.com/users', newUser)
      .then((res) => {
        setUsers([...users, res.data])
        setLoading(false)

      })
      .catch((err) => {
        setError(err.message)
        setLoading(false)
      })




  }
  return (
    <div>
      {/* Create User Form */}
      <form
        onSubmit={handleSubmit}
        className="container mt-4 p-4 bg-white"
        style={{
          borderRadius: "1rem",
          boxShadow: "0 4px 24px rgba(0,0,0,0.12)",
          maxWidth: "500px",
        }}
      >
        <h4 className="mb-4 text-center">👤 Create User</h4>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            📝 Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            🆔 User Name
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            placeholder="Enter userName"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="Email" className="form-label">
            📧 Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button className="btn btn-primary w-100" type="submit">
          🚀 Create User
        </button>
      </form>
      <div className="container mt-4">
        {loading ? (
          <div className="spinner-border" role="status">
            <span className="sr-only"></span>
          </div>
        ) : (
          ""
        )}
        {error ? (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        ) : (
          ""
        )}
        <div className="row">
          {users.map((user) => (
            <div key={user.id} className="col-md-4 mb-4">
              <div className="card text-bg-light h-100">
                <div className="card-header position-relative">
                  {user.name}
                  <span
                    className="position-absolute top-0 end-0 d-flex align-items-center"
                    style={{ gap: "0.5rem", padding: "0.25rem" }}
                  >
                    <FaEdit
                      className="text-primary"
                      style={{ cursor: "pointer" }}
                      title="Update user"
                    />
                    <FaTrash
                      onClick={() => handleRemoveUser(user.id)}
                      className="text-danger"
                      style={{ cursor: "pointer" }}
                      title="Remove user"
                    />
                  </span>
                </div>
                <div className="card-body">
                  <h5 className="card-title">{user.username}</h5>
                  <p className="card-text">{user.email}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
