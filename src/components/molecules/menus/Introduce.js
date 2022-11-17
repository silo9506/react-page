import styled from "styled-components";
import vision from "../../../assets/jpg/slogan.png";

const Introduce = () => {
  return (
    <Container>
      <Slogan>“시민과 동물이 행복하게 공존하는 서울을 만들겠습니다.”</Slogan>
      <Vision>
        <img src={vision} />
      </Vision>
      <Vedio>
        {
          <iframe
            width="100%"
            height="100%"
            src={`//www.youtube.com/embed/okmxcI13jIA`}
            frameBorder="none"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        }
      </Vedio>
    </Container>
  );
};

export default Introduce;

const Container = styled.div`
  padding: 50px 0;
`;

const Vedio = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 0 30px;
  height: 500px;
  margin: 0 auto;
`;

const Slogan = styled.div`
  text-align: center;
  color: #594a41;
  font-weight: 600;
  font-size: 24px;
  padding: 0 20px;
`;

const Vision = styled.div`
  display: flex;
  justify-content: center;
  padding: 50px 30px;
  img {
    height: 300px;
    width: 100%;
  }
`;
