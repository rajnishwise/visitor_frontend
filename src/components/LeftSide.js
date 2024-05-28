import styled from "styled-components";
import PropTypes from "prop-types";

const Welcome = styled.h1`
  margin: 0;
  align-self: stretch;
  position: relative;
  font-size: inherit;
  font-weight: 700;
  font-family: inherit;
  @media screen and (max-width: 825px) {
    font-size: var(--font-size-27xl);
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-9xl);
  }
`;
const Always = styled.h1`
  margin: 0;
  align-self: stretch;
  position: relative;
  font-size: var(--text-02-h3-size);
  font-weight: 400;
  font-family: inherit;
  @media screen and (max-width: 825px) {
    font-size: var(--font-size-43xl);
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-27xl);
  }
`;
const CustomerServiceShouldnt = styled.p`
  margin: 0;
  align-self: stretch;
  position: relative;
  font-size: var(--text-02-h5-size);
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-xl);
  }
`;
const WelcomeParent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-13xl);
  max-width: 100%;
  @media screen and (max-width: 825px) {
    gap: var(--gap-base);
  }
`;
const LeftSideInner = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-61xl);
  box-sizing: border-box;
  max-width: 100%;
  @media screen and (max-width: 1200px) {
    padding-left: var(--padding-21xl);
    padding-right: var(--padding-21xl);
    box-sizing: border-box;
  }
`;
const PrivacyPolicy = styled.div`
  width: 740px;
  position: relative;
  font-size: var(--text-02-h5-size);
  white-space: pre-wrap;
  display: inline-block;
  max-width: 100%;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-xl);
  }
`;
const LogoWhite1Icon = styled.img`
  position: absolute;
  top: 30px;
  left: 30px;
  width: 307px;
  height: 98px;
  overflow: hidden;
`;
const CorporateBusiness1Icon = styled.img`
  position: absolute;
  top: -14px;
  left: -59px;
  width: 1108px;
  height: 1108px;
  object-fit: cover;
  z-index: 1;
`;
const LogoWhite1Parent = styled.div`
  width: 1049px;
  height: 100%;
  position: absolute;
  margin: 0 !important;
  top: 0px;
  right: -89px;
  bottom: 0px;
`;
const LeftSideRoot = styled.div`
  flex: 1;
  background: linear-gradient(39.19deg, #559242, #99c743 50.5%);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: var(--padding-385xl-5) var(--padding-11xl) var(--padding-11xl);
  box-sizing: border-box;
  position: relative;
  gap: var(--gap-257xl-5);
  min-width: 624px;
  max-width: 100%;
  text-align: left;
  font-size: var(--text-02-h1-size);
  color: var(--design-01-white-solid);
  font-family: var(--text-02-h5);
  @media screen and (max-width: 1200px) {
    gap: var(--gap-119xl);
    padding-top: var(--padding-244xl);
    padding-bottom: var(--padding-xl);
    box-sizing: border-box;
  }
  @media screen and (max-width: 825px) {
    gap: var(--gap-50xl);
    min-width: 100%;
  }
  @media screen and (max-width: 450px) {
    padding-top: var(--padding-152xl);
    box-sizing: border-box;
  }
`;

const LeftSide = ({ className = "" }) => {
  return (
    <LeftSideRoot className={className}>
      <LeftSideInner>
        <WelcomeParent>
          <Welcome>Welcome</Welcome>
          <Always>Always!</Always>
          <CustomerServiceShouldnt>
            Customer service shouldn't just be a department, it should be the
            entire company.
          </CustomerServiceShouldnt>
        </WelcomeParent>
      </LeftSideInner>
      <PrivacyPolicy>{`Privacy Policy    •    Terms & Conditions    •    About Us`}</PrivacyPolicy>
      <LogoWhite1Parent>
        <LogoWhite1Icon loading="lazy" alt="" src="/logowhite-1.svg" />
        <CorporateBusiness1Icon alt="" src="/corporatebusiness-1@2x.png" />
      </LogoWhite1Parent>
    </LeftSideRoot>
  );
};

LeftSide.propTypes = {
  className: PropTypes.string,
};

export default LeftSide;
