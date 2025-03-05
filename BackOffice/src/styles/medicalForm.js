import styled from "styled-components";

export  const  Container = styled.div`
  border-radius: 15px;
  background: #fff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 40px;

`;

export  const  Title = styled.h1`
  color: #414d55;
  font-size: 28px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
   justify-content: center;
  align-items: center;
  margin-left:10px;
`;

export  const  SectionTitle = styled.h3`
  font-weight: bold;
  color: #2c61e2;
  margin-top: 20px;
  margin-bottom: 20px;
  border-bottom: 2px solid #2c61e2;
  padding-bottom: 5px;
`;
export  const  SectionSecondTitle = styled.h4`
  font-weight: bold;
  color:rgb(74, 107, 191);
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 20px;
  border-bottom: 2px solid rgb(74, 107, 191);
  padding-bottom: 5px;
`;
export  const  SectionThirdTitle = styled.h4`
  font-weight: bold;
  color:rgb(58, 86, 159);
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 30px;
  border-bottom: 2px solid rgb(58, 86, 159);
  padding-bottom: 5px;
`;
export  const  Select = styled.select`
  width: 100%;
  padding: 10px;
  border: 2px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
  background: white;
  outline: none;
  cursor: pointer;
  appearance: none;
  color:rgba(65, 77, 85, 0.79);
  &:hover {
    border-color: #2c61e2;
  }

  &:focus {
    border-color: #1a4db0;
    box-shadow: 0 0 5px rgba(44, 97, 226, 0.5);
  }
`;

export  const  Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 2px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
  outline: none;
  margin-bottom: 10px;
`;

export  const  TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 2px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
  outline: none;
  min-height: 80px;
  margin-bottom: 10px;
`;

export  const  ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
`;

export  const  Button = styled.button`
  padding: 10px 15px;
  border: none;
  background: #2c61e2;
  color: white;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  font-weight: bold;

  &:hover {
    background: #1a4db0;
  }
`;


export  const  Row = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;

export  const  Column = styled.div`
  flex: 1;
`;

export  const  RemoveButton = styled.button`
  background: #ff4d4d;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  font-size: 14px;
  border-radius: 5px;
  margin-left: 10px;
  &:hover {
    background: #cc0000;
  }
`;