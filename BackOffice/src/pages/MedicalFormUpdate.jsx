import React, { useState, useEffect } from "react";
import Page from "layout/Page";
import { Container, SectionTitle, SectionSecondTitle, SectionThirdTitle, Select, Input, TextArea, ButtonContainer, Button, Row, Column, RemoveButton } from "../styles/medicalForm";
import PatientService from "../services/PatientService";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";  // <-- Ajout de l'import
import { z } from "zod";
import { CloseButton, ModalContent, ModalOverlay, Title } from "styles/PopUpAddPatient";
import { motion } from "framer-motion";
import { useLocation } from "react-router";
const formSchema = z.object({
  firstName: z.string().min(1, "First Name is required").optional(),
  lastName: z.string().min(1, "Last Name is required").optional(),
  email: z.string().email("Invalid email address").optional(),
  phone: z.string().min(1, "Phone is required").optional(),
  address: z.string().min(1, "Address is required").optional(),
  age: z.number().int().min(1, "Age is required").optional(),
  sex: z.string().min(1, "Sex is required").optional(),
  height: z.number().int().min(1, "Height is required").optional(),
  weight: z.number().int().min(1, "Weight is required").optional(),

  consultations: z.array(
    z.object({
      _id: z.string().optional(), // Pour différencier les anciennes et nouvelles consultations
      date: z.string().refine(val => !isNaN(Date.parse(val)), {
        message: "Invalid date format",
      }),
      doctor: z.string().min(1, "Doctor's ID is required"),
      status: z.string().min(1, "Status is required"),
      duration: z.number().min(1, "Duration is required"),
      notes: z.string().optional(),
    })
  ).optional(),

  medicalRecord: z.object({
    diagnostic: z.object({
      condition: z.string().optional(),
      severity: z.string().optional(),
      symptoms: z.array(z.string()).optional(),
      notes: z.string().optional(),
    }).optional(),

    treatment: z.object({
      medications: z.array(z.object({
        name: z.string().optional(),
        dosage: z.string().optional(),
        frequency: z.string().optional(),
        duration: z.string().optional(),
        notes: z.string().optional()
      })).optional()
    }).optional(),

    allergies: z.array(z.string()).optional(),
  }).optional(),

  operations: z.array(
    z.object({
      type: z.string().min(1, "Operation type is required"),
      estimatedTime: z.number().min(1, "Estimated time is required"),
      date: z.string().refine(val => !isNaN(Date.parse(val)), {
        message: "Invalid date format",
      }),
      roomNumber: z.string().min(1, "Room number is required"),
      status: z.string().min(1, "Status is required"),
    })
  ).optional()
});
const FormSection = ({ title, children }) => (
  <div>
    <SectionTitle>{title}</SectionTitle>
    {children}
  </div>
);
const MedicalFormUpdate = () => {
  const { state } = useLocation();  // Récupère les données envoyées via navigate
  const data = state?.patientData; // Accède aux données du patient
  console.log(data);
  const [symptoms, setSymptoms] = useState([""]);
  const [medications, setMedications] = useState([{ name: "", dosage: "", frequency: "", duration: "", notes: "" }]);

  const [allergies, setAllergies] = useState([""]);
  const [operations, setOperations] = useState([{ type: "", estimatedTime: "", date: "", roomNumber: "", status: "" }]);
  const [doctors, setDoctors] = useState([]);

  const addField = (setState) => setState(prev => [...prev, ""]);
  const addMedication = () => setMedications(prev => [...prev, { name: "", dosage: "", frequency: "", duration: "", notes: "" }]);
  const addOperation = () => setOperations(prev => [...prev, { type: "", estimatedTime: "", date: "", roomNumber: "", status: "" }]);
  const removeField = (setState, index) => setState((prev) => prev.filter((_, i) => i !== index));
  const removeMedication = (index) => setMedications(medications.filter((_, i) => i !== index));
  const removeOperation = (index) => {
    setOperations(operations.filter((_, i) => i !== index));
  };

useEffect(() => {
      const fetchDoctors = async () => {
          try {
              const data = await PatientService.getAllDoctors();
              setDoctors(data);          } catch (error) {
              console.error("Failed to fetch doctors", error);
          }
      };
      fetchDoctors();
  }, []);
  const { register, handleSubmit, setValue,getValues,formState: { errors }, watch } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      consultations: [],  // Commencer avec un tableau vide pour les consultations
      medicalRecord: {  // Objet vide pour le dossier médical
        diagnostic: {
          condition: "",
          severity: "",
          symptoms: [String],
          notes: "",
        },
        treatment: {
          medications: [],
        },
        allergies: [],
        operations:[],
      }
    }
  });
  useEffect(() => {
    if (data) {
      if (data.user) {
        setValue("firstName", data.user.firstName || "");
        setValue("lastName", data.user.lastName || "");
        setValue("email", data.user.email || ""); // Ajouté ici
      }
  
      setValue("sex", data.sex || "");
      setValue("age", data.age || "");
      setValue("phone", data.phone || "");
      setValue("address", data.address || "");
      setValue("height", data.height || ""); // Ajouté ici
      setValue("weight", data.weight || ""); // Ajouté ici
  
      if (data.medicalRecord) {
        Object.entries(data.medicalRecord).forEach(([sectionKey, sectionValue]) => {
          if (typeof sectionValue === "object" && sectionValue !== null) {
            Object.entries(sectionValue).forEach(([field, value]) => {
              setValue(`medicalRecord.${sectionKey}.${field}`, value);
            });
          } else {
            setValue(`medicalRecord.${sectionKey}`, sectionValue);
          }
        });
      }
  
      setValue("consultations", data.consultations || []);
    }
  }, [data, setValue]);
  
  
  const onSubmit = async () => {
    try {
      const formValues = getValues();
      const updatedData = {};
  
      // Comparaison des valeurs user
      if (formValues.firstName !== data.user?.firstName) {
        updatedData.firstName = formValues.firstName;
      }
      if (formValues.lastName !== data.user?.lastName) {
        updatedData.lastName = formValues.lastName;
      }
      if (formValues.email !== data.user?.email) {
        updatedData.email = formValues.email;
      }
      // Comparaison des champs principaux
      ["sex", "age", "phone", "address","weight","height"].forEach((key) => {
        if (formValues[key] !== data[key]) {
          updatedData[key] = formValues[key];
        }
      });
  
      // Comparaison consultations
      if (JSON.stringify(formValues.consultations) !== JSON.stringify(data.consultations)) {
        updatedData.consultations = formValues.consultations;
      }
  
      // Comparaison medicalRecord
      if (JSON.stringify(formValues.medicalRecord) !== JSON.stringify(data.medicalRecord)) {
        updatedData.medicalRecord = formValues.medicalRecord;
      }
  
      if (Object.keys(updatedData).length > 0) {
        await PatientService.updatePatient(data._id, updatedData);
        alert("✅ Patient mis à jour avec succès !");
      } else {
        alert("Aucune modification détectée.");
      }
  
    } catch (error) {
      console.error("❌ Erreur lors de la mise à jour :", error);
      alert("Erreur lors de la mise à jour du patient.");
    }
  };
  
  
  return (
       <Page title="Medical Record">
      <Container>
        <Title>Medical Record Form</Title>

        {/* Informations de l'utilisateur */}
        <FormSection title="User Information">
          <Row>
            <Column>
              <Input {...register("firstName")} placeholder="First Name" type="text" />
              {errors.firstName && <p>{errors.firstName.message}</p>}  {/* Message d'erreur */}
            </Column>
            <Column>
              <Input {...register("lastName")} placeholder="Last Name" type="text" />
              {errors.lastName && <p>{errors.lastName.message}</p>}  {/* Message d'erreur */}
            </Column>
          </Row>
          <Row>
            <Column>
              <Input {...register("email")} placeholder="Email" type="email" />
              {errors.email && <p>{errors.email.message}</p>}  {/* Message d'erreur */}
            </Column>
          
          </Row>
        </FormSection>

        {/* Informations sur le patient */}
        <FormSection title="Patient Information">
          <Row>
            <Column>
              <Input {...register("phone")} placeholder="Phone" type="tel" />
              {errors.phone && <p>{errors.phone.message}</p>}  {/* Message d'erreur */}
            </Column>
            <Column>
              <Input {...register("address")} placeholder="Address" type="text" />
              {errors.address && <p>{errors.address.message}</p>}  {/* Message d'erreur */}
            </Column>
          </Row>
          <Row>
          <Column>
  <Input
    {...register("age", {
      setValueAs: (value) => Number(value),  // Conversion en nombre
    })}
    placeholder="Age"
    type="number"
  />
  {errors.age && <p>{errors.age.message}</p>} {/* Message d'erreur */}
</Column>

            <Column>
              <Select {...register("sex")}>
                <option value="">Select sex</option>
                <option value="Female">Female</option>
                <option value="Male">Male</option>
              </Select>
              {errors.sex && <p>{errors.sex.message}</p>}  {/* Message d'erreur */}
            </Column>
          </Row>
          <Row>
  <Column>
    <Input
      {...register("height", {
        setValueAs: (value) => Number(value),  // Conversion en nombre
      })}
      placeholder="Height (cm)"
      type="number"
    />
    {errors.height && <p>{errors.height.message}</p>} {/* Message d'erreur */}
  </Column>
  <Column>
    <Input
      {...register("weight", {
        setValueAs: (value) => Number(value),  // Conversion en nombre
      })}
      placeholder="Weight (kg)"
      type="number"
    />
    {errors.weight && <p>{errors.weight.message}</p>} {/* Message d'erreur */}
  </Column>
</Row>

        </FormSection>

        <FormSection title="Consultation">
          <Row>
          <Select {...register("doctor", { required: "Veuillez sélectionner un docteur" })}>
                <option value="">Sélectionner un docteur</option>
                {doctors.map((doctor) => (
                    <option key={doctor._id} value={doctor._id}>
                        {doctor.user.firstName} {doctor.user.lastName}
                    </option>
                ))}
            </Select>
            
            {errors.doctor && <p>{errors.doctor.message}</p>}
          </Row>
          <Row>
            <Column>
              <Input {...register("duration")} placeholder="Duration (minutes)" type="number" />
              {errors.duration && <p>{errors.duration.message}</p>}  
            </Column>
            <Column>
              <Input {...register("date")} placeholder="Date" type="date" />
              {errors.date && <p>{errors.date.message}</p>}  
            </Column>
          </Row>
          <Row>
            <Column>
              <Select {...register("status")}>
                <option value="">Select Status</option>
                <option value="Planned">Planned</option>
                <option value="Ongoing">Ongoing</option>
                <option value="Completed">Completed</option>
                <option value="Cancelled">Cancelled</option>
              </Select>
              {errors.status && <p>{errors.status.message}</p>}  
            </Column>
          </Row>
        </FormSection>
        <FormSection title="Medical Record">
  <SectionSecondTitle>Diagnostics</SectionSecondTitle>
  <Row>
    <Column>
      <Input {...register("condition")} placeholder="Condition" type="text" />
      {errors.condition && <p>{errors.condition.message}</p>}  
    </Column>
    <Column>
      <Input {...register("severity")} placeholder="Severity" type="text" />
      {errors.severity && <p>{errors.severity.message}</p>}  
    </Column>
  </Row>

  {symptoms.map((symptom, index) => (
    <div key={index} style={{ display: "flex", alignItems: "center" }}>
      <Input
        {...register(`symptoms.${index}`)}  
        placeholder="Symptom"
        value={symptom}
        onChange={(e) => {
          const newSymptoms = [...symptoms];
          newSymptoms[index] = e.target.value;
          setSymptoms(newSymptoms);
        }}
      />
      {index > 0 && <RemoveButton onClick={() => removeField(setSymptoms, index)}>X</RemoveButton>}
      {errors.symptoms && errors.symptoms[index] && <p>{errors.symptoms[index]?.message}</p>} 
    </div>
  ))}
  <ButtonContainer><Button onClick={() => addField(setSymptoms)}>Add Other Symptom</Button></ButtonContainer>

  <SectionThirdTitle>Medications</SectionThirdTitle>
  {medications.map((medication, index) => (
    <div key={index}>
      <Row>
        <Column>
          <Input
            {...register(`medications.${index}.name`)}   
            placeholder="Medication Name"
            value={medication.name}
            onChange={(e) => {
              const newMedications = [...medications];
              newMedications[index].name = e.target.value;
              setMedications(newMedications);
            }}
          />
          {errors.medications && errors.medications[index]?.name && <p>{errors.medications[index].name.message}</p>}
        </Column>
        <Column>
          <Input
            {...register(`medications.${index}.dosage`)}   
            placeholder="Dosage"
            value={medication.dosage}
            onChange={(e) => {
              const newMedications = [...medications];
              newMedications[index].dosage = e.target.value;
              setMedications(newMedications);
            }}
          />
          {errors.medications && errors.medications[index]?.dosage && <p>{errors.medications[index].dosage.message}</p>}
        </Column>
      </Row>
      <Row>
        <Column>
          <Input
            {...register(`medications.${index}.frequency`)}   
            placeholder="Frequency"
            value={medication.frequency}
            onChange={(e) => {
              const newMedications = [...medications];
              newMedications[index].frequency = e.target.value;
              setMedications(newMedications);
            }}
          />
          {errors.medications && errors.medications[index]?.frequency && <p>{errors.medications[index].frequency.message}</p>}
        </Column>
        <Column>
          <Input
            {...register(`medications.${index}.duration`)}   
            placeholder="Duration"
            value={medication.duration}
            onChange={(e) => {
              const newMedications = [...medications];
              newMedications[index].duration = e.target.value;
              setMedications(newMedications);
            }}
          />
          {errors.medications && errors.medications[index]?.duration && <p>{errors.medications[index].duration.message}</p>}
        </Column>
      </Row>
      <Row>
        <Column>
          <TextArea
            {...register(`medications.${index}.notes`)}   
            placeholder="Notes"
            value={medication.notes}
            onChange={(e) => {
              const newMedications = [...medications];
              newMedications[index].notes = e.target.value;
              setMedications(newMedications);
            }}
          />
        </Column>
      </Row>
      {index > 0 && <RemoveButton onClick={() => removeMedication(index)}>Remove Medication</RemoveButton>}
    </div>
  ))}
  <ButtonContainer><Button onClick={addMedication}>Add Medication</Button></ButtonContainer>

  <SectionThirdTitle>Allergies</SectionThirdTitle>
  {allergies.map((allergy, index) => (
    <div key={index}>
      <Input
        {...register(`allergies.${index}`)}   
        placeholder="Allergy"
        value={allergy}
        onChange={(e) => {
          const newAllergies = [...allergies];
          newAllergies[index] = e.target.value;
          setAllergies(newAllergies);
        }}
      />
      {errors.allergies && errors.allergies[index] && <p>{errors.allergies[index]?.message}</p>}
      {index > 0 && <RemoveButton onClick={() => removeField(setAllergies, index)}>X</RemoveButton>}
    </div>
  ))}
  <ButtonContainer><Button onClick={() => addField(setAllergies)}>Add Allergy</Button></ButtonContainer> 


          <SectionThirdTitle>Operations</SectionThirdTitle>
          {operations.map((operation, index) => (
            <div key={index}>
              <Row>
                <Column>
                  <Input
                    {...register(`operations.${index}.type`)}
                    placeholder="Operation Type"
                    value={operation.type}
                    onChange={(e) => {
                      const newOperations = [...operations];
                      newOperations[index].type = e.target.value;
                      setOperations(newOperations);
                    }}
                  />
                  {errors.operations && errors.operations[index]?.type && <p>{errors.operations[index].type.message}</p>}
                </Column>
                <Column>
                <Input
                  {...register(`operations.${index}.estimatedTime`, { valueAsNumber: true })} // ✅ Ajout de valueAsNumber
                  placeholder="Estimated Time"
                  value={operation.estimatedTime}
                  onChange={(e) => {
                    const newOperations = [...operations];
                    newOperations[index].estimatedTime = Number(e.target.value) || 0; // ✅ Conversion en nombre
                    setOperations(newOperations);
                  }}
                />
                {errors.operations && errors.operations[index]?.estimatedTime && (
                  <p>{errors.operations[index].estimatedTime.message}</p>
                )}
              </Column>

              </Row>
              <Row>
                <Column>
                  <Input
                    {...register(`operations.${index}.date`)}
                    placeholder="Operation Date"
                    value={operation.date}
                    type="date"
                    onChange={(e) => {
                      const newOperations = [...operations];
                      newOperations[index].date = e.target.value;
                      setOperations(newOperations);
                    }}
                  />
                  {errors.operations && errors.operations[index]?.date && <p>{errors.operations[index].date.message}</p>}
                </Column>
                <Column>
                  <Input
                    {...register(`operations.${index}.roomNumber`)}
                    placeholder="Room Number"
                    value={operation.roomNumber}
                    onChange={(e) => {
                      const newOperations = [...operations];
                      newOperations[index].roomNumber = e.target.value;
                      setOperations(newOperations);
                    }}
                  />
                  {errors.operations && errors.operations[index]?.roomNumber && <p>{errors.operations[index].roomNumber.message}</p>}
                </Column>
              </Row>
              <Row>
                <Column>
                  <Select
                    {...register(`operations.${index}.status`)}
                    value={operation.status}
                    onChange={(e) => {
                      const newOperations = [...operations];
                      newOperations[index].status = e.target.value;
                      setOperations(newOperations);
                    }}
                  >
                    <option value="">Select Status</option>
                    <option value="Scheduled">Scheduled</option>
                    <option value="Ongoing">Ongoing</option>
                    <option value="Completed">Completed</option>
                    <option value="Cancelled">Cancelled</option>
                  </Select>
                  {errors.operations && errors.operations[index]?.status && <p>{errors.operations[index].status.message}</p>}
                </Column>
              </Row>
              {index > 0 && <RemoveButton onClick={() => removeOperation(index)}>Remove Operation</RemoveButton>}
            </div>
          ))}
          <ButtonContainer><Button onClick={addOperation}>Add Operation</Button></ButtonContainer>
        </FormSection>

        <Button onClick={handleSubmit(onSubmit)}>Submit</Button>
      </Container>
   </Page>
    
        
  );
};

export default MedicalFormUpdate;
