import { useState } from 'react';
import { Wrapper, Block, Button } from './style';
import Avatar from '@ui/Avatar';
import ShapeButton from '@ui/ShapeButton';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from "react-router-dom";
import EditStaffForm from '@pages/EditStaffForm'; // Assurez-vous d'importer le bon composant de pop-up
import Reminder from '@ui/Reminder';
import StaffService from 'services/StaffService';

const Item = ({ type, data, onEdit, onDelete }) => {
  const [visibleInfo, setVisibleInfo] = useState({});
  const [isEditPopupOpen, setIsEditPopupOpen] = useState(false); // Ajoutez cet état pour gérer la visibilité du pop-up
  const navigate = useNavigate();

  const togglePhoneVisibility = (id) => {
    setVisibleInfo((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleEdit = () => {
    setIsEditPopupOpen(true); // Ouvre le pop-up lorsque le bouton "Edit" est cliqué
    if (onEdit) onEdit(data);
  };

  const handleDelete = async () => {
    try {
      await StaffService.deleteStaff(data._id);
      alert("Staff deleted successfully!");
    } catch (error) {
      alert("Failed to delete staff.");
    }
  };

  const closeEditPopup = () => {
    setIsEditPopupOpen(false); // Ferme le pop-up
  };

  const { user, online, avatar, phone, role } = data;

  const Common = () => (
    <Block>
      <Avatar avatar={avatar} alt={`${user?.lastName} ${user?.firstName}`} online={online} />
      <div className="main">
        <span className="name">{user?.lastName} {user?.firstName}</span>
        <span className="age">{data.service} </span>
        {type === 'patient' && <span className="age">{data.age} years</span>}
        {type === 'doctor' && data.department && (
          <span className="department">{data.department.map(item => item.label).join(', ')}</span>
        )}
        {type === 'staff' && role && <span className="role">{role}</span>}
      </div>
    </Block>
  );

  const Layout = () => {
    switch (type) {
      case 'doctor':
        return (
          <>
            <Common />
            <div className="overview">
              <div className="rating">
                <span>Doctor rating</span>
                {/* Ajouter une notation personnalisée */}
              </div>
              <div className="booked">
                <span>Booked appointments</span>
              </div>
            </div>
            <button className="booking">Make an appointment</button>
          </>
        );
      case 'staff':
        return (
          <>
            <Common />
            <ShapeButton icon="edit" shape="round" label="Edit" onClick={handleEdit} /> {/* Bouton Edit */}
            <ShapeButton icon="trash" shape="round" label="Delete" onClick={handleDelete} />
          </>
        );
      case 'patient':
        return (
          <>
            <Common />
            {data.reminder && <Reminder reminder={data.reminder} />}
            <Block className="actions">
              <div className="wrapper">
                <Button className="btn-action" onClick={() => navigate("/dashboard_f", { state: { data } })}>
                  <i className="icon icon-doctor"></i>
                  <span className="text">Case history</span>
                </Button>
              </div>
              <ShapeButton icon="comment-text" label="Message" shape="round" hasNotification={data.message} />
              <ShapeButton icon="phone" label="Call" shape="round" onClick={() => togglePhoneVisibility(data._id)} />
              {visibleInfo[data._id] && phone && (
                <div className="phone-number">{phone}</div>
              )}
            </Block>
          </>
        );
      default:
        return <Common />;
    }
  };

  return (
    <AnimatePresence>
      <Wrapper className={type} as={motion.li}>
        <Layout />
      </Wrapper>

      {/* Afficher le pop-up lorsque isEditPopupOpen est true */}
      {isEditPopupOpen && <EditStaffForm staffData={data} closeForm={closeEditPopup} />}
    </AnimatePresence>
  );
};

export default Item;
