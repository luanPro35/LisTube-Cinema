import styled from "styled-components";
export const NavbarContainer = styled.div`
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
export const Brand = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 40px;
`;
export const BrandText = styled.span`
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
export const GlowLogo = styled.img`
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
export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;
export const NavItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  color: white;
  font-size: 16px;
  padding: 10px;
  border-radius: 8px;
  transition: background-color 0.3s, color 0.3s;
  cursor: pointer;

  &:hover,
  &.active {
    background: linear-gradient(90deg, #00f260, #0575e6, #7b2ff7);
    color: white;
  }
`;
export const NavItemContent = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
