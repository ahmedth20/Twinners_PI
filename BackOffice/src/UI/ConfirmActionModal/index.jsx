import React from 'react';
import {  FaTimes } from 'react-icons/fa';
import styled from 'styled-components';

const ActionModalWrapper = styled.div`
  position: fixed;
  inset: 0;
  z-index: 50;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContainer = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 2rem;
  max-width: 400px;
  width: 100%;
  text-align: center;
  position: relative;
  animation: fade-in-down 0.3s ease-out;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 4rem;
  width: 4rem;
  background-color: ${(props) => props.bgColor || '#f8d7da'};
  border-radius: 50%;
  margin: 0 auto 1rem;

  svg {
    font-size: 1.5rem;
    color: ${(props) => props.iconColor || '#e53e3e'};
  }
`;

const Heading = styled.h3`
  font-size: 1.125rem;
  font-weight: 500;
  color: #1a202c;
  margin-bottom: 0.5rem;
  text-align: center;
    display: flex;
  align-items: center;
  justify-content:center;
`;

const Message = styled.p`
  font-size: 0.875rem;
  color: #4a5568;
  margin-bottom: 1.5rem;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
`;

const Button = styled.button`
  flex: 1;
  padding: 0.5rem;
  border-radius: 0.375rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  border: none;

  &.confirm {
    background-color: ${(props) => props.bgColor || '#e53e3e'};
    color: white;

    &:hover {
      background-color: ${(props) => props.bgColorHover || '#c53030'};
    }
  }

  &.cancel {
    background-color: white;
    border: 1px solid #e2e8f0;
    color: #4a5568;

    &:hover {
      background-color: #edf2f7;
    }
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  cursor: pointer;

  .close-icon {
    font-size: 1.5rem;
    color: #4a5568;

    &:hover {
      color: #2d3748;
    }
  }
`;

const ConfirmActionModal = ({ icon, actionType, onConfirm, onCancel, message, bgColor, iconColor }) => {
  const actionText = actionType.charAt(0).toUpperCase() + actionType.slice(1);

  return (
    <ActionModalWrapper>
      <ModalContainer role="dialog" aria-modal="true" aria-labelledby="modal-headline">
        <CloseButton onClick={onCancel}>
          <FaTimes className="close-icon" />
        </CloseButton>
        <IconWrapper bgColor={bgColor} iconColor={iconColor}>
          {icon}
        </IconWrapper>
        <Heading id="modal-headline">Confirm {actionText}</Heading>
        <Message>{message || `Are you sure you want to ${actionType.toLowerCase()} this item? This action cannot be undone.`}</Message>
        <ButtonGroup>
          <Button onClick={onCancel} className="cancel">
            Cancel
          </Button>
          <Button onClick={onConfirm} className="confirm" bgColor={iconColor} bgColorHover={bgColor}>
            {actionText}
          </Button>
        </ButtonGroup>
      </ModalContainer>
    </ActionModalWrapper>
  );
};

export default ConfirmActionModal;
