import styled from "styled-components";

const Card = ({ photo, data, passRef }) => {
  const play = (e) => {
    if (passRef === undefined) return;
    passRef.current.style.animationPlayState = "running";
  };
  const pause = (e) => {
    if (passRef === undefined) return;
    passRef.current.style.animationPlayState = "paused";
  };
  return (
    <Container onMouseOver={(e) => pause(e)} onMouseOut={(e) => play(e)}>
      <Image photo={"https://" + photo.PHOTO_URL} />
      <Detail>
        {data.NM}
        <br />
        {data.BREEDS}/{data.SEXDSTN === "M" ? "수컷" : "암컷"}/{data.AGE}/
        {data.BDWGH}Kg
      </Detail>
    </Container>
  );
};

export default Card;

const Container = styled.div`
  width: 240px;
  margin: 2px;
  /* height: 150px; */
  height: 100%;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  margin: 0 10px;
  @media screen and (max-width: 600px) {
    width: 150px;
  }
`;
const Image = styled.div`
  background-image: url(${(props) => props.photo});
  background-size: 100% 100%;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  width: 100%;
  height: 100%;
`;
const Detail = styled.div`
  padding: 12px;
  background-color: rgb(32, 32, 32);
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  color: #fff;
  text-overflow: ellipsis;
  overflow: hidden;
`;
