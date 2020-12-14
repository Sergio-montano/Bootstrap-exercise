// Allows for the FirstComponent component to be used in this file/component (NOTE: File path must start with ./ and the .js is not included in the file name)
import FirstComponent from './first-component/FirstComponent'
import Props from './props/Props'
import PropsDestruct from './props-destruct/PropsDestruct'
import Events from './events/Events'
import State from './state/State'

function App() {
  return (
    <div>
      <h1>Hello from the App Component</h1>
      <FirstComponent />
      {/* The value of 'Santa' is being passed as an argument for the NAME prop in the Props component */}
      <Props name='Santa' quote='Ho Ho Ho!' num={12} />
      <Props name='Scrooge' quote='Ba Humbug' num={25} />
      {/* To set a non-string value to a props brackets {} must be used */}
      <PropsDestruct greet='Nice to see you Buckaroo' farewell='Later Pal' />
      <PropsDestruct greet='Sup' farewell='Peace, We Outta Here!' />
      {/* This PropsDestruct component uses the preset values for the props since no values are passed in here */}
      <PropsDestruct />
      <Events />
      <State />
    </div>
  );
}
export default App;
