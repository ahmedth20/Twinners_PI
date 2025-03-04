import styled, { createGlobalStyle } from "styled-components";


export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, sans-serif;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding-bottom: 10px;
`;

export const Button = styled.button`
  padding: 12px 24px;
  background-color: ${(props) => (props.gray ? "#ccc" : "#2563eb")};
  color: ${(props) => (props.gray ? "#000" : "white")};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background 0.3s;
  &:hover {
    background-color: ${(props) => (props.gray ? "#bbb" : "#1d4ed8")};
  }
`;

export const AddButton = styled(Button)`
  && {
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border-radius: 10px;
    &:hover {
      background-color: #0056b3;
    }
  }
`;


export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 8000;
`;

export const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  max-width: 800px;
  position: relative;
  text-align: center;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  background: none;
  font-size: 18px;
  cursor: pointer;
`;




export  const Title = styled.h1`
  font-size: 28px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 3px;
  margin-top: 7px;
   justify-content: center;
  align-items: center;
  margin-left:10px;
`;


export  const ProgressBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

export  const Step = styled.div`
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: ${(props) => (props.active ? "#2563eb" : "#e5e7eb")};
  color: ${(props) => (props.active ? "#fff" : "#000")};
  font-weight: bold;
  font-size: 16px;
  margin: 0 0px;
`;

export  const Line = styled.div`
  height: 4px;
  width: 300px;
  background: #e5e7eb;
  margin: 0 0px;
`;

export const Form = styled.form`
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 4px 4px 4px 4px rgba(0, 0, 0, 0.15);
  width: 80%;
  max-height: 1650px; 
  max-width: 650px; 
  height: 180; 
  text-align: center;
  margin: 0 auto; 
`;


export  const Label = styled.label`
  display: block;
  text-align: left;
  font-weight: bold;
  margin-top: 10px;
  font-size: 14px;
`;

export  const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-top: 8px;
  margin-buttom:8px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const InputRow = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 5px;
`;

export const ButtonRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;



export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

export const NavButton = styled.button`
  padding: 10px 20px;
  background-color: #ccc;
  color: black;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #bbb;
  }
`;

export const NextButton = styled.button`
  padding: 10px 20px;
  background-color: #2563eb;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #1d4ed8;
  }
`;

export const SubmitButton = styled.button`
  padding: 12px 24px;
  background-color: green;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: darkgreen;
  }
`;

export const DisabledBackground = styled.div`
  filter: ${(props) => (props.isOpen ? "blur(3px)" : "none")};
  pointer-events: ${(props) => (props.isOpen ? "none" : "auto")};
`;




export const Select = styled.select`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background: white;
  color:grey;
  margin-top: 8px;
  margin-buttom:8px;
`;

export const RadioGroup = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 15px;
`;

export const RadioButton = styled.label`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;

  input {
    margin-right: 5px;
  }
`;
export const StepContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 20px;
`;

export const FormTitle= styled.h2`
 font-size: 19px;
  text-align: center;
  margin-bottom: 10px;
   justify-content: center;
  align-items: center;
  margin-left: 30px;
`;