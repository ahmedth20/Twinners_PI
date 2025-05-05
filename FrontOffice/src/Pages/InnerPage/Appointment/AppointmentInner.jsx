import { FaArrowRightLong } from 'react-icons/fa6';
import Appointment from './Appointment';
import BreadCrumb from '../../../Shared/BreadCrumb/BreadCrumb';
import Subscribe from '../../../Component1/Subscribe/Subscribe';
import { LiaSlashSolid } from 'react-icons/lia';
import ContactBox from '../ContactInner/ContactBox/ContactBox';
import Map from '../Map/Map';
//import { LuSlash } from "react-icons/lu";

const AppointmentInner = () => {

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <BreadCrumb
        breadCrumbTitle={<span>Emergency Getting</span>}
        breadCrumbIcon={<FaArrowRightLong />}
        breadCrumbLink={<span onClick={() => scrollToSection('map-section')} style={{ cursor: 'pointer' }}>Ambulance</span>}
        breadCrumbIcon2={<LiaSlashSolid />}
        breadCrumbLink2={<span onClick={() => scrollToSection('appointment-section')} style={{ cursor: 'pointer' }}>Registration</span>}
      />
      <Appointment id="appointment-section" />
      <Map id="map-section" />
    </>
  );
};

export default AppointmentInner;
