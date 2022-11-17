import { Link } from "react-router-dom";
import styled from "styled-components";
import backgroundMenu from "../../assets/jpg/backgroundMenu.png";
import iseoulyouW from "../../assets/jpg/i_seoul_u_white.png";
import { ReactComponent as X } from "../../assets/svg/x.svg";
import { useEffect } from "react";

const Menu = ({ ondisplay, close, pathname }) => {
  useEffect(() => {
    if (ondisplay === true) {
      document.body.style.cssText = `
      position: fixed;
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;`;
    }
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = "";
      window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
    };
  }, [ondisplay]);

  return (
    <Container ondisplay={ondisplay}>
      <Wrapper>
        <Ectbox>
          <Policy>
            <li>개인정보처리방침</li>
            <li>저작권보호 정책</li>
          </Policy>
          <ISeoulU>
            <img src={iseoulyouW} alt="I Seoul You"></img>
          </ISeoulU>
          <Contact>
            {`마포센터 : 서울특별시 마포구 매봉산로 31 에스플렉스 지하 1층
         ☏ 02-2124-2839
구로센터 : 서울특별시 구로구 경인로 472
         ☏ 02-2636-7645
Copyright © Ministry of the Interior and Safety. All Rights reserved.`}
          </Contact>
        </Ectbox>
        <Btnbox>
          <Navitems>
            <Link to={"service/introduce"} state={{ title: "센터 소개" }}>
              <li onClick={close}>센터 소개</li>
            </Link>
            <Link
              to={"service/animaladoption"}
              state={{ title: "입양동물 소개" }}
            >
              <li onClick={close}>입양동물 소개</li>
            </Link>
            <Link to={"service/q"} state={{ title: "자주묻는질문" }}>
              <li onClick={close}>자주묻는질문</li>
            </Link>
            <Link to={"service/notice"} state={{ title: "공지사항" }}>
              <li onClick={close}>공지사항</li>
            </Link>
            <Link
              to={"service/animalplay"}
              state={{ title: "서울시 반려견놀이터" }}
            >
              <li onClick={close}>서울시 반려견놀이터</li>
            </Link>
            <Link
              to={"service/animalhospital"}
              state={{ title: "우리동네 동물병원" }}
            >
              <li onClick={close}>우리동네 동물병원</li>
            </Link>
          </Navitems>
          <Exit onClick={close}>
            <X />
          </Exit>
        </Btnbox>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  opacity: ${({ ondisplay }) => (ondisplay ? 1 : 0)};
  z-index: ${({ ondisplay }) => (ondisplay ? 2 : -1)};
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: white;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`;
const Wrapper = styled.div`
  background-image: url(${backgroundMenu});
  background-size: 40% 65%;
  background-repeat: no-repeat;
  background-position: -5% 10%;
  margin: 0 auto;
  padding: 50px;
  max-width: 1200px;
  display: flex;
  background-color: white;
  width: 100%;
  height: 100%;
  @media screen and (max-width: 650px) {
    flex-direction: column-reverse;
    align-items: center;
    padding: 10px;
    background-image: unset;
  }
`;
const Ectbox = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;
const Contact = styled.div`
  color: #9e9e9e;
  white-space: pre-wrap;
`;
const Policy = styled.ul`
  display: flex;
  li:first-child {
    font-weight: bold;
    margin-right: 10px;
  }
`;
const ISeoulU = styled.div`
  padding: 10px 0;
  img {
    max-width: 350px;
    height: 55px;
  }
`;

const Btnbox = styled.div`
  padding-top: 50px;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: baseline;
`;
const Navitems = styled.ul`
  li {
    font-size: 30px;
    margin-bottom: 32px;
    transition: color 0.3s ease;
  }
`;
const Exit = styled.button`
  width: 25px;
  height: 25px;
  padding: 2.5px;
  border: 1px solid white;
  border-radius: 50%;
  cursor: pointer;
  background-color: black;
  svg {
    width: 100%;
    height: 100%;
    opacity: 0;
  }
  &:hover {
    transform: scale(2, 2);
    transition: all 0.5s;
    svg {
      transition: all linear 0.5s;
      opacity: 1;
    }
  }
`;
export default Menu;
