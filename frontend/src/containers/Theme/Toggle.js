import React from 'react';
import { func, string } from 'prop-types';
import styled from 'styled-components';

const ToggleContainer = styled.button`
  background: ${({ theme }) => theme.body};
  border: none !important;
  outline: none;
  color: ${({ theme }) => theme.text};
  overflow: hidden;
  cursor: pointer;

  &:focus {
    border: none;
    outline: none;
  }
`;

const Toggle = ({ theme, toggleTheme }) => {
  const isLight = theme === 'light';

  return (
    // Botón pero con estilo, definido en la linea 5 - 16
    <ToggleContainer lightTheme={isLight} onClick={toggleTheme}>
      {isLight ? 'DARK MODE' : 'LIGHT MODE'}
    </ToggleContainer>
  );
};

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
};

export default Toggle;
