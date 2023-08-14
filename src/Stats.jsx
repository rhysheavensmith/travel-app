export default function Stats({ travelItems }) {
  const percentPacked = () => {
    // filter over the items for the ones that are packed
    const packedItems = travelItems.filter((item) => item.packed).length;
    // store the total in an array
    const totalItems = travelItems.length;
    // divide the packed items by the total items x 100 for a percentage
    return totalItems > 0 ? (packedItems / totalItems) * 100 : 0;
  };

  return (
    <div className="stats">
      <h1>
        Stats
        <h3>{`Things to pack: ${
          travelItems.length > 0 ? travelItems.length : ""
        }`}</h3>
        <h3>{`Percentage of items packed: ${percentPacked()}%`}</h3>
      </h1>
    </div>
  );
}
