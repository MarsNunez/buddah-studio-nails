const Navbar = () => {
  return (
    <nav className="flex justify-between px-5 py-4 align-items border-b drop-shadow-lg">
      <h1 className="text-3xl">Buddha Studio Nails</h1>
      <ul className="flex gap-4 justify-center items-center">
        <li>Home</li>
        <li>Services</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
