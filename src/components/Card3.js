import styled from "styled-components";
import TRow2 from "./TRow2";
import PropTypes from "prop-types";

const CancellationRule = styled.div`
  flex: 1;
  position: relative;
  display: inline-block;
  max-width: 100%;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-mid);
  }
`;
const Thead = styled.div`
  align-self: stretch;
  border-bottom: 1px solid var(--design-01-border-all);
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-5xl) var(--padding-5xl) var(--padding-3xl);
  max-width: 100%;
`;
const TRowParent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px var(--padding-base);
  box-sizing: border-box;
  max-width: 100%;
`;
const CardChild = styled.div`
  width: 208px;
  height: 56px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
  display: none;
`;
const ActiveButton = styled.b`
  position: relative;
  font-weight: 700;
  display: inline-block;
  min-width: 61px;
`;
const Button = styled.div`
  border-radius: var(--br-8xs);
  background-color: var(--design-02-primary);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-base) var(--padding-5xl);
`;
const ButtonWrapper = styled.div`
  width: 605px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 0px var(--padding-xl);
  box-sizing: border-box;
  max-width: 100%;
  font-size: var(--font-size-lgi);
  color: var(--design-01-white-solid);
`;
const CardRoot = styled.div`
  flex: 1;
  box-shadow: var(--card-shadow);
  border-radius: var(--br-3xs);
  background-color: var(--design-01-white-solid);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-2xs) 0px var(--padding-8xl);
  box-sizing: border-box;
  max-width: calc(100% - 949px);
  flex-shrink: 0;
  text-align: left;
  font-size: var(--text-02-h6-size);
  color: var(--design-02-dark-text);
  font-family: var(--text-02-h5);
  @media screen and (max-width: 1450px) {
    display: none;
    max-width: 100%;
  }
`;

const Card3 = ({ className = "" }) => {
  return (
    <CardRoot className={className}>
      <Thead>
        <CancellationRule>Cancellation Rule</CancellationRule>
      </Thead>
      <TRow2 label="Auto Cancel" placeHolderText="Allowed" propMargin="unset" />
      <TRowParent>
        <TRow2
          label="Cancellation Waiting Time"
          placeHolderText="20 min"
          propMargin="unset"
        />
        <TRow2
          label="Pass Code Allowed"
          placeHolderText="Allowed"
          propMargin="unset"
        />
        <TRow2
          label="Pantry Call Allowed"
          placeHolderText="Allowed"
          propMargin="unset"
        />
        <TRow2
          label="Checking Before Start"
          placeHolderText="Allowed"
          propMargin="unset"
        />
        <TRow2
          label="One Host Multiple Booking"
          placeHolderText="Only One"
          propMargin="unset"
        />
        <TRow2
          label="One Guest Multiple Booking"
          placeHolderText="Allowed"
          propMargin="unset"
        />
      </TRowParent>
      <CardChild />
      <ButtonWrapper>
        <Button>
          <ActiveButton>Submit</ActiveButton>
        </Button>
      </ButtonWrapper>
    </CardRoot>
  );
};

Card3.propTypes = {
  className: PropTypes.string,
};

export default Card3;
