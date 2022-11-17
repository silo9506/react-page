import styled from "styled-components";
import arrowright from "../../assets/jpg/arrow_right.png";
import arrowleft from "../../assets/jpg/arrow_left.png";
export const ArrowRight = () => {
  return <BtnR />;
};

export const ArrowLeft = () => {
  return <BtnL />;
};

const BtnR = styled.button`
  background-image: url(${arrowright});
  background-size: cover;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-color: white;
  border: 1px solid white;
  border-radius: 50%;
  padding: 0px;
  opacity: 0.4;
`;

const BtnL = styled(BtnR)`
  background-image: url(${arrowleft});
`;
