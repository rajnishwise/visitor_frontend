import InputField from "./InputField";
import styled from "styled-components";
import PropTypes from "prop-types";

const Label = styled.div`
  flex: 1;
  position: relative;
  display: inline-block;
  max-width: 100%;
`;
const LabelWrapper = styled.div`
  align-self: stretch;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  max-width: 100%;
`;
const PlaceHolderTextWrapper = styled.div`
  align-self: stretch;
  border-radius: var(--br-8xs);
  border: 1px solid var(--design-01-border-all);
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-xs) var(--padding-4xs);
  max-width: 100%;
  color: var(--design-02-placeholder);
`;
const FrameParent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-2xs);
  max-width: 100%;
`;
const InputField1 = styled.div`
  flex: 1;
  background-color: var(--design-01-white-solid);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  min-width: 336px;
  max-width: 100%;
  @media screen and (max-width: 450px) {
    min-width: 100%;
  }
`;
const Label1 = styled.p`
  margin: 0;
  flex: 1;
  position: relative;
  display: inline-block;
  max-width: 100%;
`;
const LabelContainer = styled.div`
  align-self: stretch;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  max-width: 100%;
  color: var(--design-02-text-input);
`;
const RecordCircleIcon = styled.img`
  height: 24px;
  width: 24px;
  position: relative;
`;
const Time = styled.div`
  position: relative;
  display: inline-block;
  min-width: 35px;
`;
const RecordCircleParent = styled.div`
  border-radius: var(--br-8xs);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-2xs) var(--padding-3xs);
  gap: var(--gap-5xs);
`;
const Div = styled.div`
  position: relative;
  display: inline-block;
  min-width: 64px;
  white-space: nowrap;
`;
const Parent1 = styled.div`
  flex: 1;
  border-radius: var(--br-8xs);
  border: 1px solid var(--design-01-border-all);
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: var(--padding-4xs) var(--padding-3xs);
  min-width: 110px;
  gap: var(--gap-xl);
`;
const FrameContainer = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-2xs);
  @media screen and (max-width: 450px) {
    flex-wrap: wrap;
  }
`;
const CircleIcon = styled.img`
  height: 24px;
  width: 24px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
`;
const Day = styled.div`
  flex: 1;
  position: relative;
`;
const CircleParent = styled.div`
  width: 90px;
  border-radius: var(--br-8xs);
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-2xs) var(--padding-3xs);
  box-sizing: border-box;
  gap: var(--gap-5xs);
`;
const Day1 = styled.div`
  position: relative;
  display: inline-block;
  min-width: 39px;
`;
const DayParent = styled.div`
  flex: 1;
  border-radius: var(--br-8xs);
  border: 1px solid var(--design-01-border-all);
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: var(--padding-4xs) var(--padding-3xs);
  min-width: 63px;
  white-space: nowrap;
  max-width: 100%;
  gap: var(--gap-xl);
`;
const FrameDiv = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-2xs);
  max-width: 100%;
  @media screen and (max-width: 450px) {
    flex-wrap: wrap;
  }
`;
const InputField2 = styled.div`
  flex: 1;
  background-color: var(--design-01-white-solid);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  min-width: 336px;
  max-width: 100%;
  color: var(--design-02-placeholder);
  @media screen and (max-width: 450px) {
    min-width: 100%;
  }
`;
const Label2 = styled.div`
  height: 20px;
  flex: 1;
  position: relative;
  display: inline-block;
  max-width: 100%;
`;
const PlaceHolderTextContainer = styled.div`
  align-self: stretch;
  border-radius: var(--br-8xs);
  border: 1px solid var(--design-01-border-all);
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-xs) var(--padding-4xs);
  white-space: nowrap;
  max-width: 100%;
  color: var(--design-02-placeholder);
`;
const FrameParent1 = styled.div`
  width: 425px;
  display: none;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-2xs);
  max-width: 100%;
`;
const InputField3 = styled.div`
  height: 65px;
  flex: 1;
  background-color: var(--design-01-white-solid);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  min-width: 412px;
  max-width: 100%;
  @media screen and (max-width: 750px) {
    min-width: 100%;
  }
`;
const TRowRoot = styled.div`
  position: absolute;
  top: 444px;
  left: 0px;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  padding: var(--padding-base) var(--padding-5xl);
  box-sizing: border-box;
  gap: var(--gap-base);
  max-width: 100%;
  text-align: left;
  font-size: var(--text-02-button-text-02-size);
  color: var(--design-02-text-input);
  font-family: var(--text-02-h5);
`;

const TRow = ({ className = "" }) => {
  return (
    <TRowRoot className={className}>
      <InputField
        label="Secondary DB Query"
        placeHolderText="SELECT*FROM TABLE"
        propMargin="unset"
      />
      <InputField1>
        <FrameParent>
          <LabelWrapper>
            <Label>Primary API Method</Label>
          </LabelWrapper>
          <PlaceHolderTextWrapper>
            <Label>GET</Label>
          </PlaceHolderTextWrapper>
        </FrameParent>
      </InputField1>
      <InputField2>
        <FrameParent>
          <LabelContainer>
            <Label1>QR Use Time Setting</Label1>
          </LabelContainer>
          <FrameContainer>
            <RecordCircleParent>
              <RecordCircleIcon alt="" src="/recordcircle.svg" />
              <Time>Time</Time>
            </RecordCircleParent>
            <Parent1>
              <Div>09:00:00</Div>
              <RecordCircleIcon alt="" src="/arrow-drop-down-2.svg" />
            </Parent1>
            <Parent1>
              <Div>20:00:00</Div>
              <RecordCircleIcon alt="" src="/arrow-drop-down-2.svg" />
            </Parent1>
          </FrameContainer>
          <FrameDiv>
            <CircleParent>
              <CircleIcon alt="" src="/circle.svg" />
              <Day>Day</Day>
            </CircleParent>
            <DayParent>
              <Day1>1 Day</Day1>
              <RecordCircleIcon alt="" src="/arrow-drop-down.svg" />
            </DayParent>
          </FrameDiv>
        </FrameParent>
      </InputField2>
      <InputField3>
        <FrameParent1>
          <LabelWrapper>
            <Label2>Primary API Header</Label2>
          </LabelWrapper>
          <PlaceHolderTextContainer>
            <Label2>{`Content-Type:application/json `}</Label2>
          </PlaceHolderTextContainer>
        </FrameParent1>
      </InputField3>
    </TRowRoot>
  );
};

TRow.propTypes = {
  className: PropTypes.string,
};

export default TRow;
