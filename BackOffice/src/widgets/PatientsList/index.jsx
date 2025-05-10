import { Header } from 'components/Widget/style';
import { LetterNav, LetterNavWrapper, LetterNavItem, NavWrapper } from './style';

// components
import Widget from 'components/Widget';
import WidgetBody from 'components/Widget/WidgetBody';
import GenderNav from 'components/GenderNav';
import MonthNavigator from 'UI/Navigator/MonthNavigator';
import Group from './Group';
import NoDataPlaceholder from 'components/NoDataPlaceholder';

// utils
import { generateAlphabet } from 'utils/helpers';
import { nanoid } from 'nanoid';

// hooks
import { useState, useRef, useEffect } from 'react';
import useGenderFilter from 'hooks/useGenderFilter';

// import corrected
import PatientService from 'services/PatientService';

const PatientsList = () => {
    const contentRef = useRef(null);
    const [patients, setPatients] = useState([]);
    const [selectedLetter, setSelectedLetter] = useState(null);

    const handleLetterClick = (char) => {
        setSelectedLetter(prevLetter => (prevLetter === char ? null : char));
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

    const [month, setMonth] = useState({ label: 'This month', number: new Date().getMonth() });
    const dateFilteredArr = patients;

    const { gender, setGender, genderArr } = useGenderFilter(dateFilteredArr);
    const filteredPatients = genderArr(gender);

    const displayedPatients = selectedLetter
        ? filteredPatients.filter(patient =>
            typeof patient.user?.lastName === 'string' &&
            patient.user.lastName.length > 0 &&
            patient.user.lastName[0].toLowerCase() === selectedLetter
        )
        : filteredPatients;


    const isCharInPatients = (char, arr) => {
        return arr.some(patient =>
            typeof patient.user?.lastName === 'string' &&
            patient.user.lastName.length > 0 &&
            patient.user.lastName[0].toLowerCase() === char
        );
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
                            <Group
                                key={`patients-${selectedLetter}`}
                                gender={gender.value}
                                char={selectedLetter}
                                type={'patient'}
                                arr={displayedPatients}
                            />
                        ) : (
                            alphabet.map(char => (
                                <Group
                                    key={`patients-${char}`}
                                    gender={gender.value}
                                    char={char}
                                    type={'patient'}
                                    arr={filteredPatients.filter(patient =>
                                        typeof patient.user?.lastName === 'string' &&
                                        patient.user.lastName.length > 0 &&
                                        patient.user.lastName[0].toLowerCase() === char
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
