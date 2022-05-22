import React from 'react';

export default function UserList({userInputs, onDelete, onEdit}) {
    return (
        <div className="userlist" >
        {userInputs.map((userInput) => (
         <>
          <div className="card" key={userInput._id} >
              <p className="card-name">{userInput.name}</p>
              <p>{userInput.comment}</p>
              <p>{userInput.suggestion}</p>  
              
          </div>
          <div>
            <button >EDIT</button>

            <button onClick={() => onDelete(userInput)} className="btn btn-warning" >DELETE</button>
            </div>
            </>
       
          
        ))}
 </div>
    );
  }
