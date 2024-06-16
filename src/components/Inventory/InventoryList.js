import InventoryItem from './InventoryItem';

export default function InventoryList({ items, deleteItem }) {
  return (
    <table className="min-w-full bg-white">
      <thead>
        <tr>
          <th className="py-2">ID</th>
          <th className="py-2">Name</th>
          <th className="py-2">Stock</th>
          <th className="py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {items.map(item => (
          <InventoryItem key={item.id} item={item} deleteItem={deleteItem} />
        ))}
      </tbody>
    </table>
  );
}
