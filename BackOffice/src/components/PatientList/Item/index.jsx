import { Wrapper, Block, Button, DropdownContainer, Menu, MenuItem } from './style';
import { MdMoreVert } from "react-icons/md";  // Material Icons
import { useState, useRef, useEffect } from "react";
import { FaTrash, FaEdit, FaEye, FaUserSlash,FaUserPlus } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import styled from "styled-components";
import { CiMedicalClipboard } from "react-icons/ci";
// components
import Avatar from '@ui/Avatar';
import ShapeButton from '@ui/ShapeButton';
import Reminder from '@ui/Reminder';
import Progress from '@ui/Progress';
import CustomRating from '@ui/CustomRating';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from "react-router-dom";

// utils
import { fadePresence } from '@constants/framer';
import PropTypes from 'prop-types';
import ReactIcons from '@ui/ReactIcons';
import PatientService from 'services/PatientService';
import axios from "axios";
// Modal for confirmation
import ConfirmActionModal from '@ui/ConfirmActionModal'
import UpdateSimplePatientPopup from '@pages/UpdateSimplePatientPopup';
import DetailsPopUp from '@pages/DetailsPopUp';

const StyledClipboardIcon = styled(CiMedicalClipboard)`
  color: rgb(129, 135, 139);
  font-size: 20px;
  &:hover {
    color: white;
  }
`;
const StyledText = styled.span`
  color: rgb(129, 135, 139);
  transition: color 0.3s ease;

  &:hover {
    color: white;
  }
`;
const DropdownMenu = ({ isOpen, toggleMenu, onDelete,onOpen,onDetails,onUpdate, onToggleStatus, isActive }) => {
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        toggleMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [toggleMenu]);

  const menuItems = [
    { id: "edit", icon: <FaEdit />, label: "Edit",onClick: onUpdate  },
    { id: "open", icon: <FiExternalLink />, label: "Open",onClick: onOpen },
    { id: "view", icon: <FaEye />, label: "View Details",onClick:onDetails },
    { id: "toggle", icon: isActive ? <FaUserSlash /> : <FaUserPlus />, label: isActive ? "Deactivate" : "Activate", onClick: () => onToggleStatus(isActive) },
    { id: "delete", icon: <FaTrash />, label: "Delete", onClick: onDelete },
  ];

  return (
    isOpen && (
      <Menu ref={menuRef}>
        {menuItems.map(({ id, icon, label, onClick }) => (
          <MenuItem key={id} onClick={onClick}>
            {icon} {label}
          </MenuItem>
        ))}
      </Menu>
    )
  );
};


