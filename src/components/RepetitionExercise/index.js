import { useState } from "react";

function RepetitionInterface(props) {
    const [reps, repCounter] = useState(0); //set up the reps/repCounter useState for the rep incrementer usage

    return (
        <div>
           <h1>{props.exercise}</h1>  {/*This takes the path parameter and places it into a header*/}
           <h3>Reps: {reps}</h3>
           <button onClick={() => repCounter(reps + 1)}>Complete Rep</button> {/*This button */}
           <button onClick={() => repCounter(0)}>Reset</button>
           <button onClick={() => window.location.href = "/"}>Return</button>
        </div>         
    );
}

export default RepetitionInterface;