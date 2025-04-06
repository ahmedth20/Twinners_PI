import { Header } from '@components/Widget/style';
import { LetterNav, LetterNavWrapper, LetterNavItem, NavWrapper } from './style';

// components
import Widget from '@components/Widget';
import WidgetBody from '@components/Widget/WidgetBody';
import GenderNav from '@components/GenderNav';
import MonthNavigator from '@ui/Navigator/MonthNavigator';
import Group from './Group';
import NoDataPlaceholder from '@components/NoDataPlaceholder';

// utils
import { generateAlphabet } from '@utils/helpers';
import { nanoid } from 'nanoid';

// hooks
import { useState, useRef, useEffect } from 'react';
import useGenderFilter from '@hooks/useGenderFilter';

// import corrected
import PatientService from 'services/PatientService';

const PatientsList = () => {
    const contentRef = useRef(null);
    const [patients, setPatients] = useState([]);
    const [selectedLetter, setSelectedLetter] = useState(null);
    const [lastGender, setLastGender] = useState(null);

    const handleLetterClick = (char) => {
        setSelectedLetter(prevLetter => (prevLetter === char ? null : char));
    };
    
    const handleGenderClick = (newGender) => {
        if (lastGender === newGender.value) {
            // Double-clic : Réinitialiser la sélection de lettre
            setSelectedLetter(null);
        }
        setLastGender(newGender.value);
        setGender(newGender);
    };
    
    
    
    useEffect(() => {
        const fetchPatients = async () => {
            try {
                const data = await PatientService.getAllPatients();
                setPatients(data);
                console.log("widgets");
                console.log(data);
            } catch (error) {
                console.error("Failed to fetch patients", error);
            }
        };
        fetchPatients();
    }, []);

    // current filter by month
    const [month, setMonth] = useState({ label: 'This month', number: new Date().getMonth() });
    const dateFilteredArr = patients;
    // current filter by gender
    const { gender, setGender, genderArr } = useGenderFilter(dateFilteredArr);
  
    const filteredPatients = genderArr(gender);

    const displayedPatients = selectedLetter
    ? filteredPatients.filter(patient => 
        patient.user?.lastName?.[0]?.toLowerCase() === selectedLetter
    ) 
    : filteredPatients;


    // generate an array containing alphabet
    const alphabet = generateAlphabet();

    const isCharInPatients = (char, arr) => {
        return arr.some(patient => patient.user?.lastName[0].toLowerCase() === char);
    };

    useEffect(() => {
        contentRef.current?.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, [month, gender]);

    return (
        <Widget name="PatientsList">
            <Header sidePadding={true}>
                <NavWrapper>
                    <GenderNav state={gender} handler={setGender} />
                    <MonthNavigator state={month} handler={setMonth} />
                </NavWrapper>
                <LetterNavWrapper>
                    <LetterNav>
                        {alphabet.map(char => (
                            <li key={nanoid(3)}>
                             <LetterNavItem
                                className={`${isCharInPatients(char, filteredPatients) ? 'active' : ''} ${selectedLetter === char ? 'selected' : ''}`}
                                href={`#${char}`}
                                onClick={() => handleLetterClick(char)}
                            >
                                {char}
                            </LetterNavItem>


                            </li>
                        ))}
                    </LetterNav>
                </LetterNavWrapper>
            </Header>
            <WidgetBody style={{ padding: 0 }} elRef={contentRef}>
                {dateFilteredArr.length !== 0 ? (
                    <>
                    {selectedLetter ? (
    // Si une lettre est sélectionnée, afficher uniquement ce groupe
    <Group
        key={`patients-${selectedLetter}`}
        gender={gender.value}
        char={selectedLetter}
        type={'patient'}
        arr={displayedPatients} // Patients filtrés par lettre
    />
) : (
    // Sinon, afficher tous les groupes classés par lettre
    alphabet.map(char => (
        <Group
            key={`patients-${char}`}
            gender={gender.value}
            char={char}
            type={'patient'}
            arr={filteredPatients.filter(patient => 
                patient.user?.lastName?.[0]?.toLowerCase() === char
            )}
        />
    ))
)}


                    </>
                ) : (
                    <NoDataPlaceholder />
                )}
            </WidgetBody>
        </Widget>
    );
};

export default PatientsList;
