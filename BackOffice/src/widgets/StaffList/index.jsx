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

// Import du service StaffService
import StaffService from 'services/StaffService';

const StaffList = () => {
    const contentRef = useRef(null);
    const [staffMembers, setStaffMembers] = useState([]);
    const [selectedLetter, setSelectedLetter] = useState(null);
    const [lastGender, setLastGender] = useState(null);

    const handleLetterClick = (char) => {
        setSelectedLetter(prevLetter => (prevLetter === char ? null : char));
    };

    const handleGenderClick = (newGender) => {
        if (lastGender === newGender.value) {
            setSelectedLetter(null);
        }
        setLastGender(newGender.value);
        setGender(newGender);
    };

    useEffect(() => {
        const fetchStaff = async () => {
            try {
                const data = await StaffService.getAllStaff();
                setStaffMembers(data);
                console.log(data);
            } catch (error) {
                console.error("Erreur lors du chargement du personnel", error);
            }
        };
        fetchStaff();
    }, []);

    // Filtrage par mois
    const [month, setMonth] = useState({ label: 'This month', number: new Date().getMonth() });
    const dateFilteredArr = staffMembers;

    // Filtrage par genre
    const { gender, setGender, genderArr } = useGenderFilter(dateFilteredArr);
    console.log(genderArr(gender));
    const filteredStaffMembers = genderArr(gender);

    const displayedStaffMembers = selectedLetter
        ? filteredStaffMembers.filter(staffMember =>
            staffMember.user?.lastName?.[0]?.toLowerCase() === selectedLetter
        )
        : filteredStaffMembers;

    // Générer l'alphabet
    const alphabet = generateAlphabet();

    const isCharInStaff = (char, arr) => {
        return arr.some(staffMember => staffMember.user?.lastName[0].toLowerCase() === char);
    };

    useEffect(() => {
        contentRef.current?.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, [month, gender]);

    return (
        <Widget name="StaffList">
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
                                    className={`${isCharInStaff(char, filteredStaffMembers) ? 'active' : ''} ${selectedLetter === char ? 'selected' : ''}`}
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
                                key={`staff-${selectedLetter}`}
                                gender={gender.value}
                                char={selectedLetter}
                                type={'staff'}
                                arr={displayedStaffMembers}
                            />
                        ) : (
                            alphabet.map(char => (
                                <Group
                                    key={`staff-${char}`}
                                    gender={gender.value}
                                    char={char}
                                    type={'staff'}
                                    arr={filteredStaffMembers.filter(staffMember =>
                                        staffMember.user?.lastName?.[0]?.toLowerCase() === char
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

export default StaffList;
