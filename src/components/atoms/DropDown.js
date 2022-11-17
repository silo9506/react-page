import styled from "styled-components";

const DropDown = ({ item }) => {
  return item ? (
    <Container>
      {item.map((li) => (
        <Li key={li}>{li}</Li>
      ))}
    </Container>
  ) : null;
};

export default DropDown;

const Container = styled.ul`
  width: 220px;
  right: 0;
  position: absolute;
  z-index: 1;
  background-color: #fff;
  border: 1px solid #ddd;
  box-shadow: 5px 5px 5px rgb(0 0 0 / 20%);
  padding: 10px 20px;
  border-radius: 10px;
  display: none;
`;
const Li = styled.li`
  padding: 10px 0px;
  font-size: 17px;
  color: #555;
`;
