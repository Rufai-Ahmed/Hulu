import styled from "styled-components";
import hulu from "../Assets/download-removebg-preview-removebg-preview.png";
import colour from "../Components/InnerCards2.json";
import { useParams } from "react-router-dom";

const Header2 = () => {
  const params: any = useParams();
  const detail2 = colour[params.idd - 1];
  return (
    <div>
      <Container colour={detail2.bcc}>
        <Wrapper>
          <Logo>
            <Img src={hulu} />
          </Logo>
          <Texts>
            <Text color="1">START YOUR FREE TRIAL</Text>
            <Text color="">LOG IN</Text>
          </Texts>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Header2;

const Text = styled.div<{ color: string }>`
  color: ${({ color }) => (color ? "white" : "#558dbd")};
  font-size: 15px;
  font-weight: 600;
  padding: 16px 20px;
  cursor: pointer;
  transition: all 150ms;
  &:hover {
    background-color: #08121d;
    color: white;
  }
`;

const Texts = styled.div`
  display: flex;
  gap: 20px;
`;

const Img = styled.img`
  width: 100%;
`;

const Logo = styled.div`
  width: 5%;
`;

const Wrapper = styled.div`
  width: 95%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
`;

const Container = styled.div<{ colour: string }>`
  width: 100%;
  display: flex;
  justify-content: center;
  position: absolute;
  background: linear-gradient(
    to bottom,
    #0b1929,
    ${({ colour }) => colour},
    ${({ colour }) => colour},
    transparent
  );
`;
