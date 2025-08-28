import { BrandText, GlowLogo, Brand } from "./Navbar.styles";
import logo from "../../assets/logo.png";

const NavbarBrand = () => {
  return (
    <Brand>
      <GlowLogo src={logo} alt="Logo" />
      <BrandText>LisTube</BrandText>
    </Brand>
  );
};

export default NavbarBrand;
