import { useState } from "react";  //hook


function App() {

  let [counter, setCounter] = useState(15);     //gives two things in array first the variable which it handles and second the fucntion

  let add = () => {
    setCounter(counter+1);    //function to update counter from hook
  }

  let remove = () =>{
    if(counter != 0) setCounter(counter-1);
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value  : {counter}</h2>

      <button onClick={add}>Add value</button>
      <br />
      <button onClick={remove}>remove value</button>
    </>
  )
}

export default App
