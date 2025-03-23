import React, { useState, useEffect, useCallback, memo } from "react";
import { FiX } from "react-icons/fi";
import { IoMdInformationCircle } from "react-icons/io";
import PatientService from "services/PatientService";
import styled from "styled-components";

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  transition: opacity 0.3s;
`;

const ModalContainer = styled.div`
  width: 200%;
  max-width: 800px;
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  transform: scale(${(props) => (props.isOpen ? "1" : "0.95")});
  transition: transform 0.3s ease-in-out;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background: rgba(65, 77, 85, 0.79);
  color: #fff;
`;

const Title = styled.h2`
  margin: 0;
  font-size: 18px;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
`;

const Content = styled.div`
  padding: 20px;
  max-height: 70vh;
  overflow-y: auto;
`;

const InfoMessage = styled.div`
  text-align: center;
  color: #888;
  font-size: 16px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 15px;
`;

const Th = styled.th`
  background: rgba(65, 77, 85, 0.79);
  color: #fff;
  padding: 10px;
  text-align: left;
`;

const Td = styled.td`
  padding: 10px;
  border: 1px solid #ddd;
`;

const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const ListItem = styled.div`
  background: #f1f1f1;
  padding: 8px 12px;
  border-radius: 5px;
`;

const DetailsModal = memo(({ isOpen, onClose, data }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [infoData, setInfoData] = useState(null);

  useEffect(() => {
    const fetchPatientInfo = async () => {
      try {
        const response = await PatientService.getPatientInfoById(data._id);
        setInfoData(response);
      } catch (error) {
        console.error("Error fetching patient info:", error);
      }
    };

    if (data?._id) {
      fetchPatientInfo();
    }
  }, [data._id]);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      document.body.style.overflow = "hidden";
    } else {
      setTimeout(() => setIsVisible(false), 300);
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const renderContent = useCallback(() => {
    if (!infoData) {
      return (
        <InfoMessage>
          <IoMdInformationCircle size={30} />
          <p>No data available</p>
        </InfoMessage>
      );
    }

    const formatValue = (value) => {
      if (Array.isArray(value)) {
        return (
          <ListContainer>
            {value.map((item, index) => (
              <ListItem key={index}>{formatValue(item)}</ListItem>
            ))}
          </ListContainer>
        );
      } else if (typeof value === "object" && value !== null) {
        return (
          <Table>
            <tbody>
              {Object.entries(value)
                .filter(([subKey]) => subKey !== "_id" && subKey !== "patient") // Exclure _id et patient
                .map(([subKey, subValue]) => (
                  <tr key={subKey}>
                    <Th>{subKey}</Th>
                    <Td>{formatValue(subValue)}</Td>
                  </tr>
                ))}
            </tbody>
          </Table>
        );
      } else {
        return value;
      }
    };

    return (
      <Table>
        <tbody>
          {Object.entries(infoData)
            .filter(([key]) => key !== "_id") // Exclure _id du premier niveau
            .map(([key, value]) => (
              <tr key={key}>
                <Th>{key}</Th>
                <Td>{formatValue(value)}</Td>
              </tr>
            ))}
        </tbody>
      </Table>
    );
  }, [infoData]);

  if (!isVisible) return null;

  return (
    <Overlay onClick={onClose}>
      <ModalContainer isOpen={isOpen} onClick={(e) => e.stopPropagation()}>
        <Header>
          <Title>Details</Title>
          <CloseButton onClick={onClose}>
            <FiX />
          </CloseButton>
        </Header>
        <Content>{renderContent()}</Content>
      </ModalContainer>
    </Overlay>
  );
});

DetailsModal.displayName = "DetailsModal";

export default DetailsModal;
