export default function InventoryItem({ item, deleteItem }) {
    return (
      <tr>
        <td className="border px-4 py-2">{item.id}</td>
        <td className="border px-4 py-2">{item.name}</td>
        <td className="border px-4 py-2">{item.stock}</td>
        <td className="border px-4 py-2">
          <button className="p-2 bg-red-500 text-white" onClick={() => deleteItem(item.id)}>Delete</button>
        </td>
      </tr>
    );
  }
  