import { useState } from "react";
import { FaTrash, FaEdit } from "react-icons/fa";
import UpdateForm from "./UpdateForm";

const UserCard = ({ user, handleRemoveUser }) => {
  const [isVisible, setIsVisible] = useState(false)
  return (

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
              onClick={() => setIsVisible(!isVisible)}

            />
            <FaTrash
              className="text-danger"
              style={{ cursor: "pointer" }}
              title="Remove user"
              onClick={() => handleRemoveUser(user.id)}
            />
          </span>
        </div>
        <div className="card-body">
          <h5 className="card-title">{user.username}</h5>
          <p className="card-text">{user.email}</p>
        </div>
        {isVisible && "Hello There"}

      </div>


    </div>

  )
}

export default UserCard