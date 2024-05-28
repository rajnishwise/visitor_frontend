import styled from "styled-components";
import PropTypes from "prop-types";

const Div = styled.div`
  position: relative;
  display: inline-block;
  min-width: 10px;
`;
const Thead = styled.div`
  border-radius: var(--br-8xs);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-base);
`;
const Div1 = styled.div`
  position: relative;
  display: inline-block;
  min-width: 19px;
`;
const Thead1 = styled.div`
  box-shadow: var(--card-shadow);
  border-radius: var(--br-8xs);
  background-color: var(--design-01-white-solid);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-base);
`;
const EmptyCells = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xs);
  max-width: 100%;
  @media screen and (max-width: 450px) {
    flex-wrap: wrap;
  }
`;
const ArrowDropDownIcon = styled.img`
  height: 24px;
  width: 24px;
  position: relative;
`;
const Thead2 = styled.div`
  box-shadow: var(--card-shadow);
  border-radius: var(--br-8xs);
  background-color: var(--design-01-white-solid);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-base);
  gap: var(--gap-3xs);
`;
const CardRoot = styled.footer`
  align-self: stretch;
  box-shadow: var(--card-shadow);
  border-radius: var(--br-3xs);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding: var(--padding-5xs);
  box-sizing: border-box;
  max-width: 100%;
  gap: var(--gap-xl);
  text-align: left;
  font-size: var(--text-02-button-text-02-size);
  color: var(--design-02-text-input);
  font-family: var(--text-02-h5);
  @media screen and (max-width: 925px) {
    flex-wrap: wrap;
  }
`;

const Card = ({ className = "" }) => {
  return (
    <CardRoot className={className}>
      <EmptyCells>
        <Thead>
          <Div>«</Div>
        </Thead>
        <Thead>
          <Div1>01</Div1>
        </Thead>
        <Thead1>
          <Div1>02</Div1>
        </Thead1>
        <Thead>
          <Div1>03</Div1>
        </Thead>
        <Thead>
          <Div1>04</Div1>
        </Thead>
        <Thead>
          <Div1>05</Div1>
        </Thead>
        <Thead>
          <Div>»</Div>
        </Thead>
      </EmptyCells>
      <Thead2>
        <Div1>10</Div1>
        <ArrowDropDownIcon alt="" src="/arrow-drop-down.svg" />
      </Thead2>
    </CardRoot>
  );
};

Card.propTypes = {
  className: PropTypes.string,
};

export default Card;
