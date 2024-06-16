import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Navbar() {
  const router = useRouter();
  const { pathname } = router;

  return (
    <nav className="bg-gray-800 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex space-x-4">
          <Link href="/" className={`text-white px-3 py-2 rounded-md text-sm font-medium ${pathname === '/' ? 'bg-gray-900' : 'hover:bg-gray-700'}`}>
              Dashboard
          </Link>
          <Link href="/orders" className={`text-white px-3 py-2 rounded-md text-sm font-medium ${pathname === '/orders' ? 'bg-gray-900' : 'hover:bg-gray-700'}`}>
              Orders
          </Link>
          <Link href="/inventory" className={`text-white px-3 py-2 rounded-md text-sm font-medium ${pathname === '/inventory' ? 'bg-gray-900' : 'hover:bg-gray-700'}`}>
              Inventory
          </Link>
        </div>
      </div>
    </nav>
  );
}
