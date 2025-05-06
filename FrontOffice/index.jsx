// styled components
import { Actions, Header, Input, Label, Search } from './style';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify'; // Importer le toast

// components
import Logo from 'UI/Logo';
import MenuButton from 'UI/MenuButton';
import ShapeButton from 'UI/ShapeButton';
import { motion } from 'framer-motion';
import CurrentUser from 'layout/Panel/CurrentUser';

// hooks
import useWindowSize from 'hooks/useWindowSize';
import usePanelScroll from 'hooks/usePanelScroll';
import { useSidebarContext } from 'contexts/sidebarContext';
import { useRef, useEffect, useState } from 'react';

// socket
import socket from 'socket';

const Panel = () => {
    const { width } = useWindowSize();
    const isMobile = width < 768;
    const isDesktop = width >= 1366;
    const classname = usePanelScroll();
    const { isSidebarOpen } = useSidebarContext();
    const headerRef = useRef(null);

    // 👇 Notification state
    const [showNotificationBox, setShowNotificationBox] = useState(false);
    const notificationRef = useRef(null);

    useEffect(() => {
        document.documentElement.style.setProperty('--header-height', `${headerRef.current.offsetHeight}px`);
    }, [width]);

    useEffect(() => {
        socket.on('connect', () => {
            console.log('✅ Connecté à Socket.IO');
        });

        socket.on('new_patient_file', (data) => {
            console.log('📥 Nouveau dossier patient reçu:', data);
            toast.success(`Nouveau dossier patient : ${data.message}`); // Utilisation de toast
        });

        return () => {
            socket.off('new_patient_file');
            socket.off('connect');
        };
    }, []);

    // Fermer la boîte si on clique en dehors
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (notificationRef.current && !notificationRef.current.contains(event.target)) {
                setShowNotificationBox(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <>
            <Header
                as={motion.header}
                animate={{ y: isSidebarOpen && isMobile ? '-100%' : 0 }}
                transition={{ duration: .3, ease: 'linear', type: 'tween' }}
                className={classname}
                ref={headerRef}
                style={{ position: 'relative' }} // important pour positionner la boîte de notification
            >
                {!isDesktop && (
                    <div className="logo-wrapper">
                        <Logo compact={isMobile} />
                    </div>
                )}

                <Search>
                    <Input
                        type="search"
                        id="globalSearch"
                        placeholder={width < 414 ? 'Search' : 'Search patients or doctors'}
                    />
                    <Label htmlFor="globalSearch">
                        <i className="icon icon-search"></i>
                    </Label>
                </Search>

                {isMobile ? (
                    <MenuButton />
                ) : (
                    <Actions style={{ position: 'relative' }}>
                        <ShapeButton
                            shape="square"
                            label="Notification"
                            icon="bell"
                            onClick={() => {
                                setShowNotificationBox(!showNotificationBox);
                            }}
                        />
                        {isDesktop ? <CurrentUser /> : <ShapeButton shape="square" label="Profile" icon="user" />}
                        {width < 1366 && <MenuButton />}
                        
                        {/* Notification box affichée ici */}
                        {showNotificationBox && (
                            <div
                                ref={notificationRef}
                                style={{
                                    position: 'absolute',
                                    top: '50px',
                                    right: '60px',
                                    background: 'white',
                                    border: '1px solid #ccc',
                                    borderRadius: '8px',
                                    padding: '10px 15px',
                                    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
                                    zIndex: 9999,
                                    minWidth: '250px'
                                }}
                            >
                                <p style={{ margin: 0, fontWeight: 'bold' }}>🔔 Notification</p>
                                {/* Afficher un message par défaut si aucune notification */}
                                <p style={{ marginTop: '5px' }}>Aucune notification.</p>
                            </div>
                        )}
                    </Actions>
                )}
            </Header>
            <ToastContainer /> {/* Ajouter le ToastContainer ici */}
        </>
    );
};

export default Panel;