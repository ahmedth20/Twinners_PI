// styling
import styled from 'styled-components/macro';

// components
import {Badge} from '@ui/Badge/style';

// assets
import placeholder from '@assets/placeholder.jpg'

// utils
import PropTypes from 'prop-types';

const Container = styled.div`
  width: ${props => `${props.size}px`};
  aspect-ratio: 1 / 1;
  position: relative;
  
  .indicator {
    position: absolute;
    right: -6px;
    top: -6px;
    z-index: 2;
  }
`
const Img = styled.picture`
  img {
    border-radius: 8px;
    overflow: hidden;
    position: relative;
    z-index: 1;
  }
`

const Avatar = ({ avatar, alt, size, online = false }) => {
  return (
      <Container size={size ? size : 40} className="avatar">
          {avatar ? (
              <Img>
                  <source srcSet={avatar.webp} type="image/webp" />
                  <source srcSet={avatar.jpg} type="image/jpeg" />
                  <img src={avatar.jpg} alt={alt} width="100%" height="100%" />
              </Img>
          ) : (
              <div 
                  style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center', 
                      width: '100%', 
                      height: '100%',
                      backgroundColor: '#007bff',  // Bleu
                      borderRadius: '50%'
                  }}
              >
                  <svg 
                      width={size ? size * 0.6 : 24} 
                      height={size ? size * 0.6 : 24} 
                      viewBox="0 0 24 24" 
                      fill="white" 
                      xmlns="http://www.w3.org/2000/svg"
                  >
                      <path d="M12 12c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm0 2c-3.33 0-10 1.67-10 5v3h20v-3c0-3.33-6.67-5-10-5z"/>
                  </svg>
              </div>
          )}
          {online ? <Badge color="green" className="indicator" /> : null}
      </Container>
  );
};



Avatar.propTypes = {
    avatar: PropTypes.object,
    alt: PropTypes.string.isRequired,
    online: PropTypes.bool,
    size: PropTypes.number
}

export default Avatar;