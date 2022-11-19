import styled, { css } from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
`;
const Circle = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: ${({ backgroundImage }) => backgroundImage};
  /* background: conic-gradient(#058ef3 0% 20%, #dedede 20% 100%); */
`;
const Inner = styled.div`
  background-color: #fff;
  position: absolute;
  display: flex;
  justify-content: center;
  top: 50%;
  left: 50%;
  width: 95%;
  height: 95%;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  ${({ round }) =>
    round &&
    css`
      width: 45%;
      height: 45%;
    `}
`;
const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-size: 22px;
  font-weight: 800;
  color: #5c6b75;
  padding: 30px 0px;
  .title {
    color: #084672;
    font-size: 18px;
    padding-top: 10px;
  }
  @media screen and (max-width: 900px) {
    padding: 15px 0;
    font-size: 12px;
    .title {
      font-size: 10px;
      padding-top: 5px;
    }
  }
`;
const Iconwrapper = styled.div`
  padding-top: 20px;
  width: 50px;
  height: 50px;
  @media screen and (max-width: 900px) {
    width: 15px;
    height: 15px;
    padding-top: 5px;
  }
`;

const Donut = ({ item }) => {
  const backgroundImage = `conic-gradient(#269cd3 ${item.percent}% 20%, #dedede ${item.percent}% 100%);`;

  return (
    <Container>
      <Circle backgroundImage={backgroundImage}>
        <Inner round={item.round}>
          <Text>
            {item.step && <p>Step{item.step}</p>}
            {item.title && <h1 className="title">{item.title}</h1>}
            {item.icon && <Iconwrapper>{item.icon()}</Iconwrapper>}
          </Text>
        </Inner>
      </Circle>
    </Container>
  );
};

export default Donut;
