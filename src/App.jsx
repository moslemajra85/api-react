import { useState, useEffect } from "react";
import axios from "axios";
import AddForm from "./components/AddForm.jsx";
import UsersList from "./components/UsersList.jsx";


const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [showUpdateForm, setShowUpdateForm] = useState(false);




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


  return (
    <div>
      {/* Create User Form */}
      <AddForm users={users} setUsers={setUsers} />

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
          <UsersList handleRemoveUser={handleRemoveUser} users={users} />
        </div>
      </div>
    </div>
  );
};

export default App;
