import styled from "styled-components";
import Card from "../Components/Cards";
import ExtraCard from "../Components/ExtraCard";
import extra from "../Components/Extra.json";
import { About } from "./About";
import { Link } from "react-router-dom";
import ExtraAbout from "./ExtraAbout";
import ExtraMovie from "./ExtraMovie";
import { useState } from "react";

const Extra = () => {
  const [movie, about] = useState(false);
  const change = () => {
    about(true);
  };
  return (
    <div>
      <Container>
        <Top>
          <Wrapper>
            <Tab
              style={{ color: "black" }}
              onClick={() => {
                about(false);
              }}
            >
              You may also like
            </Tab>

            <Tab>Extras</Tab>
            <Tab onClick={change}>Details</Tab>
          </Wrapper>
        </Top>
        {movie ? <ExtraAbout /> : <ExtraMovie />}
      </Container>
    </div>
  );
};

export default Extra;

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
`;
