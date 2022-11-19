import styled from "styled-components";

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 10px;
  padding-bottom: 30px;
  box-sizing: border-box;
  background-color: white;
  img {
    width: 100%;
    height: 100%;
    padding-bottom: 60px;
  }
  .title {
    width: 90%;
    padding-bottom: 15px;
    border-bottom: 1px solid #cdcdcd;
    text-align: center;
    font-size: 20px;
    color: #333;
  }
  button {
    border: none;
    background-color: transparent;
    margin-top: 15px;
    font-size: 16px;
    color: #263e7b;
    font-weight: 600;
  }
  .mediabox {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .mini {
    display: none;
  }

  @media screen and (max-width: 800px) {
    flex-direction: row;
    margin-bottom: 15px;
    padding-bottom: 0px;
    img {
      height: 150px;
      padding: 0px;
      width: 40%;
    }
    .mediabox {
      display: unset;
      padding: 10px 15px 0;
      width: 60%;
    }
    .title {
      text-align: start;
    }
    .mini {
      display: block;
      color: #269cd3;
      font-weight: bold;
      font-size: 14px;
      line-height: 12px;
      margin-bottom: 15px;
    }
  }
`;
const IconWrapper = styled.div`
  background-color: rgb(6, 31, 92);
  border-radius: 50%;
  position: absolute;
  top: 50%;
  width: 92px;
  height: 92px;
  /* transform: translateY(-5%); */
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  div {
    padding: 5px 0px;
    width: 55%;
    height: 55%;
  }
  svg {
    fill: white;
  }
  @media screen and (max-width: 800px) {
    display: none;
  }
`;

const VideoCard = ({ item }) => {
  return (
    <Container>
      <IconWrapper>
        <div>{item.icon()}</div>
        <p>{item.text}</p>
      </IconWrapper>
      <img src={item.img} alt="img" />
      <div className="mediabox">
        <div className="mini">{item.text}</div>
        <div className="title">{item.title}</div>
        <button>샘플영상</button>
      </div>
    </Container>
  );
};
export default VideoCard;
