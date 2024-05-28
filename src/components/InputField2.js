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
const PlaceHolderText = styled.div`
  position: relative;
  display: inline-block;
  min-width: 54px;
  min-width: ${(p) => p.propMinWidth};
`;
const ArrowDropDownIcon = styled.img`
  height: 24px;
  width: 24px;
  position: relative;
`;
const PlaceHolderTextParent = styled.div`
  align-self: stretch;
  border-radius: var(--br-8xs);
  border: 1px solid var(--design-01-border-all);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: var(--padding-4xs) var(--padding-3xs);
  white-space: nowrap;
  gap: var(--gap-xl);
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
const InputFieldRoot = styled.div`position: absolute;
  top: 101px;
  left: 488px;
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
  top: ${(p) => p.propTop}
  left: ${(p) => p.propLeft}
`;

const InputField2 = ({
  className = "",
  label,
  placeHolderText,
  propTop,
  propLeft,
  propMinWidth,
}) => {
  return (
    <InputFieldRoot propTop={propTop} propLeft={propLeft} className={className}>
      <FrameParent>
        <LabelWrapper>
          <Label>{label}</Label>
        </LabelWrapper>
        <PlaceHolderTextParent>
          <PlaceHolderText propMinWidth={propMinWidth}>
            {placeHolderText}
          </PlaceHolderText>
          <ArrowDropDownIcon alt="" src="/arrow-drop-down.svg" />
        </PlaceHolderTextParent>
      </FrameParent>
    </InputFieldRoot>
  );
};

InputField2.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  placeHolderText: PropTypes.string,

  /** Style props */
  propTop: PropTypes.any,
  propLeft: PropTypes.any,
  propMinWidth: PropTypes.any,
};

export default InputField2;
