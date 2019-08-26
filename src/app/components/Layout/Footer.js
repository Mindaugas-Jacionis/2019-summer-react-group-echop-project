import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  padding: 20px 15px;
  background: #2e802e;
  font-size: 20px;
  line-height: 20px;
  text-align: center;
  color: #ffffff;
`;

function Footer() {
  return (
    <StyledFooter>© Copyright by React Wizards Guild | {new Date().getFullYear()}</StyledFooter>
  );
}

export default Footer;
