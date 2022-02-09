//FOOTER

//IMPORTING
import React from 'react';
import styled from 'styled-components';
import { EmailButton } from './Button';
import { Link } from 'react-router-dom';
import { FaBookReader, FaFacebook, FaYoutube, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import logoImg from '../images/logo_footer.png';

//FOOTER CONTAINER
const FooterContainer = styled.div`
  background-color: #242424;
  padding: 4rem 0 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

//FOOTER SUBSCRIPTION
const FooterSubscription = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 24px;
  padding: 24px;
  color: #fff;
`;

//FOOTER SUB HEADING
const FooterSubHeading = styled.p`
  margin-bottom: 24px;
  font-size: 24px;
`;

//FOOTER SUB TEXT
const FooterSubText = styled.p`
  margin-bottom: 24px;
  font-size: 20px;
`;

//FORM
const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 820px) {
    display: grid;
    justify-items: center;
    grid-template-rows: 60px;
  }
`;

//FORM INPUT
const FormInput = styled.input`
  padding: 10px 20px;
  border-radius: 2px;
  margin: 0px 10px;
  outline: none;
  border: none;
  font-size: 16px;

  &::placeholer {
    color: #242424;
  }
`;

//FOOTER LINK CONTAINER
const FooterLinkContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  display: flex;
  justify-content: center;
`;

//FOOTER LINK WRAPPER
const FooterLinkWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

//FOOTER LINK ITEMS
const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  width: 160px;
  box-sizing: border-box;
  min-height: 200px;

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;

//FOOTER LINK TITLE
const FooterLinkTitle = styled.h2`
  margin-bottom: 16px;
  color: #fff;
  font-weight: 400;
`;

//FOOTER LINK
const FooterLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;
  color: #e9e9e9;

  &:hover {
    color: #696969;
    transition: 0.3s ease-out;
  }
`;

//SOCIAL MEDIA
const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
`;

//SOCIAL MEDIA WRAP
const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  max-width: 1000px;
  margin: 40px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

//SOCIAL LOGO
const SocialLogo = styled(Link)`
  color: #fff;
  justify-self: start;
  margin-left: 20px;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

//SOCIAL ICON
const SocialIcon = styled(FaBookReader)``;

//SOCIAL ICONS
const SocialIcons = styled.small`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`;

//WEBSITE RIGHTS
const WebsiteRights = styled.small`
  color: #fff;
  margin-bottom: 16px;
`;

//SOCIAL ICON LINK
const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;

  &:hover {
    color: #696969;
    transition: 0.3s ease-out;
  }
`;

//FOOTER
const Footer = () => {
  const currentYear = new Date().getFullYear();
  //RETURN
  return (
    <FooterContainer>
      <FooterSubscription>
        <FooterSubHeading>
          Receba notícias de boas oportunidades de imóveis.
        </FooterSubHeading>
        <FooterSubText>Se inscreva na nossa Newsletter</FooterSubText>
        <Form>
          <FormInput
            name="email"
            type="email"
            placeholder="teste@email.com"
          ></FormInput>
          <EmailButton>Inscrever-se</EmailButton>
        </Form>
      </FooterSubscription>
      <FooterLinkContainer>
        <FooterLinkWrapper>          
          <FooterLinkItems>
            <FooterLinkTitle>Links úteis</FooterLinkTitle>
            <FooterLink>Home</FooterLink>
            <FooterLink>Sobre</FooterLink>
            <FooterLink>Países</FooterLink>
            <FooterLink>Imóveis</FooterLink>
          </FooterLinkItems>
        </FooterLinkWrapper>
        <FooterLinkWrapper>
          <FooterLinkItems>
            <FooterLinkTitle>Canais</FooterLinkTitle>
            <FooterLink>SAC</FooterLink>
            <FooterLink>Suporte</FooterLink>
            <FooterLink>Dúvidas</FooterLink>
          </FooterLinkItems>
          <FooterLinkItems>
            <FooterLinkTitle>Parceiros</FooterLinkTitle>
            <FooterLink>Américas</FooterLink>
            <FooterLink>Europa</FooterLink>
            <FooterLink>África</FooterLink>
            <FooterLink>Ásia</FooterLink>
            <FooterLink>Oceania</FooterLink>
          </FooterLinkItems>
        </FooterLinkWrapper>
      </FooterLinkContainer>
      <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo to="/">
            <img src={logoImg} alt="logo" />
          </SocialLogo>
          <WebsiteRights>Mundi Imobiliária LTDA © {currentYear} Todos os direitos reservados</WebsiteRights>
          <SocialIcons>
            <SocialIconLink href="https://facebook.com" target="_blank" aria-label="Facebook">
              <FaFacebook />
            </SocialIconLink>
            <SocialIconLink href="https://instagram.com" target="_blank" aria-label="Instagram">
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink href="https://youtube.com" target="_blank" aria-label="Youtube">
              <FaYoutube />
            </SocialIconLink>
            <SocialIconLink href="https://twitter.com" target="_blank" aria-label="Twitter">
              <FaTwitter />
            </SocialIconLink>
            <SocialIconLink href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
              <FaLinkedin />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
};

export default Footer;
