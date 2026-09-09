import {
  NavbarContainer,
  NavbarContent,
  NavbarBrand,
  NavbarLinks,
} from "./Navbar-style";
import logo from "../../assets/images/Logo.png";
import { NavLink } from "react-router-dom";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Administrative Help", href: "/administrative-help" },
  { label: "Workforce", href: "/workforce" },
  { label: "Digital Marketing", href: "/digital-marketing" },
  { label: "About", href: "/about" },
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
              <NavLink to={item.href} end={item.href === "/"}>
                {item.label}
              </NavLink>
            </li>
          ))}
        </NavbarLinks>
      </NavbarContent>
    </NavbarContainer>
  );
}

export default Navbar;
