import styled from "styled-components";
import Card from "../Components/Cards";
import ExtraCard from "../Components/ExtraCard";
import extra from "../Components/Extra.json";
import { About } from "./About";
import { Link } from "react-router-dom";

const ExtraMovie = () => {
  return (
    <div id="movie">
      <Container>
        <Body>
          {extra.map((el) => (
            <ExtraCard
              Image={el.Img}
              LargeText={el.ImgTxt}
              SmallText={el.SmallTxt}
            />
          ))}
        </Body>
      </Container>
    </div>
  );
};

export default ExtraMovie;

const Body = styled.div`
  width: 95%;
  display: flex;
  flex-wrap: wrap;
  height: 95%;
`;

const Tab = styled.div`
  font-size: 17px;
  font-weight: 600;
  text-transform: uppercase;
  margin-right: 30px;
  color: grey;
  cursor: pointer;

  &:hover {
    color: #55afce;
  }
`;

const Wrapper = styled.div`
  width: 95%;
  display: flex;
`;

const Top = styled.div`
  width: 100%;
  padding: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #e8eaed;
  height: 5%;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  min-height: 100vh;
  flex-direction: column;
  justify-content: center;
`;
