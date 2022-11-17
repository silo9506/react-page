import styled from "styled-components";
import TitleLogo from "../../assets/jpg/title_logo01.png";
// import TitleLogoB from "../../assets/jpg/title_logoB.png";

const Logo = ({}) => {
  return <Container src={TitleLogo} />;
};

export default Logo;

const Container = styled.img`
  width: 100%;
  height: 100%;
`;
