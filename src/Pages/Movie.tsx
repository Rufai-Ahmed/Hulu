import styled from "styled-components";
import bg from "../Assets/bg.png";
import bg1 from "../Assets/dd.jpg";
import Card from "../Components/Cards";
import deep from "../Assets/2c4ae82e-2c1b-41d5-a651-82189d1c8b2c.jpg";
import { Link } from "react-router-dom";
import Card2 from "../Components/Cards2";

const Movie = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <UpTxt>
            <Txt>Movies</Txt>
            <Icon></Icon>
          </UpTxt>
          <Wrap>
            <Large>
              <LText>Movies</LText>
              <STxt>
                Stream box office hits, classic cinema, acclaimed indies,
                inspiring documentaries, and much more.
              </STxt>
            </Large>
            <CardHolder>
              <>
                <Card UP="Featured Movies" />
                <Card2 UP="HULU ORIGINALS" />
                <Card UP="Featured Movies" />
              </>
            </CardHolder>
          </Wrap>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Movie;

const CardHolder = styled.div`
  width: 100%;
  min-height: 400px;
`;

const STxt = styled.div`
  font-size: 24px;
  color: white;
`;

const LText = styled.div`
  font-size: 90px;
  color: white;
  font-weight: 800;
`;

const Large = styled.div`
  padding: 98px 0;
`;

const Icon = styled.div`
  font-size: 20px;
  color: grey;
`;

const Txt = styled.div`
  font-size: 20px;
  color: white;
`;

const UpTxt = styled.div`
  width: 100%;
  padding: 22px 0;
  border-bottom: 1px solid white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrap = styled.div`
  width: 90%;
`;
const Wrapper = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${bg1});
  background-repeat: no-repeat;
  background-color: black;
  background-size: contain;
  margin-top: 50px;
`;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  background-image: url(${bg});
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
`;
