import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="mx-auto max-w-7xl flex justify-between px-5 py-4 align-items border-b drop-shadow-lg">
      <h1 className="text-3xl">Buda Studio Nails</h1>
      <ul className="flex gap-4 justify-center items-center">
        <Link href={"/"}>Home</Link>
        <Link href={"/servicesPage"}>Services</Link>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
