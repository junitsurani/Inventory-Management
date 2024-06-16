import Link from 'next/link';

export default function OrderItem({ order }) {
  return (
    <tr>
      <td className="border px-4 py-2">
        {/* Link to the order details page */}
        <Link href={`/orders/${order.id}`} className="text-blue-500 hover:text-blue-700">
            {order.id}
        </Link>
      </td>
      <td className="border px-4 py-2">{order.customer}</td>
      <td className="border px-4 py-2">{order.status}</td>
      <td className="border px-4 py-2">{order.items.length}</td>
    </tr>
  );
}
