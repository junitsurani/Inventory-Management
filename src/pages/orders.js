import { useState } from 'react';
import Link from 'next/link';
import { data } from '../data/data';
import useLocalStorage from '../hooks/useLocalStorage'; 

export default function OrdersPage() {
  // State to store orders, initialized from localStorage or data.js
  const [orders, setOrders] = useLocalStorage('orders', data.orders); 

  // State to store the selected status filter
  const [statusFilter, setStatusFilter] = useState('');

  // State to manage current page for pagination
  const [currentPage, setCurrentPage] = useState(1);

  // State to store the selected order details for the modal
  const [selectedOrder, setSelectedOrder] = useState(null);

  // Number of items per page for pagination
  const itemsPerPage = 5;

  // Pagination calculations
  const indexOfLastOrder = currentPage * itemsPerPage;
  const indexOfFirstOrder = indexOfLastOrder - itemsPerPage;
  const currentOrders = orders.slice(indexOfFirstOrder, indexOfLastOrder);

  // Filter orders based on status filter
  const filteredOrders = statusFilter ? orders.filter(order => order.status === statusFilter): orders;

  // Handle change in status filter
  const handleStatusFilterChange = (event) => {
    setStatusFilter(event.target.value);
  };

  // Handle pagination
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Set the selected order to be viewed in the modal
  const viewOrderDetails = (order) => {
    setSelectedOrder(order);
  };

  // Close the order details modal
  const closeOrderDetails = () => {
    setSelectedOrder(null);
  };

  return (
    <div className="container mx-auto p-8">
      {/* Page Title */}
      <h1 className="text-4xl font-bold mb-8 text-center">Manage Orders</h1>

      {/* Back to Dashboard Link */}
      <div className="mb-8">
        <Link href="/" passHref legacyBehavior>
          <a className="text-blue-500 hover:text-blue-700">&larr; Go Back to Dashboard</a>
        </Link>
      </div>

      {/* Orders List and Filter */}
      <div className="grid grid-cols-1 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Orders List</h2>
          
          {/* Status Filter Dropdown */}
          <div className="mb-4">
            <select
              className="mb-4 p-2 border"
              value={statusFilter}
              onChange={handleStatusFilterChange}
            >
              <option value="">All</option>
              <option value="Pending">Pending</option>
              <option value="Completed">Completed</option>
            </select>
          </div>

          {/* Orders Table */}
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2">ID</th>
                <th className="py-2">Customer</th>
                <th className="py-2">Status</th>
                <th className="py-2">Item Count</th>
                <th className="py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredOrders.map(order => (
                <tr key={order.id}>
                  <td className="px-6 py-4 whitespace-nowrap">{order.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{order.customer}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{order.status}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{order.items.length}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button
                      onClick={() => viewOrderDetails(order)}
                      className="text-indigo-600 hover:text-indigo-900"
                    >
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination Controls */}
          <div className="flex justify-center mt-6">
            {Array.from({ length: Math.ceil(orders.length / itemsPerPage) }, (_, i) => (
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
      
      {/* Modal for Order Details */}
      {selectedOrder && (
        <div className="fixed inset-0 overflow-y-auto z-50 flex justify-center items-center">
          <div className="relative bg-white p-4 max-w-3xl w-full mx-auto rounded-lg shadow-lg">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold">Order Details</h2>
              <button
                onClick={closeOrderDetails}
                className="text-gray-500 hover:text-gray-700 focus:outline-none"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-medium">Customer: {selectedOrder.customer}</h3>
              <p className="mt-2">Status: {selectedOrder.status}</p>
              <h4 className="mt-4 text-md font-medium">Items:</h4>
              <ul className="mt-2">
                {selectedOrder.items.map(item => (
                  <li key={item.id} className="flex justify-between">
                    <span>{item.name}</span>
                    <span className="font-medium">Quantity: {item.quantity}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
