// styling
import styled from 'styled-components/macro';
import {flex} from '@styles/vars';
import { nanoid } from 'nanoid';

// components
import Item from '@components/PersonList/Item';

// utils
import PropTypes from 'prop-types';

const List = styled.ul`
  ${flex.col};
  gap: 20px;
  margin: 20px;
`

const PersonList = ({ arr, type, gender, deps }) => {
  const { search, category } = deps ? deps : { search: '', category: '' };
  return (
      <List>
          {arr.map((item, i) => (
           <Item 
           key={item.id || nanoid()} // Utilisation de l'ID ou génération d'un ID unique 
           data={{ ...item, phone: String(item.phone) }} 
           type={type} 
       />
       
         
          ))}
      </List>
  );
};


PersonList.propTypes = {
    type: PropTypes.oneOf(['doctor', 'patient', 'staff']).isRequired,
    arr: PropTypes.array.isRequired
}

export default PersonList;