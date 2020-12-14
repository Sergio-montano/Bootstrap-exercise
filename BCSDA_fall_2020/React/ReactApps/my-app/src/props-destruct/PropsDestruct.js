// PROPS WITH DESTRUCTURING

// The props object can be destructured to make using the properties in the component easier. Also, the properties can be given preset values which will be used if no argument is passed in for a prop
const PropsDestruct = ({greet = 'Hello', farewell = 'Goodbye'}) => {
  return (
    <div>
      <h2>{greet}, this is the Props Destruct Component</h2>
      <h2>{farewell}</h2>
    </div>
  );
}
export default PropsDestruct;