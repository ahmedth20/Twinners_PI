import { Wrapper, Block,Button } from './style';

// components
import Avatar from 'UI/Avatar';
import ShapeButton from 'UI/ShapeButton';
import Reminder from 'UI/Reminder';
import Progress from 'UI/Progress';
import CustomRating from 'UI/CustomRating';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

// utils
import { fadePresence } from 'constants/framer';
import PropTypes from 'prop-types';

const Item = ({ type, data }) => {
  const [visibleInfo, setVisibleInfo] = useState({}); 
  const navigate = useNavigate();

  const togglePhoneVisibility = (id) => {
    setVisibleInfo((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const { user, online, avatar, phone } = data; 

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

  const DoctorInfo = () => {
    return (
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
  };

  const Layout = () => {
    switch (type) {
      default:
      case 'doctor':
        return (
          <>
            <Common type={type} />
            <DoctorInfo />
            <button className="booking">Make an appointment</button>
          </>
        );
      case 'staff':
        return (
          <>
            <Common type={type} />
            <DoctorInfo />
            <div className="contacts">
              <ShapeButton icon="comment-text" shape="round" label="Messages" />
              <ShapeButton icon="dots" shape="round" label="Menu" />
            </div>
          </>
        );
      case 'patient':
        return (
          <>
            <Common type={type} />
            {data.reminder ? <Reminder reminder={data.reminder} /> : null}
            <Block className="actions">
              <div className="wrapper">
              <Button className="btn-action" onClick={() => navigate("/dashboard_f", { state: { data} })}>
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

        case 'paramedic':
          return (
            <>
              <Common type={type} />
              <Block className="actions">
                <ShapeButton icon="comment-text" label="Message" shape="round" />
                <ShapeButton icon="phone" label="Call" shape="round" onClick={() => togglePhoneVisibility(data._id)} />
                {visibleInfo[data._id] && phone && (
                  <div className="phone-number">{phone}</div>
                )}
              </Block>
            </>
          );
    }
  };

  return (
    <AnimatePresence>
      <Wrapper className={type} as={motion.li} {...fadePresence}>
        <Layout />
      </Wrapper>
    </AnimatePresence>
  );
};

Item.propTypes = {
  type: PropTypes.string.isRequired,
  data: PropTypes.shape({
    user: PropTypes.shape({
      firstName: PropTypes.string,
      lastName: PropTypes.string,
    }),
    phone: PropTypes.string, // Ajout du champ phone
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