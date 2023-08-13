export default function List({ travelItems }) {
  return (
    <div>
      <ul>
        {travelItems.map((item, index) => (
          <li key={index}>
            {item.itemNum} x {item.item}
          </li>
        ))}
      </ul>
    </div>
  );
}
