import React, { useState } from 'react';
import userDetails from './userDetails';

function UserData(){


    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [submit, setSubmit] = useState(false);

    function handleSubmit(e) {
        // writing to file 
        // userDetail.firstName = firstName;
        // userDetail.lastName = lastName;
        console.log(userDetails);
        userDetails.map((data) => {
          console.log(data.firstName);
          console.log(data.lastName);
        });
        e.preventDefault();
        setSubmit(true);
        
    }


    return(
        <div>
        <form onSubmit={handleSubmit}>
      <label>Enter First name:
        <input 
          type="text" 
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </label>
      <label>Enter Last name:
        <input 
          type="text" 
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </label>
      <input type="submit" />
    </form>
    { submit && 
    
   <div>
   {userDetails.map((data) =>( 
    <li key={data.id}>{data.firstName} {data.lastName}</li>
  
   
   ))}
   </div>
 }
</div>

    )
}

export default UserData;