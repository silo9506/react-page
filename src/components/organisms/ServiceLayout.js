import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import background from "../../assets/jpg/wrapper.jpg";

const ServiceLayout = () => {
  const location = useLocation();
  const { title } = location.state;

  return (
    <Container>
      <Titlebox>
        <div>
          <h1>{title}</h1>
        </div>
      </Titlebox>
      <Contents>
        <Outlet />
      </Contents>
    </Container>
  );
};

export default ServiceLayout;

const slide = keyframes`
from{
  transform: translateX(100vw);
  opacity: 0;
}
to{
  transform: translateY( -50%);
  opacity: 1;
}
`;

const Container = styled.div`
  width: 100%;
`;

const Titlebox = styled.div`
  div {
    position: relative;
    color: white;
    font-size: 40px;
    width: 100%;
    background-image: url(${background});
    min-height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  h1 {
    animation: ${slide} 2s ease-out;
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    transform: translateY(-50%);
    text-align: center;
  }
`;
const Contents = styled.main`
  position: relative;
  width: 100%;
`;
