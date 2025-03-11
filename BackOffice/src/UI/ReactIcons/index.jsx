import { Badge } from '@ui/Badge/style';
import styled from 'styled-components/macro';
import theme from 'styled-theming';
import { dark, light, flex, colors } from '@styles/vars';
import PropTypes from 'prop-types';

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

const ReactIcons = ({ hasNotification, Icon, handler, label, shape, ...props }) => {
    return (
        <Button className={shape} onClick={handler} aria-label={label} ref={props.ref} {...props}>
            {Icon && <Icon size={24} />}  {/* Affichage de l’icône React */}
            {hasNotification && <Badge className="badge" color="yellow" />}
        </Button>
    );
};

ReactIcons.propTypes = {
    hasNotification: PropTypes.bool,
    Icon: PropTypes.elementType.isRequired,  // Remplace `icon: PropTypes.string` par `Icon: PropTypes.elementType`
    handler: PropTypes.func,
    label: PropTypes.string.isRequired,
    shape: PropTypes.oneOf(['round', 'square']).isRequired
};

export default ReactIcons;
