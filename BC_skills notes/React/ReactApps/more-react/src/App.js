import Styles from './styles/Styles'
import Menu from './menu/Menu'

const menuItems = [
  {
    id: 1,
    type: 'Slice of Cheese',
    price: 2,
    qty: 0
  },
  {
    id: 2,
    type: 'Slice of Pepperoni',
    price: 3,
    qty: 0
  },
  {
    id: 3,
    type: 'Slice of Sausage',
    price: 3,
    qty: 0
  }
];

function App() {
  return (
    <div>
      <h1>Hello from the App Component!</h1>
      <Styles />
      <Menu startingItems={menuItems} />
    </div>
  );
}
export default App;