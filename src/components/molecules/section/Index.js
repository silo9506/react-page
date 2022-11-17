import Typewriter from "typewriter-effect";
import styled from "styled-components";
import CatandDog from "../../../assets/jpg/catanddog.jpg";
import Button from "../../atoms/Button";

const Index = () => {
  return (
    <Container>
      <Background />
      <Title>
        <h1> 사람과 동물이 모두 행복한 공존도시 서울</h1>
        <Typewriter
          options={{ autoStart: true, loop: true }}
          onInit={(typewriter) => {
            typewriter
              .typeString("동물의 안전과 생명이 보장되는 도시")
              .deleteAll()

              .typeString("사람과 동물이 함께 누리는 동물복지 도시")
              .deleteAll()

              .typeString("생명 존중의 가치를 추구하는 도시 공동체")
              .deleteAll()
              .start();
          }}
        />
        <Button>단체 소개</Button>
      </Title>
    </Container>
  );
};
const Container = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  background-color: white;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-image: url(${CatandDog});
`;
const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: #101110;
  opacity: 0.8;
`;
const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  color: white;
  font-size: 25px;
  h1 {
    font-size: 45px;
    margin-bottom: 30px;
    text-align: center;
  }
  button {
    margin-top: 100px;
  }

  @media screen and (max-width: 500px) {
    h1 {
      font-size: 33px;
    }
    font-size: 16px;
  }
`;

export default Index;
