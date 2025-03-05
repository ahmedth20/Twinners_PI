// styled components
import { Menu, UserWrapper } from '../style';

// components
import Avatar from '@ui/Avatar';
import { useDispatch, useSelector } from 'react-redux';
// utils
import { ClickAwayListener } from '@mui/base/ClickAwayListener';
import { useState } from 'react';
import { logout } from '../../../slices/authSlice';
// assets
import doc1jpg from '@assets/avatars/doc1.jpg';
import doc1webp from '@assets/avatars/doc1.jpg?as=webp';

const CurrentUser = () => {
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    

    // 🔹 Récupération des données de l'utilisateur depuis Redux
    const user = useSelector((state) => state.auth.user?.user1); 
console.log("🔍 Données de l'utilisateur :", user);
 

    const handleClickAway = () => setOpen(false);
    const handleClick = () => setOpen(!open);
    const handleLogout = () => {
        dispatch(logout());
    };

    const src = {
        jpg: doc1jpg,
        webp: doc1webp
    };

    return (
        <ClickAwayListener onClickAway={handleClickAway}>
            <UserWrapper>
                <Avatar avatar={src} alt="avatar" />
                <div className="info">
                    {/* 🔹 Affichage du nom uniquement */}
                    <span className="h3">{user?.name}</span>

                    <Menu className={open ? 'visible' : ''}>
                        <button>
                            <i className="icon icon-circle-user" /> Changer d'utilisateur
                        </button>
                        <button onClick={handleLogout}>
                            <i className="icon icon-logout" /> Déconnexion
                        </button>
                    </Menu>
                </div>
                <button className="trigger" onClick={handleClick} aria-label="Afficher le menu">
                    <i className="icon icon-chevron-down" />
                </button>
            </UserWrapper>
        </ClickAwayListener>
    );
};

export default CurrentUser;
