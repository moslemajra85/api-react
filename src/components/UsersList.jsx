import UserCard from "./UserCard";

const UsersList = ({ users, handleRemoveUser }) => {
  return (
    <>

      {users.map((user) => (

        <UserCard key={user.id} user={user} handleRemoveUser={handleRemoveUser} />
        
      ))}

    </>
  )
}

export default UsersList