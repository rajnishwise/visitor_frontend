import styled from "styled-components";
import PropTypes from "prop-types";

const EmailAddress = styled.div`
  align-self: stretch;
  position: relative;
  font-weight: 500;
`;
const EmailAddress1 = styled.div`
  position: relative;
  display: inline-block;
  min-width: 120px;
  @media screen and (max-width: 450px) {
    font-size: var(--text-02-button-text-02-size);
  }
  min-width: ${(p) => p.propMinWidth};
`;
const EmailAddressWrapper = styled.div`
  align-self: stretch;
  border-radius: var(--br-8xs);
  background-color: var(--design-01-white-solid);
  border: 1px solid var(--design-01-border-all);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-base) var(--padding-5xl);
  text-align: center;
  font-size: var(--font-size-xl);
  color: var(--design-01-text-400);
`;
const EmailAddressParentRoot = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-3xs);
  text-align: left;
  font-size: var(--font-size-lgi);
  color: var(--design-01-text-600);
  font-family: var(--text-02-h5);
`;

const FrameComponent1 = ({
  className = "",
  emailAddress,
  emailAddress1,
  propMinWidth,
}) => {
  return (
    <EmailAddressParentRoot className={className}>
      <EmailAddress>{emailAddress}</EmailAddress>
      <EmailAddressWrapper>
        <EmailAddress1 propMinWidth={propMinWidth}>
          {emailAddress1}
        </EmailAddress1>
      </EmailAddressWrapper>
    </EmailAddressParentRoot>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
  emailAddress: PropTypes.string,
  emailAddress1: PropTypes.string,

  /** Style props */
  propMinWidth: PropTypes.any,
};

export default FrameComponent1;
