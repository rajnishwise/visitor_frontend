import styled from "styled-components";
import PropTypes from "prop-types";

const RoutePermission = styled.div`
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
  font-size: var(--text-02-h6-size);
  color: var(--design-02-dark-text);
`;
const FrameChild = styled.div`
  height: 24px;
  width: 24px;
  border-radius: var(--br-10xs);
  border: 1px solid var(--design-01-border-all);
  box-sizing: border-box;
  overflow: hidden;
  flex-shrink: 0;
`;
const PlaceHolderText = styled.p`
  margin: 0;
  flex: 1;
  position: relative;
  display: inline-block;
  max-width: 100%;
  margin: ${(p) => p.propMargin};
`;
const PlaceHolderTextWrapper = styled.div`
  flex: 1;
  border-radius: var(--br-8xs);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-5xs) 0px;
  box-sizing: border-box;
  min-width: 361px;
  max-width: 100%;
  @media screen and (max-width: 450px) {
    min-width: 100%;
  }
`;
const FrameParent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-2xs);
  max-width: 100%;
  @media screen and (max-width: 750px) {
    flex-wrap: wrap;
  }
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
const TRow = styled.div`
  align-self: stretch;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-5xs) var(--padding-base);
  box-sizing: border-box;
  max-width: 100%;
`;
const PlaceHolderText1 = styled.div`
  flex: 1;
  position: relative;
  display: inline-block;
  max-width: 100%;
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
  padding: var(--padding-5xs) 0px;
  box-sizing: border-box;
  gap: var(--gap-5xs);
  min-width: 467px;
  max-width: 100%;
  text-align: left;
  font-size: var(--text-02-button-text-02-size);
  color: var(--design-02-placeholder);
  font-family: var(--text-02-h5);
  @media screen and (max-width: 750px) {
    min-width: 100%;
  }
`;

const Card7 = ({
  className = "",
  routePermission,
  placeHolderText,
  placeHolderText1,
  placeHolderText2,
  propMargin,
}) => {
  return (
    <CardRoot className={className}>
      <Thead>
        <RoutePermission>{routePermission}</RoutePermission>
      </Thead>
      <TRow>
        <InputField>
          <FrameParent>
            <FrameChild />
            <PlaceHolderTextWrapper>
              <PlaceHolderText propMargin={propMargin}>
                {placeHolderText}
              </PlaceHolderText>
            </PlaceHolderTextWrapper>
          </FrameParent>
        </InputField>
      </TRow>
      <TRow>
        <InputField>
          <FrameParent>
            <FrameChild />
            <PlaceHolderTextWrapper>
              <PlaceHolderText1>{placeHolderText1}</PlaceHolderText1>
            </PlaceHolderTextWrapper>
          </FrameParent>
        </InputField>
      </TRow>
      <TRow>
        <InputField>
          <FrameParent>
            <FrameChild />
            <PlaceHolderTextWrapper>
              <PlaceHolderText1>{placeHolderText2}</PlaceHolderText1>
            </PlaceHolderTextWrapper>
          </FrameParent>
        </InputField>
      </TRow>
    </CardRoot>
  );
};

Card7.propTypes = {
  className: PropTypes.string,
  routePermission: PropTypes.string,
  placeHolderText: PropTypes.string,
  placeHolderText1: PropTypes.string,
  placeHolderText2: PropTypes.string,

  /** Style props */
  propMargin: PropTypes.any,
};

export default Card7;
