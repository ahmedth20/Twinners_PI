import { useState, useRef,useEffect } from 'react';
import { FaArrowRight, FaCog, FaInfoCircle, FaStethoscope, FaNotesMedical,FaWrench,FaFlask, FaUser, FaAddressCard, FaGenderless } from 'react-icons/fa';

import { GoArrowRight } from 'react-icons/go';
import { MdCall } from 'react-icons/md';
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { blue } from '@mui/material/colors';

import { Snackbar, Alert } from "@mui/material";
import {
  Box, Button, Typography, Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Paper, Chip, Stack
} from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import MedicalRecordService from '../../services/medicalRecordService';

const patientSchema = z.object({
  firstName: z.string().min(2, { message: "First name is required" }),
  lastName: z.string().min(2, { message: "Last name is required" }),
  sex: z.enum(["Male", "Female"], { message: "Select a valid gender" }),
  age: z.preprocess((val) => Number(val), z.number().min(1, { message: "Age must be at least 1" }).max(120, { message: "Invalid age" })),
  phone: z.string().min(8, { message: "Phone number must be at least 8 digits" }),
  address: z.string().min(5, { message: "Address is required" }),
});

const ProfileSettings = () => {
  const user = useSelector(state => state.auth.user.user1.id);
  const [userData, setUserData] = useState({});
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [sex, setSex] = useState("");
  const [address, setAddress] = useState("");
  const [success, setSuccess] = useState("");
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);
  const [medicalRecord, setMedicalRecord] = useState(null);

  useEffect(() => {
      const fetchPatientProfile = async () => {
          setLoading(true);
          try {
              const response = await axios.get(`http://localhost:5000/patient/getPatientProfile/${user}`);
              const data = response.data;
              setUserData(data);
              setFirstName(data.firstName || "");
              setLastName(data.lastName || "");
              setPhone(data.phone || "");
              setAge(data.age || "");
              setSex(data.sex || "");
              setAddress(data.address || "");
              console.log(data);
              
          } catch (error) {
              console.error("Error fetching patient profile:", error);
              setErr("Error fetching profile data.");
          } finally {
              setLoading(false);
          }
      };

      fetchPatientProfile();
  }, [user]);

 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await MedicalRecordService.getMedicalRecordByUserId(user);
        console.log(response); // pour débug
        setMedicalRecord(response);
      } catch (err) {
        console.error("Erreur lors de la récupération du dossier médical:", err);
      }
    };
  
    fetchData();
  }, []);
  

  const handleUpdateProfile = async (data) => {
    setLoading(true);
    try {
      await axios.put(`http://localhost:5000/patients/updatePatientProfile/${user}`, data);
      setSuccess("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile:", error);
      setErr("Error updating profile.");
    } finally {
      setLoading(false);
    }
  };
  
  const [activeTab, setActiveTab] = useState('general'); // Onglet par défaut
  const [tabName, setTabName] = useState('General'); // Nom de l'onglet actif

  const handleTabClick = (tab, name, ref) => {
    setActiveTab(tab); // Mettre à jour l'onglet actif
    setTabName(name); // Mettre à jour le nom de l'onglet
    ref.current.scrollIntoView({ behavior: 'smooth' }); // Faire défiler vers la section de l'onglet sélectionné
  };

  // Références pour chaque section
  const generalRef = useRef(null);
  const consultationsRef = useRef(null);
  const medicalRecordRef = useRef(null);
  const operationsRef = useRef(null);
  const testResultRef = useRef(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue
  } = 
  useForm({
    resolver: zodResolver(patientSchema),
  });


  return (
    <>
      <section className="py-[120px] bg-BodyBg-0">
        <div className="Container">
          <div className="grid grid-cols-3 gap-[50px] lg:gap-8 xl:gap-[50px]">
            <div className="col-span-3 lg:col-span-1">
              <div className="rounded-2xl px-7 pt-7 pb-6 overflow-hidden bg-white bg-opacity-30 border-2 border-white border-opacity-80 mb-7">
                <h4 className="font-AlbertSans font-semibold text-2xl text-HeadingColor-0 pb-2 mb-8 relative before:absolute before:bottom-0 before:left-0 before:w-7 before:h-[2px] before:bg-PrimaryColor-0">
                  Account Settings
                </h4>
                <ul className="mt-8">
                  <li>
                    <button
                      onClick={() => handleTabClick('general', 'General', generalRef)}
                      className={`w-full font-AlbertSans text-left text-HeadingColor-0 transition-all duration-500 group px-7 py-4 flex items-center justify-between rounded-md bg-white bg-opacity-30 border-2 border-white border-opacity-80 mb-3 overflow-hidden ${
                        activeTab === 'general' ? 'bg-blue-600 text-white' : 'hover:bg-PrimaryColor-0 hover:text-white'
                      }`}
                    >
                      <span className="flex items-center gap-3 lg:gap-1 xl:gap-3">
                        <FaCog className="text-PrimaryColor-0 transition-all duration-500 group-hover:text-white" />
                        General
                      </span>
                      <FaArrowRight className="text-PrimaryColor-0 transition-all duration-500 group-hover:text-white" />
                    </button>
                  </li>
                 
                  <li>
                    <button
                      onClick={() => handleTabClick('consultations', 'Consultations', consultationsRef)}
                      className={`w-full font-AlbertSans text-left text-HeadingColor-0 transition-all duration-500 group px-7 py-4 flex items-center justify-between rounded-md bg-white bg-opacity-30 border-2 border-white border-opacity-80 mb-3 overflow-hidden ${
                        activeTab === 'consultations' ? 'bg-blue-600 text-white' : 'hover:bg-PrimaryColor-0 hover:text-white'
                      }`}
                    >
                      <span className="flex items-center gap-3 lg:gap-1 xl:gap-3">
                        <FaStethoscope className="text-PrimaryColor-0 transition-all duration-500 group-hover:text-white" />
                        Consultations
                      </span>
                      <FaArrowRight className="text-PrimaryColor-0 transition-all duration-500 group-hover:text-white" />
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => handleTabClick('medicalRecord', 'Medical Record', medicalRecordRef)}
                      className={`w-full font-AlbertSans text-left text-HeadingColor-0 transition-all duration-500 group px-7 py-4 flex items-center justify-between rounded-md bg-white bg-opacity-30 border-2 border-white border-opacity-80 mb-3 overflow-hidden ${
                        activeTab === 'medicalRecord' ? 'bg-blue-600 text-white' : 'hover:bg-PrimaryColor-0 hover:text-white'
                      }`}
                    >
                      <span className="flex items-center gap-3 lg:gap-1 xl:gap-3">
                        <FaNotesMedical className="text-PrimaryColor-0 transition-all duration-500 group-hover:text-white" />
                        Medical Record
                      </span>
                      <FaArrowRight className="text-PrimaryColor-0 transition-all duration-500 group-hover:text-white" />
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => handleTabClick('operations', 'Operations', operationsRef)}
                      className={`w-full font-AlbertSans text-left text-HeadingColor-0 transition-all duration-500 group px-7 py-4 flex items-center justify-between rounded-md bg-white bg-opacity-30 border-2 border-white border-opacity-80 mb-3 overflow-hidden ${
                        activeTab === 'operations' ? 'bg-blue-600 text-white' : 'hover:bg-PrimaryColor-0 hover:text-white'
                      }`}
                    >
                      <span className="flex items-center gap-3 lg:gap-1 xl:gap-3">
                        <FaWrench className="text-PrimaryColor-0 transition-all duration-500 group-hover:text-white" /> {/* Icône modifiée */}
                        Operations
                      </span>
                      <FaArrowRight className="text-PrimaryColor-0 transition-all duration-500 group-hover:text-white" />
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => handleTabClick('testResult', 'Test Result', testResultRef)}
                      className={`w-full font-AlbertSans text-left text-HeadingColor-0 transition-all duration-500 group px-7 py-4 flex items-center justify-between rounded-md bg-white bg-opacity-30 border-2 border-white border-opacity-80 mb-3 overflow-hidden ${
                        activeTab === 'testResult' ? 'bg-blue-600 text-white' : 'hover:bg-PrimaryColor-0 hover:text-white'
                      }`}
                    >
                      <span className="flex items-center gap-3 lg:gap-1 xl:gap-3">
                        <FaFlask className="text-PrimaryColor-0 transition-all duration-500 group-hover:text-white" /> {/* Icône modifiée */}
                        Test Result
                      </span>
                      <FaArrowRight className="text-PrimaryColor-0 transition-all duration-500 group-hover:text-white" />
                    </button>
                  </li>

                </ul>
              </div>
            </div>

            {/* Section correspondant à l'onglet sélectionné */}
            <div className="col-span-3 lg:col-span-2">
              <div className="rounded-2xl px-7 pt-7 pb-6 overflow-hidden bg-white bg-opacity-30 border-2 border-white border-opacity-80 mb-7">
                <div ref={generalRef} id="general" className={`tab-section ${activeTab === 'general' ? 'block' : 'hidden'}`}>
                  <h4 className="font-AlbertSans font-semibold text-2xl text-HeadingColor-0 pb-2 mb-8 relative before:absolute before:bottom-0 before:left-0 before:w-7 before:h-[2px] before:bg-PrimaryColor-0">
                    General
                  </h4> {/* Contenu pour l'onglet General */}
                  <form
                action="#"
                method="post"
                className="flex flex-col gap-y-8 w-full max-w-4xl mx-auto"
                onSubmit={handleSubmit(handleUpdateProfile)}
              >
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                   <div className="relative w-full">
                    <input
                      type="text"
                      name="FirstName"
                      id="firstName"
                      placeholder="Enter First Name*"
                      required
                      value={firstName}  // Utilisation de la donnée de l'état
                      onChange={(e) => setFirstName(e.target.value)} // Mise à jour de l'état
                      className="font-AlbertSans text-HeadingColor-0 placeholder:text-HeadingColor-0 font-light bg-transparent border border-Secondarycolor-0 border-opacity-45 rounded-xl py-5 px-6 h-[70px] w-full focus:outline-PrimaryColor-0 text-lg"
                      {...register("firstName")}
                    />
                    {errors.firstName && (
                      <span className="text-red-500 text-sm">{errors.firstName.message}</span>
                    )}
                    <FaUser
                      size="20"
                      className="absolute text-PrimaryColor-0 top-1/2 -translate-y-1/2 right-5"
                    />
                  </div>

                
                  <div className="relative w-full">
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    placeholder="Enter Last Name*"
                    required
                    value={lastName}  // Utilisation de la donnée de l'état
                    onChange={(e) => setLastName(e.target.value)} // Mise à jour de l'état
              
                    className="font-AlbertSans text-HeadingColor-0 placeholder:text-HeadingColor-0 font-light bg-transparent border border-Secondarycolor-0 border-opacity-45 rounded-xl py-5 px-6 h-[70px] w-full focus:outline-PrimaryColor-0 text-lg"
                    {...register("lastName")}
                  />
                  {errors.lastName && (
                    <span className="text-red-500 text-sm">{errors.lastName.message}</span>
                  )}
                  <FaUser
                    size="20"
                    className="absolute text-PrimaryColor-0 top-1/2 -translate-y-1/2 right-5"
                  />
                </div>


                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative w-full">
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="Enter Phone Number*"
                  required
                  value={phone}  // Utilisation de la donnée de l'état
                  onChange={(e) => setPhone(e.target.value)} // Mise à jour de l'état
                  className="font-AlbertSans text-HeadingColor-0 placeholder:text-HeadingColor-0 font-light bg-transparent border border-Secondarycolor-0 border-opacity-45 rounded-xl py-5 px-6 h-[70px] w-full focus:outline-PrimaryColor-0 text-lg"
                  {...register("phone")}
                />
                {errors.phone && (
                  <span className="text-red-500 text-sm">{errors.phone.message}</span>
                )}
              </div>
              <div className="relative w-full">
                <input
                  type="text"
                  name="age"
                  id="age"
                  placeholder="Enter Age*"
                  required
                  value={age}  // Utilisation de la donnée de l'état
                  onChange={(e) => setAge(e.target.value)} // Mise à jour de l'état
                  className="font-AlbertSans text-HeadingColor-0 placeholder:text-HeadingColor-0 font-light bg-transparent border border-Secondarycolor-0 border-opacity-45 rounded-xl py-5 px-6 h-[70px] w-full focus:outline-PrimaryColor-0 text-lg"
                  {...register("age")}
                />
                {errors.age && (
                  <span className="text-red-500 text-sm">{errors.age.message}</span>
                )}
              </div>
            </div>

                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="relative w-full">
                  <select
                    name="sex"
                    id="sex"
                    required
                    value={sex}
                    onChange={(e) => {
                      setSex(e.target.value);          // Met à jour l'état local
                      setValue("sex", e.target.value); // Met à jour le form (React Hook Form)
                    }}
                    className="font-AlbertSans text-HeadingColor-0 font-light bg-transparent border border-Secondarycolor-0 border-opacity-45 rounded-xl py-5 px-6 h-[70px] w-full focus:outline-PrimaryColor-0 text-lg"
                    {...register("sex")}
                  >
                    <option value="">Select Gender*</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>

                    <error>{errors.sex?.message}</error>
                    <FaGenderless
                      size="20"
                      className="absolute text-PrimaryColor-0 top-1/2 -translate-y-1/2 right-5"
                    />
                  </div>

                   <div className="relative w-full">
                    <input
                      type="text"
                      name="address"
                      id="address"
                      placeholder="Enter Address*"
                      required
                      value={address}  // Utilisation de la donnée de l'état
                      onChange={(e) => setAddress(e.target.value)} // Mise à jour de l'état
                      className="font-AlbertSans text-HeadingColor-0 placeholder:text-HeadingColor-0 font-light bg-transparent border border-Secondarycolor-0 border-opacity-45 rounded-xl py-5 px-6 h-[70px] w-full focus:outline-PrimaryColor-0 text-lg"
                      {...register("address")}
                    />
                    {errors.address && (
                      <span className="text-red-500 text-sm">{errors.address.message}</span>
                    )}
                  </div>
              
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 
               
                </div>
                 <div className="flex justify-end mt-8">
                <button
                  type="submit"
                  className="primary-btn flex items-center gap-3 text-lg py-4 px-8 rounded-full bg-PrimaryColor-0 hover:bg-PrimaryColor-100 transition-all text-white"
                >
                  Register
                  <GoArrowRight size="24" className="-rotate-45" />
                </button>
              </div>

                 </form>
                  <div>
            
              </div>
                </div>


                <div ref={consultationsRef} id="consultations" className={`tab-section ${activeTab === 'consultations' ? 'block' : 'hidden'}`}>
                <h4 className="font-AlbertSans font-semibold text-2xl text-HeadingColor-0 pb-2 mb-8 relative before:absolute before:bottom-0 before:left-0 before:w-7 before:h-[2px] before:bg-PrimaryColor-0">
                   Consultations 
                 {/* Contenu pour l'onglet Consultations */}
                 </h4>
                </div>
                <div
  ref={medicalRecordRef}
  id="medicalRecord"
  className={`tab-section ${activeTab === 'medicalRecord' ? 'block' : 'hidden'}`}
