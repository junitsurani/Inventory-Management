import OrderItem from './OrderItem';

export default function OrderList({ orders, statusFilter, searchTerm, handleStatusFilterChange, setSearchTerm }) {
  // Filter orders based on status and search term
  const filteredOrders = orders.filter(order => 
    (statusFilter ? order.status === statusFilter : true) &&
    (searchTerm ? order.customer.toLowerCase().includes(searchTerm.toLowerCase()) : true)
  );

  return (
    <div className="mb-4">
      {/* Search input */}
      <input
        type="text"
        className="p-2 border"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {/* Status filter dropdown */}
      <select
        className="ml-4 p-2 border"
        value={statusFilter}
        onChange={handleStatusFilterChange}
      >
        <option value="">All</option>
        <option value="Pending">Pending</option>
        <option value="Completed">Completed</option>
      </select>
      {/* Orders table */}
      <table className="min-w-full bg-white mt-4">
        <thead>
          <tr>
            <th className="py-2">ID</th>
            <th className="py-2">Customer</th>
            <th className="py-2">Status</th>
            <th className="py-2">Item Count</th>
          </tr>
        </thead>
        <tbody>
          {/* Map through filtered orders and render OrderItem component */}
          {filteredOrders.map(order => (
            <OrderItem key={order.id} order={order} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
