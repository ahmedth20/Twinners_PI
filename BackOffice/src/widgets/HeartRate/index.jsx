// styling
import { colors } from 'styles/vars';

// styled components
import { Header, Main } from './style';

// components
import Widget from 'components/Widget';
import Cardiogram from 'react-cardiogram';
import { useEffect, useState } from 'react';
import axios from 'axios';

const HeartRate = ({ patient }) => {
  const [oxygen, setOxygen] = useState(null);
  const patientId = patient._id;

  useEffect(() => {
    const fetchOxygen = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/patient/details/${patientId}`);
        const oxygenData = response.data.medicalRecord.testResults.oxygenSaturation;
        console.log(response.data);
        console.log(oxygenData);
        setOxygen(oxygenData);
      } catch (error) {
        console.error('Erreur lors de la récupération de l\'oxygène :', error.message);
      }
    };

    if (patientId) {
      fetchOxygen();
    }
  }, [patientId]);

  return (
    <Widget name="HeartRate">
      <Header>
        <i className="icon icon-heart"></i>
        <span className="h1">
          {oxygen !== null ? `${oxygen}` : 'N/A'}
        </span>
        <span className="text">Oxygen Saturation</span>
      </Header>
      <Main>
        <Cardiogram
          color={colors.absolute_red}
          beatFrequency={1500}
          density={1}
          scale={30}
          height={278}
        />
      </Main>
    </Widget>
  );
};

export default HeartRate;
