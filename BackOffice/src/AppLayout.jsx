// utils
import {lazy} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes} from 'react-router-dom';

import Forgotpassword from 'pages/screens/forgotpassword'
import Resetpassword1 from 'pages/screens/restpasswordslouma'
import MedicalFormUpdate from '@pages/MedicalFormUpdate';

// pages
const DashboardA = lazy(() => import('pages/DashboardA'));
const DashboardB = lazy(() => import('pages/DashboardB'));
const DashboardC = lazy(() => import('pages/DashboardC'));
const DashboardD = lazy(() => import('pages/DashboardD'));
const DashboardE = lazy(() => import('pages/DashboardE'));
const DashboardF = lazy(() => import('pages/DashboardF'));
const DashboardG = lazy(() => import('pages/DashboardG'));
const DashboardH = lazy(() => import('pages/DashboardH'));
const DashboardI = lazy(() => import('pages/DashboardI'));
const DashboardJ = lazy(() => import('pages/DashboardJ'));
const DashboardK = lazy(() => import('pages/DashboardK'));
const DoctorAppointments = lazy(() => import('pages/DoctorAppointments'));
const StaffAppointments = lazy(() => import('pages/StaffAppointments'));
const PatientAppointments = lazy(() => import('pages/PatientAppointments'));
const ParamedicAppointments = lazy(() => import('pages/paramedicappointment'));

const Patients = lazy(() => import('pages/Patients'));
const Paramedics = lazy(() => import('pages/paramedics'));
const Tests = lazy(() => import('pages/Tests'));
const Doctors = lazy(() => import('pages/Doctors'));
const StaffList = lazy(() => import('pages/Staff'));
const DoctorMessenger = lazy(() => import('pages/DoctorMessenger'));
const PatientMessenger = lazy(() => import('pages/PatientMessenger'));
const AmbulanceGettingMessage= lazy(() => import('Notifications/ParamedicResponseAmbulance'));
const DoctorsChat= lazy(() => import('Notifications/DoctorsChat'));
const ParamedicChat= lazy(() => import('Notifications/ParamedicChat'));
const DoctorsConsultaion= lazy(() => import('Notifications/DoctorsConsultaion'));
const DoctorsReviews = lazy(() => import('pages/DoctorsReviews'));
const PatientReviews = lazy(() => import('pages/PatientReviews'));
const Finances = lazy(() => import('pages/Finances'));
const Settings = lazy(() => import('pages/Settings'));
const MedicalForm = lazy(() => import('pages/MedicalForm'));
const MedicalFormWithUserAndPatient = lazy(() => import('pages/MedicalFormWithUserAndPatient'));
const GeminiChatbot = lazy(() => import('pages/GeminiChatbot'));
const WaitingList = lazy(() => import('pages/waitingList'));
const PatientFile = lazy(() => import('pages/PatientFile'));
const Equipements = lazy(() => import('pages/Equipements'));
const Consultation = lazy(() => import('pages/Consultation'));
const Prescription = lazy(() => import('pages/prescriptions'));
const PaymentPage = lazy(() => import('pages/PaymentForm'));
const TransactionList = lazy(() => import('pages/TransactionList'));
const CreatePatientForm = lazy(() => import('pages/createpatientstaff'));

//const PageNotFound = lazy(() => import('pages/PageNotFound'));

const Servicemanager = lazy(() => import('pages/srevicemanager'));


const AppLayout = () => {

   
    return (
                    <Routes>
      <Route path="/" element={<DashboardA />} />

      <Route path="/dashboard_a" element={<DashboardA />} />
      <Route path="/dashboard_b" element={ <DashboardB /> } />
      <Route path="/dashboard_c" element={ <DashboardC /> } />
      <Route path="/dashboard_d" element={ <DashboardD /> } />
      <Route path="/dashboard_e" element={ <DashboardE /> } />
      <Route path="/dashboard_f" element={ <DashboardF /> } />
      <Route path="/dashboard_g" element={ <DashboardG /> } />
      <Route path="/dashboard_h" element={ <DashboardH /> } />
      <Route path="/dashboard_i" element={ <DashboardI /> } />
      <Route path="/dashboard_j" element={ <DashboardJ /> } />
      <Route path="/dashboard_k" element={ <DashboardK /> } />
      <Route path="/doctor_appointments" element={ <DoctorAppointments /> } />
      <Route path="/ressources" element={ <DashboardK /> } />
      <Route path="/Equipements" element={ <Equipements /> } />
      <Route path="/staff_appointments" element={ <StaffAppointments /> } />
      <Route path="/patient_appointments" element={ <PatientAppointments /> } />
      <Route path="/paramedic_appointments" element={ <ParamedicAppointments /> } />
      <Route path="/patients" element={ <Patients /> } />
      <Route path="/Paramedic" element={ <Paramedics /> } />
      <Route path="/tests" element={ <Tests /> } />
      <Route path="/doctors" element={ <Doctors /> } />
      <Route path="/servicemanager" element={ <Servicemanager /> } />
      <Route path="/staff" element={ <StaffList /> } />
      <Route path="/doctor_messenger" element={ <DoctorMessenger /> } />
      <Route path="/patient_messenger" element={ <PatientMessenger /> } />
      <Route path="/ParamedicResponseAmbulance" element={ <AmbulanceGettingMessage /> } />
      <Route path="/chat" element={ <GeminiChatbot/> } />
      <Route path="/doctorchat" element={ <DoctorsChat/> } />
      <Route path="/paramedicchat" element={ <ParamedicChat/> } />
      <Route path="/consultations" element={ <DoctorsConsultaion/> } />
      <Route path="/waitingList" element={ <WaitingList/> } />
      <Route path="/MedicalFormWithUserAndPatient" element={ <MedicalFormWithUserAndPatient/> } />
      
      <Route path="/patientFile" element={ <PatientFile/> } />
      <Route path="/Consultation" element={ <Consultation/> } />
      <Route path="/prescription" element={ <Prescription/> } />
      
      <Route path="/azerty" element={ <CreatePatientForm/> } />
      <Route path="/PaymentPage" element={ <PaymentPage/> } />
      <Route path="/doctor_reviews" element={ <DoctorsReviews /> } />
      <Route path="/patient_reviews" element={ <PatientReviews /> } />
      <Route path="/finances" element={ <Finances /> } />
      <Route path="/settings" element={ <Settings /> } />
      <Route path="/medical_form" element={ <MedicalForm/> } />
      <Route path="/medical_form_update/:id" element={ <MedicalFormUpdate/> } />
      <Route path="/forgotpassword" element={ <Forgotpassword/> } />
      <Route path="/ResetPassword/:id" element={ <Resetpassword1/> } />
          <Route path="/TransactionList" element={ <TransactionList/> } />

    

                    </Routes>
               
    )
}

export default AppLayout;