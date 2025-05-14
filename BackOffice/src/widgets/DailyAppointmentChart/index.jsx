import Widget from 'components/Widget';
import WidgetHeader from 'components/Widget/WidgetHeader';
import WidgetBody from 'components/Widget/WidgetBody';
import ChartLegend from 'components/OverallAppointmentChart/ChartLegend';
import ChartBars from 'components/OverallAppointmentChart/ChartBars';
import ScrollContainer from 'react-indiana-drag-scroll';
import axios from 'axios';
import { useEffect, useState } from 'react';

const DailyAppointmentChart = ({ patient }) => {
  const [data, setData] = useState([]);
const patientId=patient._id;
  useEffect(() => {
    const fetchConsultations = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/patient/details/${patientId}`);
        const consultations = response.data.consultations;

        // On regroupe par heures
        const hourlyData = consultations.reduce((acc, consultation) => {
          const hour = new Date(consultation.date).getHours();
          const label = `${hour % 12 || 12}${hour < 12 ? 'am' : 'pm'}`;

          if (!acc[label]) {
            acc[label] = 0;
          }
          acc[label]++;
          return acc;
        }, {});

        // On formate les données pour l'affichage
        const formattedData = Object.keys(hourlyData).map((hour) => ({
          label: hour,
          values: {
            consultation: hourlyData[hour],
          },
        }));

        // On trie par ordre horaire
        formattedData.sort((a, b) => {
          const parseHour = (label) => (label.includes('pm') ? 12 : 0) + parseInt(label);
          return parseHour(a.label) - parseHour(b.label);
        });

        setData(formattedData);
      } catch (error) {
        console.error('Erreur lors de la récupération des consultations:', error.message);
      }
    };

    if (patientId) {
      fetchConsultations();
    }
  }, [patientId]);

  return (
    <Widget name="DailyAppointmentChart" shadow={true}>
      <WidgetHeader title="Daily Appointments" />
      <WidgetBody style={{ justifyContent: 'space-between' }}>
        <ChartLegend />
        <ChartBars data={data} as={ScrollContainer} />
      </WidgetBody>
    </Widget>
  );
};

export default DailyAppointmentChart;
