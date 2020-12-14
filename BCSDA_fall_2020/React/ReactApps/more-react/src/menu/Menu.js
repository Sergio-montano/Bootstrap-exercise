// STATE AS PROPS

import { useState } from 'react'
import MenuItem from './../menu-item/MenuItem'
import './Menu.css'

const Menu = ({ startingItems }) => {
  const [items, setItems] = useState(startingItems);

  // In React you are not allowed to mutate (A.K.A. Change) the state directly for an array or object. Instead you create a new copy of the array or object.
  const updateQty = (id, newQty) => {
    const newItems = items.map(item => {
      if(item.id === id){
        return {...item, qty: newQty}
      }
      return item;
    });
    setItems(newItems);
  }

  let total = 0;
  items.forEach(item => {
    total = item.price * item.qty + total;
  });
  const gTotal = total;

  return (
    <div className='Menu'>
      <h1 className='Menu-title'>Tony Pizza's Pizzeria</h1>
      <div>
        {items.map(item => (
          <MenuItem
            // Keys help React identify which items have changed, are added, or are removed. Keys should be given to the elements inside the array to the give the elements a stable identity
            key={item.id}
            id={item.id}
            type={item.type}
            price={item.price}
            qty={item.qty}
            updateQty={updateQty}
          // {...item}
          />
        ))}
      </div>
      <h2>Grand Total: ${gTotal}</h2>
    </div>
  );
}
export default Menu;