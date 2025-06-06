import React, { useEffect, useState } from "react";

function StopWatch() {

    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(prev => prev+1);

        }, 1000);

        return ()=> clearInterval(interval);

    }, []);

    return (

        <div>

            <p>{seconds} Stopwatch</p>
        </div>
    )
}

export default StopWatch;