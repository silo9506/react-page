import styled from "styled-components";
import { edstep, videocard, videoimglist } from "../../data/data";
import Donut from "../../atoms/Donut";
import VideoCard from "../../atoms/VideoCard";

const Animalhospital = () => {
  return (
    <Container>
      <Section>
        {videoimglist.map((item) => (
          <Imgbox center={item.center} key={item.title}>
            <img src={item.img} alt={"img"} />
            <div className="box">
              <div className="number">{item.number}</div>
              <h1 className="title">{item.title}</h1>
              <div className="text">{item.text}</div>
            </div>
          </Imgbox>
        ))}
      </Section>
      <Section>
        <Box>
          <h1>교육 과정</h1>
          <div className="line"></div>
          <Donutbox>
            {edstep.map((item) => (
              <Donut item={item} key={item.title} />
            ))}
          </Donutbox>
          <p>
            반려견 교육은 <strong>이해 · 관찰 · 활동 · 세부교육</strong>의
            단계를 거치며 반려견의 회복을 돕습니다.
            <br /> 위 세 가지를 중점으로 열심히 교육하시며 산책, 분리불안,
            화장실 등의 세부 교육을 진행하시면 효과적입니다.
          </p>
        </Box>
        <Cardbox>
          {videocard.map((item) => (
            <VideoCard key={item.text} item={item} />
          ))}
        </Cardbox>
      </Section>
    </Container>
  );
};

export default Animalhospital;

const Container = styled.div``;
const Section = styled.div`
  padding: 70px 120px 70px;
  box-sizing: border-box;
  width: 100%;
  :nth-child(2n) {
    background-color: rgb(247, 247, 247);
  }
  @media screen and (max-width: 1200px) {
    padding: 50px 15px;
  }
`;
const Imgbox = styled.div`
  white-space: pre-wrap;
  width: 100%;
  height: 330px;
  display: flex;
  flex-direction: ${({ center }) => center && "row-reverse"};
  margin-bottom: 30px;
  box-sizing: border-box;
  img {
    width: 50%;
    height: 100%;
    padding: 0 20px;
  }
  .box {
    width: 50%;
    padding: 0 20px;
  }
  .number {
    font-size: 36px;
    color: #269cd3;
    margin-bottom: 25px;
  }
  .title {
    font-size: 34px;
    margin-bottom: 25px;
    color: #333;
  }
  @media screen and (max-width: 1200px) {
    flex-direction: column;
    height: fit-content;
    word-break: keep-all;
    margin-bottom: 0px;
    img {
      width: 100%;
      padding: 0;
    }
    .box {
      width: 100%;
      padding: 0;
    }
    .number {
      font-size: 22px;
      margin-bottom: 0px;
    }
    .title {
      font-size: 24px;
    }
    .text {
      margin-bottom: 20px;
    }
  }
`;
const Box = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  h1 {
    font-size: 24px;
  }
  strong {
    color: #061f5c;
    font-weight: 600;
  }
  .line {
    margin: 20px 0;
    width: 44px;
    border-bottom: 3.5px solid black;
  }
`;
const Donutbox = styled.div`
  max-width: 930px;
  height: 180px;
  width: 100%;
  display: flex;
  margin: 25px 0px;
  div + div {
    padding-left: 25px;
  }
  @media screen and (max-width: 900px) {
    height: 80px;
    justify-content: center;
    div + div {
      padding-left: 15px;
    }
    > div {
      width: 130px;
    }
  }
  @media screen and (max-width: 600px) {
    > div {
      width: 85px;
    }
  }
`;
const Cardbox = styled.div`
  display: flex;
  height: 450px;
  margin-top: 30px;
  width: 100%;
  @media screen and (max-width: 800px) {
    flex-direction: column;
    height: fit-content;
  }
`;
