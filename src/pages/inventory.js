import { useState } from 'react';
import Link from 'next/link';
import { data } from '../data/data';

export default function Inventory() {
  // State to manage the list of items in inventory
  const [items, setItems] = useState(data.items);

  // State to manage the new item being added
  const [newItem, setNewItem] = useState({ name: '', stock: 0 });

  // State to manage the current page for pagination
  const [currentPage, setCurrentPage] = useState(1);

  // Number of items to display per page
  const itemsPerPage = 5;

  // Calculate the indices for the items to display on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  // Get the items to display on the current page
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  // Function to handle pagination
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Function to handle adding a new item to the inventory
  const addItem = (event) => {
    event.preventDefault();
    setItems([...items, { ...newItem, id: items.length + 1 }]);
    setNewItem({ name: '', stock: 0 });
  };

  // Function to handle deleting an item from the inventory
  const deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  // Function to handle changes in the input fields for the new item
  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewItem({ ...newItem, [name]: value });
  };

  return (
    <div className="container mx-auto p-8">
      {/* Page Title */}
      <h1 className="text-4xl font-bold mb-8 text-center">Manage Inventory</h1>
      
      {/* Back to Dashboard Link */}
      <div className="mb-8">
        <Link href="/" passHref legacyBehavior>
          <a className="text-blue-500 hover:text-blue-700">&larr; Go Back to Dashboard</a>
        </Link>
      </div>

      {/* Add New Item Form */}
      <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Add New Item</h2>
        <form onSubmit={addItem} className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <input
            className="border p-2 rounded-md"
            type="text"
            name="name"
            value={newItem.name}
            onChange={handleChange}
            placeholder="Item Name"
          />
          <input
            className="border p-2 rounded-md"
            type="number"
            name="stock"
            value={newItem.stock}
            onChange={handleChange}
            placeholder="Stock Level"
          />
          <button type="submit" className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-700">
            Add Item
          </button>
        </form>
      </div>

      {/* Inventory List */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Inventory List</h2>
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 border-b">ID</th>
              <th className="py-2 border-b">Name</th>
              <th className="py-2 border-b">Stock</th>
              <th className="py-2 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map(item => (
              <tr key={item.id}>
                <td className="border px-4 py-2">{item.id}</td>
                <td className="border px-4 py-2">{item.name}</td>
                <td className="border px-4 py-2">{item.stock}</td>
                <td className="border px-4 py-2">
                  <button
                    className="p-2 bg-red-500 text-white rounded-md hover:bg-red-700"
                    onClick={() => deleteItem(item.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination Controls */}
        <div className="flex justify-center mt-6">
          {Array.from({ length: Math.ceil(items.length / itemsPerPage) }, (_, i) => (
            <button
              key={i}
              onClick={() => paginate(i + 1)}
              className={`mx-2 p-3 rounded-lg ${currentPage === i + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-blue-500 hover:text-white'}`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
