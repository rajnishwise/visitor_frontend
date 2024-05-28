import styled from "styled-components";
import PropTypes from "prop-types";

const Label = styled.p`
  margin: 0;
  flex: 1;
  position: relative;
  display: inline-block;
  max-width: 100%;
  margin: ${(p) => p.propMargin};
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
const PlaceHolderText = styled.div`
  flex: 1;
  position: relative;
  display: inline-block;
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
const InputFieldRoot = styled.div`
  position: absolute;
  top: 101px;
  left: 24px;
  background-color: var(--design-01-white-solid);
  width: 448px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  max-width: 100%;
  text-align: left;
  font-size: var(--text-02-button-text-02-size);
  color: var(--design-02-text-input);
  font-family: var(--text-02-h5);
  left: ${(p) => p.propLeft};
`;

const InputField3 = ({
  className = "",
  label,
  placeHolderText,
  propLeft,
  propMargin,
}) => {
  return (
    <InputFieldRoot propLeft={propLeft} className={className}>
      <FrameParent>
        <LabelWrapper>
          <Label propMargin={propMargin}>{label}</Label>
        </LabelWrapper>
        <PlaceHolderTextWrapper>
          <PlaceHolderText>{placeHolderText}</PlaceHolderText>
        </PlaceHolderTextWrapper>
      </FrameParent>
    </InputFieldRoot>
  );
};

InputField3.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  placeHolderText: PropTypes.string,

  /** Style props */
  propLeft: PropTypes.any,
  propMargin: PropTypes.any,
};

export default InputField3;
