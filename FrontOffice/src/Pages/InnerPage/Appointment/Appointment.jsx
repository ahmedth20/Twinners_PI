import { FaUser } from 'react-icons/fa6';
import { GoArrowRight } from 'react-icons/go';
import { HiOutlineMailOpen } from 'react-icons/hi';
import { MdCall } from 'react-icons/md';
import Heart from '/images/banner-heart.png';
import circleShape from '/images/crcle-bg.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { EffectCreative } from 'swiper/modules';
import TestimonialCard from './TestimonialCard';
import testiProfile from '/images/people.png';
import testiQuote from '/images/quote.png';
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import PatientService from '../../../services/PatientService';
import { useForm } from 'react-hook-form';
import { useSelector } from "react-redux";

const patientSchema = z.object({
  height: z.preprocess((val) => Number(val), 
  z.number()
    .min(1, { message: "Height must be at least 1" })
    .max(300, { message: "Invalid height" })  
),
weight: z.preprocess((val) => Number(val), 
  z.number()
    .min(1, { message: "Weight must be at least 1" })
    .max(500, { message: "Invalid weight" }) 
),  sex: z.enum(["Male", "Female"], { message: "Select a valid gender" }),
  age: z.preprocess((val) => Number(val), z.number().min(1, { message: "Age must be at least 1" }).max(120, { message: "Invalid age" })),
  phone: z.string().min(8, { message: "Phone number must be at least 8 digits" }),
  address: z.string().min(5, { message: "Address is required" }),
  allergies: z.string().optional(),
  medicalHistory: z.string().optional(), // Historique médical (optionnel)
  bloodGroup: z.enum(["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"], { message: "Invalid blood group" }), // Groupe sanguin
  mainSymptom: z.string().min(3, { message: "Main symptom must be at least 3 characters" }), 
});

const TestiData = [
  {
    id: 1,
    testiQuote: testiQuote,
    testiDesc: `Quickly fashion backend strategic theme areas with
                virtual growth strategies. Authoritatively
                formulate competitive experiences rather than
                granular manufactured products granular intelle
                capital without equity invested`,
    testiName: 'Jisan Khan',
    testiDesignation: 'Satisfied Patient',
    testiProfile: testiProfile,
  },
  {
    id: 2,
    testiQuote: testiQuote,
    testiDesc: `Quickly fashion backend strategic theme areas with
                virtual growth strategies. Authoritatively
                formulate competitive experiences rather than
                granular manufactured products granular intelle
                capital without equity invested`,
    testiName: 'Jisan Khan',
    testiDesignation: 'Satisfied Patient',
    testiProfile: testiProfile,
  },
];

