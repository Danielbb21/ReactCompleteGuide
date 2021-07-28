import React, { useState } from 'react'
import './App.css';
import ErrorModal from './Components/UI/ErrorModal';
import AddUser from './Components/Users/AddUser';
import UserList from './Components/Users/UserList';
function App() {
  
  const [usersList, setUsersList] = useState([]);

  const handleAddUser = (userAdded) =>{
    setUsersList((previosUsers)=>{
      const oldList = [...previosUsers];
      oldList.push({id: Math.random().toString(), name: userAdded.name, age: userAdded.age});
      return oldList;
    });
  }

  return (
    <div >
      <AddUser onSaveUser = {handleAddUser} />
      <UserList users = {usersList}/>
     
    </div>
  );
}

export default App;
