import styled from "styled-components";
import { ArrowRight, ArrowLeft } from "../atoms/ArrowBtn";
import { useDispatch, useSelector } from "react-redux";
import { CarouselActions } from "../../redux/slice/carouselSlice";

const BannerSlide = () => {
  const { counte, max, array, transition } = useSelector(
    (state) => state.carouselSlice.banner
  );
  const dispatch = useDispatch();
  const { bannerMove, bannerLastMove } = CarouselActions;

  const onClickUp = (e) => {
    dispatch(bannerMove("up"));
    setTimeout(() => {
      e.target.disabled = false;
    }, 300);

    if (counte === max - 1) {
      setTimeout(() => {
        dispatch(bannerLastMove("up"));
      }, 300);
    }
    e.target.disabled = true;
  };

  const onClickDown = (e) => {
    dispatch(bannerMove("down"));
    setTimeout(() => {
      e.target.disabled = false;
    }, 300);
    if (counte === 0) {
      setTimeout(() => {
        dispatch(bannerLastMove("down"));
      }, 300);
    }
    e.target.disabled = true;
  };

  return (
    <Container>
      <Banners max={max} counter={counte} transition={transition}>
        {array.map((banner, index) => (
          <img src={banner} key={index} alt="banner Img" />
        ))}
      </Banners>
      <Btnwrapper onClick={onClickDown} left={true}>
        <ArrowLeft />
      </Btnwrapper>
      <Btnwrapper onClick={onClickUp}>
        <ArrowRight />
      </Btnwrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 120px;
  position: relative;
  overflow: hidden;
`;
const Banners = styled.div`
  display: flex;
  transition: ${({ transition }) => transition && "0.3s"};
  transform: ${({ max, counter }) => `translateX(-${(max + counter) * 100}%)`};
  img {
    width: 100%;
    height: 115px;
    flex-shrink: 0;
  }
`;
const Btnwrapper = styled.div`
  width: 60px;
  height: 60px;
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translatey(-50%);
  left: ${(props) => props.left && 10}px;
`;

export default BannerSlide;
