import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { NavItem, NavItemContent } from "./Navbar.styles";
import { FaChevronRight } from "react-icons/fa";

const NavbarItem = ({ icon, label, href, isActive }) => {
  const IconComponent = icon;
  const navigate = useNavigate();

  const handleClick = useCallback(
    (event) => {
      event.preventDefault();
      navigate(href);
    },
    [navigate, href]
  );

  return (
    <NavItem
      href={href}
      onClick={handleClick}
      className={isActive ? "active" : ""}
    >
      <NavItemContent>
        <IconComponent /> <span>{label}</span>
      </NavItemContent>
      <FaChevronRight />
    </NavItem>
  );
};

export default NavbarItem;
