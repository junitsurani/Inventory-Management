export default function AddItemForm({ newItem, handleChange, addItem }) {
    return (
      <form onSubmit={addItem} className="mb-4">
        <input
          className="border p-2 mr-2"
          type="text"
          name="name"
          value={newItem.name}
          onChange={handleChange}
          placeholder="Item Name"
        />
        <input
          className="border p-2 mr-2"
          type="number"
          name="stock"
          value={newItem.stock}
          onChange={handleChange}
          placeholder="Stock Level"
        />
        <button type="submit" className="p-2 bg-blue-500 text-white">Add Item</button>
      </form>
    );
  }
  