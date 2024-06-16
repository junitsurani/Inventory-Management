import { useRouter } from 'next/router';
import { data } from '../../data/data';

export default function OrderDetails() {
  // Use Next.js router to get the order ID from the query parameters
  const router = useRouter();
  const { id } = router.query;

  // Find the order with the matching ID from the data
  const order = data.orders.find(order => order.id == id);

  // If order is not found, display a message
  if (!order) {
    return <div>Order not found</div>;
  }

  // Function to mark the order as completed and redirect to the orders page
  const markAsCompleted = () => {
    order.status = "Completed";
    router.push('/orders');
  };

  return (
    <div className="container mx-auto p-4">
      {/* Page Title */}
      <h1 className="text-2xl font-bold mb-4">Order Details</h1>
      
      {/* Display order customer and status */}
      <p>Customer: {order.customer}</p>
      <p>Status: {order.status}</p>

      {/* Display list of items in the order */}
      <h2 className="text-xl font-bold mt-4">Items</h2>
      <ul>
        {order.items.map(item => (
          <li key={item.id}>{item.name} (Quantity: {item.quantity})</li>
        ))}
      </ul>

      {/* Button to mark order as completed */}
      <button 
        className="mt-4 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
        onClick={markAsCompleted}
      >
        Mark as Completed
      </button>
    </div>
  );
}
