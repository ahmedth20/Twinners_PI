// styling
import styled from 'styled-components/macro';
import {flex} from 'styles/vars';

// components
import Item from 'components/PersonList/Item';

// utils
import PropTypes from 'prop-types';
import { useState, useRef, useEffect } from 'react';
import PatientService from 'services/ServiceMangerService';

const List = styled.ul`
  ${flex.col};
  gap: 20px;
  margin: 20px;
`

const PersonList1 = ({ arr, type, gender, deps }) => {
  const { search, category } = deps ? deps : { search: '', category: '' };
    const [patients, setPatients] = useState([]);

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
  return (
      <List>
          {patients.map((item, i) => (
              <Item 
                  key={`${item.id}-${gender}-${search}-${category}`} 
                  data={{ ...item, phone: String(item.phone) }} // Convertir phone en string
                  type={type} 
              />
          ))}
      </List>
  );
};



export default PersonList1;