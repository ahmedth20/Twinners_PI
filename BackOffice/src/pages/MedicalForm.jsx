import React, { useState } from "react";
import Page from "@layout/Page";
import { Container, Title, SectionTitle, SectionSecondTitle, SectionThirdTitle, Form, Select, Input, TextArea, ButtonContainer, Button, Row, Column, RemoveButton } from "../styles/medicalForm";
import PatientService from "../services/PatientService";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// Définition du schéma Zod (utilisé dans votre code)

const MedicalForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(formSchema),
  });

  const [symptoms, setSymptoms] = useState([""]);
  const [medications, setMedications] = useState([{ name: "", dosage: "", frequency: "", duration: "", notes: "" }]);
  const [allergies, setAllergies] = useState([""]);
  const [operations, setOperations] = useState([{ type: "", estimatedTime: "", date: "", roomNumber: "", status: "" }]);

  const addField = (setState) => setState((prev) => [...prev, ""]);
  const addMedication = () => setMedications([...medications, { name: "", dosage: "", frequency: "", duration: "", notes: "" }]);
  const addOperation = () => setOperations([...operations, { type: "", estimatedTime: "", date: "", roomNumber: "", status: "" }]);

  const removeField = (setState, index) => setState((prev) => prev.filter((_, i) => i !== index));
  const removeMedication = (index) => setMedications(medications.filter((_, i) => i !== index));
  const removeOperation = (index) => setOperations(operations.filter((_, i) => i !== index));

  const onSubmit = async (data) => {
    try {
      await PatientService.createPatient(data);
      alert("✅ Patient ajouté avec succès !");
    } catch (error) {
      alert("❌ Erreur lors de l'ajout du patient.");
      console.error(" l'erreur :", error.response?.data);
    }
  };

  return (
    <Page>
      <Container>
        <Title>Formulaire d'ajout de patient</Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <FormSection title="Informations Générales">
            <Row>
              <Column>
                <Input {...register("firstName")} placeholder="Prénom" />
                {errors.firstName && <span>{errors.firstName.message}</span>}
              </Column>
              <Column>
                <Input {...register("lastName")} placeholder="Nom" />
                {errors.lastName && <span>{errors.lastName.message}</span>}
              </Column>
            </Row>
            <Row>
              <Column>
                <Input {...register("email")} placeholder="Email" />
                {errors.email && <span>{errors.email.message}</span>}
              </Column>
              <Column>
                <Input {...register("phone")} placeholder="Téléphone" />
                {errors.phone && <span>{errors.phone.message}</span>}
              </Column>
            </Row>
            <Input {...register("address")} placeholder="Adresse" />
            {errors.address && <span>{errors.address.message}</span>}
            <Row>
              <Column>
                <Input type="number" {...register("age")} placeholder="Âge" />
                {errors.age && <span>{errors.age.message}</span>}
              </Column>
              <Column>
                <Select {...register("sex")}>
                  <option value="Male">Homme</option>
                  <option value="Female">Femme</option>
                  <option value="Other">Autre</option>
                </Select>
                {errors.sex && <span>{errors.sex.message}</span>}
              </Column>
            </Row>
            <Row>
              <Column>
                <Input type="number" {...register("height")} placeholder="Taille (cm)" />
                {errors.height && <span>{errors.height.message}</span>}
              </Column>
              <Column>
                <Input type="number" {...register("weight")} placeholder="Poids (kg)" />
                {errors.weight && <span>{errors.weight.message}</span>}
              </Column>
            </Row>
          </FormSection>

          <FormSection title="Historique Médical">
            <SectionSecondTitle>Diagnostic</SectionSecondTitle>
            <Input {...register("medicalRecord.diagnostic.condition")} placeholder="Condition" />
            {errors.medicalRecord?.diagnostic?.condition && <span>{errors.medicalRecord.diagnostic.condition.message}</span>}
            <Select {...register("medicalRecord.diagnostic.severity")}>
              <option value="Mild">Légère</option>
              <option value="Moderate">Modérée</option>
              <option value="Severe">Sévère</option>
            </Select>
            <SectionThirdTitle>Symptômes</SectionThirdTitle>
            {symptoms.map((symptom, index) => (
              <Row key={index}>
                <Column>
                  <Input
                    value={symptom}
                    onChange={(e) => {
                      const newSymptoms = [...symptoms];
                      newSymptoms[index] = e.target.value;
                      setSymptoms(newSymptoms);
                    }}
                    placeholder="Symptôme"
                  />
                  {errors.medicalRecord?.diagnostic?.symptoms && <span>{errors.medicalRecord.diagnostic.symptoms.message}</span>}
                </Column>
                <RemoveButton onClick={() => removeField(setSymptoms, index)}>Supprimer</RemoveButton>
              </Row>
            ))}
            <Button onClick={() => addField(setSymptoms)}>Ajouter un symptôme</Button>

            <SectionSecondTitle>Médicaments</SectionSecondTitle>
            {medications.map((medication, index) => (
              <div key={index}>
                <Input
                  value={medication.name}
                  onChange={(e) => {
                    const newMedications = [...medications];
                    newMedications[index].name = e.target.value;
                    setMedications(newMedications);
                  }}
                  placeholder="Médicament"
                />
                <Input
                  value={medication.dosage}
                  onChange={(e) => {
                    const newMedications = [...medications];
                    newMedications[index].dosage = e.target.value;
                    setMedications(newMedications);
                  }}
                  placeholder="Dosage"
                />
                <Input
                  value={medication.frequency}
                  onChange={(e) => {
                    const newMedications = [...medications];
                    newMedications[index].frequency = e.target.value;
                    setMedications(newMedications);
                  }}
                  placeholder="Fréquence"
                />
                <Input
                  value={medication.duration}
                  onChange={(e) => {
                    const newMedications = [...medications];
                    newMedications[index].duration = e.target.value;
                    setMedications(newMedications);
                  }}
                  placeholder="Durée"
                />
                <TextArea
                  value={medication.notes}
                  onChange={(e) => {
                    const newMedications = [...medications];
                    newMedications[index].notes = e.target.value;
                    setMedications(newMedications);
                  }}
                  placeholder="Notes"
                />
                <RemoveButton onClick={() => removeMedication(index)}>Supprimer</RemoveButton>
              </div>
            ))}
            <Button onClick={addMedication}>Ajouter un médicament</Button>

            <SectionSecondTitle>Allergies</SectionSecondTitle>
            {allergies.map((allergy, index) => (
              <Row key={index}>
                <Column>
                  <Input
                    value={allergy}
                    onChange={(e) => {
                      const newAllergies = [...allergies];
                      newAllergies[index] = e.target.value;
                      setAllergies(newAllergies);
                    }}
                    placeholder="Allergie"
                  />
                </Column>
                <RemoveButton onClick={() => removeField(setAllergies, index)}>Supprimer</RemoveButton>
              </Row>
            ))}
            <Button onClick={() => addField(setAllergies)}>Ajouter une allergie</Button>

            <SectionSecondTitle>Opérations</SectionSecondTitle>
            {operations.map((operation, index) => (
              <div key={index}>
                <Input
                  value={operation.type}
                  onChange={(e) => {
                    const newOperations = [...operations];
                    newOperations[index].type = e.target.value;
                    setOperations(newOperations);
                  }}
                  placeholder="Type d'opération"
                />
                <Input
                  value={operation.estimatedTime}
                  onChange={(e) => {
                    const newOperations = [...operations];
                    newOperations[index].estimatedTime = e.target.value;
                    setOperations(newOperations);
                  }}
                  placeholder="Temps estimé"
                />
                <Input
                  value={operation.date}
                  onChange={(e) => {
                    const newOperations = [...operations];
                    newOperations[index].date = e.target.value;
                    setOperations(newOperations);
                  }}
                  placeholder="Date"
                />
                <Input
                  value={operation.roomNumber}
                  onChange={(e) => {
                    const newOperations = [...operations];
                    newOperations[index].roomNumber = e.target.value;
                    setOperations(newOperations);
                  }}
                  placeholder="Numéro de salle"
                />
                <Select
                  value={operation.status}
                  onChange={(e) => {
                    const newOperations = [...operations];
                    newOperations[index].status = e.target.value;
                    setOperations(newOperations);
                  }}
                >
                  <option value="completed">Terminé</option>
                  <option value="pending">En attente</option>
                  <option value="in-progress">En cours</option>
                </Select>
                <RemoveButton onClick={() => removeOperation(index)}>Supprimer</RemoveButton>
              </div>
            ))}
            <Button onClick={addOperation}>Ajouter une opération</Button>
          </FormSection>

          <ButtonContainer>
            <Button type="submit">Ajouter le patient</Button>
          </ButtonContainer>
        </Form>
      </Container>
    </Page>
  );
};

export default MedicalForm;
