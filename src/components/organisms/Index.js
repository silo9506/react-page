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
        // onBeforePageScroll={handleBeforePageChange}
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

// import { useEffect, useRef } from "react";
// import styled from "styled-components";
// import BannerSlide from "../molecules/BannerSlide";
// import ReactPageScroller from "react-page-scroller";
// const Index = () => {
//   return (
//     <Container>
//       <Sectionbox>
//         <Tset1></Tset1>
//       </Sectionbox>
//       <Sectionbox>
//         <Tset2></Tset2>
//       </Sectionbox>
//       <Sectionbox>
//         <Tset3></Tset3>
//       </Sectionbox>
//     </Container>
//   );
// };

// export default Index;

// const Container = styled.div`
//   /* padding: 20px 0; */
//   width: 100%;
//   height: 100vh;
//   overflow-y: scroll;
//   /* scroll-snap-type: y mandatory; */
//   display: flex;
//   flex-direction: column;
// `;

// const Sectionbox = styled.div`
//   flex-shrink: 0;
//   /* scroll-snap-align: start; */
//   /* scroll-snap-stop: always; */
//   /* scroll-behavior: smooth; */
//   height: 100%;
// `;

// const Tset1 = styled.div`
//   background: green;
//   width: 100%;
//   height: 100%;
// `;
// const Tset2 = styled.div`
//   background: blue;
//   width: 100%;
//   height: 100%;
// `;
// const Tset3 = styled.div`
//   background: yellow;
//   width: 100%;
//   height: 100%;
// `;
