import { FaUser } from 'react-icons/fa6';
import { GoArrowRight, GoMail } from 'react-icons/go';
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import axios from "axios";
import Heart from '/images/banner-heart.png';
import Toast from 'react-bootstrap/Toast';
import { Snackbar, Alert } from "@mui/material";

const Appoinment = () => {
    const user = useSelector(state => state.auth.user.user1.id);
    const [user1, setUser1] = useState({});
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [picture, setPicture] = useState(null);
    // eslint-disable-next-line no-unused-vars
    const [loading, setLoading] = useState(false);
    const [err, setErr] = useState("");
    const [success, setSuccess] = useState("");
    useEffect(() => {
        const fetchUser = async () => {
         
            setLoading(true);
            try {
                const response = await fetch(`http://localhost:5000/users/getprofile/${user}`);
                if (!response.ok) {
                    throw new Error("Erreur lors du chargement des données");
                }
                const data = await response.json();
                setUser1(data);
                setFirstName(data.firstName || "");
                setLastName(data.lastName || "");
                setEmail(data.email || "");
            } catch (error) {
                console.error("Erreur lors du chargement des données", error);
            } finally {
                setLoading(false);
            }
        };
        fetchUser();
    }, [user]);
  const [shows, setShows] = useState(false);

    const handleFileChange = (e) => {
        setPicture(e.target.files[0]);
    };
    console.log("aa",user1)
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
console.log("zz")
        const formData = new FormData();
        formData.append("firstName", firstName);
        formData.append("lastName", lastName);
        formData.append("email", email);

        if (picture) {
            formData.append("picture", picture);
        }
        console.log(picture)
        console.log("picture",picture)

        try {
            await axios.put(
                `http://localhost:5000/users/editprofile/${user}`,
                formData,
                { headers: { "Content-Type": "multipart/form-data" } }
            );
         //   window.location.reload().
         console.log(formData)

         setTimeout(() => {         setSuccess("profile updated");
         }, 500)
        } catch (error) {
            console.error("Erreur lors de la mise à jour :", error);
        }
    };

    return (
        <section className='px-5 2xl:px-20 bg-BodyBg-0 pt-[40px] relative z-10 overflow-hidden'>
        <Toast
  onClose={() => setShows(false)}
  show={shows}
  delay={500}
  autohide
  className="position-absolute top-0 start-50 translate-middle-x bg-success text-white"
>
  <Toast.Header>
    <strong className="me-auto">Bootstrap</strong>
  </Toast.Header>
  <Toast.Body>Woohoo,re reading this text in a Toast!</Toast.Body>
</Toast>
           <div
        className='text-center mb-12'
        data-aos='fade-up'
        data-aos-duration='1000'
      >
        <h1 className='font-AlbertSans font-bold uppercase text-HeadingColor-0 text-xl leading-[30px] sm:text-3xl sm:leading-[40px] md:text-[40px] md:leading-[50px] lg:text-[50px] lg:leading-[60px] xl:text-[52px] xl:leading-[62px] 2xl:text-[60px] 2xl:leading-[70px]'>
         Update Profile
        </h1>
        

      </div>
            <div className='bg-cover bg-no-repeat bg-center grid grid-cols-1 lg:grid-cols-2 pt-[110px] pb-[118px]'>
                <div className='flex flex-col justify-center items-center'>
                    {picture ? (
                        <img src={URL.createObjectURL(picture)} alt="Aperçu" className="w-60 h-60 object-cover rounded-md" />
                    ) : (
                        user1.picture && <img src={user1.picture} alt="Profil" className="w-60 h-60 object-cover rounded-md" />
                    )}
                    <input type="file" onChange={handleFileChange} className="border p-2 rounded" />
                </div>   
                <div className='pr-5 pl-5'> <div className='absolute -top-2 -left-[190px] xl:-left-40 2xl:-left-40'>
            <img
              src={Heart}
              draggable='false'
              className='animate-rotateX'
            />
          </div>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-y-4 mt-2">
                        <div className="relative w-full">
                            <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required className="border rounded-xl py-2 px-6 w-full" />
                            <FaUser className="absolute top-1/2 right-5" />
                        </div>
                        <div className="relative w-full">
                            <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required className="border rounded-xl py-2 px-6 w-full" />
                            <FaUser className="absolute top-1/2 right-5" />
                        </div>
                        <div className="relative w-full">
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="border rounded-xl py-2 px-6 w-full" />
                            <GoMail className="absolute top-1/2 right-5" />
                        </div>
                        <div className="flex justify-center mt-4">
  <button type="submit" className="primary-btn flex items-center gap-2">
    Update <GoArrowRight size="22" className="-rotate-45" />
  </button>
</div>                    </form>
                </div>
            </div>
            <Snackbar
        autoHideDuration={2500}
        open={err === "" ? false : true}
        onClose={() => {
          setErr("");
        }}
      >
        <Alert
          variant="filled"
          severity="error"
          onClose={() => {
            setErr("");
          }}
        >
          {err}
        </Alert>
      </Snackbar>
      <Snackbar
        autoHideDuration={2500}
        open={success === "" ? false : true}
        onClose={() => {
          setSuccess("");
        }}
      >
        <Alert
          variant="filled"
          severity="success"
          onClose={() => {
            setSuccess("");
          }}
        >
          {success}
        </Alert>
      </Snackbar>
        </section>
    );
};

export default Appoinment;