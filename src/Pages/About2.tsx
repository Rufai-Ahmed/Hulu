import styled from "styled-components";
import { Button } from "../Components/Button";
import { Link, useParams } from "react-router-dom";
import main from "../Components/InnerCards2.json";

export const About2 = () => {
  const params: any = useParams();

  const detail = main[params.idd - 1];
  return (
    <div>
      <Container>
        <Wrapper>
          <LittleText>About this Movie</LittleText>
          <LargeText>{detail.ImgTxt} </LargeText>
          <Narrative>
            In this captivating sci-fi psychological thriller, a young woman
            who’s been alienated from her community finds herself in an
            action-packed face-off with a host of extraterrestrial beings who
            threaten her future while forcing her to deal with her past
          </Narrative>
          <Star>
            <b>Starring:</b> {detail.Star}
          </Star>
          <Director>
            <b>Director:</b> Brian Duffield
          </Director>
          <Rating>{detail.SmallTxt}</Rating>
          <BtnHold>
            <Button text="5.2" />
            <Button text="DA" />
            <Button text="HD" />
            <Button text="HDR" />
            <Button text="uhd" />
          </BtnHold>
        </Wrapper>
      </Container>
    </div>
  );
};

const BtnHold = styled.div`
  display: flex;
`;

const Rating = styled.div``;

const Director = styled.div`
  margin: 12px 0;
  font-size: 13px;
`;

const Star = styled.div`
  font-size: 13px;
`;

const Narrative = styled.div`
  color: grey;
  font-size: 14px;
  margin: 15px 0;
`;

const LargeText = styled.div`
  font-size: 30px;
  font-weight: 600;
`;

const LittleText = styled.div`
  font-size: 15px;
  font-weight: 500;
  margin: 15px 0;
`;

const Wrapper = styled.div`
  width: 50%;
  margin-left: 5%;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;
