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
const RecordCircleIcon = styled.img`
  height: 24px;
  width: 24px;
  position: relative;
  min-height: 24px;
`;
const Database = styled.div`position: relative;
  display: ${(p) => p.propDisplay}
  min-width: ${(p) => p.propMinWidth}
`;
const CircleIcon = styled.img`
  height: 24px;
  width: 24px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
  min-height: 24px;
`;
const Api = styled.div`position: relative;
  display: ${(p) => p.propDisplay1}
  min-width: ${(p) => p.propMinWidth1}
`;
const RecordCircleParent = styled.div`
  border-radius: var(--br-8xs);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-2xs) var(--padding-31xl) var(--padding-2xs)
    var(--padding-3xs);
  gap: var(--gap-5xs);
  color: var(--design-02-placeholder);
  @media screen and (max-width: 450px) {
    flex-wrap: wrap;
  }
  padding: ${(p) => p.propPadding};
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
  top: 212px;
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
  left: ${(p) => p.propLeft};
`;

const InputField1 = ({
  className = "",
  label,
  database,
  aPI,
  propLeft,
  propPadding,
  propDisplay,
  propMinWidth,
  propDisplay1,
  propMinWidth1,
}) => {
  return (
    <InputFieldRoot propLeft={propLeft} className={className}>
      <FrameParent>
        <LabelWrapper>
          <Label>{label}</Label>
        </LabelWrapper>
        <RecordCircleParent propPadding={propPadding}>
          <RecordCircleIcon alt="" src="/recordcircle.svg" />
          <Database propDisplay={propDisplay} propMinWidth={propMinWidth}>
            {database}
          </Database>
          <CircleIcon alt="" src="/circle.svg" />
          <Api propDisplay1={propDisplay1} propMinWidth1={propMinWidth1}>
            {aPI}
          </Api>
        </RecordCircleParent>
      </FrameParent>
    </InputFieldRoot>
  );
};

InputField1.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  database: PropTypes.string,
  aPI: PropTypes.string,

  /** Style props */
  propLeft: PropTypes.any,
  propPadding: PropTypes.any,
  propDisplay: PropTypes.any,
  propMinWidth: PropTypes.any,
  propDisplay1: PropTypes.any,
  propMinWidth1: PropTypes.any,
};

export default InputField1;
