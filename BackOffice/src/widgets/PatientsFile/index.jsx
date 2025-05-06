import { Header } from 'components/Widget/style';
import {
  LetterNav,
  LetterNavWrapper,
  LetterNavItem,
  NavWrapper
} from './style';

// components
import Widget from 'components/Widget';
import WidgetBody from 'components/Widget/WidgetBody';
import GenderNav from 'components/GenderNav';
import MonthNavigator from 'UI/Navigator/MonthNavigator';
import Group from './Group';
import NoDataPlaceholder from 'components/NoDataPlaceholder';

// utils
import { generateAlphabet } from 'utils/helpers';

// hooks
import { useState, useRef, useEffect } from 'react';
import useGenderFilter from 'hooks/useGenderFilter';

// services
import axios from 'axios';

const PatientsList = () => {
  const contentRef = useRef(null);
  const [patientFile, setPatientFile] = useState([]);
  const [selectedLetter, setSelectedLetter] = useState(null);

  const handleLetterClick = (char) => {
    setSelectedLetter((prevLetter) => (prevLetter === char ? null : char));
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/patientFiles/${id}`, {
        withCredentials: true
      });
      setPatientFile((prev) => prev.filter((file) => file._id !== id));
    } catch (error) {
      console.error('Erreur lors de la suppression du fichier patient', error);
    }
  };

  useEffect(() => {
    const fetchPatientFiles = async () => {
      try {
        const response = await axios.get('http://localhost:5000/patientFiles', {
          withCredentials: true,
        });
        setPatientFile(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des fichiers patients', error);
      }
    };

    fetchPatientFiles();
  }, []);

  const [month, setMonth] = useState({ label: 'This month', number: new Date().getMonth() });
  const dateFilteredArr = patientFile;

  const { gender, setGender, genderArr } = useGenderFilter(dateFilteredArr);
  const filteredPatients = genderArr(gender);

  const displayedPatients = selectedLetter
    ? filteredPatients.filter((patient) =>
        patient.reference?.toString()?.[0]?.toUpperCase() === selectedLetter
      )
    : filteredPatients;

  const alphabet = generateAlphabet();

  const isCharInPatients = (char, arr) => {
    return arr.some((patient) => patient.reference?.toString()?.[0]?.toUpperCase() === char);
  };

  useEffect(() => {
    contentRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
  }, [month, gender]);

  return (
    <Widget name="PatientFileList">
      <Header sidePadding={true}>
        <NavWrapper>
          <GenderNav state={gender} handler={setGender} />
          <MonthNavigator state={month} handler={setMonth} />
        </NavWrapper>
        <LetterNavWrapper>
          <LetterNav>
            {alphabet.map((char) => (
              <li key={char}>
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
              alphabet.map((char) => (
                <Group
                  key={`patients-${char}`}
                  gender={gender.value}
                  char={char}
                  type={'patient'}
                  arr={filteredPatients.filter(
                    (patient) => patient.reference?.toString()?.[0]?.toUpperCase() === char
                  )}
                />
              ))
            )}
          </>
        ) : (
          <NoDataPlaceholder />
        )}
      </WidgetBody>

      {/* Tableau des fichiers patients */}
      <div style={{ marginTop: '2rem', padding: '1rem' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
          <thead>
            <tr style={{ backgroundColor: '#f7f7f7', fontWeight: 'bold', textAlign: 'center' }}>
              <th style={{ padding: '12px', borderBottom: '2px solid #ddd' }}>Téléphone</th>
              <th style={{ padding: '12px', borderBottom: '2px solid #ddd' }}>Âge</th>
              <th style={{ padding: '12px', borderBottom: '2px solid #ddd' }}>Sexe</th>
              <th style={{ padding: '12px', borderBottom: '2px solid #ddd' }}>Adresse</th>
              <th style={{ padding: '12px', borderBottom: '2px solid #ddd' }}>Poids (kg)</th>
              <th style={{ padding: '12px', borderBottom: '2px solid #ddd' }}>Taille (cm)</th>
              <th style={{ padding: '12px', borderBottom: '2px solid #ddd' }}>Groupe sanguin</th>
              <th style={{ padding: '12px', borderBottom: '2px solid #ddd' }}>Antécédents</th>
              <th style={{ padding: '12px', borderBottom: '2px solid #ddd' }}>Allergies</th>
              <th style={{ padding: '12px', borderBottom: '2px solid #ddd' }}>Symptômes</th>
              <th style={{ padding: '12px', borderBottom: '2px solid #ddd' }}>Paramédic</th>
              <th style={{ padding: '12px', borderBottom: '2px solid #ddd' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {patientFile.map((file) => (
              <tr key={file._id} style={{ backgroundColor: '#fff', transition: 'background-color 0.3s', textAlign: 'center' }}>
                <td style={{ padding: '12px', borderBottom: '1px solid #ddd' }}>{file.phoneNumber || 'Non spécifié'}</td>
                <td style={{ padding: '12px', borderBottom: '1px solid #ddd' }}>{file.age || 'Non spécifié'}</td>
                <td style={{ padding: '12px', borderBottom: '1px solid #ddd' }}>{file.gender || 'Non spécifié'}</td>
                <td style={{ padding: '12px', borderBottom: '1px solid #ddd' }}>{file.address || 'Non spécifiée'}</td>
                <td style={{ padding: '12px', borderBottom: '1px solid #ddd' }}>{file.weight || 'Non spécifié'}</td>
                <td style={{ padding: '12px', borderBottom: '1px solid #ddd' }}>{file.height || 'Non spécifiée'}</td>
                <td style={{ padding: '12px', borderBottom: '1px solid #ddd' }}>{file.bloodGroup || 'Non spécifié'}</td>
                <td style={{ padding: '12px', borderBottom: '1px solid #ddd' }}>{file.medicalHistory || 'Non spécifié'}</td>
                <td style={{ padding: '12px', borderBottom: '1px solid #ddd' }}>{file.allergies || 'Non spécifiées'}</td>
                <td style={{ padding: '12px', borderBottom: '1px solid #ddd' }}>{file.symptom || 'Non spécifié'}</td>
                <td style={{ padding: '12px', borderBottom: '1px solid #ddd' }}>{file.paramedic?.name || 'Non spécifié'}</td>
                <td style={{ padding: '12px', borderBottom: '1px solid #ddd' }}>
                  <button
                    onClick={() => handleDelete(file._id)}
                    style={{
                      backgroundColor: '#e74c3c',
                      color: 'white',
                      border: 'none',
                      padding: '8px 12px',
                      cursor: 'pointer',
                      borderRadius: '4px',
                      transition: 'background-color 0.3s',
                    }}
                    onMouseOver={(e) => (e.target.style.backgroundColor = '#c0392b')}
                    onMouseOut={(e) => (e.target.style.backgroundColor = '#e74c3c')}
                  >
                    Supprimer
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Hover effect */}
      <style>
        {`
          table tbody tr:hover {
            background-color: #f9f9f9;
          }
        `}
      </style>
    </Widget>
  );
};

export default PatientsList;
