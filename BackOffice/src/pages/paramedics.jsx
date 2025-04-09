import React, { useState, useEffect } from "react";
import Page from "layout/Page";
import ParamedicList from "widgets/ParamedicList";
import { 
  GlobalStyles,  Container
} from "../styles/PopUpAddParamedic";
//import ParamedicService from "../services/ParamedicService";


const Paramedics = () => { 
  /*const [formData, setFormData] = useState({
    serviceParamedic: "", 
    ambulance: "", 
    patientsFile: "", 
    user: "", 
  });
*/
 /* useEffect(() => {
  }, []);
*/
 /* const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddParamedic = async (e) => {
    e.preventDefault();

    const patientsFileArray = formData.patientsFile.split(',').map(id => id.trim()).filter(id => id);
    const dataToSubmit = {
      serviceParamedic: formData.serviceParamedic,
      ambulance: formData.ambulance,
      patientsFile: patientsFileArray, 
      user: formData.user 
    };

    console.log("📤 Données envoyées :", dataToSubmit);

    try {
      await ParamedicService.createParamedic(dataToSubmit);
      alert("✅ Paramedic ajouté avec succès !");

      setFormData({ serviceParamedic: "", ambulance: "", patientsFile: "", user: "" });
      
    } catch (error) {
      console.error("❌ Erreur lors de l'ajout du Paramedic :", error.response?.data || error);
    }
  };

*/
  return (
    <Page title="Paramedic List">
      <GlobalStyles />
      <Container>
      </Container>

 

  
        <ParamedicList />
    </Page>
  );
};

export default Paramedics;