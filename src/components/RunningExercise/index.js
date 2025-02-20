//reference(s): https://medium.com/how-to-react/simple-way-to-create-a-stopwatch-in-react-js-bcc0e08e041e

import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';

function RunningInterface() {

    const navigate = useNavigate();
    const [time, setTimer] = useState(0);  //stores time to increment/reset
    const [timeList, setTimeList] = useState([]);
    const [status, isActive] = useState("inactive"); //determines whether timer should be inactive or not (connected to Start/Reset button)
    const [label, chgLabel] = useState("Start"); //visually changes the Start/Reset button (the label. it changes the label.)

    useEffect(() => {
        var interval; //declare "interval" variable so we can actually clear the interval when we need to.
        console.log(status);
        if (status === "active") {
            interval = setInterval(() => setTimer(time + 1), 1000) //set the interval to increment the "time" variable by every second (1000 milliseconds = 1 second)
        }
        return () => {
            clearInterval(interval);   
        } //when timer is no longer active (through reset), clear the interval so that it doesn't keep incrementing (1st part of reseting the timer)
      }, [status, time]);

    var min = Math.floor(time / 60); //Takes the "time" variable and converts it into the number of minutes passed. Math.floor was used to keep whole numbers, since this logic will produce decimals otherwise

    var sec = time % 60; //Takes the "time" variable and only shows seconds under 60, by only pulling the remainder of seconds
      
    const timerToggle = () => {
        if (status === "active") { //if the timer is active, reset the "time" variable to 0 (2nd part of reseting the timer); set "status" to inactive and change the button label to "Start"
            setTimer(0);
            isActive("inactive");
            chgLabel("Start")
            setTimeList([]);
        } else { //if timer is not active, make it active and change the button label to "Reset"
        isActive("active");
        chgLabel("Reset")
        }
    };

    const lapLogger = () => {
        if (status === "active") {
            var item = min.toString().padStart(2, "0") + ":" + sec.toString().padStart(2, "0"); //take the current time and assign it to var "item"
            setTimeList([...timeList, item]); //push it to the back of the timeList array
        }
    }


    return (
        <div>
           <h1>Running</h1> {/*This takes the path parameter and places it into a header*/}
           <h3>Timer: {min.toString().padStart(2, "0")}:{sec.toString().padStart(2, "0")}</h3> {/*minutes and seconds are converted to strings to apply padStart, which allows for the 00:00 time format */}
           <button onClick={timerToggle}>
            {label}
           </button>
           <button onClick={lapLogger}>Lap</button>
           <button onClick={()=> navigate("/")}>Return</button>  
           <div className='lapList'>
            <ul>
                {timeList.map((item, i) => (
                    <li key={i}> Lap {i+1} : <strong>{item}</strong></li> //for all elements in the timeList array, make them list items and add them to the unordered list.
                ))}
            </ul>
           </div>
        </div>         
    );
}

export default RunningInterface;