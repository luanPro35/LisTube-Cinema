import NavbarItem from "./NavItem";
import { Menu } from "./Navbar.styles";
import {
  FaHome,
  FaUser,
  FaStop,
  FaFlag,
  FaList,
  FaEnvelope,
} from "react-icons/fa";

const menuItems = [
  { icon: FaHome, label: "Home", href: "/" },
  { icon: FaUser, label: "About", href: "/about" },
  { icon: FaStop, label: "Movies", href: "/movies" },
  { icon: FaFlag, label: "Pages", href: "/pages" },
  { icon: FaList, label: "Categories", href: "/categories" },
  { icon: FaEnvelope, label: "Contact", href: "/contact" },
];

const NavMenu = () => {
  return (
    <Menu>
      {menuItems.map((item, index) => (
        <NavbarItem
          key={index}
          icon={item.icon}
          label={item.label}
          href={item.href}
        />
      ))}
    </Menu>
  );
};

export default NavMenu;
