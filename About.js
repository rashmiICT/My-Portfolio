import React from 'react';
import styled from 'styled-components';
import PText from '../components/PText';
import Button from '../components/Button';
import AboutImg from '../assets/images/about-page-img.png';
import AboutInfoItem from '../components/AboutInfoItem';
import ContactBanner from '../components/ContactBanner';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;

  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 3.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 5rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 5px solid var(--gray-1);
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;

export default function About() {
  return (
    <>
      <AboutPageStyles>
        <div className="container">
          <div className="top-section">
            <div className="left">
              <p className="about__subheading">
                Hi, I am <span>Rashmi Pituwala,</span>
              </p>
              <h2 className="about__heading">I'm UI UX Designer</h2>
              <div className="about__info">
                <PText>
                  I am from Anuradhapura, Sri Lanka. A place of beauty and
                  nature. Since my childhood, i love art and design. I always
                  try to design stuff with my unique point of view. I also love
                  to create things that can be usefull to others.
                  <br /> <br />
                  I started designing since I was in high school. Designing is
                  also an art for me. I love it and now I have the opportunity
                  to design along with the design. I find it really interesting
                  and I enjoyed the process a lot.
                  <br />
                  <br />
                  My vision is to make the world a better place. Now almost
                  everything is becoming better than ever. It is time for us to
                  create more good stuff that helps the world to become a better
                  place.
                </PText>
              </div>
              <Button btnText="Download CV" btnLink="pdf" />
            </div>
            <div className="right">
              <img src={AboutImg} alt="me" />
            </div>
          </div>
          <div className="about__info__items">
            <div className="about__info__item">
              <h1 className="about__info__heading">Education</h1>

              <AboutInfoItem
                title="University"
                items={['University of Sri jayawardenepura']}
              />
              <AboutInfoItem
                title="Degree "
                items={['Bsc(Hons)Information & communication Technology']}
              />
              <AboutInfoItem
                title=" Certifications"
                items={['Introduction to Cybersecurity']}
              />
              <AboutInfoItem
                title=" Certifications"
                items={['Ardino Code Camp']}
              />
              <AboutInfoItem
                title=" Certifications"
                items={['Hash Code - 2021']}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">Technical Skills</h1>

              <AboutInfoItem
                title="FrontEnd"
                items={[
                  'HTML',
                  'CSS',
                  'JavaScript',
                  'REACT',
                  'REACT NATIVE',
                  'PYTHON',
                  'JAVA',
                ]}
              />
              <AboutInfoItem
                title="BackEnd"
                items={['Node', 'Express', 'PHP', 'Mongo DB', 'My SQL']}
              />
              <AboutInfoItem
                title="Design"
                items={[
                  'Adobe Photoshop',
                  'Adobe Illustrator',
                  'Premior Pro',
                  'Adobe Audition',
                  'Adobe XD',
                  'After Effects',
                  'Figma',
                ]}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">Soft Skills</h1>

              <AboutInfoItem
                title="Skills"
                items={[
                  'Problem Solving',
                  'Collaboration',
                  'Empathy',
                  'Creativity',
                  'Organization',
                  'Positivity',
                  'Goal-Oriented',
                ]}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">Experiences</h1>

              <AboutInfoItem
                title="2018-2019"
                items={['Trainee Bank Of Cylone']}
              />
              <AboutInfoItem
                title="2019-2020"
                items={['Trainee Regional Development Bank ']}
              />
              <AboutInfoItem
                title="2020-"
                items={['Freelance UI UX Designer']}
              />
            </div>
          </div>
        </div>
        <ContactBanner />
      </AboutPageStyles>
    </>
  );
}
