import React from 'react';
import PText from '../../components/PText';
import Button from '../../components/Button';
import AboutImg from '../../assets/images/about-page-img.png';
import AboutInfoItems from '../../components/AboutInfoItem';
import ContactBanner from '../../components/ContactBanner';
import { AboutPageStyles } from './AboutElements'


export default function About() {
  return (
    <>
      <AboutPageStyles>
        <div className="container">
          <div className="top-section">
            <div className="left">
              <p className="about__subheading">
                Hi, I am <span>Diego Sandoval</span>
              </p>
              <h2 className="about__heading">A Full-Stack developer</h2>
              <div className="about__info">
                <PText>
                I'm from Sonora, Mexico. Graduated with a degree in systems engineering.
                 Since I started my professional journey as a software developer 2 years
                  ago, I've done remote work for agencies, consulting for startups, and 
                  I've collaborated with talented people to create digital products for 
                  both business and consumer. 
                  <br /> <br />
                  I am a self-confident, curious by nature, self-taught and always working 
                  to improve my skills, learn new technologies, and eager to work with new 
                  talented developers.
                  <br />
                  <br />
                  I am passionate about finding new ways to solve current needs, using the
                   tools that new technologies provide us to face the new challenges that 
                   we face in the future.
                </PText>
              </div>
              <Button btnText="Download CV" btnLink="#" />
            </div>
            <div className="right">
              <img src={AboutImg} alt="me" />
            </div>
          </div>
          <div className="about__info__items">
            <div className="about__info__item">
              <h1 className="about__info__heading">Experiences</h1>
              <AboutInfoItems
                title="2020-2021"
                items={['Full-Stack developer at GOintegro']}
              />
              <AboutInfoItems
                title="2019-2021"
                items={['Back-End developer at Black Mamba, CORP. ']}
              />
              <AboutInfoItems
                title="2019-2020"
                items={['Full-Stack developer at Gometa, INC. withkoji.com']}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">My Skills</h1>

              <AboutInfoItems
                title="FrontEnd"
                items={['HTML', 'CSS', 'JavaScript', 'REACT', 'ELECTRON']}
              />
              <AboutInfoItems
                title="BackEnd"
                items={['Node', 'Express', 'Java', 'C#', 'Ruby', 'C++']}
              />
              <AboutInfoItems
                title="Design"
                items={['Figma', 'Rive']}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">Education</h1>
              <AboutInfoItems
                title="University"
                items={['Higher Technological Institute of Puerto Peñasco']}
              />
              <AboutInfoItems
                title="High School"
                items={['COBACH. High School, Puerto Peñasco']}
              />
            </div>
          </div>
        </div>
        <ContactBanner />
      </AboutPageStyles>
    </>
  );
}
