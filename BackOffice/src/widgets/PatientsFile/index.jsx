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

// services
import PatientService from 'services/PatientService';
import axios from 'axios';

const PatientsList = () => {
  const contentRef = useRef(null);
  const [patientFile, setPatientFile] = useState([]); // Liste des fichiers patients
  const [selectedLetter, setSelectedLetter] = useState(null);

  const handleLetterClick = (char) => {
    setSelectedLetter((prevLetter) => (prevLetter === char ? null : char));
  };

  // Récupération des fichiers patients depuis l'API
  useEffect(() => {
    const fetchPatientFiles = async () => {
      try {
        const response = await axios.get('http://localhost:5000/patientFiles', {
          withCredentials: true,
        });
        setPatientFile(response.data); // Mettre à jour l'état avec les fichiers patients récupérés
      } catch (error) {
        console.error('Erreur lors de la récupération des fichiers patients', error);
      }
    };

    fetchPatientFiles();
  }, []); // L'API est appelée une seule fois au chargement du composant

  // Filtrage actuel par mois
  const [month, setMonth] = useState({ label: 'This month', number: new Date().getMonth() });
  const dateFilteredArr = patientFile; // Utilisation des fichiers patients récupérés

  // Filtrage actuel par genre
  const { gender, setGender, genderArr } = useGenderFilter(dateFilteredArr);

  const filteredPatients = genderArr(gender);

  const displayedPatients = selectedLetter
    ? filteredPatients.filter((patient) =>
        patient.user?.lastName?.[0]?.toLowerCase() === selectedLetter
      )
    : filteredPatients;

  // Génération de l'alphabet
  const alphabet = generateAlphabet();

  const isCharInPatients = (char, arr) => {
    return arr.some((patient) => patient.user?.lastName[0].toLowerCase() === char);
  };

  useEffect(() => {
    contentRef.current?.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
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
              alphabet.map((char) => (
                <Group
                  key={`patients-${char}`}
                  gender={gender.value}
                  char={char}
                  type={'patient'}
                  arr={filteredPatients.filter((patient) => patient.user?.lastName?.[0]?.toLowerCase() === char)}
                />
              ))
            )}
          </>
        ) : (
          <NoDataPlaceholder />
        )}
      </WidgetBody>

      {/* Affichage des fichiers patients récupérés de l'API */}
      <div style={{ marginTop: '2rem', padding: '1rem' }}>
    
        <table style={{ width: '100%', borderCollapse: 'collapse', borderRadius: '8px' }}>
          <thead>
            <tr style={{ backgroundColor: '#f2f2f2' }}>
              <th style={{ padding: '12px', borderBottom: '2px solid #ddd', textAlign: 'left' }}>Date d'émission</th>
              <th style={{ padding: '12px', borderBottom: '2px solid #ddd', textAlign: 'left' }}>Description</th>
              <th style={{ padding: '12px', borderBottom: '2px solid #ddd', textAlign: 'left' }}>Symptômes</th>
              <th style={{ padding: '12px', borderBottom: '2px solid #ddd', textAlign: 'left' }}>Niveau d'urgence</th>
              <th style={{ padding: '12px', borderBottom: '2px solid #ddd', textAlign: 'left' }}>Paramedic</th>
              <th style={{ padding: '12px', borderBottom: '2px solid #ddd', textAlign: 'left' }}>Medical Record</th>
            </tr>
          </thead>
          <tbody>
            {patientFile.map((file) => (
              <tr key={file._id} style={{ backgroundColor: '#fff', transition: 'background-color 0.3s' }}>
                <td style={{ padding: '12px', borderBottom: '1px solid #ddd' }}>{file.dateIssued}</td>
                <td style={{ padding: '12px', borderBottom: '1px solid #ddd' }}>{file.description}</td>
                <td style={{ padding: '12px', borderBottom: '1px solid #ddd' }}>{file.symptoms}</td>
                <td style={{ padding: '12px', borderBottom: '1px solid #ddd' }}>{file.emergencyLevel}</td>
                <td style={{ padding: '12px', borderBottom: '1px solid #ddd' }}>
                  {file.paramedic ? file.paramedic.name : 'Non spécifié'}
                </td>
                <td style={{ padding: '12px', borderBottom: '1px solid #ddd' }}>
                  {file.medicalRecord ? file.medicalRecord.recordDetails : 'Non spécifié'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Effet de survol pour les lignes du tableau */}
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
