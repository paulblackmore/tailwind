import Link from "next/link";

const Header = () => (
  <header className="w-full h-auto bg-slate-600 p-6 text-white flex justify-between">
    <h1 className="font-bold">Tailwind</h1>
    <nav className="flex justify-end">
      <div className="flex justify-between w-60">
        <Link
          className="text-yellow-300 font-semibold hover:text-yellow-500"
          href="/"
        >
          Users
        </Link>
        <Link
          className="text-yellow-300 font-semibold hover:text-yellow-500"
          href="/"
        >
          Profile
        </Link>
        <Link
          className="text-yellow-300 font-semibold hover:text-yellow-500"
          href="/"
        >
          Settings
        </Link>
      </div>
    </nav>
  </header>
);

export default Header;
