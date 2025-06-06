import { responsiveFontSizes } from '@mui/material';
import React, { useEffect, useState } from 'react'
import userDetails from './userDetails';

function FetchApi() {

    const [ userdata, setUserData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect( () =>{

        const fetchUsers = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/users");
            
            if (!response.ok) {

                throw new Error("Error ${response.status}");
            }
            const data = await response.json();
            setUserData(data); 
            } catch (err){
                setError(err.message);
            }finally{
                setLoading(false);
            }
        };
        fetchUsers();
    },[]);

    if(loading) {
        return <p>Loading ...</p>;
    }
    if (error) {
        return <p> Error: {error}</p>
    }

  return (
    <div>
    <ul>
      { userdata.map(user => (
            <li key={user.id}>{user.name}</li>
      ))
      }
      </ul>
    </div>
  )
}

export default FetchApi;
