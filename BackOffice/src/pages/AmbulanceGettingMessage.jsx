import React, { useState, useEffect } from 'react'; // Ajoutez useEffect ici

// composants
import Page from 'layout/Page';
import UserList from 'components/Messenger/UsersList';
import ModalWindow from 'components/ModalWindow';
import Tab from 'react-bootstrap/Tab';
import Messenger from 'components/Messenger';
import io from 'socket.io-client';


function AmbulanceGettingMessage() {
    const [selectedTab, setSelectedTab] = useState('');
    const [openModal, setOpenModal] = useState(false);
    const [ambulanceMessage, setAmbulanceMessage] = useState(''); // Définir l'état pour le message
    const [message, setMessage] = useState('');
    const [receivedMessage, setReceivedMessage] = useState('');
    const smallScreen = window.matchMedia('(max-width: 1038.98px)').matches;
    const socket = io('http://localhost:5000');  // Créez la connexion socket

    const sendMessage = () => {
        socket.emit('send_message', { message });
      };
    
      useEffect(() => {
        socket.on('receive_message', (data) => {
          setReceivedMessage(data.message);
        });
      }, []);
    useEffect(() => {

        // Ecouter les messages de réponse du serveur
        socket.on('ambulance-response', (message) => {
            console.log('Message from ambulance service:', message);
            // Mettez à jour l'état local pour afficher ce message dans l'interface utilisateur
            setAmbulanceMessage(message);
        });

        // Cleanup (arrêter d'écouter lors du démontage du composant)
        return () => {
            socket.off('ambulance-response');
            socket.disconnect(); // Déconnecter le socket lorsque le composant est démonté
        };
    }, [socket]);

    const handleModalClose = () => {
        setOpenModal(false);
        setSelectedTab('');
    };

    window.addEventListener('resize', () => {
        if (smallScreen) {
            handleModalClose();
        }
    });

    return (
        <Tab.Container transition={true} activeKey={selectedTab} onSelect={setSelectedTab}>
            <Page title="Messages">
            <div className="App">
      <h2>Frontend App 2</h2>
      <input
        type="text"
        placeholder="Message"
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={sendMessage}>Send</button>
      <p>Received: {receivedMessage}</p>
    </div>
                <div key="contacts-list">
                    <UserList variant="patient" user={selectedTab} onUserSelect={setSelectedTab} setModal={setOpenModal} />
                </div>
                <div key="messenger">
                    {
                        smallScreen ?
                            <ModalWindow isVisible={openModal} visibilityHandler={handleModalClose}>
                                <Messenger variant="patient" user={selectedTab}/>
                            </ModalWindow>
                            :
                            <Messenger variant="patient" user={selectedTab}/>
                    }
                </div>

                {/* Afficher le message reçu */}
                {ambulanceMessage && <div className="ambulance-message">{ambulanceMessage}</div>}
            </Page>
        </Tab.Container>
    );
}

export default AmbulanceGettingMessage;