>
  <h4 className="font-AlbertSans font-semibold text-2xl text-HeadingColor-0 pb-2 mb-8 relative before:absolute before:bottom-0 before:left-0 before:w-7 before:h-[2px] before:bg-PrimaryColor-0">
    🩺 Medical Record
  </h4>

  {medicalRecord ? (
    <div className="bg-blue-300 bg-opacity-20 rounded-lg p-6 shadow-md">

      {/* Diagnosis */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold text-gray-700 mb-2">Diagnosis</h3>
        <p><span className="font-medium">Condition:</span> {medicalRecord.diagnostic?.condition || '—'}</p>
        <p><span className="font-medium">Symptoms:</span> {medicalRecord.diagnostic?.symptoms?.join(', ') || '—'}</p>
        <p><span className="font-medium">Severity:</span> {medicalRecord.diagnostic?.severity || '—'}</p>
        <p><span className="font-medium">Notes:</span> {medicalRecord.diagnostic?.notes || '—'}</p>
      </section>

      {/* Treatment */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold text-gray-700 mb-2">Treatment</h3>
        <div className="mb-4">
          <h4 className="font-medium text-gray-600">Medications:</h4>
          {medicalRecord.treatment?.medications?.length ? (
            <ul className="list-disc list-inside">
              {medicalRecord.treatment.medications.map((med, index) => (
                <li key={index}>
                  {med.name || 'N/A'} - {med.dosage || 'N/A'}, {med.frequency || 'N/A'}, {med.duration || 'N/A'}
                  {med.notes && ` (${med.notes})`}
                </li>
              ))}
            </ul>
          ) : <p>—</p>}
        </div>
        <div className="mb-4">
          <h4 className="font-medium text-gray-600">Procedures:</h4>
          <p>{medicalRecord.treatment?.procedures?.name || '—'} - {medicalRecord.treatment?.procedures?.duration || '—'}</p>
        </div>
        <div>
          <h4 className="font-medium text-gray-600">Lifestyle Recommendations:</h4>
          {medicalRecord.treatment?.lifestyleRecommendations?.length ? (
            <ul className="list-disc list-inside">
              {medicalRecord.treatment.lifestyleRecommendations.map((rec, i) => <li key={i}>{rec}</li>)}
            </ul>
          ) : <p>—</p>}
        </div>
      </section>

      {/* Additional Information */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold text-gray-700 mb-2">Additional Information</h3>
        <p><span className="font-medium">Allergies:</span> {medicalRecord.allergies?.join(', ') || '—'}</p>
        <p><span className="font-medium">Blood Group:</span> {medicalRecord.bloodGroup || '—'}</p>
        <div className="mt-2">
          <h4 className="font-medium text-gray-600">Test Results:</h4>
          <p><span className="font-medium">Chest X-Ray:</span> {medicalRecord.testResults?.chestXray || '—'}</p>
          <p><span className="font-medium">Blood Test:</span> {medicalRecord.testResults?.bloodTest || '—'}</p>
          <p><span className="font-medium">Oxygen Saturation:</span> {medicalRecord.testResults?.oxygenSaturation || '—'}</p>
        </div>
      </section>

      {/* Medical History */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold text-gray-700 mb-2">Medical History</h3>
        {medicalRecord.MedicalHistory?.length ? (
          <ul className="list-disc list-inside">
            {medicalRecord.MedicalHistory.map((history, index) => <li key={index}>{history}</li>)}
          </ul>
        ) : <p>—</p>}
      </section>

      {/* Patient Files */}
      <section>
        <h3 className="text-xl font-semibold text-gray-700 mb-2">Patient Files</h3>
        {medicalRecord.patientFiles?.length ? (
          <ul className="list-disc list-inside">
            {medicalRecord.patientFiles.map((file, index) => (
              <li key={index} className="mb-2">
                <p><span className="font-medium">Reference:</span> {file.reference || '—'}</p>
                <p><span className="font-medium">Issued Date:</span> {file.dateIssued ? new Date(file.dateIssued).toLocaleDateString() : '—'}</p>
                <p><span className="font-medium">Description:</span> {file.description || '—'}</p>
                <p><span className="font-medium">Symptoms:</span> {file.symptoms || '—'}</p>
                <p><span className="font-medium">Emergency Level:</span> {file.emergencyLevel || '—'}</p>
              </li>
            ))}
          </ul>
        ) : <p>—</p>}
      </section>
    </div>
  ) : (
    <p className="text-gray-600 italic">Loading medical record...</p>
  )}
</div>

                <div ref={operationsRef} id="operations" className={`tab-section ${activeTab === 'operations' ? 'block' : 'hidden'}`}>
                  <h4 className="font-AlbertSans font-semibold text-2xl text-HeadingColor-0 pb-2 mb-8 relative before:absolute before:bottom-0 before:left-0 before:w-7 before:h-[2px] before:bg-PrimaryColor-0">
                  Operations
                  {/* Contenu pour l'onglet Operations */}
                 </h4>
                </div>

                <div ref={testResultRef} id="testResult" className={`tab-section ${activeTab === 'testResult' ? 'block' : 'hidden'}`}>
                <h4 className="font-AlbertSans font-semibold text-2xl text-HeadingColor-0 pb-2 mb-8 relative before:absolute before:bottom-0 before:left-0 before:w-7 before:h-[2px] before:bg-PrimaryColor-0">
                Test Result
                  {/* Contenu pour l'onglet Test Result */}
                  </h4>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProfileSettings;
