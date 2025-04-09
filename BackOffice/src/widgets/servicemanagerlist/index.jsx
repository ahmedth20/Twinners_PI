import { Header } from 'components/Widget/style';
import { LetterNav, LetterNavWrapper, LetterNavItem, NavWrapper } from './style';

// components
import Widget from 'components/Widget';
import WidgetBody from 'components/Widget/WidgetBody';
import GenderNav from 'components/GenderNav';
import MonthNavigator from 'UI/Navigator/MonthNavigator';
import Group from './Group';
import NoDataPlaceholder from 'components/NoDataPlaceholder';
import Servicemanagerlist from '../../components/servicemaangerlist/Item/index'
// utils
import { generateAlphabet } from 'utils/helpers';
import { nanoid } from 'nanoid';

// hooks
import { useState, useRef, useEffect } from 'react';
import useGenderFilter from 'hooks/useGenderFilter';

// import corrected
import PatientService from 'services/ServiceMangerService';

const PatientsList = () => {
    const contentRef = useRef(null);
    const [patients, setPatients] = useState([]);
    const [selectedLetter, setSelectedLetter] = useState(null);
    const [lastGender, setLastGender] = useState(null);

  

 
    return (
        <Widget name="servicemanagerlist">
         <Servicemanagerlist />
        </Widget>
    );
};

export default PatientsList;
