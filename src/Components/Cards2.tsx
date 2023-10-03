import styled from "styled-components";
import deep from "../Assets/2c4ae82e-2c1b-41d5-a651-82189d1c8b2c.jpg";
import innerCard2 from "./InnerCards2.json";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

interface iCards {
  UpTxt?: string;
  Image?: string;
  ImgTxt?: string;
  SmallText?: string;
  UP: string;
}

const Card2 = ({ UpTxt, ImgTxt, SmallText, UP }: iCards) => {
  return (
    <div>
      <Container>
        <Up>{UP}</Up>
        <InnerHold>
          {innerCard2.map((el) => (
            <Link to={`idd/${el.id}`} style={{ textDecoration: "none" }}>
              <Inner>
                <ImgHold>
                  <Img src={el.Img}>
                    <Circle>
                      <Icon>
                        <FaArrowRight />
                      </Icon>
                    </Circle>
                  </Img>
                </ImgHold>
                <LTxt>{el.ImgTxt}</LTxt>
                <SmallTxt>{el.SmallTxt}</SmallTxt>
              </Inner>
            </Link>
          ))}
        </InnerHold>
      </Container>
    </div>
  );
};

export default Card2;

const InnerHold = styled.div`
  display: flex;
  gap: 20px;
  margin-left: 20px;
  flex-wrap: wrap;
`;

const ImgHold = styled.div`
  width: 100%;
`;

const SmallTxt = styled.div`
  font-size: 15px;
  color: white;
  font-weight: 300;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  width: 80%;
`;

const LTxt = styled.div`
  font-size: 20px;
  color: white;
  font-weight: 700;
  margin: 1px 0;
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
  width: 180px;
  background-size: cover;
  height: 100px;
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
    border: 2px solid grey;
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
  margin-bottom: 40px;
`;
