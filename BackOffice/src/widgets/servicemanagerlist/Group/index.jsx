// components
import GroupSeparator from '@ui/GroupSeparator';
import PersonList from '@components/PersonList';
import { Wrapper, Block,Button } from '../../../components/PersonList/Item/style';
import PersonList1 from '@components/servicemaangerlist';

// components
import Avatar from '@ui/Avatar';
import ShapeButton from '@ui/ShapeButton';
import Reminder from '@ui/Reminder';
import Progress from '@ui/Progress';
import CustomRating from '@ui/CustomRating';
import { motion, AnimatePresence } from 'framer-motion';
import { useState ,useEffect} from 'react';
import { useNavigate } from "react-router-dom";

// utils
import { fadePresence } from '@constants/framer';
import PropTypes from 'prop-types';
import PatientService from 'services/ServiceMangerService';

// utils

const Group = ({char, arr, type, gender}) => {
    const [visibleInfo, setVisibleInfo] = useState({}); 
    const navigate = useNavigate();
    const [data, setPatients] = useState([]);

    const togglePhoneVisibility = (id) => {
      setVisibleInfo((prev) => ({
        ...prev,
        [id]: !prev[id],
      }));
    };
   useEffect(() => {
            const fetchPatients = async () => {
                try {
                    const data = await PatientService.getAllServiceManagers();
                    setPatients(data);
                    console.log(data);
                } catch (error) {
                    console.error("Failed to fetch patients", error);
                }
            };
            fetchPatients();
        }, []);
   // const { user, online, avatar, phone } = data; 
   // const data = arr.filter(item =>item.user?.lastName[0].toLowerCase() === char);
    console.log("aaaa",type)
const type1='servicemanager'
const TYPES = {
    MANAGER: "manager",
    SERVICE_MANAGER: 'servicemanager'
};
    return (
        <>
            {
                data.length !== 0 ?
                    <div id={char}>
                        <GroupSeparator text={char} />
                         <Block className="actions">
                                      <div className="wrapper">
                                     
                                      </div>
                                      <ShapeButton icon="comment-text" label="Message" shape="round" hasNotification={data.message} />
                                      <ShapeButton icon="phone" label="Call" shape="round" onClick={() => togglePhoneVisibility(data._id)} />
                                      {visibleInfo[data._id] && /*phone &&*/ (
                                      {/*  <div className="phone-number">{phone}</div>*/}
                                      )}
                                      <ShapeButton icon="trash" label="Trash" />              <ShapeButton icon="trash" label="Trash" />
                        
                        
                                   
                                    </Block>
                        <PersonList1  />
                    </div> : null
            }
        </>
    )
}

Group.propTypes = {
    char: PropTypes.string.isRequired,
    arr: PropTypes.array.isRequired,
    type: PropTypes.oneOf(['patient', 'doctor', 'staff','servicemanager']).isRequired,
}

export default Group;