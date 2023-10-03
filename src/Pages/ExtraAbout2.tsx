import styled from "styled-components";
import Card from "../Components/Cards";
import ExtraCard from "../Components/ExtraCard";
import extra from "../Components/Extra.json";
import { About } from "./About";
import { About2 } from "./About2";

const ExtraAbout2 = () => {
  return (
    <div>
      <Container>
        <About2 />
      </Container>
    </div>
  );
};

export default ExtraAbout2;

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
  margin-top: 20px;
`;
