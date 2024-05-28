import styled from "styled-components";
import PropTypes from "prop-types";

const UserBoxDuotoneLineIcon = styled.img`
  height: 24px;
  width: 24px;
  position: relative;
  object-fit: cover;
`;
const UserBoxDuotoneLineWrapper = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-9xs);
`;
const Dashboard = styled.a`
  text-decoration: none;
  position: relative;
  color: inherit;
  display: inline-block;
  min-width: 76px;
`;
const NavButton = styled.div`
  border-radius: var(--br-8xs);
  background-color: var(--design-01-white-solid);
  border: 1px solid var(--design-01-white-solid);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-7xs) var(--padding-6xs);
  gap: var(--gap-3xs);
`;
const EnvelopeIcon = styled.img`
  height: 24px;
  width: 24px;
  position: relative;
`;
const Dashboard1 = styled.a`
  text-decoration: none;
  position: relative;
  color: inherit;
  display: inline-block;
  min-width: 95px;
  white-space: nowrap;
`;
const Dashboard2 = styled.a`
  text-decoration: none;
  position: relative;
  color: inherit;
  display: inline-block;
  min-width: 53px;
`;
const Dashboard3 = styled.a`
  text-decoration: none;
  position: relative;
  color: inherit;
  display: inline-block;
  min-width: 126px;
  white-space: nowrap;
`;
const Dashboard4 = styled.a`
  text-decoration: none;
  position: relative;
  color: inherit;
  display: inline-block;
  min-width: 98px;
  white-space: nowrap;
`;
const NavButton1 = styled.div`
  border-radius: var(--br-8xs);
  background-color: var(--design-02-primary);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-5xs);
  gap: var(--gap-3xs);
  color: var(--design-01-white-solid);
`;
const Dashboard5 = styled.a`
  text-decoration: none;
  position: relative;
  color: inherit;
  display: inline-block;
  min-width: 51px;
`;
const NavigationRoot = styled.header`
  align-self: stretch;
  box-shadow: var(--card-shadow);
  border-radius: var(--br-3xs);
  background-color: var(--design-01-white-solid);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-base) var(--padding-799xl) var(--padding-base)
    var(--padding-base);
  gap: var(--gap-base);
  top: 0;
  z-index: 99;
  position: sticky;
  text-align: left;
  font-size: var(--text-02-button-text-02-size);
  color: var(--design-02-dark-text);
  font-family: var(--text-02-h5);
  @media screen and (max-width: 1450px) {
    padding-right: var(--padding-390xl);
    box-sizing: border-box;
  }
  @media screen and (max-width: 825px) {
    padding-right: var(--padding-185xl);
    box-sizing: border-box;
  }
  @media screen and (max-width: 450px) {
    padding-right: var(--padding-xl);
    box-sizing: border-box;
  }
  align-self: ${(p) => p.dashboardAlignSelf};
`;

const Navigation2 = ({ className = "", dashboardAlignSelf }) => {
  return (
    <NavigationRoot
      dashboardAlignSelf={dashboardAlignSelf}
      className={className}
    >
      <NavButton>
        <UserBoxDuotoneLineWrapper>
          <UserBoxDuotoneLineIcon
            loading="lazy"
            alt=""
            src="/user-box-duotone-line@2x.png"
          />
        </UserBoxDuotoneLineWrapper>
        <Dashboard>Dashboard</Dashboard>
      </NavButton>
      <NavButton>
        <UserBoxDuotoneLineWrapper>
          <EnvelopeIcon loading="lazy" alt="" src="/envelope.svg" />
        </UserBoxDuotoneLineWrapper>
        <Dashboard1>Basic Settings</Dashboard1>
      </NavButton>
      <NavButton>
        <UserBoxDuotoneLineWrapper>
          <UserBoxDuotoneLineIcon
            loading="lazy"
            alt=""
            src="/user-box-duotone-line@2x.png"
          />
        </UserBoxDuotoneLineWrapper>
        <Dashboard2>Devices</Dashboard2>
      </NavButton>
      <NavButton>
        <UserBoxDuotoneLineWrapper>
          <UserBoxDuotoneLineIcon alt="" src="/user-box-duotone-line@2x.png" />
        </UserBoxDuotoneLineWrapper>
        <Dashboard3>User Management</Dashboard3>
      </NavButton>
      <NavButton>
        <UserBoxDuotoneLineWrapper>
          <UserBoxDuotoneLineIcon alt="" src="/user-box-duotone-line@2x.png" />
        </UserBoxDuotoneLineWrapper>
        <Dashboard4>Room Booking</Dashboard4>
      </NavButton>
      <NavButton1>
        <UserBoxDuotoneLineWrapper>
          <UserBoxDuotoneLineIcon alt="" src="/user-box-duotone-line@2x.png" />
        </UserBoxDuotoneLineWrapper>
        <Dashboard2>Devices</Dashboard2>
      </NavButton1>
      <NavButton>
        <UserBoxDuotoneLineWrapper>
          <UserBoxDuotoneLineIcon alt="" src="/user-box-duotone-line@2x.png" />
        </UserBoxDuotoneLineWrapper>
        <Dashboard5>Visitors</Dashboard5>
      </NavButton>
    </NavigationRoot>
  );
};

Navigation2.propTypes = {
  className: PropTypes.string,

  /** Style props */
  dashboardAlignSelf: PropTypes.any,
};

export default Navigation2;
