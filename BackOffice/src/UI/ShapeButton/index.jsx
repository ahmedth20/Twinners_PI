// components
import { Badge } from '@ui/Badge/style';

// utils
import { io } from 'socket.io-client';
import PropTypes from 'prop-types';

// hooks
import { useEffect, useState } from 'react';

// styling
import styled from 'styled-components';
import theme from 'styled-theming';
import { dark, light, flex, colors } from '@styles/vars';

const bg = theme('theme', {
  light: light.bodyBg,
  dark: dark.highlight
});

export const Button = styled.button`
  width: 40px;
  aspect-ratio: 1;
  background-color: ${bg};
  color: ${colors.gray};
  ${flex.col}
  ${flex.center}
  position: relative;
  transition: color var(--transition), background-color var(--transition);
  
  &:hover, &:focus {
    background-color: ${colors.blue};
    color: #fff;
  }
  
  .badge {
    position: absolute;
    background-color: #ffc107;
    color: #000;
    font-size: 12px;
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
  }

  &.square {
    border-radius: 8px;
    .badge {
      top: -6px;
      right: -6px;
    }
  }
  
  &.round {
    border-radius: 50%;
    .badge {
      top: 0;
      right: 0;
    }
  }
`;

const socket = io("http://localhost:5000"); // Port du serveur Node.js

const ShapeButton = ({ hasNotification, icon, handler, label, shape, ...props }) => {
    const [notificationCount, setNotificationCount] = useState(0);

    useEffect(() => {
        // Écouter l'événement 'new-registration' depuis le serveur
        socket.on("new-registration", (data) => {
            console.log("Notification reçue :", data);
            setNotificationCount((prevCount) => prevCount + 1); // Incrémenter le compteur
        });
        

        // Nettoyer le socket lors du démontage du composant
        return () => {
            socket.off("new-registration");
        };
    }, []);

    return (
        <Button className={shape} onClick={handler} aria-label={label} {...props}>
            <i className={`icon-${icon}`}></i>
            {notificationCount > 0 && (
                <Badge className="badge">
                    {notificationCount}
                </Badge>
            )}
        </Button>
    );
};

ShapeButton.propTypes = {
    hasNotification: PropTypes.bool,
    icon: PropTypes.string.isRequired,
    handler: PropTypes.func,
    label: PropTypes.string.isRequired,
    shape: PropTypes.oneOf(['round', 'square']).isRequired
};

export default ShapeButton;
