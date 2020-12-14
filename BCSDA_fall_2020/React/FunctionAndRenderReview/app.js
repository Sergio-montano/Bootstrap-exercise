// REVIEW OF FUNCTION COMPONENTS AND RENDER METHOD

// Function Components are React Components created using a JavaScript Function
/*
Syntax for a Function Component

const FunctionComponentName = () => {
  return (
    JSX/HTML Element(s) Go Here
  );
}
*/

// The ReactDOM Render Method renders/displays a React Component in the Browser (Ex: Chrome)
/*
Syntax for a Render Method

ReactDOM.render(<ComponentName/>, document.getElementById('root'));
*/

// Example 1
// Function Component
const Hello = () => {
  return (
    <h1>Hello</h1>
  );
}

// Render Method
ReactDOM.render(<Hello />, document.getElementById('root'));

// Example 2
const MultipleElements = () => {
  return (
    <div>
      <h1>First h1</h1>
      <h1>Second h1</h1>
    </div>
  );
}

ReactDOM.render(<MultipleElements />, document.getElementById('root'));

// Example 3
const JSComponent = () => {
  const num1 = 1;
  const num2 = 5;
  return (
    <h1>{num1 + num2}</h1>
  );
}

ReactDOM.render(<JSComponent />, document.getElementById('root'));

// Example 4
const Comp1 = () => {
  return (
    <div>
      <Hello />
      <h1>Goodbye</h1>
    </div>
  );
}

const App = () => {
  return (
    <div>
      <Comp1 />
      <MultipleElements />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));



