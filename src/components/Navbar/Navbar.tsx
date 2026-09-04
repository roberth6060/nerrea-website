import "./Navbar.css";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

function Navbar() {
  return (
    <header className="navbar">
      <nav className="navbar__content" aria-label="Main navigation">
        <a className="navbar__brand" href="/">
          NERREA
        </a>

        <ul className="navbar__links">
          {navItems.map((item) => (
            <li key={item.label}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
