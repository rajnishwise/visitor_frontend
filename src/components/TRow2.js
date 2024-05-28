import styled from "styled-components";
import PropTypes from "prop-types";

const Label = styled.div`
  flex: 1;
  position: relative;
`;
const LabelWrapper = styled.div`
  width: 215px;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-sm) 0px;
  box-sizing: border-box;
`;
const PlaceHolderText = styled.div`
  flex: 1;
  position: relative;
  display: inline-block;
  max-width: 100%;
  margin: ${(p) => p.propMargin};
`;
const PlaceHolderTextWrapper = styled.div`
  flex: 1;
  border-radius: var(--br-8xs);
  border: 1px solid var(--design-01-border-all);
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-xs) var(--padding-4xs);
  min-width: 432px;
  max-width: 100%;
  text-align: left;
  color: var(--design-02-placeholder);
  @media screen and (max-width: 825px) {
    min-width: 100%;
  }
`;
const FrameParent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
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
  max-width: 100%;
`;
const TRowRoot = styled.div`
  align-self: stretch;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-base) var(--padding-5xl);
  box-sizing: border-box;
  max-width: 100%;
  text-align: right;
  font-size: var(--text-02-button-text-02-size);
  color: var(--design-02-text-input);
  font-family: var(--text-02-h5);
`;

const TRow2 = ({ className = "", label, placeHolderText, propMargin }) => {
  return (
    <TRowRoot className={className}>
      <InputField>
        <FrameParent>
          <LabelWrapper>
            <Label>{label}</Label>
          </LabelWrapper>
          <PlaceHolderTextWrapper>
            <PlaceHolderText propMargin={propMargin}>
              {placeHolderText}
            </PlaceHolderText>
          </PlaceHolderTextWrapper>
        </FrameParent>
      </InputField>
    </TRowRoot>
  );
};

TRow2.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  placeHolderText: PropTypes.string,

  /** Style props */
  propMargin: PropTypes.any,
};

export default TRow2;
