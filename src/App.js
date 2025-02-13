import './App.css';
import { useParams } from 'react-router-dom';
import RepetitionInterface from './components/RepetitionExercise';
import DurationInterface from './components/DurationExercise';


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

export function App() {
  return (
    <div className="App">
      <h1>Exercise App</h1>
      <h3>Select an Exercise:</h3>
      {/*Each path the buttons are connected to have a special parameter that is used to place the exercise name on the corresponding screen*/}
      <div id= "buttons">
        <button onClick={()=> window.location.href = "/Repetition/Pushups"}>Pushups</button>
        <br></br>
        <button onClick={()=> window.location.href = "/Duration/Bicycling"}>Bicycling</button>
        <br></br>
        <button onClick={()=> window.location.href = "/Repetition/Jumping Jacks"}>Jumping Jacks</button>
        <br></br>
        <button onClick={()=> window.location.href = "/Duration/Running"}>Running</button>
        <br></br>
        <button onClick={()=> window.location.href = "/Repetition/Situps"}>Situps</button>
      </div>
      
    </div>
  );
}
