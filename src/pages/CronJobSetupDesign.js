import styled from "styled-components";
import Navigation1 from "../components/Navigation1";
import Card2 from "../components/Card2";
import Card1 from "../components/Card1";
import Card from "../components/Card";

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
const CronJobSetup = styled.h3`
  margin: 0;
  position: relative;
  font-size: inherit;
  font-weight: 400;
  font-family: inherit;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-xl);
  }
`;
const CronJobSetupWrapper = styled.div`
  align-self: stretch;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-xl) 0px 0px;
`;
const ApplicationDashboard = styled.div`
  position: relative;
  white-space: pre-wrap;
`;
const ApplicationDashboardWrapper = styled.div`
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
const Sno = styled.div`
  position: relative;
  font-size: var(--text-02-h6-size);
  font-family: var(--text-02-h5);
  color: var(--design-02-dark-text);
  text-align: center;
  display: inline-block;
  min-width: 46px;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-mid);
  }
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
  padding: var(--padding-sm) var(--padding-base);
`;
const JobName = styled.div`
  position: relative;
  font-size: var(--text-02-h6-size);
  font-family: var(--text-02-h5);
  color: var(--design-02-dark-text);
  text-align: center;
  display: inline-block;
  min-width: 92px;
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
  max-width: 100%;
`;
const Status1 = styled.div`
  position: relative;
  font-size: var(--text-02-h6-size);
  font-family: var(--text-02-h5);
  color: var(--design-02-dark-text);
  text-align: center;
  display: inline-block;
  min-width: 70px;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-mid);
  }
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
`;
const ActiveTime = styled.div`
  position: relative;
  font-size: var(--text-02-h6-size);
  font-family: var(--text-02-h5);
  color: var(--design-02-dark-text);
  text-align: center;
  display: inline-block;
  min-width: 117px;
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
`;
const Description = styled.div`
  position: relative;
  font-size: var(--text-02-h6-size);
  font-family: var(--text-02-h5);
  color: var(--design-02-dark-text);
  text-align: center;
  display: inline-block;
  min-width: 124px;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-mid);
  }
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
  max-width: 100%;
`;
const Card = styled.div`
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
  @media screen and (max-width: 1800px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;
const TableFull = styled.form`
  margin: 0;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-3xs);
  max-width: 100%;
`;
const CronJobSetupDesignRoot = styled.div`
  width: 100%;
  position: relative;
  background-color: var(--design-02-light-bg);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-base) var(--padding-base) 94px;
  box-sizing: border-box;
  gap: var(--gap-3xs);
  line-height: normal;
  letter-spacing: normal;
`;

const CronJobSetupDesign = () => {
  return (
    <CronJobSetupDesignRoot>
      <TopHeader>
        <Logo2Icon loading="lazy" alt="" src="/logo-2.svg" />
      </TopHeader>
      <Navigation1 />
      <Breadcrumbs>
        <CronJobSetupWrapper>
          <CronJobSetup>Cron Job Setup</CronJobSetup>
        </CronJobSetupWrapper>
        <ApplicationDashboardWrapper>
          <ApplicationDashboard>{`Application  >  Dashboard`}</ApplicationDashboard>
        </ApplicationDashboardWrapper>
      </Breadcrumbs>
      <TableFull>
        <Card2 />
        <Card>
          <Thead>
            <Sno>S.No.</Sno>
          </Thead>
          <Thead1>
            <JobName>JOB NAME</JobName>
          </Thead1>
          <Thead2>
            <Status1>STATUS</Status1>
          </Thead2>
          <Thead3>
            <ActiveTime>ACTIVE TIME</ActiveTime>
          </Thead3>
          <Thead4>
            <Description>DESCRIPTION</Description>
          </Thead4>
        </Card>
        <Card1 active="Active" />
        <Card1 active="Inactive" propColor="#bb3535" propMinWidth="54px" />
        <Card1 active="Active" propColor="#559242" propMinWidth="42px" />
        <Card1 active="Inactive" propColor="#bb3535" propMinWidth="54px" />
        <Card1 active="Inactive" propColor="#bb3535" propMinWidth="54px" />
        <Card1 active="Active" propColor="#559242" propMinWidth="42px" />
        <Card />
      </TableFull>
    </CronJobSetupDesignRoot>
  );
};

export default CronJobSetupDesign;
