import { useState, useEffect } from "react";
import React from 'react';
import "./App.css";
import UserForm from "./components/UserForm.js";
import UserList from "./components/UserList.js";
import {getUserInput,createUserInput, updateUserInput, deleteUserInput} from './restapi/restapi';

function App() {
  // here we create an array state to store the contact form data
  const [userInputs, setUserInputs] = useState([]);

    const refreshUserInput = async() => {
      const newUserInput = await getUserInput();
      setUserInputs(newUserInput);
    }
    useEffect(() => {
      refreshUserInput();
    },[])

    const handleDelete = async(userInput) => {
      await deleteUserInput(userInput);
      refreshUserInput();
    }


  const addUserInput = (userInput) => {
    setUserInputs([...userInputs, userInput]);
  };
  console.log(userInputs);


  return (
    <div className="App">
      <UserForm addUserInput={addUserInput} />
      <UserList userInputs={userInputs} onDelete={handleDelete}/>
    </div>
  );
}

export default App;
