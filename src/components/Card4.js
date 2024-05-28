import styled from "styled-components";
import TRow2 from "./TRow2";
import PropTypes from "prop-types";

const Preferences = styled.div`
  align-self: stretch;
  position: relative;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-mid);
  }
`;
const Thead = styled.div`
  align-self: stretch;
  border-bottom: 1px solid var(--design-01-border-all);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-5xl) var(--padding-xl) var(--padding-3xl)
    var(--padding-5xl);
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
  padding: var(--padding-2xs) 0px;
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

const Card4 = ({ className = "" }) => {
  return (
    <CardRoot className={className}>
      <Thead>
        <Preferences>Preferences</Preferences>
      </Thead>
      <TRow2 label="Tab ID" placeHolderText="101" />
      <TRow2 label="Tab Location" placeHolderText="G1" propMargin="unset" />
      <TRow2
        label="Mac Address"
        placeHolderText="AB:05:MN:05:FK"
        propMargin="unset"
      />
      <TRow2
        label="Machine ID"
        placeHolderText="Raf-sdfk-sdgj"
        propMargin="unset"
      />
      <TRow2
        label="Licence Key"
        placeHolderText="86964-54654-654-54564"
        propMargin="0"
      />
      <TRow2
        label="Activation Date"
        placeHolderText="2024-06-13"
        propMargin="0"
      />
      <TRow2
        label="Expiry Date"
        placeHolderText="2025-06-12"
        propMargin="unset"
      />
      <TRow2 label="Notices" placeHolderText="Allowed" propMargin="unset" />
      <TRow2
        label="Verify Pass Code"
        placeHolderText="Allowed"
        propMargin="unset"
      />
    </CardRoot>
  );
};

Card4.propTypes = {
  className: PropTypes.string,
};

export default Card4;
