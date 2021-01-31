import React from 'react';

import { Container } from './style';

import Logo from '../../assets/Logo.svg';

const Profile: React.FC = () => {
  return (
    <Container>
      <img src={Logo} alt="logo"/> 
    </Container>
  );
}

export default Profile;