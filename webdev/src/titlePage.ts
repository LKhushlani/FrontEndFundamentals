import React, { useState } from 'react';


function FetchDataComponent() {
 
    const [data, setData] = useState([]);
    const [error, setError] = useState(false);
    const [loaded, setLoaded] = useState(false);


    const handleFetch  = async () => {

        try
        {
        setError(false);
        const response = await fetch("https://jsonplaceholder.typicode.com/todos");
        if (!response.ok){
            throw new Error("Error fetching data from api");
        }
        const apiData = await response.json()
        setData(apiData);
        setLoaded(true);
        }
        catch(err)
        {
             console.log("Error in try", err);
             setError(true);
        }

    };

    return (
        <div>
            <h1>To Do List</h1>
            <button onClick={handleFetch}>Click Me</button>

            {error && <p>Error fetching data.</p>}
            {loaded && (
                <ul>
                    {data.map((item) => (
                        <li key={item.id}>{item.title}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}

}

export default FetchDataComponent;