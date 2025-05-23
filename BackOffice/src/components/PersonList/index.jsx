// styling
import styled from 'styled-components';
import {flex} from 'styles/vars';

// components
import Item from 'components/PersonList/Item';

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
                  key={`${item.id}-${gender}-${search}-${category}`} 
                  data={{ ...item, phone: String(item.phone) }} // Convertir phone en string
                  type={type} 
              />
          ))}
      </List>
  );
};


PersonList.propTypes = {
    type: PropTypes.oneOf(['doctor', 'patient', 'staff','servicemanager']).isRequired,
    arr: PropTypes.array.isRequired
}

export default PersonList;