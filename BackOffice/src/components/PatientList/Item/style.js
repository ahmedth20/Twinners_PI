import styled from 'styled-components';
import theme from 'styled-theming';
import {colors, dark, breakpoints, flex, light, textSizes, fonts} from '@styles/vars';

export const Block = styled.div`
  display: flex;
  gap: 20px;

  .main {
    ${flex.col}
    justify-content: space-between;

    .name {
      font-weight: 500;
    }

    .age {
      font-size: ${textSizes['14']};
    }
  }

  .wrapper {
    flex-grow: 1;
  }

  @media screen and (min-width: 666.98px) {
    flex-grow: 1;
    &.actions {
      justify-content: flex-end;
    }

    .wrapper {
      flex-grow: unset;
    }
  }
`;

export const Wrapper = styled.div`
  ${flex.col}
  border-radius: 8px;
  width: 100%;
  padding: 20px;
  gap: 20px 0;
  background-color: ${theme('theme', {
    light: light.highlight,
    dark: dark.highlight
  })};
  transition: background-color var(--transition);
  cursor: pointer;

  &:hover {
    background-color: ${theme('theme', {
      light: light.bodyBg,
      dark: dark.bodyBg
    })};
  }
  
  .overview {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }

  .main {
    width: calc(100% - 40px);

    .department {
      font-size: ${textSizes['14']};
      margin-top: 2px;
    }
  }

  .rating, .booked {
    ${flex.col};
    gap: 7px;
    font-size: ${textSizes['12']};
    font-family: ${fonts.accent};
  }
  
  .styled-rating {
    margin-top: -5px;
  }
  
  .contacts {
    display: flex;
    gap: 20px;
  }

  button {
    transition: background-color var(--transition), color var(--transition);

    &.booking {
      font-size: ${textSizes['14']};
      font-family: ${fonts.accent};
      border-radius: 20px;
      padding: 12px 16px;
      color: ${theme('theme', {
        light: colors.blue,
        dark: '#fff'
      })};
      
      &:hover, &:focus {
        color: #fff;
      }
    }
  }

  button:not(.reminder) {
    background-color: ${theme('theme', {
      light: light.widgetBg,
      dark: dark.widgetBg
    })};

    &:hover, &:focus {
      background-color: ${colors.blue};
      color:${colors.white};
    }
  }

  @media screen and (min-width: 666.98px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-end;

    button.reminder {
      order: 3;
      width: 100%;
    }
    
    &.doctor, &.staff {
      justify-content: space-between;
      ${Block} {
        width: 100%;
      }
    }
  }
  
  ${breakpoints.tablet} {
    &.doctor .avatar {
      width: 60px;
    }
  }

  ${breakpoints.laptop} {
    align-items: center;
    gap: 20px;
    button.reminder {
      order: unset;
      width: fit-content;
    }

    &.doctor, &.staff {
      justify-content: space-between;
      gap: 40px;
      ${Block} {
        width: fit-content;
      }
      
      .overview {
        gap: 40px;
      }
    }

    ${Block} {
      &.actions {
        flex-grow: unset;
      }
    }
  }
  
  ${breakpoints.desktop} {
    .booked {
      width: 275px;
    }
  }
`;
export const Button = styled.button`
  display: flex;
  ${flex.center};
  gap: 8px;
  border-radius: 20px;
  font-size: ${textSizes['14']};
  height: 40px;
  width: 40px;
  color: ${light.text};
  transition: color var(--transition), background-color var(--transition);

  .icon {
    color: ${colors.gray};
    transition: color var(--transition);
  }

  .text {
    display: none;
  }

  &:hover, &:focus {
    background-color: ${colors.blue};
    color: #fff;

    .icon {
      color: #fff;
    }
  }

  ${breakpoints.mobileL} {
    width: fit-content;
    padding: 0 16px;
    .text {
      display: block;
    }
  }
`
export const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const Menu = styled.ul`
  position: absolute;
  top: 40px;
  right: 0;
  background: white;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  list-style: none;
  padding: 8px 0;
  min-width: 160px;
  z-index: 100;
`;

export const MenuItem = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 16px;
  cursor: pointer;
  font-size: 14px;
  color: #333;
  transition: background 0.2s;

  &:hover {
    background: #f5f5f5;
  }

  &:last-child {
    border-top: 1px solid #ddd;
    color: red;
  }
`;


/*const actionIcons = {
  delete: <FaTrash style={{ fontSize: '1.5rem', color: '#e53e3e' }} />,
  update: <FaEdit style={{ fontSize: '1.5rem', color: '#f6ad55' }} />,
  add: <FaPlus style={{ fontSize: '1.5rem', color: '#48bb78' }} />,
  deactivate: <FaRegPauseCircle style={{ fontSize: '1.5rem', color: '#fbbf24' }} />,
  activate: <FaCheckCircle style={{ fontSize: '1.5rem', color: '#38a169' }} />
};*/