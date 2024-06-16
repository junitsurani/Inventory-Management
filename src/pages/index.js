import Link from 'next/link';

export default function Home() {
  return (
    <div className="container mx-auto p-8">
      {/* Page Title */}
      <h1 className="text-4xl font-bold mb-8 text-center">Welcome to Your Inventory Management System</h1>
      
      {/* Grid layout for the sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Manage Orders Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Manage Orders</h2>
          <p className="mb-4">
            Efficiently track and process orders from your customers. Manage statuses, view detailed order information, and streamline your order fulfillment process.
          </p>
          <Link href="/orders" passHref legacyBehavior>
            <a className="block w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg text-center">
              Go to Orders
            </a>
          </Link>
        </div>
        
        {/* Manage Inventory Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Manage Inventory</h2>
          <p className="mb-4">
            Keep track of your inventory levels in real-time. Add, edit, or delete items as needed. Ensure efficient stock management to meet customer demand effectively.
          </p>
          <Link href="/inventory" passHref legacyBehavior>
            <a className="block w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg text-center">
              Go to Inventory
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
