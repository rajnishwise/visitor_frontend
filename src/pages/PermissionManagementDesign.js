import styled from "styled-components";
import Navigation2 from "../components/Navigation2";
import Card7 from "../components/Card7";
import Card6 from "../components/Card6";
import Card5 from "../components/Card5";

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
const PermissionManagement = styled.h3`
  margin: 0;
  position: relative;
  font-size: inherit;
  font-weight: 400;
  font-family: inherit;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-xl);
  }
`;
const PermissionManagementWrapper = styled.div`
  align-self: stretch;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-xl) 0px 0px;
`;
const DevicesApplications = styled.div`
  position: relative;
  white-space: pre-wrap;
`;
const DevicesApplicationsWrapper = styled.div`
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
const CardParent = styled.section`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-3xs);
  max-width: 100%;
  flex-shrink: 0;
`;
const PermissionManagementDesignRoot = styled.div`
  width: 100%;
  position: relative;
  background-color: var(--design-02-light-bg);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-base) var(--padding-base) 0px;
  box-sizing: border-box;
  gap: var(--gap-3xs);
  line-height: normal;
  letter-spacing: normal;
`;

const PermissionManagementDesign = () => {
  return (
    <PermissionManagementDesignRoot>
      <TopHeader>
        <Logo2Icon loading="lazy" alt="" src="/logo-2.svg" />
      </TopHeader>
      <Navigation2 dashboardAlignSelf="unset" />
      <Breadcrumbs>
        <PermissionManagementWrapper>
          <PermissionManagement>Permission Management</PermissionManagement>
        </PermissionManagementWrapper>
        <DevicesApplicationsWrapper>
          <DevicesApplications>{`Devices  >  Applications`}</DevicesApplications>
        </DevicesApplicationsWrapper>
      </Breadcrumbs>
      <CardParent>
        <Card7
          routePermission="Route Permission"
          placeHolderText="Prefrences"
          placeHolderText1="Kiosk Setup"
          placeHolderText2="Main Notice"
        />
        <Card7
          routePermission="Memo Board"
          placeHolderText="Note Management"
          placeHolderText1="Group Note Management"
          placeHolderText2="Group Management"
          propMargin="0"
        />
        <Card7
          routePermission="Push Message"
          placeHolderText="Send Notice"
          placeHolderText1="Personal Push Send"
          placeHolderText2="Push Transmission by Identity"
          propMargin="unset"
        />
      </CardParent>
      <CardParent>
        <Card6 />
        <Card5
          groupStudyRoom="Group Study Room"
          placeHolderText="Group Study Room Setup"
          placeHolderText1="Group Study Room Holiday Settings"
          placeHolderText2="Group Study Room Manager Reservation"
          placeHolderText3="Group Study General Settings"
        />
        <Card5
          groupStudyRoom="Private Carrel"
          placeHolderText="Private Carrel Settings"
          placeHolderText1="Private Carrel Holiday Settings"
          placeHolderText2="Private Carrel Manager Reservation"
          placeHolderText3="Carrel General Settings"
          propMargin="unset"
        />
      </CardParent>
    </PermissionManagementDesignRoot>
  );
};

export default PermissionManagementDesign;
