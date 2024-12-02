import Link from "next/link";

const Header = () => (
  <header className="w-full h-auto bg-transparent p-6 text-white flex justify-between absolute top-0 z-10">
    <h1 className="font-bold">Tailwind</h1>
    <nav className="flex justify-end">
      <div className="flex justify-between w-60">
        <Link
          className="text-gray-50 font-semibold hover:text-gray-100"
          href="/"
        >
          Users
        </Link>
        <Link
          className="text-gray-50 font-semibold hover:text-gray-100"
          href="/"
        >
          Profile
        </Link>
        <Link
          className="text-gray-50 font-semibold hover:text-gray-100"
          href="/"
        >
          Settings
        </Link>
      </div>
    </nav>
  </header>
);

export default Header;