const Appoinment = ({ id }) => {
  const settings = {
    loop: true,
    initialSlide: 1,
    autoplay: {
      delay: 3000, // Adjust the autoplay delay as needed
      disableOnInteraction: false, // Continue autoplay after interactions
    },
    effect: 'creative',
    grabCursor: true,
    creativeEffect: {
      slideShadows: false, // Disable shadows on slides
      prev: {
        shadow: true, // Enable shadow for previous slide
        translate: [0, 0, -400], // Translate properties for previous slide
      },
      next: {
        translate: ['100%', 0, 0], // Translate properties for next slide
      },
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 1,
      },
      992: {
        slidesPerView: 1,
      },
      1400: {
        slidesPerView: 1,
      },
    },
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = 
  useForm({
    resolver: zodResolver(patientSchema),
  });
  
  const user = useSelector(state => state.auth.user.user1.id); 
  

const onSubmit = async (data) => {
  try {
    console.log(data);
    const patientData = { ...data, user: user };
    await PatientService.createSimplePatientFront(patientData);
    alert("✅ Patient ajouté avec succès !");
  } catch (error) {
    alert("❌ Erreur lors de l'ajout du patient.");
  }
};

  
  
  return (
    <section  className='px-5 2xl:px-20 bg-BodyBg-0 pt-[106px] pb-[120px] relative z-10 overflow-hidden'>
      <div className='absolute -z-10 -top-1/2 left-1/2 -translate-x-1/2' id={id}>
        <img
          src={circleShape}
          draggable='false'
          className='max-w-[inherit] w-[inherit]'
        />
      </div>
      <div className='text-center mb-12'>
        <h1 className='font-AlbertSans font-bold uppercase text-HeadingColor-0 text-xl leading-[30px] sm:text-3xl sm:leading-[40px] md:text-[40px] md:leading-[50px] lg:text-[50px] lg:leading-[60px] xl:text-[52px] xl:leading-[62px] 2xl:text-[60px] 2xl:leading-[70px]'>
          Make Appointment
        </h1>
      </div>
      <div className='bg-white bg-opacity-20 border-2 border-white border-opacity-80 rounded-[30px] py-[120px]'>
        <div className='Container'>
          <div className='grid grid-cols-1 lg:grid-cols-2 lg:items-center relative z-10'>
            <div
              className='lg:mr-10 xl:mr-16 2xl:mr-[130px]'
              data-aos='fade-up'
              data-aos-duration='1000'
            >
              <Swiper
                {...settings}
                modules={[EffectCreative]}
              >
                <div>
                  {TestiData.map(
                    ({
                      id,
                      testiQuote,
                      testiName,
                      testiProfile,
                      testiDesignation,
                      testiDesc,
                    }) => {
                      return (
                        <SwiperSlide key={id}>
                          <TestimonialCard
                            testiQuote={testiQuote}
                            testiName={testiName}
                            testiDesignation={testiDesignation}
                            testiProfile={testiProfile}
                            testiDesc={testiDesc}
                          />
                        </SwiperSlide>
                      );
                    }
                  )}
                </div>
              </Swiper>
            </div>
             <div
                className="relative z-10 pt-10 lg:pt-0 w-full"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <div className="absolute -top-2 -right-[190px] xl:-right-40 2xl:-right-40">
                  <img src={Heart} draggable="false" className="animate-rotateX" />
                </div>

                <h1 className="font-AlbertSans font-bold text-HeadingColor-0 text-[16px] leading-[23px] sm:text-[22px] sm:leading-[35px] md:text-[30px] md:leading-[35px] lg:text-[28px] lg:leading-[35px] xl:text-[32px] xl:leading-[39px] 2xl:text-[32px] 2xl:leading-[39px] mb-8">
                  Make an Online Registration 
                </h1>
                <form
                action="#"
                method="post"
                className="flex flex-col gap-y-8 w-full max-w-4xl mx-auto"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="relative w-full">
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      placeholder="Enter Phone Number*"
                      required
                      className="font-AlbertSans text-HeadingColor-0 placeholder:text-HeadingColor-0 font-light bg-transparent border border-Secondarycolor-0 border-opacity-45 rounded-xl py-5 px-6 h-[70px] w-full focus:outline-PrimaryColor-0 text-lg"
                      {...register("phone")}
                   />
                  <error>{errors.phone?.message}</error>

                    <MdCall
                      size="20"
                      className="absolute text-PrimaryColor-0 top-1/2 -translate-y-1/2 right-5"
                    />
                  </div>
                  <div className="relative w-full">
                    <input
                      type="number"
                      name="age"
                      id="age"
                      placeholder="Enter Age*"
                      required
                      min="0"
                      className="font-AlbertSans text-HeadingColor-0 placeholder:text-HeadingColor-0 font-light bg-transparent border border-Secondarycolor-0 border-opacity-45 rounded-xl py-5 px-6 h-[70px] w-full focus:outline-PrimaryColor-0 text-lg"
                      {...register("age")}

                  />
                  <error>{errors.age?.message}</error>

                  </div>

                </div>

                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="relative w-full">
                    <select
                      name="sex"
                      id="sex"
                      required
                      className="font-AlbertSans text-HeadingColor-0 font-light bg-transparent border border-Secondarycolor-0 border-opacity-45 rounded-xl py-5 px-6 h-[70px] w-full focus:outline-PrimaryColor-0 text-lg"
                      {...register("sex")}

                  >
                      <option value="">Select Gender*</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                    <error>{errors.sex?.message}</error>
              
                  </div>

                  <div className="relative w-full">
                    <input
                      type="text"
                      name="address"
                      id="address"
                      placeholder="Enter Address*"
                      required
                      className="font-AlbertSans text-HeadingColor-0 placeholder:text-HeadingColor-0 font-light bg-transparent border border-Secondarycolor-0 border-opacity-45 rounded-xl py-5 px-6 h-[70px] w-full focus:outline-PrimaryColor-0 text-lg"
                      {...register("address")}
 
                 />
                      <error>{errors.address?.message}</error>

                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 
                  <div className="relative w-full">
                    <input
                      type="number"
                      name="height"
                      id="height"
                      placeholder="Enter Height (cm)*"
                      required
                      min="0"
                      className="font-AlbertSans text-HeadingColor-0 placeholder:text-HeadingColor-0 font-light bg-transparent border border-Secondarycolor-0 border-opacity-45 rounded-xl py-5 px-6 h-[70px] w-full focus:outline-PrimaryColor-0 text-lg"
                      {...register("height")}

                  />
                     <error>{errors.height?.message}</error>

                  </div>

                  <div className="relative w-full">
                    <input
                      type="number"
                      name="weight"
                      id="weight"
                      placeholder="Enter Weight (kg)*"
                      required
                      min="0"
                      className="font-AlbertSans text-HeadingColor-0 placeholder:text-HeadingColor-0 font-light bg-transparent border border-Secondarycolor-0 border-opacity-45 rounded-xl py-5 px-6 h-[70px] w-full focus:outline-PrimaryColor-0 text-lg"
                      {...register("weight")}

                    />
                       <error>{errors.weight?.message}</error>

                  </div>
                </div><div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="relative w-full">
                    <input
                      type="text"
                      name="allergies"
                      id="allergies"
                      placeholder="Allergies (if any)"
                      className="font-AlbertSans text-HeadingColor-0 placeholder:text-HeadingColor-0 font-light bg-transparent border border-Secondarycolor-0 border-opacity-45 rounded-xl py-5 px-6 h-[70px] w-full focus:outline-PrimaryColor-0 text-lg"
                      {...register("allergies")}
                    />
                    <error>{errors.allergies?.message}</error>
                  </div>

                  <div className="relative w-full">
                    <textarea
                      name="medicalHistory"
                      id="medicalHistory"
                      placeholder="Medical History (if any)"
                      rows="3"
                      className="font-AlbertSans text-HeadingColor-0 placeholder:text-HeadingColor-0 font-light bg-transparent border border-Secondarycolor-0 border-opacity-45 rounded-xl py-5 px-6 w-full focus:outline-PrimaryColor-0 text-lg resize-none"
                      {...register("medicalHistory")}
                    />
                    <error>{errors.medicalHistory?.message}</error>
                  </div>

                  </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                <div className="relative w-full">
                  <input
                    type="text"
                    name="mainSymptom"
                    id="mainSymptom"
                    placeholder="Main Symptom (e.g., Chest Pain, Breathing Difficulty)*"
                    required
                    className="font-AlbertSans text-HeadingColor-0 placeholder:text-HeadingColor-0 font-light bg-transparent border border-Secondarycolor-0 border-opacity-45 rounded-xl py-5 px-6 h-[70px] w-full focus:outline-PrimaryColor-0 text-lg"
                    {...register("mainSymptom")}
                  />
                  <error>{errors.mainSymptom?.message}</error>
                </div>

                <div className="relative w-full">
                  <select
                    name="bloodGroup"
                    id="bloodGroup"
                    required
                    className="font-AlbertSans text-HeadingColor-0 font-light bg-transparent border border-Secondarycolor-0 border-opacity-45 rounded-xl py-5 px-6 h-[70px] w-full focus:outline-PrimaryColor-0 text-lg"
                    {...register("bloodGroup")}
                  >
                    <option value="">Select Blood Group*</option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                  </select>
                  <error>{errors.bloodGroup?.message}</error>
                </div>

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

              </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Appoinment;
