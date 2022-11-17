import styled from "styled-components";
import BannerSlide from "../BannerSlide";

const Animalhospital = () => {
  return (
    <Container>
      <Ul>
        <Li>
          서울시에서는 반려동물 사육가구 증가에 따른 이웃갈등을 예방하고 행복한
          반려생활을 위하여 사회화ㆍ예절교육, 행동교정교육을 실시합니다.
        </Li>
        <Li>교육 대상 : 반려동물을 양육하는 서울시민 누구나</Li>
        <Li>교육과정(전 교육과정 무료)</Li>
      </Ul>
      <BannerSlide />
    </Container>
  );
};

export default Animalhospital;

const Container = styled.div`
  height: 100vh;
`;

const Ul = styled.ul`
  padding-left: 20px;
`;

const Li = styled.li`
  list-style: circle;
  list-style-position: inside;
  font-size: 18px;
  line-height: 200%;
`;
