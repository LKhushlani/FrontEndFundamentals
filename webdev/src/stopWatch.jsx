import React, { useEffect, useState, useRef } from "react";

function StopWatchComponent() { 

    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime]= useState(0);
    const intervalIdRef = useRef(null);
    const startTimeRef = useRef(0); 
    
    useEffect( () => {

        if(isRunning){

            intervalIdRef.current = setInterval( () => {

                setElapsedTime(Date.now() - intervalIdRef.current)
            }, 10);
        }
        return () => {

            clearInterval(intervalIdRef.current);
        }
    }, [isRunning]);

    function start() {
        setIsRunning(true);
        startTimeRef.current = Date.now() - elapsedTime;

    }
    function stop() {
        setIsRunning(false);
    
    }

    function reset(){

        setElapsedTime(0);
        setIsRunning(false);
    }

    function formatTime() {

        let hours = 10;
        let min = 1000;
        let seconds = 0;

    }
    return (

        
        <div className="stopWach">
        <div className="controls">
        <button onClick={start}>Start</button>
        <button onClick={stop}>Stop</button>
        <button onClick={reset}>Reset</button>


        </div>
        </div>

    )
}

export default StopWatchComponent;
