import React from 'react'
import '../styles/App.css';
import { UserProfile } from './UserProfile';


const App = () => {

  return (
    <div id="main">
      <h1>User Profile</h1>
      <h1 id="name">Name: {user.name}</h1>
      <h1 id="age">Age: {user.age}</h1>
    </div>
  )
}


export default App;
export {UserContext}
