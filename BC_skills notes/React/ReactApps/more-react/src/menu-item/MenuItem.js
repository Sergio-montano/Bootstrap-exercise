const MenuItem = ({ id, type, price, qty, updateQty }) => {
  const addSlice = () => {
    updateQty(id, qty + 1);
  }
  return (
    <div>
      <div>{type}</div>
      <div>${price}</div>
      <div>Qty: {qty}</div>
      <button onClick={addSlice}>ADD A SLICE</button>
      <div>Total: ${qty * price}</div>
    </div>
  );
}
export default MenuItem;