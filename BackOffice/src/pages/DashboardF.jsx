import { useLocation } from "react-router-dom";
import Page from "layout/Page";
import PainLocation from "widgets/PainLocation";
import DailyAppointmentChart from "widgets/DailyAppointmentChart";
import HeartRate from "widgets/HeartRate";
import ConfirmedDiagnoses from "widgets/ConfirmedDiagnoses";
import RecentTests from "widgets/RecentTests";
import PatientsRadialBar from "widgets/PatientsRadialBar";

const DashboardF = () => {
  const location = useLocation();
  const patient = location.state?.data; 
  console.log(patient);

  return (
    <Page title="Dashboard">
      {patient && (
        <div>
          <h2>Patient: {patient.name}</h2>
          <p>Age: {patient.age}</p>
          <p>Diagnosis: {patient.diagnosis}</p>
        </div>
      )}
      <div key="pain-location">
        <PainLocation patient={patient}/>
      </div>
      <div key="daily-app-chart">
        <DailyAppointmentChart />
      </div>
      <div key="hepatitis">
        <ConfirmedDiagnoses />
      </div>
      <div key="payments-history">
        <HeartRate variant="large" />
      </div>
      <div key="patients-radial">
        <PatientsRadialBar />
      </div>
      <div key="recent-tests">
        <RecentTests />
      </div>
    </Page>
  );
};

export default DashboardF;