const Item = ({ type, data }) => {
  const [visibleInfo, setVisibleInfo] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [isStatusModalOpen, setIsStatusModalOpen] = useState(false); // Modal de confirmation pour activer/désactiver
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false); // Modal de confirmation pour activer/désactiver
  const [isActive, setIsActive] = useState(data.user.isActive); // Ajouter l'état isActive

 
  const navigate = useNavigate();

  const toggleMenu = (state) => {
    setIsOpen(state !== undefined ? state : !isOpen);
  };

  const togglePhoneVisibility = (id) => {
    setVisibleInfo((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const { user, online, avatar, phone } = data;
 
  const handleDelete = async () => {
    setIsDeleteModalOpen(true);
  };
  const handleDetails = async () => {
    setIsDetailsModalOpen(true);
  };
  const handleOpen = async () => {
    navigate("/dashboard_f", { state: { data } })
  };
  const handleUpdate = async () => {
    setIsUpdateModalOpen(true);
  };
  const handleConfirmDelete = async () => {
    try {
      await PatientService.deletePatient(data._id);
    } catch (error) {
      console.error("Error deleting patient:", error);
    }
    setIsDeleteModalOpen(false);
  };

  const handleCancelDetails = () => {
    setIsDetailsModalOpen(false);
  };
  const handleCancelDelete = () => {
    setIsDeleteModalOpen(false);
  };
  const handleCancelUpdate = () => {
    setIsUpdateModalOpen(false);
  };
  const handleToggleStatus = async () => {
    setIsStatusModalOpen(true); // Afficher le modal de confirmation avant de basculer l'état
  };

  const handleConfirmToggleStatus = async () => {
    try {
      const response = await axios.put(
        `http://localhost:5000/patient/toggle-status/${data.user._id}`,
        {}, // ❌ Supprime `{ isActive: !data.isActive }` car l'inversion est faite en backend
        { withCredentials: true }
      );
  
      if (response.data?.isActive !== undefined) {
        setIsActive(response.data.isActive); // ✅ Met à jour l'état avec la réponse du backend
      }
    } catch (error) {
      console.error("Error toggling patient status:", error);
    }

    setIsStatusModalOpen(false);

  };


  const handleCancelToggleStatus = () => {
    setIsStatusModalOpen(false);
  };

  const Common = ({ type }) => {
    return (
      <Block>
        <Avatar avatar={avatar} alt={`${user.lastName} ${user.firstName}`} online={online} />
        <div className="main">
          <span className="name"> {user.lastName} {user.firstName}</span>
          {type === 'patient' ? (
            <span className="age">{data.age} years</span>
          ) : (
            <span className="department">
              {data.department.map(item => item.label).join(', ')}
            </span>
          )}
        </div>
      </Block>
    );
  };

  const Layout = () => {
    switch (type) {
      case 'patient':
        return (
          <>
            <Common type={type} />
            {data.reminder && <Reminder reminder={data.reminder} />}
            <Block className="actions">
              <Button className="btn-action" onClick={() => navigate("/dashboard_f", { state: { data } })}>
                <StyledClipboardIcon />
                <StyledText>Case history</StyledText>
              </Button>
              <ShapeButton icon="comment-text" label="Message" shape="round" hasNotification={data.message} />
              <ShapeButton icon="phone" label="Call" shape="round" onClick={() => togglePhoneVisibility(data._id)} />
            
              {visibleInfo[data._id] && phone && (
                <div className="phone-number">{phone}</div>
              )}
              <ReactIcons Icon={MdMoreVert} label="Options" shape="round" onClick={() => toggleMenu()} />
              <DropdownContainer>
                <DropdownMenu 
                  isOpen={isOpen} 
                  toggleMenu={toggleMenu} 
                  onDelete={handleDelete} 
                  onUpdate={handleUpdate} 
                  onOpen={handleOpen} 
                  onDetails={handleDetails}
                  onToggleStatus={handleToggleStatus} 
                  isActive={isActive} 
                />
              </DropdownContainer>
            </Block>
          </>
        );
      default:
        return <Common type={type} />;
    }
  };

  return (
    <AnimatePresence>
    <Wrapper key={data._id} className={type} as={motion.li} {...fadePresence}>
      <Layout />
    </Wrapper>
  

     
      {isDeleteModalOpen && (
        <ConfirmActionModal
          icon={<FaTrash />}
          actionType="delete"
          onConfirm={handleConfirmDelete}
          onCancel={handleCancelDelete}
          message="Are you sure you want to delete this item?"
          bgColor=" #FEE2E2"
          iconColor=" #e53e3e"
        />
      )}

      {isStatusModalOpen && (
        <ConfirmActionModal
          icon={isActive ? <FaUserSlash /> : <FaUserPlus />}
          actionType={`${isActive ? "deactivate" : "activate"}`}
          onConfirm={handleConfirmToggleStatus}
          onCancel={handleCancelToggleStatus}
          message={`Are you sure you want to ${isActive ? "deactivate" : "activate"} this patient?`}
          bgColor={isActive ? "#FEE2E2" : "#E6FFFA"}
          iconColor={isActive ? "#e53e3e" : "#38B2AC"}
        />
      )}

      {isUpdateModalOpen &&
       <UpdateSimplePatientPopup 
       isOpen={isUpdateModalOpen} 
       onClose={handleCancelUpdate} 
       data={data} />}
      
      {isDetailsModalOpen &&
       <DetailsPopUp 
       isOpen={isDetailsModalOpen} 
       onClose={handleCancelDetails} 
       data={data} />}
    
    </AnimatePresence>
  );
};


Item.propTypes = {
  type: PropTypes.string.isRequired,
  data: PropTypes.shape({
    user: PropTypes.shape({
      firstName: PropTypes.string,
      isActive:PropTypes.bool,
      lastName: PropTypes.string,
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
};

export default Item;
