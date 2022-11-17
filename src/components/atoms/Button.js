import styled from "styled-components";

const Button = ({ children, onClick }) => {
  return <Container onClick={onClick}>{children}</Container>;
};

const Container = styled.button`
  width: 200px;
  font-size: 16px;
  line-height: 50px;
  background: #fff;
  border-radius: 25px;
  font-weight: 700;
`;
export default Button;
