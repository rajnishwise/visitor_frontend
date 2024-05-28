import FrameComponent2 from "../components/FrameComponent2";
import Card4 from "../components/Card4";
import Card3 from "../components/Card3";
import styled from "styled-components";

const CardParent = styled.main`
  align-self: stretch;
  height: 796px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 52px;
  box-sizing: border-box;
  gap: var(--gap-3xs);
  max-width: 100%;
  @media screen and (max-width: 1200px) {
    padding-bottom: 34px;
    box-sizing: border-box;
  }
  @media screen and (max-width: 825px) {
    height: auto;
  }
  @media screen and (max-width: 450px) {
    padding-bottom: var(--padding-3xl);
    box-sizing: border-box;
  }
`;
const ReceptionDisplayDesignRoot = styled.div`
  width: 100%;
  position: relative;
  background-color: var(--design-02-light-bg);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 26px var(--padding-base) 0px;
  box-sizing: border-box;
  gap: var(--gap-3xs);
  line-height: normal;
  letter-spacing: normal;
`;

const ReceptionDisplayDesign = () => {
  return (
    <ReceptionDisplayDesignRoot>
      <FrameComponent2 />
      <CardParent>
        <Card4 />
        <Card3 />
      </CardParent>
    </ReceptionDisplayDesignRoot>
  );
};

export default ReceptionDisplayDesign;
