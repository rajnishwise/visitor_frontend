import styled from "styled-components";
import PropTypes from "prop-types";

const Inv = styled.div`
  align-self: stretch;
  position: relative;
`;
const Thead = styled.div`
  width: 215px;
  border-radius: var(--br-8xs);
  border: 1px solid var(--design-01-white-solid);
  box-sizing: border-box;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-sm) var(--padding-mini);
  text-align: left;
  color: var(--design-02-placeholder);
`;
const RusellCrowe = styled.div`
  position: relative;
  display: inline-block;
  min-width: 88px;
`;
const Thead1 = styled.div`
  width: 322px;
  border-radius: var(--br-8xs);
  border: 1px solid var(--design-01-white-solid);
  box-sizing: border-box;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-sm) var(--padding-base);
  white-space: nowrap;
`;
const Active = styled.div`position: relative;
  display: inline-block;
  min-width: 42px;
  color: ${(p) => p.propColor}
  min-width: ${(p) => p.propMinWidth}
`;
const Thead2 = styled.div`
  width: 201px;
  border-radius: var(--br-8xs);
  border: 1px solid var(--design-01-white-solid);
  box-sizing: border-box;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-sm) var(--padding-base);
  color: var(--design-02-primary-dark);
`;
const March = styled.div`
  position: relative;
  display: inline-block;
  min-width: 113px;
`;
const Thead3 = styled.div`
  width: 209px;
  border-radius: var(--br-8xs);
  border: 1px solid var(--design-01-white-solid);
  box-sizing: border-box;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-sm) var(--padding-base);
  white-space: nowrap;
  color: var(--design-02-text-input);
`;
const VuejsNuxtjsLaravel = styled.div`
  position: relative;
`;
const Thead4 = styled.div`
  width: 717px;
  border-radius: var(--br-8xs);
  border: 1px solid var(--design-01-white-solid);
  box-sizing: border-box;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-sm) var(--padding-base);
  max-width: calc(100% - 1027px);
`;
const CardRoot = styled.div`
  align-self: stretch;
  box-shadow: var(--card-shadow);
  border-radius: var(--br-3xs);
  background-color: var(--design-01-white-solid);
  overflow-x: auto;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding: var(--padding-5xs);
  box-sizing: border-box;
  gap: var(--gap-xl);
  max-width: 100%;
  text-align: center;
  font-size: var(--text-02-button-text-02-size);
  color: var(--design-02-dark-text);
  font-family: var(--text-02-h5);
`;

const Card1 = ({ className = "", active, propColor, propMinWidth }) => {
  return (
    <CardRoot className={className}>
      <Thead>
        <Inv>#INV-65807556</Inv>
      </Thead>
      <Thead1>
        <RusellCrowe>Rusell Crowe</RusellCrowe>
      </Thead1>
      <Thead2>
        <Active propColor={propColor} propMinWidth={propMinWidth}>
          {active}
        </Active>
      </Thead2>
      <Thead3>
        <March>25 March, 12:55</March>
      </Thead3>
      <Thead4>
        <VuejsNuxtjsLaravel>
          Vuejs Nuxtjs Laravel Figma Admin Template
        </VuejsNuxtjsLaravel>
      </Thead4>
    </CardRoot>
  );
};

Card1.propTypes = {
  className: PropTypes.string,
  active: PropTypes.string,

  /** Style props */
  propColor: PropTypes.any,
  propMinWidth: PropTypes.any,
};

export default Card1;
