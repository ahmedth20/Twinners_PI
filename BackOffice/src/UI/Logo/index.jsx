// assets
import logo from '@assets/favicon-96x96.png'

// styling
import styled from 'styled-components/macro';
import {colors, fonts, textSizes, breakpoints} from '@styles/vars';
import theme from 'styled-theming';

// components
import {NavLink} from 'react-router-dom';

// utils
import PropTypes from 'prop-types';

const Img = styled.img`
  width: 60px;
  height: 60px;
  will-change: transform;
  transition: transform var(--transition);
 margin-left: 0%; /* Adjust as needed */

`

const Wrapper = styled.a`
  display: flex;
  margin: 0;
  padding: 0;

  &:hover, &:focus {
    Img {
      transform: scale(1.2);
    }
  }
`;


const Text = styled.span`
  font-weight: 700;

  font-family: ${fonts.accent};
  font-size: ${textSizes['24']};
 margin-right: 20 %; /* Adjust as needed */

  .highlight {
    color: ${theme('theme', {
      light: colors.red,
      dark: 'inherit'
    })};
  }

  ${breakpoints.tablet} {
    font-size: ${textSizes['32']};
  }
`

const Logo = ({compact}) => {
    return (
        <Wrapper as={NavLink} to="/dashboard_a" className="logo">
            <Img src={logo} alt="Medux"/>
            {
                !compact ?
                    <Text>
                        Smart<span className="highlight">190</span>
                    </Text>
                    : null
            }
        </Wrapper>
    )
}

Logo.propTypes = {
    compact: PropTypes.bool
}

export default Logo;