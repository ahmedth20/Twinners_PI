import { Wrapper, Block, Button } from './style';

// components
import Avatar from '@ui/Avatar';
import ShapeButton from '@ui/ShapeButton';
import Reminder from '@ui/Reminder';
import Progress from '@ui/Progress';
import CustomRating from '@ui/CustomRating';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

// utils
import { fadePresence } from '@constants/framer';
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

  // Retourne un message lorsque 'data' est indéfini ou nul
  if (!data) {
    return <p>Data not available</p>;
  }

  const { user, online, avatar, phone } = data;

  const Common = ({ type }) => (
    <Block>
      <Avatar 
        avatar={avatar} 
        alt={`${user?.lastName || ''} ${user?.firstName || ''}`} 
        online={online} 
      />
      <div className="main">
        <span className="name">
          {user?.lastName || 'Unknown'} {user?.firstName || ''}
        </span>
        {type === 'patient' ? (
          <span className="age">{data.age ? `${data.age} years` : 'Age not available'}</span>
        ) : (
          // Pas de champ department ici
          null
        )}
      </div>
    </Block>
  );

  const DoctorInfo = () => (
    <div className="overview">
      <div className="rating">
        <span>Doctor rating</span>
        <CustomRating value={data.rating || 0} />
      </div>
      <div className="booked">
        <span>Booked appointments</span>
        <Progress value={data.booked || 0} />
      </div>
    </div>
  );

  const Layout = () => {
    switch (type) {
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
                <Button className="btn-action" onClick={() => navigate("/dashboard_f", { state: { data } })}>
                  <i className="icon icon-doctor"></i>
                  <span className="text">Case history</span>
                </Button>
              </div>
              <ShapeButton icon="comment-text" label="Message" shape="round" hasNotification={data.message} />
              <ShapeButton icon="phone" label="Call" shape="round" onClick={() => togglePhoneVisibility(data._id)} />
              {visibleInfo[data._id] && phone && <span>{phone}</span>}
            </Block>
          </>
        );
      default:
        return <p>Invalid type</p>;
    }
  };

  return <Wrapper>{Layout()}</Wrapper>;
};

Item.propTypes = {
  type: PropTypes.string.isRequired,
  data: PropTypes.shape({
    user: PropTypes.shape({
      firstName: PropTypes.string,
      lastName: PropTypes.string,
    }),
    avatar: PropTypes.string,
    online: PropTypes.bool,
    phone: PropTypes.string,
    reminder: PropTypes.string,
    rating: PropTypes.number,
    booked: PropTypes.number,
    message: PropTypes.bool,
    _id: PropTypes.string,
    age: PropTypes.number,
  }),
};

export default Item;
