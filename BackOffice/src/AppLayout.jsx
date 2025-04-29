// utils
import {lazy, Suspense} from 'react';

// components
import ScrollProgress from '@ui/ScrollProgress';
import Panel from '@layout/Panel';
import Sidebar from '@layout/Sidebar';
import {Navigate, Route, Routes} from 'react-router-dom';
import BottomMenu from '@layout/BottomMenu';
import WidgetsLoader from '@components/WidgetsLoader';

// hooks
import useWindowSize from '@hooks/useWindowSize';
import usePageIsOverflow from '@hooks/usePageIsOverflow';
import {useRef, useEffect} from 'react';
import { useSelector } from "react-redux";
import Forgotpassword from '@pages/screens/forgotpassword'
import Resetpassword1 from '@pages/screens/restpasswordslouma'

// pages
const Equipements = lazy(() => import('@pages/equipement'));

const DashboardA = lazy(() => import('@pages/DashboardA'));
const DashboardB = lazy(() => import('@pages/DashboardB'));
const DashboardC = lazy(() => import('@pages/DashboardC'));
const DashboardD = lazy(() => import('@pages/DashboardD'));
const DashboardE = lazy(() => import('@pages/DashboardE'));
const DashboardF = lazy(() => import('@pages/DashboardF'));
const DashboardG = lazy(() => import('@pages/DashboardG'));
const DashboardH = lazy(() => import('@pages/DashboardH'));
const DashboardI = lazy(() => import('@pages/DashboardI'));
const DashboardJ = lazy(() => import('@pages/DashboardJ'));
const DashboardK = lazy(() => import('@pages/DashboardK'));
const DoctorAppointments = lazy(() => import('@pages/DoctorAppointments'));
const PatientAppointments = lazy(() => import('@pages/PatientAppointments'));
const Patients = lazy(() => import('@pages/Patients'));
const Paramedics = lazy(() => import('@pages/paramedics'));
const Tests = lazy(() => import('@pages/Tests'));
const Doctors = lazy(() => import('@pages/Doctors'));
const StaffList = lazy(() => import('@pages/Staff'));
const DoctorMessenger = lazy(() => import('@pages/DoctorMessenger'));
const PatientMessenger = lazy(() => import('@pages/PatientMessenger'));
const DoctorsReviews = lazy(() => import('@pages/DoctorsReviews'));
const PatientReviews = lazy(() => import('@pages/PatientReviews'));
const Finances = lazy(() => import('@pages/Finances'));
const Settings = lazy(() => import('@pages/Settings'));
const MedicalForm = lazy(() => import('@pages/MedicalForm'));
const PageNotFound = lazy(() => import('@pages/PageNotFound'));
const Par = lazy(() => import('@pages/Par'));
const Ser = lazy(() => import('@pages/Ser'));

const Servicemanager = lazy(() => import('@pages/srevicemanager'));


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
      <Route path="/patient_appointments" element={ <PatientAppointments /> } />
      <Route path="/patients" element={ <Patients /> } />
      <Route path="/Paramedic" element={ <Par /> } />
      <Route path="/tests" element={ <Tests /> } />
      <Route path="/doctors" element={ <Doctors /> } />
      <Route path="/servicemanager" element={ <Ser /> } />
      <Route path="/staff" element={ <StaffList /> } />
      <Route path="/doctor_messenger" element={ <DoctorMessenger /> } />
      <Route path="/patient_messenger" element={ <PatientMessenger /> } />
      <Route path="/doctor_reviews" element={ <DoctorsReviews /> } />
      <Route path="/patient_reviews" element={ <PatientReviews /> } />
      <Route path="/finances" element={ <Finances /> } />
      <Route path="/settings" element={ <Settings /> } />
      <Route path="/medical_form" element={ <MedicalForm/> } />
      <Route path="/forgotpassword" element={ <Forgotpassword/> } />
      <Route path="/ResetPassword/:id" element={ <Resetpassword1/> } />
      <Route path="/equipements" element={ <Equipements /> } />

      <Route path="/par" element={ <Par /> } />
      <Route path="/ser" element={ <Ser /> } />


                    </Routes>
               
    )
}

export default AppLayout;