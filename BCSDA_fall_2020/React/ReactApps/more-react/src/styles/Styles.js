// STYLING IN REACT

// When importing a CSS file the ".css" file extension must be included
import './Styles.css'

const Styles = () => {
  return (
    // To style a React component, a class name should be added to the top leve/parent element. This allows for styles to be applied to the specific component.
    <div className='Styles'>
      <h1>Hello from the Styles Component</h1>
      {/* Inline Styling */}
      {/* Must use double brackets for inline styling. Also, style properties must be written in camelCase. Finally, commas are used to separate styles */}
      <h2 style={{color: 'green', backgroundColor: 'red'}}>Merry Christmas!</h2>
    </div>
  );
}
export default Styles;