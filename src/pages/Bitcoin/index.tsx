import React from 'react';

import { Container, Menu, Button, Footer } from './styles';

import ImageBitcoin from '../../assets/image-bitcoin.svg';
import TwitterIcon from '../../assets/twitter-icon.svg';
import LinkedinIcon from '../../assets/linkedin-icon.svg';
import FacebookIcon from '../../assets/facebook-icon.svg';
import InstagramIcon from '../../assets/instagram-icon.svg';


const Bitcoin: React.FC = () => {
    const linkTwitterProfile = 'https://twitter.com/gibicoski2018';
    const linkLInkedinProfile = 'https://www.linkedin.com/in/evandrogibicoski2016/';
    const linkFacebookProfile = 'https://www.facebook.com/evandrogibicoski2012/';
    const linkInstagramProfile = 'https://www.instagram.com/evandrogibicoski/';
    const linkWebCompany = 'https://meupedebitcoin.com/';
    const apiWhatsApp = 'https://api.whatsapp.com/send?phone=5548998463847&text=Obrigado%20por%20entrar%20em%20contato%2C%20seja%20bem%20vindo%20ao%20mundo%20da%20Cripto%20Moeda';
    

  return (
      <Container >
          <Menu>
            <img src={ImageBitcoin} alt="avatar"/>
            
            <h1>Compre <strong>Bitcoin</strong></h1>
            <h3>
                Comece a comprar <strong>Bitcoin</strong>< br /> 
                com um aporte inicial de
            </h3>
            <p>R$ 50,00</p>
            
          </Menu>

          <Button >
              <a href={apiWhatsApp} target="_blank"  rel="noopener noreferrer">Contate-me agora</a>
              <a href={linkWebCompany} target="_blank"  rel="noopener noreferrer">Sobre a Empresa</a>
          </Button>

          <Footer>
              <p>Siga-me nas redes sociais</p>

            <div className="links-social-medias">
                  <a href={linkTwitterProfile} target="_blank"  rel="noopener noreferrer">
                      <img src={TwitterIcon} alt=""/>
                  </a>

                  <a href={linkLInkedinProfile} target="_blank"  rel="noopener noreferrer">
                      <img src={LinkedinIcon} alt=""/>
                  </a>

                  <a href={linkFacebookProfile} target="_blank"  rel="noopener noreferrer">
                        <img src={FacebookIcon} alt=""/>
                  </a>

                  <a href={linkInstagramProfile} target="_blank"  rel="noopener noreferrer">
                    <img src={InstagramIcon} alt=""/>
                  </a>
            </div>
              
          </Footer>

      </Container>
  )
}

export default Bitcoin;
