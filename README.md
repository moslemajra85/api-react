# 🚀 React User Manager App

Welcome! In this project, we learn how to build a cool app with **React** that lets us **Create**, **Read**, **Update**, and **Delete** users from a server called [JSONPlaceholder](https://jsonplaceholder.typicode.com/).

---

## 🧩 What is React?

React is like LEGO for building websites!  
You build small pieces called **components** and put them together to make big things.

---

## 🗂️ How is our App Organized?

Here’s a simple diagram:

```
App.jsx
 ├── AddForm.jsx   📝 (Add new user)
 ├── UsersList.jsx 👥 (Show all users)
 │     └── UserCard.jsx 🧑 (Show one user with buttons)
 └── UpdateForm.jsx ✏️ (Update user info)
```

---

## 🧠 React Concepts We Use

### 1. **Components**

Think of components as small boxes that do one job.  
Example:

- `AddForm` is a box for adding users.
- `UserCard` is a box for showing one user.

### 2. **State (`useState`)**

State is like a memory for your component.  
Example:

```jsx
const [users, setUsers] = useState([]);
```

This remembers the list of users.

### 3. **Effect (`useEffect`)**

Effect is for doing things when your app starts, like fetching data from the server.  
Example:

```jsx
useEffect(() => {
  fetchUsers();
}, []);
```

This runs `fetchUsers` when the app loads.

### 4. **Connecting to the Server (API calls)**

We use a tool called **axios** to talk to the server.

- **Get users:**
  ```js
  axios.get("https://jsonplaceholder.typicode.com/users");
  ```
- **Add user:**
  ```js
  axios.post("https://jsonplaceholder.typicode.com/users", newUser);
  ```
- **Delete user:**
  ```js
  axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
  ```
- **Update user:**
  ```js
  axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, updatedUser);
  ```

---

## 🖼️ How Do Components Work Together?

Imagine your app is a house:

- 🏠 **App.jsx** is the house.
- 🚪 **AddForm.jsx** is the door to add new friends.
- 🛋️ **UsersList.jsx** is the living room showing all friends.
- 🧑 **UserCard.jsx** is a chair for each friend, with buttons to update or remove them.
- ✏️ **UpdateForm.jsx** is a special desk to change a friend's info.

---

## 🛠️ Example: Adding a User

1. Type the name, username, and email in the form.
2. Click **Create User** 🚀.
3. The app sends info to the server and shows your new friend!

---

## 💡 Tips for Building with React

- **Break things into small pieces (components).**
- **Use state to remember things.**
- **Use effect to do things when your app starts.**
- **Use props to send info between components.**

---

## 🎨 Diagrams

```
[App]
  |
  |-- [AddForm]   📝
  |
  |-- [UsersList] 👥
         |
         |-- [UserCard] 🧑
         |-- [UserCard] 🧑
         |-- [UserCard] 🧑
```

---

## 🏁 You Did It!

You learned how to:

- Use React components
- Use state and effect
- Connect to a server
- Make your app look nice with Bootstrap and emojis

Keep building and have fun! 🎉
