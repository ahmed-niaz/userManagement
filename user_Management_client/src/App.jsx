

import { useEffect, useState } from 'react'
import './App.css'

function App() {
const [users,setUser] = useState([]);

useEffect(()=>{
  fetch(`http://localhost:3000/users`)
  .then(res => res.json())
  .then(data => setUser(data))

},[])
const handleUser = (e) =>{
  e.preventDefault()
 const form = e.target;
 const name = form.name.value;
 const email = form.email.value;
 const user = {name,email}
 console.log(user);
 fetch(`http://localhost:3000/users`,{
  method: 'POST',
  headers: {
    'content-type': 'application/json'
  },
  body: JSON.stringify(user)

 })
 .then(res => res.json())
 .then(data =>{
  console.log(`inside post response ${data}`);
 })
}
  return (
   <main>
    <h2>User Management System</h2>
    <form onSubmit={handleUser}>
      <input type="text" name="name" id="" />
      <br />
      <input type="email" name="email" id="" />
      <br />
      <input type="submit" value="add user" />
    </form>
    {
      users.map(user => (
        <li key={user.id} style={{'display':'flex'}}>
          <p>{user.id}</p>
          <p>{user.name}</p>
          <p>{user.email}</p>
        </li>
      ))
      }
   </main>
  )
}

export default App
