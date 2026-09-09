import {
  NavbarContainer,
  NavbarContent,
  NavbarBrand,
  NavbarLinks,
} from "./Navbar-style";
import logo from "../../assets/images/Logo.png";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

function Navbar() {
  return (
    <NavbarContainer>
      <NavbarContent>
        <NavbarBrand href="/">
          <img src={logo} alt="Nerrea" />
        </NavbarBrand>

        <NavbarLinks>
          {navItems.map((item) => (
            <li key={item.label}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </NavbarLinks>
      </NavbarContent>
    </NavbarContainer>
  );
}

export default Navbar;
