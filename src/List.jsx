export default function List({ travelItems, packItem, deleteItem }) {
  return (
    <div className="list-container">
      {travelItems.map((item, index) => (
        <div className="item" key={index}>
          <input type="checkbox" onChange={() => packItem(index)} />
          <h3 className={item.packed ? "checked" : ""}>
            {item.itemNum} x {item.item}
          </h3>
          <button onClick={() => deleteItem(index)}>x</button>
        </div>
      ))}
    </div>
  );
}
