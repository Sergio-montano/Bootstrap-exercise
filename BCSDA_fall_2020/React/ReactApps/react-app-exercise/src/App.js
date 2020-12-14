// 2b
import Exercise from './exercise/Exercise'
// 6g
import Bonus from './bonus/Bonus'

function App() {
  return (
    <div>
    {/* 2c */}
    <Exercise />
    {/* 3a */}
    <Exercise good="Awesome" bad="Terrible" />
    {/* 6h */}
    <Bonus />
    </div>
  );
}

export default App;
