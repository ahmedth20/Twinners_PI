import { Rotate, BodyChart, View, Spots, Spot } from 'widgets/PainLocation/style';
import { ThreeSixty } from '@mui/icons-material';
import Btn from 'UI/Btn';
import CustomTooltip from 'UI/CustomTooltip';
import male_front from 'assets/male_front.svg';
import male_back from 'assets/male_back.svg';
import female_front from 'assets/female_front.svg';
import female_back from 'assets/female_back.svg';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Body = ({ gender, patient }) => {
  const [frontView, setFrontView] = useState(true);
  const [painLocations, setPainLocations] = useState([]);
  const medical=patient.medicalRecord;
useEffect(() => {
  const fetchPainLocations = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/medicalrecord/pain/${medical}`);
      console.log("🔄 Réponse de l'API :", response.data.painLocations);
      setPainLocations(response.data.painLocations);
    } catch (error) {
      console.error("❌ Erreur lors de la récupération des localisations :", error.message);
    }
  };
  
  if (medical) fetchPainLocations(); // On appelle uniquement si l'ID est présent
}, [medical]);
const drawSpots = (areas, side) => {
  if (!painLocations.length) {
    console.log("🔍 Aucune douleur détectée.");
    return null;
  }

  // Filtrer les zones correspondant au côté (front ou back)
  const formattedPainLocations = painLocations.map((location) => {
    const isFront = frontAreas.some(area => area.id === location);
    const isBack = backAreas.some(area => area.id === location);
    
    if (isFront && side === 'front') return `${location}_front`;
    if (isBack && side === 'back') return `${location}_back`;
    return null; // Si ça ne correspond à rien, on ignore
  }).filter(Boolean); // On enlève les valeurs nulles

  console.log("🟢 IDs attendus :", formattedPainLocations);

  return areas.map(area => {
    const { id, label } = area;
    const areaId = `${id}_${side}`;
    const isActive = formattedPainLocations.includes(areaId);

    return isActive ? (
      <Spot data-spot={areaId} key={areaId} className="active">
        <CustomTooltip title={label} placement="bottom">
          <label htmlFor={areaId}>
            <span className="aura pain-spot"></span>
          </label>
        </CustomTooltip>
      </Spot>
    ) : null;
  });
};



  const frontAreas = [
    { id: 'head', label: 'Head' },
    { id: 'neck', label: 'Neck' },
    { id: 'chest', label: 'Chest' },
    { id: 'stomach', label: 'Stomach' },
    { id: 'heart', label: 'Heart' },
    { id: 'left_arm', label: 'Left Arm' },
    { id: 'right_arm', label: 'Right Arm' },
    { id: 'left_leg', label: 'Left Leg' },
    { id: 'right_leg', label: 'Right Leg' }
  ];

  const backAreas = [
    { id: 'back', label: 'Back' },
    { id: 'left_shoulder', label: 'Left Shoulder' },
    { id: 'right_shoulder', label: 'Right Shoulder' },
    { id: 'lungs', label: 'Lungs' },
    { id: 'left_ankle', label: 'Left Ankle' },
    { id: 'right_ankle', label: 'Right Ankle' }
  ];

  return (
    <div className="wrapper">
      <Rotate onClick={() => setFrontView(!frontView)} aria-label="Change view">
        <ThreeSixty />
      </Rotate>
      <BodyChart>
        {frontView ? (
          <View side="front">
            <img src={gender === 'male' ? male_front : female_front} alt="Body chart" />
            <Spots>{drawSpots(frontAreas, 'front')}</Spots>
          </View>
        ) : (
          <View side="back">
            <img src={gender === 'male' ? male_back : female_back} alt="Body chart" />
            <Spots>{drawSpots(backAreas, 'back')}</Spots>
          </View>
        )}
      </BodyChart>
    </div>
  );
};

export default Body;
