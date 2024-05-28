import styled from "styled-components";
import FrameComponent1 from "./FrameComponent1";
import PropTypes from "prop-types";

const Logo1Icon = styled.img`
  height: 88px;
  width: 274px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
`;
const Logo1Wrapper = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 0px var(--padding-xl);
`;
const SocialIcons = styled.img`
  height: 48px;
  width: 48px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
`;
const LoginWithGoogle = styled.a`
  text-decoration: none;
  align-self: stretch;
  position: relative;
  font-size: var(--font-size-5xl);
  font-weight: 500;
  font-family: var(--text-02-h5);
  color: var(--design-01-text-600);
  text-align: center;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-lgi);
  }
`;
const LoginWithGoogleWrapper = styled.div`
  width: 190px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-4xs) 0px 0px;
  box-sizing: border-box;
`;
const SocialIconsParent = styled.div`
  align-self: stretch;
  box-shadow: var(--bottom-shadow);
  border-radius: var(--br-8xs);
  background-color: var(--design-01-white-solid);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-lg) var(--padding-5xl);
  gap: var(--gap-121xl);
  @media screen and (max-width: 450px) {
    flex-wrap: wrap;
    gap: var(--gap-51xl);
    justify-content: center;
  }
`;
const FrameChild = styled.div`
  align-self: stretch;
  height: 2px;
  position: relative;
  background-color: var(--color-whitesmoke-100);
`;
const RectangleWrapper = styled.div`
  width: 129px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-xs) 0px 0px;
  box-sizing: border-box;
`;
const OrLoginWith = styled.div`
  height: 26px;
  position: relative;
  font-size: var(--text-02-h6-size);
  letter-spacing: 0.31em;
  font-family: var(--text-02-h5);
  color: var(--design-01-border-all);
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-mid);
  }
`;
const FrameGroup = styled.div`
  border-radius: var(--br-8xs);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: var(--padding-3xl) var(--padding-5xl);
  box-sizing: border-box;
  gap: var(--gap-lg);
  max-width: 100%;
  @media screen and (max-width: 825px) {
    flex-wrap: wrap;
  }
`;
const KeepMeLogged = styled.div`
  position: relative;
  font-size: var(--font-size-lgi);
  font-family: var(--text-02-h5);
  color: var(--design-01-text-600);
  text-align: left;
`;
const ForgotYourPassword = styled.div`
  position: relative;
  font-size: var(--font-size-lgi);
  font-family: var(--text-02-h5);
  color: var(--design-02-primary-dark);
  text-align: left;
`;
const KeepMeLoggedInParent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--gap-xl);
  @media screen and (max-width: 450px) {
    flex-wrap: wrap;
  }
`;
const ActiveButton = styled.b`
  position: relative;
  font-size: var(--font-size-lgi);
  font-weight: 700;
  font-family: var(--text-02-h5);
  color: var(--design-01-white-solid);
  text-align: left;
  display: inline-block;
  min-width: 47px;
`;
const Button = styled.div`
  align-self: stretch;
  border-radius: var(--br-8xs);
  background-color: var(--design-02-primary);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: var(--padding-base) var(--padding-xl);
`;
const FrameInner = styled.div`
  align-self: stretch;
  flex: 1;
  position: relative;
  background-color: var(--color-whitesmoke-100);
  max-width: 100%;
`;
const RectangleFrame = styled.div`
  align-self: stretch;
  height: 34px;
  border-radius: var(--br-8xs);
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-base) 0px;
  box-sizing: border-box;
  max-width: 100%;
`;
const DontHaveAn = styled.span`
  color: var(--color-gray-100);
`;
const SignUp = styled.span`
  color: var(--design-02-primary-dark);
`;
const DontHaveAnContainer = styled.div`
  align-self: stretch;
  position: relative;
  font-size: var(--font-size-lgi);
  font-family: var(--text-02-h5);
  text-align: center;
`;
const FrameParentRoot = styled.form`
  margin: 0;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-4xl);
  max-width: 100%;
`;

const FrameComponent = ({ className = "" }) => {
  return (
    <FrameParentRoot className={className}>
      <Logo1Wrapper>
        <Logo1Icon loading="lazy" alt="" src="/logo-1.svg" />
      </Logo1Wrapper>
      <SocialIconsParent>
        <SocialIcons alt="" src="/social-icons.svg" />
        <LoginWithGoogleWrapper>
          <LoginWithGoogle> Login with Google</LoginWithGoogle>
        </LoginWithGoogleWrapper>
      </SocialIconsParent>
      <FrameGroup>
        <RectangleWrapper>
          <FrameChild />
        </RectangleWrapper>
        <OrLoginWith>OR LOGIN WITH EMAIL</OrLoginWith>
        <RectangleWrapper>
          <FrameChild />
        </RectangleWrapper>
      </FrameGroup>
      <FrameComponent1
        emailAddress="Email Address"
        emailAddress1="Email Address"
      />
      <FrameComponent1
        emailAddress="Password"
        emailAddress1="Password"
        propMinWidth="84px"
      />
      <KeepMeLoggedInParent>
        <KeepMeLogged>Keep me logged in</KeepMeLogged>
        <ForgotYourPassword>Forgot your password ?</ForgotYourPassword>
      </KeepMeLoggedInParent>
      <Button>
        <ActiveButton>Login</ActiveButton>
      </Button>
      <RectangleFrame>
        <FrameInner />
      </RectangleFrame>
      <DontHaveAnContainer>
        <DontHaveAn>{`Don’t have an account ? `}</DontHaveAn>
        <SignUp>Sign up</SignUp>
      </DontHaveAnContainer>
    </FrameParentRoot>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
