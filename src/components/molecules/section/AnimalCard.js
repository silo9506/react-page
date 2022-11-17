import { useRef } from "react";
import styled, { keyframes } from "styled-components";
import Card from "../../atoms/Card";
import adoption from "../../../assets/jpg/adoption.jpg";

const AnimalCard = ({ animal, photo }) => {
  const Row01Ref = useRef(null);
  const Row02Ref = useRef(null);
  return (
    <Container>
      <Background />
      <Text>아이들의 가족이 되어주세요</Text>

      {animal.length !== 0 && photo.length !== 0 ? (
        <>
          <Row ref={Row01Ref}>
            {animal.map((animal, index) => {
              if (index <= 5 || index > 10) return null;
              else {
                return (
                  <Card
                    passRef={Row01Ref}
                    data={animal}
                    key={animal.ANIMAL_NO}
                    photo={photo.find(
                      (photo) => animal.ANIMAL_NO === photo.ANIMAL_NO
                    )}
                  ></Card>
                );
              }
            })}
          </Row>

          <Row reverse={true} ref={Row02Ref}>
            {animal.map((animal, index) => {
              if (index >= 5 || index > 10) return null;
              else {
                return (
                  <Card
                    passRef={Row02Ref}
                    data={animal}
                    key={animal.ANIMAL_NO}
                    photo={photo.find(
                      (photo) => animal.ANIMAL_NO === photo.ANIMAL_NO
                    )}
                  ></Card>
                );
              }
            })}
          </Row>
        </>
      ) : null}
    </Container>
  );
};

export default AnimalCard;
const move = keyframes`
0%{transform:translateX(100%)};
100%{transform:translateX(-100%)}

`;
const Container = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(${adoption});
  background-size: 100% 100%;
  background-repeat: no-repeat;
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

const Text = styled.h1`
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  color: white;
  font-size: 35px;
  text-align: center;
`;
const Row = styled.div`
  white-space: nowrap;
  display: flex;
  align-items: center;
  animation: ${move} 25s linear infinite
    ${(props) => props.reverse && `reverse`};
  height: 100%;
  margin: 35px 0px;
`;
