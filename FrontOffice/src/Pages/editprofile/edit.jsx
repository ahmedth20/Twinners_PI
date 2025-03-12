import { FaUser } from 'react-icons/fa6';
import { GoArrowRight } from 'react-icons/go';
import { useSelector } from "react-redux";
import { useState } from "react";
import axios from "axios";
import Heart from '/images/banner-heart.png';

const Appoinment = () => {
    const user = useSelector(state => state.auth.user.user1.id);

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);


     const handleeditp = async (e) => {
        e.preventDefault();
        
        console.log('aa')
         await fetch(`http://localhost:5000/users/editprofile/${user}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json", // ✅ Correction ici
            "X-Requested-With": "XMLHttpRequest"
          },
          credentials: "include", // ✅ Active l'envoi des cookies/sessions
          body: JSON.stringify({
            lastName:lastName, firstName:firstName

          })
        }); 
    
    
    alert("modifier avec succes")
    
      }

      const [picture, setPicture] = useState(null);

     
      const handleFileChange = (e) => {
        setPicture(e.target.files[0]); // Stocke le fichier sélectionné
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
    
        const formData = new FormData();
        formData.append("firstName", firstName);
        formData.append("lastName", lastName);
        formData.append("email", email);
        if (picture) {
          formData.append("picture", picture);
        }
    
        try {
         await axios.put(`http://localhost:5000/users/editprofile/${user}`,
            formData,
            { headers: { "Content-Type": "multipart/form-data" , "X-Requested-With": "XMLHttpRequest"
            } }
          );
        } catch (err) {   
alert("aaa")
        };
         setLoading(false);
      };

  return (
    <section className='px-5 2xl:px-20 bg-BodyBg-0 pt-[40px] relative z-10 overflow-hidden'>
      <div className='absolute -z-10 -top-1/2 left-1/2 -translate-x-1/2'>

</div>   
     
      <div
        className='text-center mb-12'
        data-aos='fade-up'
        data-aos-duration='1000'
      >
        <h1 className='font-AlbertSans font-bold uppercase text-HeadingColor-0 text-xl leading-[30px] sm:text-3xl sm:leading-[40px] md:text-[40px] md:leading-[50px] lg:text-[50px] lg:leading-[60px] xl:text-[52px] xl:leading-[62px] 2xl:text-[60px] 2xl:leading-[70px]'>
         Update Profile
        </h1>
        
<div>

<span className="icon
top-50 translate-middle-y"> </span>
<input
type="file"
name="image"
onChange={handleFileChange}
className="form-
control h-56-px bg-neutral-50
radius-12" />
</div>
      
      </div>
      <div className=' bg-cover bg-no-repeat bg-center grid grid-cols-1 lg:grid-cols-2 pt-[110px] pb-[118px] lg:border-x-2 2xl:border-x-0 border-white rounded-[30px] relative z-10'>
        <div></div>
        <div
          className='relative z-10 pr-5 2xl:pr-[130px] pl-5 lg:pl-0'
          data-aos='fade-up'
          data-aos-duration='1000'
        >
          <div className='absolute -top-2 -left-[190px] xl:-left-40 2xl:-left-40'>
            <img
              src={Heart}
              draggable='false'
              className='animate-rotateX'
            />
          </div>
         
         <form onSubmit={handleeditp} className="flex flex-col gap-y-4 mt-2"><div className="relative w-full">
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  placeholder="Enter First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                  className="font-AlbertSans text-HeadingColor-0 placeholder:text-HeadingColor-0 font-light bg-transparent border border-Secondarycolor-0 border-opacity-45 rounded-xl py-2 px-6 h-[60px] w-full focus:outline-PrimaryColor-0"
                />
                <FaUser size="14" className="absolute text-PrimaryColor-0 top-1/2 -translate-y-1/2 right-5" />
              </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Champ First Name */}
              

              {/* Champ Last Name */}
             
            </div>
<div> <div className="relative w-full">
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  placeholder="Enter Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                  className="font-AlbertSans text-HeadingColor-0 placeholder:text-HeadingColor-0 font-light bg-transparent border border-Secondarycolor-0 border-opacity-45 rounded-xl py-2 px-6 h-[60px] w-full focus:outline-PrimaryColor-0"
                />
                <FaUser size="14" className="absolute text-PrimaryColor-0 top-1/2 -translate-y-1/2 right-5" />
              </div></div>
            {/* Champ Email */}
          

            {/* Bouton Submit */}
            <div className="inline-block mt-4">
              <button type="submit" className="primary-btn flex items-center gap-2">
                Update
                <GoArrowRight size="22" className="-rotate-45" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Appoinment;
