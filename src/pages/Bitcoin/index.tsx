import React from 'react';

import { Container, Menu, Button, Footer } from './styles';

import ImageBitcoin from '../../assets/image-bitcoin.svg';
import TwitterIcon from '../../assets/twitter-icon.svg';
import FacebbokIcon from '../../assets/facebbok-icon.svg';
import InstagramIcon from '../../assets/instagram-icon.svg';

const Bitcoin: React.FC = () => {
    const linkTwitterProfile = 'https://twitter.com/gibify_official';
    const linkFacebookProfile = 'https://www.facebook.com/gibify.officially/';
    const linkInstagramProfile = 'https://www.instagram.com/gibify_officially/';
    const linkWebCompany = 'https://meupedebitcoin.com/';
    const apiWhatsApp = 'https://api.whatsapp.com/send?phone=5548988208519&text=Obrigado%20por%20entrar%20em%20contato%2C%20seja%20bem%20vindo%20ao%20mundo%20da%20Cripto%20Moeda';

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

                  <a href={linkFacebookProfile} target="_blank"  rel="noopener noreferrer">
                        <img src={FacebbokIcon} alt=""/>
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