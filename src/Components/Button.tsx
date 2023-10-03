import styled from "styled-components";

type iButton = {
  text: string;
};

export const Button: React.FC<iButton> = ({ text }) => {
  return (
    <div>
      <Container>{text}</Container>
    </div>
  );
};

const Container = styled.div`
  padding: 5px;
  background-color: white;
  font-size: 10px;
  font-weight: 600;
  color: black;
`;
