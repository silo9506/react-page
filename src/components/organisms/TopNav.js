import styled from "styled-components";
import seoul from "../../assets/jpg/seoul_simbol.jpg";
import { ReactComponent as Speaker } from "../../assets/svg/speaker.svg";
import Logo from "../atoms/Logo";
import NavMenu from "../molecules/NavMenu";

const Topnav = () => {
  return (
    <Container>
      <TopBox>
        <Wrapper>
          <SeoulLogo>
            <img src={seoul} alt="Logo" />
          </SeoulLogo>
          <Notification>
            <Speaker />
            AI SEOUL 2022 - AI로 그려보는 서울의 미래 (11.3. 목~11.4. 금 / 양재
            aT 센터)
          </Notification>
          <SeoulMenuBox>
            <SeoulMenu>서울소식</SeoulMenu>
            <SeoulMenu>응답소</SeoulMenu>
            <SeoulMenu>정보공개</SeoulMenu>
            <SeoulMenu>분야별정보</SeoulMenu>
          </SeoulMenuBox>
        </Wrapper>
      </TopBox>

      {/* <BottomBox>
        <Wrapper>
          <Logobox>
            <Logo />
          </Logobox>
          <NavMenu />
        </Wrapper>
      </BottomBox> */}
    </Container>
  );
};

const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: white;
  z-index: 1;
`;
const TopBox = styled.div`
  border-bottom: 1px solid #dddddd;
  height: 50px;
`;
const SeoulLogo = styled.div`
  flex: 0.3;
  img {
    width: 105px;
    height: 30px;
    padding-bottom: 5px;
  }
  @media screen and (max-width: 450px) {
    img {
      width: 70px;
    }
  }
`;
const Notification = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  svg {
    margin-right: 10px;
    width: 20px;
    height: 20px;
  }
  @media screen and (max-width: 960px) {
    display: none;
  }
`;
const SeoulMenuBox = styled.div`
  display: flex;
  height: 100%;
`;

const SeoulMenu = styled.button`
  padding: 0 10px;
  cursor: pointer;
  border: none;
  background-color: unset;
  height: 100%;
  font-size: 14px;
  @media screen and (max-width: 450px) {
    font-size: 12px;
  }
`;

const BottomBox = styled.div`
  border-bottom: 1px solid #dddddd;
  height: 100px;
`;

const Logobox = styled.div`
  height: 60px;
  width: 180px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
  margin: 0 auto;
  max-width: 1200px;
  align-items: center;
`;

export default Topnav;
