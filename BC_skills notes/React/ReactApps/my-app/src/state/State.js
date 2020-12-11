// STATE
// React components have a built-in state object. The state object is where property values that belong to the component are stored. When the state object changes, the component re-renders.

// The following import must be included at the beginning of any component file that uses the useState function
import { useState } from 'react';

const State = () => {
  // useState sets the starting state value to the argument that is passed into the useState function
  // The useState function returns an array with two values: The first is a reference to the value passed into the useState function. The second is a function that is used to update the value of the value passed into the useState function.
  // Destructing is commonly used to set these values to variables which are used in the component. Also, it is common practice to use the variable name that is set to the first value to create the variable name for the 2nd value with "set" preceding it (Example: [chickens, setChickens]).
  const [daysUntilXmas, setDaysUntilXmas] = useState(25);
  const [isFavorite, setIsFavorite] = useState(true);
  const toggleIsFavorite = () => setIsFavorite(!isFavorite);
  return (
    <div>
      <h1>This is the State Component</h1>
      <h1>{daysUntilXmas} days until Christmas</h1>
      {/* When the setDaysUntilXmas function runs it uses the value that is passed in to set the new value for daysUntilXmas and then re-renders the component */}
      <button onClick={() => setDaysUntilXmas(daysUntilXmas - 1)}>Subtract A Day</button>
      <h1>Christmas {isFavorite ? "IS" : "IS NOT"} my favorite holiday</h1>
      <button onClick={toggleIsFavorite}>CHANGE MIND</button>
    </div>
  );
}
export default State;