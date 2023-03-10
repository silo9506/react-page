//App.js
import { useState } from "react";
import ReactPageScroller, { SectionContainer } from "react-page-scroller";
import styled from "styled-components";
import Section01 from "../molecules/section/Index";
import Section02 from "../molecules/section/Shelters";
import Section03 from "../molecules/section/AnimalCard";
import { useDispatch, useSelector } from "react-redux";
import { scrollSliceAction } from "../../redux/slice/scrollSlice";
// import Section04 from "../molecules/section/Adoption";

function Index() {
  const { data, photo } = useSelector((state) => state.animalSlice);
  const { isCrrentPage } = useSelector((state) => state.scrollSlice);
  const { change } = scrollSliceAction;
  const dispatch = useDispatch();
  const handlePageChange = (number) => {
    dispatch(change(number));
  };

  return (
    <Container>
      <ReactPageScroller
        animationTimer={500}
        containerWidth={"100%"}
        containerHeight={"100%"}
        pageOnChange={handlePageChange}
        customPageNumber={isCrrentPage}
      >
        <Section01 />
        <Section02 />
        <Section03 animal={data.total} photo={photo} />
      </ReactPageScroller>
    </Container>
  );
}

export default Index;

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  & section {
    padding-top: 100px;
    padding-bottom: 80px;
  }
`;
