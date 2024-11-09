function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={item.packed}
        onChange={() => onToggleItem(item.id)}
      />
      {`${item.quantity} ${item.name}`}
      <button onClick={() => onDeleteItem(item.id)}>&times;</button>
    </li>
  );
}

export default Item;
