import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Wrapper, Block, Button } from './style';
import Avatar from 'UI/Avatar';
import ShapeButton from 'UI/ShapeButton';
import Reminder from 'UI/Reminder';
import Progress from 'UI/Progress';
import CustomRating from 'UI/CustomRating';
import { motion, AnimatePresence } from 'framer-motion';
import { fadePresence } from 'constants/framer';
import PropTypes from 'prop-types';
import UpdateDoctorPopup from 'pages/UpdateDoctorPopUp';
import DoctorService from 'services/DoctorService';

const Item = ({ type, data, onDelete }) => {
  const [visibleInfo, setVisibleInfo] = useState({});
  const [isEditPopupOpen, setIsEditPopupOpen] = useState(false);
  const navigate = useNavigate();

  const togglePhoneVisibility = (id) => {
    setVisibleInfo((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleUpdate = () => {
    setIsEditPopupOpen(true);
  };

  const handleDelete = async () => {
    try {
      await DoctorService.deleteDoctor(data._id);
      onDelete(data._id); // Appel de la prop onDelete pour mettre à jour l'état parent
      console.log("Doctor deleted:", data._id);
      window.location.reload(); // Recharger la page après la suppression
    } catch (error) {
      console.error("Error deleting doctor:", error);
      alert(error.response ? error.response.data.message : "Erreur lors de la suppression du médecin.");
    }
  };

  const { user, online, avatar, phone } = data;

  const Common = () => (
    <Block>
      <Avatar avatar={avatar} alt={`${user.lastName} ${user.firstName}`} online={online} />
      <div className="main">
        <span className="name">{user.lastName} {user.firstName}</span>
        {type === 'patient' ? (
          <span className="age">{data.age} years</span>
        ) : (
          <span className="department">{data.department.map(item => item.label).join(', ')}</span>
        )}
      </div>
    </Block>
  );

  const DoctorInfo = () => (
    <div className="overview">
      <div className="rating">
        <span>Doctor rating</span>
        <CustomRating value={data.rating} />
      </div>
      <div className="booked">
        <span>Booked appointments</span>
        <Progress value={data.booked} />
      </div>
    </div>
  );

  const Layout = () => {
    return (
      <>
        <Common />
        {type === 'doctor' && <DoctorInfo />}
        {type === 'staff' && <DoctorInfo />}
        {type === 'patient' && data.reminder && <Reminder reminder={data.reminder} />}
        <Block className="actions">
          {type === 'patient' && (
            <div className="wrapper">
              <Button className="btn-action" onClick={() => navigate("/dashboard_f", { state: { data } })}>
                <i className="icon icon-doctor"></i>
                <span className="text">Case history</span>
              </Button>
            </div>
          )}
          <ShapeButton icon="comment-text" label="Message" shape="round" hasNotification={data.message} />
          <ShapeButton icon="phone" label="Call" shape="round" onClick={() => togglePhoneVisibility(data._id)} />
          {visibleInfo[data._id] && phone && <div className="phone-number">{phone}</div>}
          <Button className="btn-action update" onClick={handleUpdate}>
            <i className="icon icon-edit"></i>
          </Button>
          <Button className="btn-action delete" onClick={handleDelete}>
            <i className="icon icon-trash"></i>
          </Button>
        </Block>
      </>
    );
  };

  return (
    <AnimatePresence>
      <Wrapper className={type} as={motion.li} {...fadePresence}>
        <Layout />
      </Wrapper>
      {isEditPopupOpen && (
        <UpdateDoctorPopup
          isOpen={isEditPopupOpen}
          onClose={() => setIsEditPopupOpen(false)}
          doctor={data} // Pass the doctor data here
        />
      )}
    </AnimatePresence>
  );
};

Item.propTypes = {
  type: PropTypes.string.isRequired,
  data: PropTypes.shape({
    user: PropTypes.shape({
      firstName: PropTypes.string,
      lastName: PropTypes.string,
      email: PropTypes.string,
    }),
    phone: PropTypes.string,
    online: PropTypes.bool,
    avatar: PropTypes.string,
    age: PropTypes.number,
    reminder: PropTypes.string,
    message: PropTypes.bool,
    department: PropTypes.array,
    rating: PropTypes.number,
    booked: PropTypes.number,
    _id: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired, // Prop validation for onDelete
};

export default Item;