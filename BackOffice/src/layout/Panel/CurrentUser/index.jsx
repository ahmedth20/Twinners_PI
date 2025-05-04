import { Menu, UserWrapper, PopupOverlay, PopupContent } from '../style';
import { useDispatch } from 'react-redux';
import { ClickAwayListener } from '@mui/base/ClickAwayListener';
import { useState, useEffect } from 'react';
import { logout } from '../../../slices/authSlice';
import doc1jpg from 'assets/avatars/doc1.jpg';
import { useSelector } from "react-redux";
import axios from "axios";
import {
  Input, Form, SubmitButton, Error, InputRow, FormTitle
} from "../../../styles/PopUpAddPatient";
import { Snackbar, Alert } from "@mui/material";
import { useNavigate } from "react-router-dom"; // 👈 import
const CurrentUser = () => {
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [user1, setUser1] = useState({});
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");   
    const [email, setEmail] = useState("");
    const [picture, setPicture] = useState(null);
   const [,setLoading] = useState(false);
   const navigate = useNavigate();
   
   const handleLogout = () => {
    dispatch(logout());
    navigate("/"); // 👈 redirection vers la home
};

    const user = useSelector((state) => state.auth?.user?.user?.id);

    useEffect(() => {
        const fetchUser = async () => {
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
                setPicture(data.picture || null);
            } catch (error) {
                console.error("Erreur lors du chargement des données", error);
            } 
        };
        fetchUser();
    }, [user]);

    const handleFileChange = (e) => {
        setPicture(e.target.files[0]);
    };
    const [err, setErr] = useState("");
    const [success, setSuccess] = useState("");
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
            await axios.put(`http://localhost:5000/users/editprofile/${user}`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    "X-Requested-With": "XMLHttpRequest",
                },
            });
            setSuccess("profile updated");
            setTimeout(() => {    window.location.reload() 
            }, 500)
        } catch (error) {
            console.error("Erreur lors de la mise à jour :", error);
            alert("Une erreur s'est produite lors de la mise à jour.");
        }
        setLoading(false);
    };

    return (
        <>
            <ClickAwayListener onClickAway={() => setOpen(false)}>
                <UserWrapper>
                    <img
                        src={user1.picture || doc1jpg}
                        alt="User Avatar"
                        style={{
                            width: "50px",
                            height: "50px",
                            borderRadius: "50%",
                            objectFit: "cover",
                            border: "2px solid #ccc",
                        }}
                    />
                    <div className="info">
                        <span className="h3">{user1.firstName} {user1.lastName}</span>
                        <span className="position">{user1.role}</span>
                        <Menu className={open ? 'visible' : ''}>
                            <button onClick={() => setShowPopup(true)}>
                                <i className="icon icon-circle-user" /> Update profile
                            </button>
                            <button onClick={handleLogout}>
                                <i className="icon icon-logout" /> Logout
                            </button>
                        </Menu>
                    </div>
                    <button className="trigger" onClick={() => setOpen(!open)} aria-label="Show menu">
                        <i className="icon icon-chevron-down" />
                    </button>
                </UserWrapper>
            </ClickAwayListener>

            {showPopup && (
                <PopupOverlay>
                    <PopupContent style={{ width: "33%" }}>
                        <button onClick={() => setShowPopup(false)}>X</button>
                        <Form onSubmit={handleSubmit}>
                            <FormTitle>Update Profile</FormTitle>
                            <InputRow style={{ width: '100%' }}>
                                <div className="w-full">
                                    {picture && (
                                        <div className="mt-1">
                                            <img
                                                src={typeof picture === 'string' ? picture : URL.createObjectURL(picture)}
                                                alt="Aperçu"
                                                className="w-10 h-10 object-cover rounded-md"
                                            />
                                        </div>
                                    )}
                                    <Input
                                        type="file"
                                        name="image"
                                        onChange={handleFileChange}
                                        className="border p-2 rounded w-full"
                                    />
                                </div>
                            </InputRow>
                            <InputRow style={{ width: '325px' }}>
                                <div className="w-full">
                                    <Input
                                        type="text"
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                        placeholder="First Name"
                                        className="w-full border p-2 rounded"
                                    />
                                </div>
                                <div className="w-full">
                                    <Input
                                        type="text"
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                        placeholder="Last Name"
                                        className="w-full border p-2 rounded"
                                    />
                                </div>
                            </InputRow>
                            <InputRow>
                                <div className="w-full" style={{ width: '325px' }}>
                                    <Input
                                        type="text"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Email"
                                        className="w-full border p-2 rounded"
                                    />
                                </div>
                            </InputRow>
                            <div style={{ marginTop: "11px" }}>
                                <SubmitButton type="submit">Submit</SubmitButton>
                            </div>
                        </Form>
                    </PopupContent>
                </PopupOverlay>
            )}
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
        </>
    );
};

export default CurrentUser;
