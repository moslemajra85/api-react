 import { useState } from "react";
const UpdateForm = () => {
    const [name, setName] = useState("");
    const [username, setUserName] = useState("")
    const [email, setEmail] = useState("")


    const handleSubmit = (e) => {
        e.preventDefault()

        /*create a new user */

        // 1- update the ui
        // const newUser = {
        //     id: 0,
        //     name,
        //     username,
        //     email

        // }
        // setUsers([newUser, ...users])


        // 2- update the server

        // provide the updated data
        // axios.put(`https://jsonplaceholder.typicode.com/users/${user.id}`, newUser)
        //     .then((res) => {
        //         setUsers([...users, res.data])

        //     })
        //     .catch((err) => {
        //         setError(err.message)
        //     })




    }
    return (
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
    )
}

export default UpdateForm