import Item from "./Item";

function PackingList({ PackingList, onDeleteItem, onToggleItem }) {
  return (
    <div className="list">
      <ul>
        {PackingList.map((item) => {
          return (
            <Item
              item={item}
              id={item.id}
              onDeleteItem={onDeleteItem}
              onToggleItem={onToggleItem}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default PackingList;
