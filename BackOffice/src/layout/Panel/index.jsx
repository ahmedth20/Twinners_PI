import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import io from "socket.io-client";
import { motion } from "framer-motion";
import { Actions, Header, Input, Label, Search } from "./style";
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';

// Components
import Logo from "UI/Logo";
import MenuButton from "UI/MenuButton";
import ShapeButton from "UI/ShapeButton";
import CurrentUser from "layout/Panel/CurrentUser";

// Hooks
import useWindowSize from "hooks/useWindowSize";
import usePanelScroll from "hooks/usePanelScroll";
import { useSidebarContext } from "contexts/sidebarContext";

const socket = io('http://localhost:5000');

const Panel = () => {
  const { width } = useWindowSize();
  const isMobile = width < 768;
  const isDesktop = width >= 1366;
  const classname = usePanelScroll();
  const { isSidebarOpen } = useSidebarContext();
  const headerRef = useRef(null);
  const notificationRef = useRef(null);
  const navigate = useNavigate();

  const [showNotificationBox, setShowNotificationBox] = useState(false);
  const [notification, setNotification] = useState(null);

  // Header height for CSS variable
  useEffect(() => {
    if (headerRef.current) {
      document.documentElement.style.setProperty('--header-height', `${headerRef.current.offsetHeight}px`);
    }
  }, [width]);

  // Charger notification depuis localStorage au démarrage
  useEffect(() => {
    const storedNotification = localStorage.getItem('notification');
    if (storedNotification) {
      setNotification(JSON.parse(storedNotification));
    }
  }, []);

  // Écoute les notifications reçues via socket.io
  useEffect(() => {
    socket.on('connect', () => {
      console.log('Connected to server');
    });

    socket.on('notif', (consultationData) => {
      console.log('Notification reçue:', consultationData);
      setNotification(consultationData);
      localStorage.setItem('notification', JSON.stringify(consultationData));

      // Toast cliquable
      toast.info(
       // <div onClick={() => navigate(`/medical_form/${consultationData.id}`)} style={{ cursor: 'pointer' }}>
        <div onClick={() => navigate(`/medical_form_updateNotif/${consultationData.id}`)} style={{ cursor: 'pointer' }}>
          Nouvelle consultation : {consultationData.Description}
        </div>,
        {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        }
      );
    });

    return () => {
      socket.off('notif');
    };
  }, [navigate]);

  // Fermer la notification en cliquant à l’extérieur
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

  // Marquer comme lue
  const clearNotification = () => {
    setNotification(null);
    localStorage.removeItem('notification');
  };

  return (
    <Header
      as={motion.header}
      animate={{ y: isSidebarOpen && isMobile ? '-100%' : 0 }}
      transition={{ duration: 0.3, ease: 'linear', type: 'tween' }}
      className={classname}
      ref={headerRef}
      style={{ position: 'relative' }}
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
            onClick={() => setShowNotificationBox(!showNotificationBox)}
          />
          {isDesktop ? <CurrentUser /> : <ShapeButton shape="square" label="Profile" icon="user" />}
          {width < 1366 && <MenuButton />}

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
              <div>
                <h2>Consultation Notification</h2>
                {notification ? (
                  <>
                    <div
                      onClick={() => navigate(`/medical_form_updateNotif/${notification.id}`)}
                      style={{
                        cursor: 'pointer',
                        padding: '10px',
                        borderRadius: '5px',
                        backgroundColor: '#f5f5f5',
                      }}
                    >
                      <h3>Nouvelle Consultation</h3>
                      <p><strong>Patient vous à envoyé un fichier</strong> {notification.Description}</p>
                      <p><strong>reference :</strong> {notification.reference}</p>
                      <p><strong>id :</strong> {notification._id}</p>
                      <p><strong>Description :</strong> {notification.Description}</p>
                      <p><strong>age :</strong> {notification.age}</p>
                      <p><strong>symptom :</strong> {notification.symptom}</p>
                      <p><strong>bloodGroup :</strong> {notification.bloodGroup}</p>


                    </div>
                    <button onClick={clearNotification} style={{ marginTop: '10px', color: 'red' }}>
                      Effacer la notification
                    </button>
                  </>
                ) : (
                  <p>Aucune nouvelle consultation.</p>
                )}
              </div>
            </div>
          )}
        </Actions>
      )}
    </Header>
  );
};

export default Panel;
