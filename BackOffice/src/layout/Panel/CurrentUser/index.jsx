import { useDispatch, useSelector } from 'react-redux';
// utils
import { ClickAwayListener } from '@mui/base/ClickAwayListener';
import { useState } from 'react';
import { logout } from '../../../slices/authSlice';
// assets
import { Menu, UserWrapper, PopupOverlay, PopupContent } from '../style';
import Avatar from '@ui/Avatar';

import doc1jpg from '@assets/avatars/doc1.jpg';
import doc1webp from '@assets/avatars/doc1.jpg?as=webp';
import * as z from "zod";

import {
  GlobalStyles, Input, Form, ButtonContainer, ProgressBar, NavButton, NextButton, SubmitButton, Line,
  ModalContent, ModalOverlay, CloseButton, Error, Title, StepContainer, Step, InputRow, Select, FormTitle
} from "../../../styles/PopUpAddPatient";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const CurrentUser = () => {
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [formData, setFormData] = useState({
        firstName: "Sallie",
        lastName: "McBride",
        position: "Surgeon",
    });

    // Retrieve user from Redux
    const user = useSelector((state) => state.auth.user?.user1);
    console.log("🔍 Données de l'utilisateur :", user);

    const patientSchema = z.object({
        firstName: z.string().min(2, { message: "First Name is required (min 2 caractères)" }),
        lastName: z.string().min(2, { message: "Last Name is required (min 2 caractères)" }),
        email: z.string().email({ message: "Invalid email format" }),
        badgeNumber: z.string().min(2, { message: "badgeNumber is required (min 2 caractères)" }),
        departement: z.string().min(2, { message: "departement is required (min 2 caractères)" }),
    });

    const { register } = useForm({
        resolver: zodResolver(patientSchema),
    });

    const handleClickAway = () => setOpen(false);
    const handleClick = () => setOpen(!open);
    const handleLogout = () => dispatch(logout());

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleUpdateProfile = (e) => {
        e.preventDefault();
        console.log("Profil mis à jour :", formData);
        setShowPopup(false);
    };

    const src = { jpg: doc1jpg, webp: doc1webp };

    return (
        <>
            <ClickAwayListener onClickAway={handleClickAway}>
                <UserWrapper>
                    <Avatar avatar={src} alt="avatar" />
                    <div className="info">
                        <span className="h3">{user?.name || `${formData.firstName} ${formData.lastName}`}</span>
                        <span className="position">{user?.role || formData.position}</span>
                        <Menu className={open ? 'visible' : ''}>
                            <button onClick={() => setShowPopup(true)}>
                                <i className="icon icon-circle-user" /> Change user
                            </button>
                            <button onClick={handleLogout}>
                                <i className="icon icon-logout" /> Logout
                            </button>
                        </Menu>
                    </div>
                    <button className="trigger" onClick={handleClick} aria-label="Show menu">
                        <i className="icon icon-chevron-down" />
                    </button>
                </UserWrapper>
            </ClickAwayListener>

            {/* Popup de mise à jour du profil */}
            {showPopup && (
                <PopupOverlay>
                    <PopupContent style={{ width: "33%" }}>
                        <button onClick={() => setShowPopup(false)}>X</button>
                        <h2>Update Profile</h2>

                        <Form>
                            <FormTitle>User Information</FormTitle>
                            <InputRow>
                                <div>
                                    <Input type="text" {...register("firstName")} placeholder="First Name" />
                                </div>
                                <div>
                                    <Input type="text" {...register("lastName")} placeholder="Last Name" />
                                </div>
                            </InputRow>
                            <div style={{ marginTop: "11px" }}>
                                <SubmitButton type="submit">Submit</SubmitButton>
                            </div>
                        </Form>
                    </PopupContent>
                </PopupOverlay>
            )}
        </>
    );
};

export default CurrentUser;
