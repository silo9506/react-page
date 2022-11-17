import styled from "styled-components";
import iseoulu from "../../assets/jpg/i_seoul_u.png";
import { ReactComponent as Cat } from "../../assets/svg/cat.svg";
import { ReactComponent as Dog } from "../../assets/svg/dog.svg";
import navercafe from "../../assets/jpg/naver_cafe.png";
import sciencelogo from "../../assets/jpg/science_logo.png";

const Footer = ({ seoulAnimal, shelter, pathname }) => {
  return (
    <Container pathname={pathname}>
      <Iseoulu></Iseoulu>
      <Countebox>
        <div>
          <Cat /> 서울시 유기동물 {seoulAnimal.length}마리
        </div>
        <div>
          <Dog /> 센터내 유기동물
          {shelter.length}마리
        </div>
      </Countebox>
      <Btns>
        <button></button>
        <button></button>
      </Btns>
    </Container>
  );
};

const Container = styled.footer`
  position: ${({ pathname }) =>
    pathname.includes("/service") ? "unset" : "absolute"};
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  height: 80px;
  font-size: 16px;
  background-color: #000100;
  color: white;
  display: flex;
  align-items: center;
  border-top: 1px solid white;
`;

const Iseoulu = styled.div`
  /* width: 150px; */
  min-width: 80px;
  width: 10rem;
  height: 40px;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-image: url(${iseoulu});
  margin: 0 24px;

  @media screen and (max-width: 600px) {
    width: 80px;
  }
`;
const Countebox = styled.div`
  flex: 1;
  height: 100%;
  border-left: 1px solid white;
  display: flex;
  align-items: center;
  padding: 24px 0 24px 24px;
  div {
    display: flex;
    text-align: center;
    align-items: center;
  }
  div + div {
    margin-left: 10px;
  }

  svg {
    fill: white;
    width: 45px;
    height: 45px;
  }
  @media screen and (max-width: 900px) {
    font-size: 14px;
  }
  svg {
    width: 35px;
    height: 35px;
  }
  @media screen and (max-width: 780px) {
    font-size: 12px;
    padding: 12px;
    svg {
      width: 25px;
      height: 25px;
    }
  }
  @media screen and (max-width: 450px) {
    div {
      flex-direction: column;
    }
    svg {
      width: 15px;
      height: 15px;
    }
  }
`;

const Btns = styled.div`
  /* border-left: 1px solid white; */
  height: 100%;
  padding: 24px;
  display: flex;
  align-items: center;
  & :first-child {
    width: 100px;
    height: 70px;
    background-image: url(${sciencelogo});
    background-size: 100% 100%;
    background-color: #000100;
  }
  button {
    background-image: url(${navercafe});
    padding: 0px;
    margin-left: 10px;
    cursor: pointer;
    width: 40px;
    height: 40px;
    background-size: cover;
    background-color: #494949;
    border-radius: 50%;
  }
  @media screen and (max-width: 850px) {
    & :first-child {
      width: 50px;
      height: 50px;
    }
    button {
      width: 35px;
      height: 35px;
    }
  }
  @media screen and (max-width: 600px) {
    display: none;
  }
`;

export default Footer;

// import styled from "styled-components";
// import iseoulu from "../../assets/jpg/i_seoul_u.png";
// import sciencelogo from "../../assets/jpg/science_logo.png";
// import navercafe from "../../assets/jpg/naver_cafe.png";
// import arrowUp from "../../assets/jpg/arrow_up.png";

// const Footer = () => {
//   return (
//     <Container>
//       <Wrapper>
//         <LogoBox>
//

//           <ISeoulU>
//             <img src={iseoulu} alt="I SEOUL U" />
//           </ISeoulU>
//         </LogoBox>
//
//         <Etc>
//           <button></button>
//           <Btns>
//             <button></button>
//             <button></button>
//           </Btns>
//         </Etc>
//       </Wrapper>
//     </Container>
//   );
// };

// const Container = styled.footer`
//   position: absolute;
//   bottom: 0;
//   left: 0;
//   right: 0;
//   width: 100%;
//   padding: 24px 0px;
//   margin: 0 auto;
//   font-size: 14px;
//   background-color: #000100;
//   color: white;
// `;
// const Wrapper = styled.div`
//   display: flex;
//   align-items: center;
//   max-width: 1200px;
//   margin: 0 auto;
//   width: 100%;
//   justify-content: space-between;
// `;
// const LogoBox = styled.div``;

// const ISeoulU = styled.div`
//   padding-top: 20px;
//   img {
//     width: 100%;
//     height: 55px;
//   }
// `;
// const Contact = styled.div`
//   color: #9e9e9e;
//   white-space: pre-wrap;
//   margin-left: 40px;
//   flex: 1;
// `;
// const Etc = styled.div`
//   display: flex;
//   align-items: flex-end;
//   & > button {
//     width: 100px;
//     height: 70px;
//     background-image: url(${sciencelogo});
//     background-size: cover;
//     background-color: #000100;
//   }
// `;
// const Btns = styled.div`
//   button:first-child {
//     background-image: url(${navercafe});
//   }
//   button {
//     padding: 0px;
//     margin-left: 10px;
//     cursor: pointer;
//     width: 40px;
//     height: 40px;
//     background-image: url(${arrowUp});
//     background-size: cover;
//     background-color: #494949;
//     border-radius: 50%;
//   }
// `;

// export default Footer;
