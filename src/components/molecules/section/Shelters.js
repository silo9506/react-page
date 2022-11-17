import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Autoplay } from "swiper";
import shelter01 from "../../../assets/jpg/shelter01.png";
import shelter02 from "../../../assets/jpg/shelter02.png";
import shelter03 from "../../../assets/jpg/shelter03.png";
import shelter04 from "../../../assets/jpg/shelter04.png";
import shelter05 from "../../../assets/jpg/shelter05.png";
import shelter06 from "../../../assets/jpg/shelter06.png";
import shelter07 from "../../../assets/jpg/shelter07.png";
import shelterdog from "../../../assets/jpg/shelterdog.jpg";

import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Shelters = () => {
  const shelters = [
    shelter01,
    shelter02,
    shelter03,
    shelter04,
    shelter05,
    shelter06,
    shelter07,
  ];

  return (
    <Container>
      <Background />
      <h1>서울 특별시 내 보호소들을 소개합니다.</h1>
      <Content>
        <SwiperBox>
          <Swiper
            scrollbar={{ draggable: true }}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards, Autoplay]}
            className="mySwiper"
          >
            {shelters.map((shelter, index) => (
              <SwiperSlide key={index}>
                <Img shelter={shelter}></Img>
              </SwiperSlide>
            ))}
          </Swiper>
        </SwiperBox>
        <Text>
          <p>
            서울에서 발생하는 유기동물은 한해 약 5,600마리에 이르지만, 그중 약
            1/10은 새로운 보호자를 만나지 못해 안락사되고 있습니다. 서울시는
            ‘유기동물 안락사 제로화, 입양 100%’실현을 위하여, 유기동물의
            치료부터 입양, 교육까지 전담하는 동물보호 전문시설인
            서울동물복지지원센터 들을 운영 및 후원하여 시민 여러분께 건강한
            반려동물이 입양되도록 힘쓰고 있습니다. 앞으로 유기동물 입양이 우리
            사회의 보편적인 반려동물 문화가 될 수 있도록 시민 여러분의 많은
            관심과 성원 부탁드립니다.
          </p>
        </Text>
      </Content>
    </Container>
  );
};

export default Shelters;

const Container = styled.section`
  width: 100%;
  height: 100%;
  color: white;
  display: flex;
  flex-direction: column;
  position: relative;
  background-image: url(${shelterdog});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  h1 {
    position: relative;
    font-size: 35px;
    margin-bottom: 50px;
    text-align: center;
  }
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: #101110;
  opacity: 0.8;
`;
const Img = styled.div`
  flex-basis: 350px;
  /* height: 350px; */
  height: 100%;
  background-image: url(${(props) => props.shelter});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`;

const Content = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  flex-direction: column-reverse;
`;
const SwiperBox = styled.div`
  flex: 1;
  padding-bottom: 25px;
  .swiper {
    width: 350px;
    height: 100%;
    color: black;
  }
  .swiper-slide {
    display: flex;
    justify-content: center;
    /* background-color: rgb(238, 237, 222); */
    background-color: white;
    border-radius: 20px;
  }

  @media screen and (max-width: 600px) {
    .swiper {
      width: 250px;
    }
  }
`;
const Text = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: center;

  p {
    flex-basis: 700px;
    font-size: 20px;
    word-break: keep-all;
    text-align: center;
    line-height: 150%;
    margin-bottom: 10px;
  }

  @media screen and (max-width: 550px) {
    P {
      font-size: 12px;
    }
  }
`;
