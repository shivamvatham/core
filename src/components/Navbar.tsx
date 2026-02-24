import { Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="bg-gray-900 text-white h-16 fixed top-0 left-0 right-0 z-10 flex items-center px-6 shadow-lg">
      <Menu size={24} className="mr-4" />
      <h1 className="text-xl font-bold">My Application</h1>
    </header>
  );
}
