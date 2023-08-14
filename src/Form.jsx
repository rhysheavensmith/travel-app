export default function Form({
  selectNumber,
  selectItem,
  addItem,
  item,
  itemNum,
}) {
  return (
    <div className="packing-form">
      <h2>What do you need to pack?</h2>
      <form>
        <select
          name="number"
          id="number"
          value={itemNum}
          onChange={selectNumber}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
        <input
          type="text"
          name="item"
          id="item"
          placeholder="Add an item"
          onChange={selectItem}
          value={item}
        />
        <button onClick={addItem} type="button">
          Add
        </button>
      </form>
    </div>
  );
}
