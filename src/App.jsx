import { useState } from "react";
import StartGame from "./Components/StartGame";
import GamePlay from "./Components/GamePlay";



function App() {
  const[isGameStarted,setIsGameStarted]=useState(false);

  const toggleGamePlay=()=>{
    setIsGameStarted((prev)=>!prev);
  }
  return <>{isGameStarted?<GamePlay/>:<StartGame toggle={toggleGamePlay}/>}</>//passing props in StartGame
     
    
  //use curly braces to write the js logic
}

export default App;
