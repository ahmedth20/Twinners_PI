import React, { useState, useEffect } from "react";
import Page from "@layout/Page";
import { Container, Title, SectionTitle,Form, SectionSecondTitle, SectionThirdTitle, Select, Input, TextArea, ButtonContainer, Button, Row, Column, RemoveButton } from "../styles/medicalForm";
import PatientService from "../services/PatientService";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";  // <-- Ajout de l'import
import { z } from "zod";

// Définition du schéma Zod
const formSchema = z.object({
  firstName: z.string().min(1, "First Name is required"),
  lastName: z.string().min(1, "Last Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(1, "Phone is required"),
  address: z.string().min(1, "Address is required"),
  age: z.number().int().min(1, "Age is required"),
  sex: z.string().min(1, "Sex is required"),
  height: z.number().int().min(1, "Height is required"),
  weight: z.number().int().min(1, "Weight is required"),
  consultations: z.array(
    z.object({
      date: z.string().refine(val => !isNaN(Date.parse(val)), {
        message: "Invalid date format",
      }),
      doctor: z.string().min(1, "Doctor's ID is required"), // Indiqué comme un ID
      status: z.string().min(1, "Status is required"), // Ajouté car présent dans les données JSON
      duration: z.number().min(1, "Duration is required"), // Ajouté car présent dans les données JSON
      notes: z.string().optional(),
    })),
  medicalRecord: z.object({
    diagnostic: z.object({
      
    }),

    treatment: z.object({
      medications: z.array(
       
      ),
    }),
    allergies: z.array(),
   
  }),
 operations: z.array(
      z.object({
        type: z.string().min(1, "Operation type is required"),
        estimatedTime: z.number().min(1, "Estimated time is required"), // Corrigé en number
        date: z.string().refine(val => !isNaN(Date.parse(val)), {
          message: "Invalid date format",
        }),
        roomNumber: z.string().min(1, "Room number is required"),
        status: z.string().min(1, "Status is required"),
      })
    ),
  
  
});


const FormSection = ({ title, children }) => (
  <div>
    <SectionTitle>{title}</SectionTitle>
    {children}
  </div>
);

const MedicalForm = () => {
  const { register, handleSubmit, formState: { errors }, watch, setValue } = useForm({
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
  

  const [symptoms, setSymptoms] = useState([""]);
  const [medications, setMedications] = useState([{ name: "", dosage: "", frequency: "", duration: "", notes: "" }]);
  const [lifestyleRecommendations, setLifestyleRecommendations] = useState([""]);
  const [allergies, setAllergies] = useState([""]);
  const [operations, setOperations] = useState([{ type: "", estimatedTime: "", date: "", roomNumber: "", status: "" }]);
  const [doctors, setDoctors] = useState([]);

  // Fonction d'ajout des champs dynamiques
  const addField = (setState) => setState(prev => [...prev, ""]);
  const addMedication = () => setMedications(prev => [...prev, { name: "", dosage: "", frequency: "", duration: "", notes: "" }]);
  const addOperation = () => setOperations(prev => [...prev, { type: "", estimatedTime: "", date: "", roomNumber: "", status: "" }]);
  

  // Fonction de suppression des champs dynamiques
  const removeField = (setState, index) => setState((prev) => prev.filter((_, i) => i !== index));
  const removeMedication = (index) => setMedications(medications.filter((_, i) => i !== index));
  const removeOperation = (index) => {
    setOperations(operations.filter((_, i) => i !== index));
  };

useEffect(() => {
      const fetchDoctors = async () => {
          try {
              const data = await PatientService.getAllDoctors();
              setDoctors(data);

              console.log("doctorsssssssssss");
              console.log(data);
          } catch (error) {
              console.error("Failed to fetch doctors", error);
          }
      };
      fetchDoctors();
  }, []);
  const onSubmit = async (data) => {
    try {
      // Créer une nouvelle consultation avec les valeurs du formulaire
      const newConsultation = {
        doctor: watch("doctor"),  // L'ID du médecin
       duration: Number(watch("duration")),  // Convertir la durée en nombre
        date: watch("date"),  // Date de la consultation
        status: watch("status"),  // Statut de la consultation
        notes: watch("notes") || "",  // Notes facultatives
      };
  
      // Créer un nouveau dossier médical avec les valeurs du formulaire
      const newMedicalRecord = {
        diagnostic: {
          condition: watch("condition"),
          severity: watch("severity"),
          symptoms: Array.isArray(watch("symptoms")) ? watch("symptoms") : [],  // Symptômes
          notes: watch("diagnostic.notes") || "",  // Notes sur le diagnostic
        },
        treatment: {
          medications: watch("medications"),  // Médicaments
        },
        allergies: watch("allergies"),  // Allergies
      };
  
      // Mettre à jour les données avec la nouvelle consultation et le dossier médical
      const updatedData = {
        ...data,
        consultations: [...data.consultations, newConsultation],  // Ajouter la consultation
        medicalRecord: newMedicalRecord,  // Ajouter le dossier médical
      };
  
      console.log("Données envoyées :", updatedData);  // Affiche les données mises à jour
  
      // Appel à l'API pour enregistrer les données du patient
      await PatientService.createPatient(updatedData);
      
      alert("✅ Patient ajouté avec succès !");
    } catch (error) {
      const errorMessage = error.response?.data?.message || error.message || "Erreur inconnue.";
      alert(`❌ ${errorMessage}`);
      console.error("Détails de l'erreur :", error);
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

export default MedicalForm;