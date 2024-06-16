import { useRouter } from 'next/router';
import { data } from '../../data/data';

export default function OrderDetails() {
  const router = useRouter(); // Access the router instance
  const { id } = router.query; // Extract the 'id' parameter from the router query
  const order = data.orders.find(order => order.id == id); // Find the order in the data based on the 'id'

  // If no order is found with the given 'id', display a message
  if (!order) {
    return <div>Order not found</div>;
  }

  // Function to mark the order as completed
  const markAsCompleted = () => {
    order.status = "Completed"; // Update the status of the order to "Completed"

    // Navigate back to the orders list page
    router.push('/orders');
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Order Details</h1>
      <p>Customer: {order.customer}</p>
      <p>Status: {order.status}</p>
      <h2 className="text-xl font-bold mt-4">Items</h2>
      <ul>
        {/* Iterate through the items in the order and display each item */}
        {order.items.map(item => (
          <li key={item.id}>{item.name} (Quantity: {item.quantity})</li>
        ))}
      </ul>
      {/* Button to mark the order as completed */}
      <button className="mt-4 p-2 bg-blue-500 text-white" onClick={markAsCompleted}>
        Mark as Completed
      </button>
    </div>
  );
}
