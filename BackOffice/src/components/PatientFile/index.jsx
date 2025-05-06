import styled from 'styled-components';
import { flex } from 'styles/vars';
import { nanoid } from 'nanoid';
import PatientList from "widgets/PatientsList";

// composants
import Item from 'components/PatientList/Item';

// utils
import PropTypes from 'prop-types';

const List = styled.ul`
  ${flex.col};
  gap: 20px;
  margin: 20px;
`;

const PatientFile = ({ arr, type, gender, deps }) => {
  return (
    <List>
      {arr.map((item) => (
        <Item
          key={item.id || nanoid()}  // Utilisation de l'ID ou génération d'un ID unique
          data={{ ...item, phone: String(item.phone) }}
          type={type}
        />
      ))}
    </List>
  );
};

PatientFile.propTypes = {
  type: PropTypes.oneOf(['doctor', 'patient', 'staff', 'paramedic']).isRequired,
  arr: PropTypes.array.isRequired
};

export default PatientFile;
