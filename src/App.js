import './App.css';
import { useParams, useNavigate } from 'react-router-dom';
import RepetitionInterface from './components/RepetitionExercise';
import DurationInterface from './components/DurationExercise';
import RunningInterface from './components/RunningExercise';



export function DurExercise() {
  const {name} = useParams(); //pull parameter and assign it to "exercise" prop. This is the same for the RepExercise below.
  return (
    <DurationInterface exercise={name}/>
  )
    
}
  
export function RepExercise() {
    const {name} = useParams();
    return (
      <RepetitionInterface exercise={name}/>
    )
}

export function RunExercise() {
    const {name} = useParams();
      return (
        <RunningInterface exercise={name}/>
      )
}

export function App() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <h1>Exercise App</h1>
      <h3>Select an Exercise:</h3>
      {/*Each path the buttons are connected to have a special parameter that is used to place the exercise name on the corresponding screen*/}
      <div id= "buttons">
        <button onClick={()=> navigate("/Repetition/Pushups")}>Pushups</button>
        <br></br>
        <button onClick={()=> navigate("/Duration/Bicycling")}>Bicycling</button>
        <br></br>
        <button onClick={()=> navigate("/Repetition/Jumping Jacks")}>Jumping Jacks</button>
        <br></br>
        <button onClick={()=> navigate("/Running")}>Running</button>
        <br></br>
        <button onClick={()=> navigate("/Repetition/Situps")}>Situps</button>
      </div>
      
    </div>
  );
}
