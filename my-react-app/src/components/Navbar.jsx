import styled from "styled-components";
import {
  FaHome,
  FaUser,
  FaStop,
  FaFlag,
  FaList,
  FaEnvelope,
  FaChevronRight,
} from "react-icons/fa";
import logo from "../assets/logo.png";

const GlowLogo = styled.img`
  width: 80px;
  height: 80px;
  animation: glow 2s infinite alternate;

  @keyframes glow {
    0% {
      filter: drop-shadow(0 0 5px #fff) drop-shadow(0 0 10px #ff0);
    }
    50% {
      filter: drop-shadow(0 0 20px #fff) drop-shadow(0 0 40px #ff0);
    }
    100% {
      filter: drop-shadow(0 0 5px #fff) drop-shadow(0 0 10px #ff0);
    }
  }
`;

const NavbarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 280px;
  height: 100vh;
  padding: 24px 12px;
  background-color: rgb(31, 26, 26);
  color: white;
  position: fixed;
  top: 0;
  left: 0;
`;

const Brand = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 40px;
`;

const BrandText = styled.span`
  font-size: 32px;
  font-weight: 900;
  background: linear-gradient(90deg, #ff0, #ff6b6b, #8063ff);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: glowText 2s infinite alternate;

  @keyframes glowText {
    0% {
      text-shadow: 0 0 5px #ff0, 0 0 10px #ff6b6b;
    }
    100% {
      text-shadow: 0 0 20px #ff0, 0 0 40px #ff6b6b;
    }
  }
`;

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;

const NavItem = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  color: white;
  font-size: 16px;
  padding: 10px;
  border-radius: 8px;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background: linear-gradient(90deg, #00f260, #0575e6, #7b2ff7);
    color: white;
  }
`;

const NavItemContent = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <Brand>
        <GlowLogo src={logo} alt="Logo" />
        <BrandText>LisTube</BrandText>
      </Brand>
      <Menu>
        <NavItem href="">
          <NavItemContent>
            <FaHome /> <span>Home</span>
          </NavItemContent>
          <FaChevronRight />
        </NavItem>
        <NavItem href="">
          <NavItemContent>
            <FaUser /> <span>About</span>
          </NavItemContent>
          <FaChevronRight />
        </NavItem>
        <NavItem href="">
          <NavItemContent>
            <FaStop /> <span>Movies</span>
          </NavItemContent>
          <FaChevronRight />
        </NavItem>
        <NavItem href="">
          <NavItemContent>
            <FaFlag /> <span>Pages</span>
          </NavItemContent>
          <FaChevronRight />
        </NavItem>
        <NavItem href="">
          <NavItemContent>
            <FaList /> <span>Categories</span>
          </NavItemContent>
          <FaChevronRight />
        </NavItem>
        <NavItem href="">
          <NavItemContent>
            <FaEnvelope /> <span>Contact</span>
          </NavItemContent>
          <FaChevronRight />
        </NavItem>
      </Menu>
    </NavbarContainer>
  );
};

export default Navbar;
