import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import Card from "../../atoms/Card";
import Button from "../../atoms/Button";
import { animalAction } from "../../../redux/slice/animalSlice";
import { useEffect } from "react";

const Animaladoption = () => {
  const { data, photo, filter } = useSelector((state) => state.animalSlice);
  const dispatch = useDispatch();
  const { select } = animalAction;

  const onFilter = (keyword) => {
    dispatch(select(keyword));
  };

  return (
    <Container>
      <Btns filter={filter}>
        <Button onClick={() => onFilter("all")}>전체</Button>
        <Button onClick={() => onFilter("dog")}>개</Button>
        <Button onClick={() => onFilter("cat")}>고양이</Button>
      </Btns>
      <Gridbox>
        {filter === "all" &&
          data.total.map((animals) => (
            <Card
              data={animals}
              key={animals.ANIMAL_NO}
              photo={photo.find(
                (photos) => photos.ANIMAL_NO === animals.ANIMAL_NO
              )}
            ></Card>
          ))}
        {filter === "cat" &&
          data.cat.map((animals) => (
            <Card
              data={animals}
              key={animals.ANIMAL_NO}
              photo={photo.find(
                (photos) => photos.ANIMAL_NO === animals.ANIMAL_NO
              )}
            ></Card>
          ))}
        {filter === "dog" &&
          data.dog.map((animals) => (
            <Card
              data={animals}
              key={animals.ANIMAL_NO}
              photo={photo.find(
                (photos) => photos.ANIMAL_NO === animals.ANIMAL_NO
              )}
            ></Card>
          ))}
      </Gridbox>
    </Container>
  );
};

export default Animaladoption;

const Container = styled.div`
  padding: 30px 0;
`;

const Gridbox = styled.div`
  display: grid;
  width: 100%;
  padding: 0 30px;
  margin: 0 auto;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  max-width: 1200px;
  & > div {
    height: 300px;
    width: 100%;
    text-align: center;
  }
  @media screen and (max-width: 650px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 450px) {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 5px;
  }
`;

const Btns = styled.div`
  margin: 0 auto;
  border: 1px solid black;
  width: fit-content;
  margin-bottom: 30px;
  button {
    padding: 0px;
    border-radius: 0;
    border: none;
    cursor: pointer;
  }
  & button + button {
    border-left: 1px solid black;
  }
  & :nth-child(1) {
    background-color: ${({ filter }) => filter === "all" && "#594a41"};
  }
  & :nth-child(2) {
    background-color: ${({ filter }) => filter === "dog" && "#594a41"};
  }
  & :nth-child(3) {
    background-color: ${({ filter }) => filter === "cat" && "#594a41"};
  }
  @media screen and (max-width: 650px) {
    button {
      width: 80px;
    }
  }
`;
