import LeftSide from "../components/LeftSide";
import FrameComponent from "../components/FrameComponent";
import styled from "styled-components";

const LoginDesign02Inner = styled.div`
  width: 663px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 163px 0px 0px;
  box-sizing: border-box;
  min-width: 663px;
  max-width: 100%;
  @media screen and (max-width: 1425px) {
    flex: 1;
  }
  @media screen and (max-width: 1200px) {
    padding-top: 106px;
    box-sizing: border-box;
  }
  @media screen and (max-width: 825px) {
    min-width: 100%;
  }
  @media screen and (max-width: 450px) {
    padding-top: 69px;
    box-sizing: border-box;
  }
`;
const LoginDesignRoot = styled.div`
  width: 100%;
  position: relative;
  background-color: var(--design-01-white-solid);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 148.5px;
  line-height: normal;
  letter-spacing: normal;
  @media screen and (max-width: 1425px) {
    flex-wrap: wrap;
    gap: 74px;
  }
  @media screen and (max-width: 825px) {
    gap: 37px;
  }
  @media screen and (max-width: 450px) {
    gap: 19px;
  }
`;

const LoginDesign = () => {
  return (
    <LoginDesignRoot>
      <LeftSide />
      <LoginDesign02Inner>
        <FrameComponent />
      </LoginDesign02Inner>
    </LoginDesignRoot>
  );
};

export default LoginDesign;
