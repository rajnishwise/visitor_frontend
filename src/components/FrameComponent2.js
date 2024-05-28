import styled from "styled-components";
import Navigation2 from "./Navigation2";
import PropTypes from "prop-types";

const Logo2Icon = styled.img`
  height: 45px;
  width: 142px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
`;
const Logo2Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-3xs);
`;
const ReceptionDisplay = styled.h3`
  margin: 0;
  position: relative;
  font-size: inherit;
  font-weight: 400;
  font-family: inherit;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-xl);
  }
`;
const DevicesApplications = styled.div`
  position: relative;
  font-size: var(--text-02-button-text-02-size);
  white-space: pre-wrap;
`;
const Breadcrumbs = styled.div`
  align-self: stretch;
  border-radius: var(--br-5xs);
  background-color: var(--design-02-primary-light);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-base);
  gap: var(--gap-3xs);
`;
const NavigationParent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-3xs);
`;
const FrameParentRoot = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-xl);
  text-align: left;
  font-size: var(--text-02-h5-size);
  color: var(--design-01-text-600);
  font-family: var(--text-02-h5);
`;

const FrameComponent2 = ({ className = "" }) => {
  return (
    <FrameParentRoot className={className}>
      <Logo2Wrapper>
        <Logo2Icon loading="lazy" alt="" src="/logo-2.svg" />
      </Logo2Wrapper>
      <NavigationParent>
        <Navigation2 />
        <Breadcrumbs>
          <ReceptionDisplay>Reception Display</ReceptionDisplay>
          <DevicesApplications>{`Devices  >  Applications`}</DevicesApplications>
        </Breadcrumbs>
      </NavigationParent>
    </FrameParentRoot>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
