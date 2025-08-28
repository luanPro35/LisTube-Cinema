import React, { useCallback } from "react";
import { NavItem, NavItemContent } from "./Navbar.styles";
import { FaChevronRight } from "react-icons/fa";

const NavbarItem = ({ icon, label, href }) => {
  const IconComponent = icon;

  const handleClick = useCallback(
    (event) => {
      if (href && href.startsWith("header-section")) {
        event.preventDefault();
        const targetElement = document.getElementById(href);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      }
    },
    [href]
  );

  const navItemProps = {};
  if (href && !href.startsWith("header-section")) {
    navItemProps.href = href;
  }

  return (
    <NavItem {...navItemProps} onClick={handleClick}>
      <NavItemContent>
        <IconComponent /> <span>{label}</span>
      </NavItemContent>
      <FaChevronRight />
    </NavItem>
  );
};

export default NavbarItem;
