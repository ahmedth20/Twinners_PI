import React, { useState, useRef, useEffect } from 'react';
import { Header } from 'components/Widget/style';
import { LetterNav, LetterNavWrapper, LetterNavItem, NavWrapper } from './style';

// components
import Widget from 'components/Widget';
import WidgetBody from 'components/Widget/WidgetBody';
import GenderNav from 'components/GenderNav';
import MonthNavigator from 'UI/Navigator/MonthNavigator';
import Group from './Group';
import NoDataPlaceholder from 'components/NoDataPlaceholder';
import UpdateDoctorPopup from 'pages/UpdateDoctorPopUp';

// utils
import { generateAlphabet } from 'utils/helpers';

// hooks
import useGenderFilter from 'hooks/useGenderFilter';
import DoctorService from 'services/DoctorService';

const DoctorsList = ({ variant = "doctor" }) => {
  const contentRef = useRef(null);
  const [doctors, setDoctors] = useState([]);
  const [selectedLetter, setSelectedLetter] = useState(null);
 // const [lastGender, setLastGender] = useState(null);
  const [isEditPopupOpen, setIsEditPopupOpen] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  // Fetch doctors on component mount
  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const data = await DoctorService.getAllDoctors();
        setDoctors(data);
        console.log(data);
      } catch (error) {
        console.error('Failed to fetch Doctors', error);
      }
    };
    fetchDoctors();
  }, []);

  // Current filter by month
  const [month, setMonth] = useState({ label: 'This month', number: new Date().getMonth() });
  const dateFilteredArr = doctors;

  // Current filter by gender
  const { gender, setGender, genderArr } = useGenderFilter(dateFilteredArr);
  const filteredDoctors = genderArr(gender) || [];

  const displayedDoctors = selectedLetter
    ? filteredDoctors.filter(
        (doctor) => doctor.user?.lastName?.[0]?.toLowerCase() === selectedLetter
      )
    : filteredDoctors;

  // Generate an array containing alphabet
  const alphabet = generateAlphabet() || [];

  const isCharInDoctors = (char, arr) => {
    return arr.some((doctor) => doctor.user?.lastName[0]?.toLowerCase() === char);
  };

  useEffect(() => {
    contentRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
  }, [month, gender]);

  const handleLetterClick = (char) => {
    setSelectedLetter((prevLetter) => (prevLetter === char ? null : char));
  };

  /*const handleGenderClick = (newGender) => {
    if (lastGender === newGender.value) {
      setSelectedLetter(null); // Reset letter selection on double click
    }
    setLastGender(newGender.value);
    setGender(newGender);
  };
*/
  const handleEditDoctor = (doctor) => {
    setSelectedDoctor(doctor); // Store selected doctor
    setIsEditPopupOpen(true); // Open the popup
  };

  return (
    <Widget name="DoctorsList">
      <Header sidePadding={true}>
        <NavWrapper>
          <GenderNav state={gender} handler={setGender} />
          <MonthNavigator state={month} handler={setMonth} />
        </NavWrapper>
        <LetterNavWrapper>
          <LetterNav>
            {alphabet.length > 0 ? (
              alphabet.map((char) => (
                <li key={char}>
                  <LetterNavItem
                    className={`${
                      isCharInDoctors(char, filteredDoctors) ? 'active' : ''
                    } ${selectedLetter === char ? 'selected' : ''}`}
                    href={`#${char}`}
                    onClick={() => handleLetterClick(char)}
                  >
                    {char}
                  </LetterNavItem>
                </li>
              ))
            ) : (
              <NoDataPlaceholder />
            )}
          </LetterNav>
        </LetterNavWrapper>
      </Header>
      <WidgetBody style={{ padding: 0 }} elRef={contentRef}>
        {filteredDoctors.length !== 0 ? (
          <>
            {selectedLetter ? (
              <Group
                key={`patients-${selectedLetter}`}
                gender={gender.value}
                char={selectedLetter}
                type={'patient'}
                arr={displayedDoctors}
                onEditDoctor={handleEditDoctor}
              />
            ) : (
              alphabet.map((char) => (
                <Group
                  key={`patients-${char}`}
                  gender={gender.value}
                  char={char}
                  type={'patient'}
                  arr={filteredDoctors.filter(
                    (doctor) => doctor.user?.lastName?.[0]?.toLowerCase() === char
                  ) || []}
                  onEditDoctor={handleEditDoctor}
                />
              ))
            )}
          </>
        ) : (
          <NoDataPlaceholder />
        )}
      </WidgetBody>

      {/* UpdateDoctorPopup */}
      {isEditPopupOpen && (
        <UpdateDoctorPopup
          isOpen={isEditPopupOpen}
          onClose={() => setIsEditPopupOpen(false)}
          doctor={selectedDoctor} // Pass the selected doctor data
        />
      )}
    </Widget>
  );
};

export default DoctorsList;