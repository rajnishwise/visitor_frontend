import styled from "styled-components";
import PropTypes from "prop-types";

const SearchByName = styled.div`
  flex: 1;
  position: relative;
`;
const SearchIcon = styled.img`
  height: 24px;
  width: 24px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
`;
const Thead = styled.div`
  width: 265px;
  border-radius: var(--br-8xs);
  border: 1px solid var(--design-01-border-all);
  box-sizing: border-box;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-2xs) var(--padding-xs);
  gap: var(--gap-3xs);
  white-space: nowrap;
  text-align: left;
`;
const Showing1To = styled.div`
  position: relative;
`;
const Thead1 = styled.div`
  border-radius: var(--br-8xs);
  border: 1px solid var(--design-01-white-solid);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-sm) var(--padding-mini);
  white-space: nowrap;
`;
const ExportToExcel = styled.div`
  position: relative;
  display: inline-block;
  min-width: 99px;
`;
const Thead2 = styled.div`
  flex: 1;
  border-radius: var(--br-8xs);
  background-color: var(--design-02-primary-dark);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-smi);
  box-sizing: border-box;
  gap: var(--gap-3xs);
  min-width: 103px;
  white-space: nowrap;
`;
const ExportToPdf = styled.div`
  position: relative;
  display: inline-block;
  min-width: 91px;
`;
const Thead3 = styled.div`
  flex: 1;
  border-radius: var(--br-8xs);
  background-color: var(--design-02-primary-dark);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-smi);
  box-sizing: border-box;
  gap: var(--gap-3xs);
  min-width: 98px;
  white-space: nowrap;
`;
const PlusLgIcon = styled.img`
  width: 24px;
  height: 24px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
`;
const Thead4 = styled.div`
  box-shadow: var(--card-shadow);
  border-radius: var(--br-8xs);
  background-color: var(--design-01-white-solid);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-smi);
`;
const ActionHeaders = styled.div`
  width: 380px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  gap: var(--gap-3xs);
  max-width: 100%;
  color: var(--design-01-white-solid);
  @media screen and (max-width: 450px) {
    flex-wrap: wrap;
  }
`;
const CardRoot = styled.div`
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
  text-align: center;
  font-size: var(--text-02-button-text-02-size);
  color: var(--design-02-text-input);
  font-family: var(--text-02-h5);
  @media screen and (max-width: 1350px) {
    flex-wrap: wrap;
  }
`;

const Card2 = ({ className = "" }) => {
  return (
    <CardRoot className={className}>
      <Thead>
        <SearchByName>Search By Name...</SearchByName>
        <SearchIcon alt="" src="/search.svg" />
      </Thead>
      <Thead1>
        <Showing1To>Showing 1 to 10 of 150 entries</Showing1To>
      </Thead1>
      <ActionHeaders>
        <Thead2>
          <SearchIcon alt="" src="/filepdf.svg" />
          <ExportToExcel>Export to Excel</ExportToExcel>
        </Thead2>
        <Thead3>
          <SearchIcon alt="" src="/filepdf.svg" />
          <ExportToPdf>Export to PDF</ExportToPdf>
        </Thead3>
        <Thead4>
          <PlusLgIcon loading="lazy" alt="" src="/pluslg.svg" />
        </Thead4>
      </ActionHeaders>
    </CardRoot>
  );
};

Card2.propTypes = {
  className: PropTypes.string,
};

export default Card2;
