import React from "react";
import { NavbarContainer } from "./Navbar.styles";
import NavbarBrand from "./NavbarBrand";
import NavMenu from "./NavMenu";
const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarBrand />
      <NavMenu />
    </NavbarContainer>
  );
};

export default Navbar;
