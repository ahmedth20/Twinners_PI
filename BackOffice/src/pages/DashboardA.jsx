// components
import Page from '@layout/Page';
import NextPatient from '@widgets/NextPatient';
import LaboratoryTests from '@widgets/LaboratoryTests';
import UpcomingAppointments from '@widgets/UpcomingAppointments';
import DoctorOverallAppointment from '@widgets/DoctorOverallAppointment';
import PatientsPace from '@widgets/PatientsPace';
import RecentQuestions from '@widgets/RecentQuestions';
import ConfirmedDiagnoses from '@widgets/ConfirmedDiagnoses';
import { useState, useEffect } from 'react';
import Modal from 'custom/Modal';


const DashboardA = () => {

    const [showOrdersModal, setShowOrdersModal] = useState(false);
    console.log("Is showOrdersModal true?", showOrdersModal);

    const handleOpenOrdersModal = () => {
        console.log("handleOpenOrdersModal")
        setShowOrdersModal(true);
    };

    const handleCloseOrdersModal = () => {
        setShowOrdersModal(false);
    };

    return (<>
    
        <Page title="Basic Doctor Dashboard">
            <div key="next-patient">
                <NextPatient onOpenOrdersModal={handleOpenOrdersModal} />
                
            </div>
            <div key="laboratory-tests">
                <LaboratoryTests />
            </div>
            <div key="doctor-upcoming-appointments">
                <UpcomingAppointments />
            </div>
            <div key="doctor-overall-appointment">
                <DoctorOverallAppointment />
            </div>
            <div key="patients-pace">
                <PatientsPace />
            </div>
            <div key="recent-questions">
                <RecentQuestions />
            </div>
            <div key="confirmed-diagnoses">
                <ConfirmedDiagnoses nav="tabs" />
            </div>
            
           
        </Page>
        <div>
            {showOrdersModal && (
                <Modal onClose={handleCloseOrdersModal}>
                    <p>Orders content...</p>
                </Modal>
            )}
            </div>
        </>
        
    )
}

export default DashboardA;