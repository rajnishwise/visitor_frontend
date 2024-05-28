import styled from "styled-components";
import InputField from "./InputField";
import PropTypes from "prop-types";

const Label = styled.p`
  margin: 0;
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
  white-space: nowrap;
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
const InputField = styled.div`
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
const PlaceHolderText = styled.div`
  flex: 1;
  position: relative;
  display: inline-block;
  max-width: 100%;
`;
const TRowRoot = styled.div`
  position: absolute;
  top: 305px;
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

const TRow1 = ({ className = "" }) => {
  return (
    <TRowRoot className={className}>
      <InputField>
        <FrameParent>
          <LabelWrapper>
            <Label>Primary User Data API</Label>
          </LabelWrapper>
          <PlaceHolderTextWrapper>
            <Label>Primary user Data API</Label>
          </PlaceHolderTextWrapper>
        </FrameParent>
      </InputField>
      <InputField>
        <FrameParent>
          <LabelWrapper>
            <Label>Secondary User Data Connection URL</Label>
          </LabelWrapper>
          <PlaceHolderTextWrapper>
            <PlaceHolderText>Secondary URL</PlaceHolderText>
          </PlaceHolderTextWrapper>
        </FrameParent>
      </InputField>
      <InputField>
        <FrameParent>
          <LabelWrapper>
            <Label>SMS Data Connection URL</Label>
          </LabelWrapper>
          <PlaceHolderTextWrapper>
            <PlaceHolderText>SMS URL</PlaceHolderText>
          </PlaceHolderTextWrapper>
        </FrameParent>
      </InputField>
      <InputField
        label="Primary API Header"
        placeHolderText="Content-Type:application/json "
      />
    </TRowRoot>
  );
};

TRow1.propTypes = {
  className: PropTypes.string,
};

export default TRow1;
