import { useState ,React,useRef} from 'react';
import { FaArrowRight, FaCog, FaInfoCircle, FaStethoscope, FaNotesMedical } from 'react-icons/fa'; // Remplacer FaArrowRightLong par FaArrowRight

const ProfileSettings = () => {
    const [activeTab, setActiveTab] = useState('general'); // Onglet par défaut
   
     const handleTabClick = (tab, ref) => {
       setActiveTab(tab); // Mettre à jour l'onglet actif
       ref.current.scrollIntoView({ behavior: 'smooth' }); // Faire défiler vers la section de l'onglet sélectionné
     };
   
     // Références pour chaque section
     const generalRef = useRef(null);
     const infoRef = useRef(null);
     const consultationsRef = useRef(null);
     const medicalRecordRef = useRef(null);
   
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
                         onClick={() => handleTabClick('general', generalRef)}
                         className={`w-full font-AlbertSans text-left text-HeadingColor-0 transition-all duration-500 group px-7 py-4 flex items-center justify-between rounded-md bg-white bg-opacity-30 border-2 border-white border-opacity-80 mb-3 overflow-hidden ${
                           activeTab === 'general'
                             ? 'bg-PrimaryColor-0 text-white'
                             : 'hover:bg-PrimaryColor-0 hover:text-white'
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
                         onClick={() => handleTabClick('info', infoRef)}
                         className={`w-full font-AlbertSans text-left text-HeadingColor-0 transition-all duration-500 group px-7 py-4 flex items-center justify-between rounded-md bg-white bg-opacity-30 border-2 border-white border-opacity-80 mb-3 overflow-hidden ${
                           activeTab === 'info'
                             ? 'bg-PrimaryColor-0 text-white'
                             : 'hover:bg-PrimaryColor-0 hover:text-white'
                         }`}
                       >
                         <span className="flex items-center gap-3 lg:gap-1 xl:gap-3">
                           <FaInfoCircle className="text-PrimaryColor-0 transition-all duration-500 group-hover:text-white" />
                           Info
                         </span>
                         <FaArrowRight className="text-PrimaryColor-0 transition-all duration-500 group-hover:text-white" />
                       </button>
                     </li>
                     <li>
                       <button
                         onClick={() => handleTabClick('consultations', consultationsRef)}
                         className={`w-full font-AlbertSans text-left text-HeadingColor-0 transition-all duration-500 group px-7 py-4 flex items-center justify-between rounded-md bg-white bg-opacity-30 border-2 border-white border-opacity-80 mb-3 overflow-hidden ${
                           activeTab === 'consultations'
                             ? 'bg-PrimaryColor-0 text-white'
                             : 'hover:bg-PrimaryColor-0 hover:text-white'
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
                         onClick={() => handleTabClick('medicalRecord', medicalRecordRef)}
                         className={`w-full font-AlbertSans text-left text-HeadingColor-0 transition-all duration-500 group px-7 py-4 flex items-center justify-between rounded-md bg-white bg-opacity-30 border-2 border-white border-opacity-80 mb-3 overflow-hidden ${
                           activeTab === 'medicalRecord'
                             ? 'bg-PrimaryColor-0 text-white'
                             : 'hover:bg-PrimaryColor-0 hover:text-white'
                         }`}
                       >
                         <span className="flex items-center gap-3 lg:gap-1 xl:gap-3">
                           <FaNotesMedical className="text-PrimaryColor-0 transition-all duration-500 group-hover:text-white" />
                           Medical Record
                         </span>
                         <FaArrowRight className="text-PrimaryColor-0 transition-all duration-500 group-hover:text-white" />
                       </button>
                     </li>
                   </ul>
                 </div>
               </div>
   
               {/* Section correspondant à l'onglet sélectionné */}
               <div className="col-span-3 lg:col-span-2">
                 <div ref={generalRef} id="general" className={`tab-section ${activeTab === 'general' ? 'block' : 'hidden'}`}>
                   <h2 className="font-AlbertSans font-bold text-[28px] text-HeadingColor-0 mb-10">General</h2>
                   {/* Contenu pour l'onglet General */}
                 </div>
   
                 <div ref={infoRef} id="info" className={`tab-section ${activeTab === 'info' ? 'block' : 'hidden'}`}>
                   <h2 className="font-AlbertSans font-bold text-[28px] text-HeadingColor-0 mb-10">Info</h2>
                   {/* Contenu pour l'onglet Info */}
                 </div>
   
                 <div ref={consultationsRef} id="consultations" className={`tab-section ${activeTab === 'consultations' ? 'block' : 'hidden'}`}>
                   <h2 className="font-AlbertSans font-bold text-[28px] text-HeadingColor-0 mb-10">Consultations</h2>
                   {/* Contenu pour l'onglet Consultations */}
                 </div>
   
                 <div ref={medicalRecordRef} id="medicalRecord" className={`tab-section ${activeTab === 'medicalRecord' ? 'block' : 'hidden'}`}>
                   <h2 className="font-AlbertSans font-bold text-[28px] text-HeadingColor-0 mb-10">Medical Record</h2>
                   {/* Contenu pour l'onglet Medical Record */}
                 </div>
               </div>
             </div>
           </div>
         </section>
       </>
     );
};

export default ProfileSettings;
