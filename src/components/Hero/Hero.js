import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        Aspiring Data Scientist  with interest in analysing raw data and statitics.
      </SectionText>
      <Button onClick={() => window.location = "https://linkedin.com/in/lijo-joseph-1b236b140"}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;