// PROPS
// React Props are like function arguments in JavaScript. Props are arguments passed into React components. This is done like attributes are added to HTML elements.

const Props = (props) => {
  return(
    <div>
      {/* The value/argument passed into the NAME prop comes from the component this component is passed into */}
      <h2>Hello, I'm {props.name} and this is the Props Component</h2>
      <h2>{props.quote}</h2>
      <h2>This is a number: {props.num}</h2>
    </div>
  );
}
export default Props;