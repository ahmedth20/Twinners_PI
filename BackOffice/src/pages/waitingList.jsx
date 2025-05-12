import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled, { keyframes } from 'styled-components';

// Animation d’apparition
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Styles principaux
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 10px;
`;

const TableWrapper = styled.div`
  width: 100%;
  max-width: 1300px;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  overflow-x: auto;
  animation: ${fadeIn} 0.5s ease-out;
`;

const Title = styled.h2`
  font-size: 28px;
  margin: 20px;
  color: #333;
  text-align: center;
  border-bottom: 3px solid #e74c3c;
  padding-bottom: 8px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Thead = styled.thead`
  background-color: #f1f1f1;
`;

const Th = styled.th`
  padding: 20px;
  font-size: 18px;
  text-align: center;
  color: #555;
  border-bottom: 2px solid #e0e0e0;
`;

const Tr = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
`;

const Td = styled.td`
  padding: 20px;
  font-size: 16px;
  color: #333;
  border-bottom: 1px solid #e0e0e0;
  text-align: center;
`;
const List = styled.ul`
  list-style-type: decimal;
  padding-left: 25px;
  margin-top: 10px;
`;

const ListItem = styled.li`
  margin-bottom: 12px;
  background-color: #f9f9f9;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const Info = styled.div`
  margin-bottom: 4px;
`;

const InfoLabel = styled.span`
  font-weight: 600;
  color: #333;
  margin-right: 5px;
`;


const WaitingList = () => {
  const [waitingList, setWaitingList] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/waitingList/list');
        if (response.data) {
          setWaitingList(response.data);
        }
      } catch (error) {
        console.error('Erreur lors de la récupération des données :', error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <Container>
      <TableWrapper>
        <Title>Waiting List of Patients by Specialty</Title>
        <Table>
          <Thead>
            <Tr>
              <Th>Specialty</Th>
              <Th>Waiting Patients</Th>
            </Tr>
          </Thead>
          <tbody>
            {Object.entries(waitingList).map(([specialty, patients], index) => (
              <Tr key={index}>
                <Td>{specialty}</Td>
              <Td>
                <List>
                    {patients.map((patientData, idx) => (
                    <ListItem key={idx}>
                        <Info>
                        <InfoLabel>Name:</InfoLabel> {patientData.patient.user.firstName} {patientData.patient.user.lastName}
                        </Info>
                        <Info>
                        <InfoLabel>Age:</InfoLabel> {patientData.patient.age}
                        </Info>
                        <Info>
                        <InfoLabel>Phone:</InfoLabel> {patientData.patient.phone}
                        </Info>
                    </ListItem>
                    ))}
                </List>
                </Td>

              </Tr>
            ))}
          </tbody>
        </Table>
      </TableWrapper>
    </Container>
  );
};

export default WaitingList;
