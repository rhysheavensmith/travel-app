export default function List({ travelItems }) {
  return (
    <div className="container">
      {travelItems.map((item, index) => (
        <div className="item">
          <input type="checkbox" />
          <h3 key={index}>
            {item.itemNum} x {item.item}
          </h3>
          <button>x</button>
        </div>
      ))}
    </div>
  );
}
