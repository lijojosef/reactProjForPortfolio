import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillMediumCircle, AiFillTwitterCircle } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href='tel: +918943757946'>+91894-375-7946</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href='mailto:lijojoseph234@gmail.com'>lijojoseph234@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>
            Solving problems using technologies..
          </Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href='https://github.com/lijojosef'>
            <AiFillGithub size={"3rem"} />
          </SocialIcons>
          <SocialIcons href='https://medium.com/@lijojoseph234'>
            <AiFillMediumCircle size={"3rem"} />
          </SocialIcons>
          <SocialIcons href='https://linkedin.com/in/lijo-joseph-1b236b140'>
            <AiFillLinkedin size={"3rem"} />
          </SocialIcons>
          <SocialIcons href='https://instagram.com/lijo_jozef'>
            <AiFillInstagram size={"3rem"} />
          </SocialIcons>
          <SocialIcons href='https://twitter.com/lijojos58956051'>
            <AiFillTwitterCircle size={"3rem"} />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
