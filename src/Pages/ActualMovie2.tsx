import styled from "styled-components";
import Header from "../Block/Header";
import { Button } from "../Components/Button";
import logos from "../Assets/original.png";
import hulu from "../Assets/f812637b-6186-48e4-9b63-85167ba2cf17.png";
import { useParams } from "react-router-dom";
import rowOne from "../Components/InnerCards.json";
import rowTwo from "../Components/InnerCards2.json";
import Header2 from "../Block/Header2";
import Extra from "./Extra";
import Extra2 from "./Extra2";

const ActualMovie2 = () => {
  const params: any = useParams();
  const details2 = rowTwo[params.idd - 1];
  return (
    <div>
      <Header2 />
      <Container bg={details2.Img}>
        <Wrapper bcc={details2.bcc}>
          <TextHolder>
            <Text>
              <LittleT>
                In this captivating sci-fi psychological thriller, a young woman
                who’s been alienated from her community finds herself in an
                action-packed face-off with a host of extraterrestrial beings
                who threaten her future while forcing her to deal with her past
                MORE
              </LittleT>
              <Star>
                <b>Starring:</b> {details2.Star}
              </Star>
              <Director>
                <b>Director:</b> Brian Duffield
              </Director>
              <Genre>{details2.SmallTxt}</Genre>
              <BtnHold>
                <Button text="5.2" />
                <Button text="DA" />
                <Button text="HD" />
                <Button text="HDR" />
                <Button text="uhd" />
              </BtnHold>
              <Stream>
                Stream thousands of shows and movies, with plans starting at
                $7.99/month.
              </Stream>
              <div style={{ width: "20%" }}>
                <Button text="START YOUR FREE TRIAL" />
              </div>
              <Smallest>
                Hulu free trial available for new and eligible returning Hulu
                subscribers only. Cancel anytime. Additional terms apply.
              </Smallest>
            </Text>
            <Hulu>
              <Img src={hulu} style={{ width: "20%" }} />
            </Hulu>
          </TextHolder>
        </Wrapper>
        <BoxHolder box={details2.bcc}>
          <Wrap>
            <Logos>
              <Img src={logos} />
            </Logos>
            <MiddleText>
              <Top>DISNEY BUNDLE TRIO BASIC</Top>
              <Center>
                Get Hulu, Disney+, and ESPN+, all with ads, for $12.99/mo.*
              </Center>
              <Down>*Price will increase to $14.99/month on 10/12/2023.</Down>
            </MiddleText>
            <SideBtnHolder>
              <Button text="GET ALL THREE" />
              Terms apply
            </SideBtnHolder>
          </Wrap>
        </BoxHolder>
      </Container>
      <Extra2 />
    </div>
  );
};

export default ActualMovie2;

const SideBtnHolder = styled.div`
  width: 20%;
  text-align: center;
  font-size: 9px;
  color: grey;
  text-decoration: underline;
`;

const Down = styled.div`
  font-size: 10px;
`;

const Center = styled.div`
  font-size: 23px;
  margin: 3px 0;
`;

const Top = styled.div`
  color: #13da83;
  font-size: 14px;
`;

const MiddleText = styled.div`
  width: 40%;
`;

const Logos = styled.div`
  width: 26%;
`;

const Wrap = styled.div`
  width: 95%;
  display: flex;
  align-items: center;
  color: white;
  justify-content: space-between;
`;

const Img = styled.img`
  width: 100%;
  object-fit: contain;
`;

const BoxHolder = styled.div<{ box: string }>`
  width: 100%;
  background: linear-gradient(to bottom, #0f1e2c, transparent, #0f1e2c);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20%;
`;

const Hulu = styled.div`
  width: 50%;
  display: flex;
  margin-bottom: 40px;
  justify-content: center;
`;

const Smallest = styled.div`
  font-size: 10px;
  color: #a2a7b1;
  margin-bottom: 40px;
  margin-top: 5px;
`;

const Stream = styled.div`
  margin: 7px 0;
`;

const BtnHold = styled.div`
  display: flex;
  gap: 5px;
`;

const Genre = styled.div`
  margin: 1px 0;
`;
const Director = styled.div`
  margin: 7px 0;
`;
const Star = styled.div`
  margin: 7px 0;
`;

const LittleT = styled.div`
  font-size: 12px;
  margin: 13px 0;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const Text = styled.div`
  width: 50%;
`;

const TextHolder = styled.div`
  width: 95%;
  height: 100%;
  display: flex;
  align-items: end;
  justify-content: center;
`;

const Wrapper = styled.div<{ bcc: string }>`
  display: flex;
  align-items: end;
  justify-content: center;
  width: 100%;
  height: 80%;
  background: linear-gradient(
    to right,
    ${({ bcc }) => bcc},
    ${({ bcc }) => bcc},
    transparent,
    transparent
  );
  color: white;
`;

const Container = styled.div<{ bg: any }>`
  width: 100%;
  height: 100vh;
  background-image: url(${({ bg }) => bg});
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
