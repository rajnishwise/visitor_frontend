import styled from "styled-components";
import Navigation1 from "../components/Navigation1";
import InputField3 from "../components/InputField3";
import InputField2 from "../components/InputField2";
import InputField1 from "../components/InputField1";
import TRow1 from "../components/TRow1";
import TRow from "../components/TRow";

const Logo2Icon = styled.img`
  height: 45px;
  width: 142px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
`;
const TopHeader = styled.div`
  align-self: stretch;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-3xs);
`;
const DatabaseSetup = styled.h3`
  margin: 0;
  position: relative;
  font-size: inherit;
  font-weight: 400;
  font-family: inherit;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-xl);
  }
`;
const DatabaseSetupWrapper = styled.div`
  align-self: stretch;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-xl) 0px 0px;
`;
const BasicSettings = styled.div`
  position: relative;
  white-space: pre-wrap;
`;
const BasicSettingsDatabaseSetuWrapper = styled.div`
  align-self: stretch;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-xl) 0px 0px;
  font-size: var(--text-02-button-text-02-size);
`;
const Breadcrumbs = styled.section`
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
  text-align: left;
  font-size: var(--text-02-h5-size);
  color: var(--design-01-text-600);
  font-family: var(--text-02-h5);
`;
const Preferences = styled.div`
  align-self: stretch;
  position: relative;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-mid);
  }
`;
const Thead = styled.div`
  position: absolute;
  top: 11px;
  left: 0px;
  border-bottom: 1px solid var(--design-01-border-all);
  box-sizing: border-box;
  width: 1888px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-5xl) var(--padding-xl) var(--padding-3xl)
    var(--padding-5xl);
  max-width: 100%;
`;
const Card = styled.section`
  align-self: stretch;
  height: 621px;
  position: relative;
  box-shadow: var(--card-shadow);
  border-radius: var(--br-3xs);
  background-color: var(--design-01-white-solid);
  overflow: hidden;
  flex-shrink: 0;
  max-width: 100%;
  text-align: left;
  font-size: var(--text-02-h6-size);
  color: var(--design-02-dark-text);
  font-family: var(--text-02-h5);
  @media screen and (max-width: 450px) {
    height: auto;
    min-height: 621;
  }
`;
const DashboardDesignRoot = styled.div`
  width: 100%;
  position: relative;
  background-color: var(--design-02-light-bg);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-base) var(--padding-base) 175px;
  box-sizing: border-box;
  gap: var(--gap-3xs);
  line-height: normal;
  letter-spacing: normal;
`;

const DashboardDesign = () => {
  return (
    <DashboardDesignRoot>
      <TopHeader>
        <Logo2Icon loading="lazy" alt="" src="/logo-2.svg" />
      </TopHeader>
      <Navigation1 />
      <Breadcrumbs>
        <DatabaseSetupWrapper>
          <DatabaseSetup>Database Setup</DatabaseSetup>
        </DatabaseSetupWrapper>
        <BasicSettingsDatabaseSetuWrapper>
          <BasicSettings>{`Basic Settings  >  Database Setup`}</BasicSettings>
        </BasicSettingsDatabaseSetuWrapper>
      </Breadcrumbs>
      <Card>
        <Thead>
          <Preferences>Preferences</Preferences>
        </Thead>
        <InputField3 label="Company Name" placeHolderText="SAMSUNG" />
        <InputField2
          label="Select Seat Management DB"
          placeHolderText="MS SQL"
        />
        <InputField3
          label="Main Connection URL"
          placeHolderText="HOST:127.0.0.1;DSN=WSMANAGER;UID=sa;PWD="
          propLeft="952px"
          propMargin="unset"
        />
        <InputField3
          label="Branch"
          placeHolderText="Delhi"
          propLeft="1416px"
          propMargin="unset"
        />
        <InputField2
          label="Select Company Management System"
          placeHolderText="My Database"
          propTop="212px"
          propLeft="24px"
          propMinWidth="90px"
        />
        <InputField1
          label="Criteria for Calculating Extended Time"
          database="Extended Trail Time"
          aPI="Scheduled Expiration Time"
        />
        <InputField1
          label="Secondary API or DB"
          database="Database"
          aPI="API"
          propLeft="952px"
          propPadding="var(--padding-2xs) var(--padding-258xl) var(--padding-2xs) var(--padding-3xs)"
          propDisplay="inline-block"
          propMinWidth="66px"
          propDisplay1="inline-block"
          propMinWidth1="23px"
        />
        <InputField1
          label="SMS API or DB"
          database="Database"
          aPI="API"
          propLeft="1416px"
          propPadding="var(--padding-2xs) var(--padding-258xl) var(--padding-2xs) var(--padding-3xs)"
          propDisplay="inline-block"
          propMinWidth="66px"
          propDisplay1="inline-block"
          propMinWidth1="23px"
        />
        <TRow1 />
        <TRow />
      </Card>
    </DashboardDesignRoot>
  );
};

export default DashboardDesign;
