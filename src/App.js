import Topnav from "./components/organisms/TopNav";
import { Outlet, useLocation } from "react-router-dom";
import styled from "styled-components";
import Footer from "./components/organisms/Footer";
import Logo from "./components/atoms/Logo";
import { ReactComponent as Hamburger } from "./assets/svg/hamburger.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  seoulAniamlData,
  seoulAnimalPhoto,
  seoulAnimals,
} from "./redux/thunk/animal";
import { useEffect } from "react";
import Menu from "./components/organisms/Menu";
import { menuSliceAction } from "./redux/slice/menuSlice";

function App() {
  const dispatch = useDispatch();
  const { seoulanimals, total } = useSelector(
    (state) => state.animalSlice.data
  );
  const { photo } = useSelector((state) => state.animalSlice);
  const { ondisplay } = useSelector((state) => state.menuSlice);
  const { close, open } = menuSliceAction;

  console.log();
  const closeMenu = () => {
    dispatch(close());
  };
  const testinit = async () => {
    await dispatch(seoulAnimals());
    await dispatch(seoulAniamlData());
    await dispatch(seoulAnimalPhoto());
  };
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (photo.length === 0) {
      testinit();
    }
  }, [dispatch]);

  return (
    <Container pathname={pathname}>
      <Menu ondisplay={ondisplay} close={() => closeMenu()} />
      <Topnav />
      <Contents>
        <Logobox pathname={pathname}>
          <Logo />
        </Logobox>
        <Menubox onClick={() => dispatch(open())}>
          <Hamburger />
        </Menubox>
        <Outlet />
        <Footer
          pathname={pathname}
          seoulAnimal={seoulanimals}
          shelter={total}
        />
      </Contents>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  margin: 0 auto;
  height: ${({ pathname }) =>
    pathname.includes("/service") ? "100%" : "100vh"};
  padding-top: 50px;
`;
const Contents = styled.main`
  position: relative;
  margin: 0 auto;
  width: 100%;
  height: 100%;
`;

const Logobox = styled.div`
  position: fixed;
  top: 80px;
  left: 20px;
  z-index: 1;
  width: 120px;
  height: 60px;
  display: ${({ pathname }) =>
    pathname.includes("/service") ? "none" : "block"};
`;
const Menubox = styled.div`
  top: 80px;
  right: 20px;
  position: fixed;
  z-index: 1;
  width: 25px;
  height: 25px;
  padding: 2.5px;
  border: 1px solid white;
  background-color: black;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  svg {
    width: 100%;
    height: 100%;
    opacity: 0;
  }
  &:hover {
    transform: scale(2, 2);
    transition: all 0.5s;
    svg {
      transition: all linear 0.5s;
      opacity: 1;
    }
  }
`;

export default App;
