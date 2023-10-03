import styled from "styled-components";
import deep from "../Assets/2c4ae82e-2c1b-41d5-a651-82189d1c8b2c.jpg";
import innerCards from "./Extra.json";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

interface iExtra {
  Image: string;
  LargeText: string;
  SmallText: string;
}

const ExtraCard = ({ Image, LargeText, SmallText }: iExtra) => {
  return (
    <div>
      <Container>
        <Inner>
          <ImgHold>
            <Img src={Image}>
              <Circle>
                <Icon>
                  <FaArrowRight />
                </Icon>
              </Circle>
            </Img>
          </ImgHold>
          <LTxt>{LargeText}</LTxt>
          <SmallTxt>{SmallText}</SmallTxt>
        </Inner>
      </Container>
    </div>
  );
};

export default ExtraCard;

const InnerHold = styled.div`
  display: flex;
  gap: 20px;
  margin-left: 20px;
  flex-wrap: wrap;
  width: 100%;
`;

const ImgHold = styled.div`
  width: 100%;
`;

const SmallTxt = styled.div`
  font-size: 15px;
  color: black;
  font-weight: 300;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  width: 100%;
`;

const LTxt = styled.div`
  font-size: 14px;
  font-weight: 500;
  margin: 1px 0;
  width: 100%;
`;

const Circle = styled.div`
  width: 60px;
  height: 60px;
  border: 2px solid white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 350ms;
`;

const Icon = styled.div`
  font-size: 20px;
  color: white;
`;

const Img = styled.div<{ src: string }>`
  width: 220px;
  background-size: cover;
  height: 140px;
  border-radius: 20px;
  background-image: url(${({ src }) => src});
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  transition: all 350ms;
  justify-content: center;
  border: 2px solid transparent;
  content-visibility: hidden;
  &:hover {
    border: 2px solid white;
    content-visibility: visible;
  }
`;

const Up = styled.div`
  color: white;
  font-size: 17px;
  font-weight: 500;
  margin-bottom: 18px;
`;

const Inner = styled.div`
  width: 180px;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 30px;
`;
