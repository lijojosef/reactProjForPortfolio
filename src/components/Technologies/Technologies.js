import React from 'react';
import { DiApple, DiFirebase, DiGoogleAnalytics, DiLinux, DiPython, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      Worked with lot of technologies, interested in exploring new domains. Currently learning Data Science & Machine learning. Hoping to learn BlockChain as a next step.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size={"3rem"} />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experiece with <br />
            Spring | Bootstrap | HTML | CSS | REST API | JavaScript | Jekyll |
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size={"3rem"} />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experiece with <br />
            SQL Developer | MySQL |
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiZend size={"3rem"} />
        <ListContainer>
          <ListTitle>UI/UX Designing</ListTitle>
          <ListParagraph>
            Experiece with <br />
            Figma
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiPython size={"3rem"} />
        <ListContainer>
          <ListTitle>Programming</ListTitle>
          <ListParagraph>
            Experiece with <br />
            Java | Python | Unix | R
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiLinux size={"3rem"} />
        <ListContainer>
          <ListTitle>OS</ListTitle>
          <ListParagraph>
            Experiece with <br />
            Linux | Windows |
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiGoogleAnalytics size={"3rem"} />
        <ListContainer>
          <ListTitle>Data Science</ListTitle>
          <ListParagraph>
            Experiece with <br />
            PowerBI | Tableau | Jupyter |
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
