import React from 'react';
import Button from '../Button';
import PText from '../PText';
import SectionTitle from '../SectionTitle';
import AboutImg from '../../assets/images/about-sec-img.png';
import { AboutSectionStyles } from './AboutSectionElements'


export default function AboutSection() {
  return (
    <AboutSectionStyles>
      <div className="container">
        <div className="aboutSection__left">
          <SectionTitle
            subheading="Let me introduce myself"
            heading="About Me"
          />
          <PText>
            I am a freelance website designer and developer from Sonora,
            Mexico. I create professional websites. I love art and always
            try to show unique views to the audience through my design.
          </PText>
          <div className="aboutSection__buttons">
            <Button btnText="Works" btnLink="/projects" />
            <Button btnText="Read More" btnLink="/about" outline />
          </div>
        </div>
        <div className="aboutSection__right">
          <img className="aboutImg" src={AboutImg} alt="Img" />
        </div>
      </div>
    </AboutSectionStyles>
  );
}
