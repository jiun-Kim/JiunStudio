import styled from "styled-components";

const Container = styled.header`
  width: 100%;
  height: 300px;
  background-color: ${(props) => props.theme.mainColor};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
  position: relative;
`;

const TextContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
  background-color: #222f3e;
  padding: 15px;
  border-radius: 10px;
  z-index: 1;
`;
//우산에 달린 이름표처럼 구현 할것. 바람에 흔들리듯이

const Title = styled.h1`
  font-size: 40px;
  margin-bottom: 10px;
`;

const SubTitle = styled.h3``;

const Image = styled.img`
  width: 100%;
  max-width: 500px;
  z-index: 0;
`;

const Header = () => (
  <Container>
    <TextContainer>
      <Title>JIUN STUDIO</Title>
      <SubTitle>We make your idea a reality.</SubTitle>
    </TextContainer>
    <Image src="./jiunstudio.png" />
  </Container>
);

export default Header;
