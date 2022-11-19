import styled, { css } from "styled-components";
import { useState } from "react";
import q from "../../../assets/jpg/question.png";
import answer from "../../../assets/jpg/answer.png";
import { questionSliceAction } from "../../../redux/slice/questionSlice";
import { useDispatch, useSelector } from "react-redux";
import BannerSlide from "../BannerSlide";

const Question = () => {
  const { change } = questionSliceAction;
  const dispatch = useDispatch();
  const { accordionData, activeindex } = useSelector(
    (state) => state.questionSlice
  );

  const onClickItem = (index) => {
    dispatch(change(index));
  };

  return (
    <Container>
      <Bannerbox>
        <BannerSlide />
      </Bannerbox>

      <Accordion>
        {accordionData.map(({ id, title, content }, index) => {
          return (
            <Item active={activeindex === index} key={id}>
              <Header onClick={() => onClickItem(index)}>
                <Q />
                {title}
                <BtnArrow />
              </Header>
              <Body>
                <A />
                {content}
              </Body>
            </Item>
          );
        })}
      </Accordion>
    </Container>
  );
};

export default Question;

const Container = styled.div`
  min-height: 50vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Bannerbox = styled.div`
  max-width: 1000px;
  padding: 50px;
`;

const Accordion = styled.ul`
  margin: 0px auto;
  border-radius: 8px;
  max-width: 1000px;
  width: 100%;
  padding: 50px;
  padding-top: 0px;
  @media screen and (max-width: 450px) {
    padding: 50px 5px;
  }
`;
const Item = styled.li`
  border: 1px solid #ececec;
  border-radius: 8px;
  & + & {
    margin-top: 10px;
  }
  ${({ active }) =>
    active &&
    css`
      ${Header} {
        color: #0c63e4;
        background-color: #e7f1ff;
        border: none;
        outline: solid #86b7fe;
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
      }
      ${BtnArrow} {
        transform: rotate(-180deg);
      }
      ${Body} {
        display: block;
      }
    `}
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px 16px 70px;
  cursor: pointer;
  position: relative;
`;
const Q = styled.div`
  position: absolute;
  background-color: #594a41;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  background-image: url(${q});
  background-repeat: no-repeat;
  background-size: 75% 75%;
  background-position: center center;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
`;
const A = styled.div`
  position: absolute;
  background-color: #009d8f;
  border-radius: 50%;
  width: 32px;
  background-repeat: no-repeat;
  background-size: 75% 75%;
  background-position: center center;
  background-image: url(${answer});
  height: 32px;
  left: 20px;
  top: 16px;
`;

const BtnArrow = styled.button`
  cursor: pointer;
  background: no-repeat transparent
    url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3E%3Cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3E%3C/svg%3E");
  width: 20px;
  height: 20px;
  border: none;
  transition: transform 0.5s;
`;
const Body = styled.div`
  padding: 16px 20px 16px 70px;
  display: none;
  position: relative;
  margin-top: 3px;
  background-color: #f6f6f6;
  white-space: pre-wrap;
`;
