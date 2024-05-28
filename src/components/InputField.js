import styled from "styled-components";
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
const PlaceHolderText = styled.p`
  margin: 0;
  align-self: stretch;
  position: relative;
  margin: ${(p) => p.propMargin};
`;
const TextareaIcon = styled.img`
  width: 24px;
  height: 24px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
`;
const PlaceHolderTextParent = styled.div`
  align-self: stretch;
  height: 76px;
  border-radius: var(--br-8xs);
  border: 1px solid var(--design-01-border-all);
  box-sizing: border-box;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  padding: var(--padding-sm) var(--padding-4xs);
  white-space: nowrap;
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
  flex: 1;
  background-color: var(--design-01-white-solid);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  min-width: 336px;
  max-width: 100%;
  text-align: left;
  font-size: var(--text-02-button-text-02-size);
  color: var(--design-02-text-input);
  font-family: var(--text-02-h5);
  @media screen and (max-width: 450px) {
    min-width: 100%;
  }
`;

const InputField = ({ className = "", label, placeHolderText, propMargin }) => {
  return (
    <InputFieldRoot className={className}>
      <FrameParent>
        <LabelWrapper>
          <Label>{label}</Label>
        </LabelWrapper>
        <PlaceHolderTextParent>
          <PlaceHolderText propMargin={propMargin}>
            {placeHolderText}
          </PlaceHolderText>
          <TextareaIcon alt="" src="/textarea.svg" />
        </PlaceHolderTextParent>
      </FrameParent>
    </InputFieldRoot>
  );
};

InputField.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  placeHolderText: PropTypes.string,

  /** Style props */
  propMargin: PropTypes.any,
};

export default InputField;
