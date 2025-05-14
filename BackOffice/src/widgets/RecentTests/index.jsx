import styled from 'styled-components';
import { flex } from 'styles/vars';

// components
import Widget from 'components/Widget';
import WidgetHeader from 'components/Widget/WidgetHeader';
import WidgetBody from 'components/Widget/WidgetBody';
import Navigator from 'UI/Navigator';
import TestItem from 'components/TestItem';
import NoDataPlaceholder from 'components/NoDataPlaceholder';
import ScrollContainer from 'components/ScrollContainer';
import axios from 'axios';
// utils
import { getYearDaysArray } from 'utils/dates';
import moment from 'moment';

// hooks
import useArrayNav from 'hooks/useArrayNav';
import { useEffect, useRef, useState } from 'react';
import useContentHeight from 'hooks/useContentHeight';
import useWindowSize from 'hooks/useWindowSize';

const List = styled.div`
  ${flex.col};
  gap: 20px;
`;

const RecentTests = ({ patient }) => {
  const [testResults, setTestResults] = useState({}); // Initialiser avec un tableau vide
  const patientId = patient._id;

  // Fetching test results when the patient ID changes
  useEffect(() => {
    const fetchTest = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/patient/details/${patientId}`);
        const testData = response.data.medicalRecord.testResults; // Vérifier si testResults existe
        console.log('testResults:', testData); // Debugging: Affichage des résultats des tests
       setTestResults(testData); // Assurez-vous que testResults est un tableau
       
      } catch (error) {
        console.error('Erreur lors de la récupération des résultats des tests :', error.message);
       }
    };

    if (patientId) {
      fetchTest();
    }
  }, [patientId]);

  const isXS = useWindowSize().width < 414;
  const days = getYearDaysArray();
  const todayIndex = moment().diff(moment().startOf('year'), 'days');
  const { index, setIndex, navigate } = useArrayNav(days);

  const headerRef = useRef(null);
  const listRef = useRef(null);
  const height = useContentHeight(headerRef);

  useEffect(() => {
    setIndex(todayIndex);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [todayIndex]);

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTo(0, 0);
    }
  }, [index]);

  return (
    <Widget name="RecentTests" mobile={600}>
      <WidgetHeader title="Recent laboratory tests" flex="column" elRef={headerRef}>
        <Navigator text={isXS ? days[index].short : days[index].long} handler={navigate} nextDisabled={index === todayIndex} />
      </WidgetHeader>
      <WidgetBody>
        <ScrollContainer height={height}>
          <List className="track" ref={listRef}>
           <TestItem  data={testResults} />
           
          </List>
        </ScrollContainer>
      </WidgetBody>
    </Widget>
  );
};

export default RecentTests;
