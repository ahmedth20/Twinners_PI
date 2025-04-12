import { FaArrowRightLong } from 'react-icons/fa6';
import Appointment from './Appointment';
import BreadCrumb from '../../../Shared/BreadCrumb/BreadCrumb';
import Subscribe from '../../../Component1/Subscribe/Subscribe';
import { LiaSlashSolid } from 'react-icons/lia';
import ContactBox from '../ContactInner/ContactBox/ContactBox';
import Map from '../Map/Map';
//import { LuSlash } from "react-icons/lu";

const AppointmentInner = () => {
  return (
    <>
      <BreadCrumb
        breadCrumbTitle={'Emergency Getting '}
        breadCrumbIcon={<FaArrowRightLong />}
        breadCrumbLink={'Ambulance'}
        breadCrumbIcon2={<LiaSlashSolid />}
        breadCrumbLink2={'Registration'}
      />
      <ContactBox />
      <Appointment /> 
      <Map />
    </>
  );
};

export default AppointmentInner;
