import React, { Component } from 'react';
import styled, {injectGlobal} from 'styled-components';

injectGlobal`
	h1, h2 {
		font-family: 'Roboto', sans-serif;
	}
`
const Div = styled.div`
	text-align: center;
  vertical-align: center;
  align: center;
	display: flex;
	flex-wrap: nowrap;
  justify-content: center;
  @media only screen and (max-width: 800px) {
    flex-wrap: wrap;
  }
  @media only screen and (min-width: 801px) {
    margin-right: 8rem;
    margin-left: 8rem;
    margin-top: 2rem;
  }
`

const AboutMe = styled.div`
  text-align: justify;
  margin-left: 2rem;
  margin-right: 2rem;
  @media only screen and (max-width: 800px) {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }
  @media only screen and (min-width: 2000px) {
    margin-left: 4rem;
    margin-right: 4rem;
  }
`
const ProfilePic = styled.div`
  margin: 1rem;
  background: #3D4C5F;
  border-radius: 140px;
  max-height: 285px;
  box-shadow: 20px 10px 22px -5px rgba(0,0,0,0.5); 
`

const AboutMeInfo = styled.div`
  font-size: 20px;
  @media only screen and (max-width: 700px) {
    font-size: 15px;
  }
  @media only screen and (min-width: 2000px) {
    font-size: 25px;
  }
`

const ContactInfo = styled.div `
  align-content: center;
  width: 100%;
  display: flex;
  justify-content: space-around;
  > div svg:nth-child(1) {
    color: #C588A7;
    border-radius: 50%
  }

  > div svg:nth-child(2) {
    color: White;
    border-radius: 50%;
  }
`

const SectionHeader = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  color: #3D4C5F;
 `

const Welcome = () => (
  <Div>
    <ProfilePic>
      <img src={require('../images/profile.PNG')} />
    </ProfilePic>
    <AboutMe>
      <SectionHeader>About Me</SectionHeader>
      <AboutMeInfo>
        I am a full stack developer with professional experience in C#, ASP.NET, AngularJS, MongoDB, and SQL Server looking for exciting opportunities 
        in the Austin area. With experience on both the customer facing and development sides of the Enterprise Content Management industry, and a proven 
        track record learning quickly, I’m ready to contribute to your company’s success! Like what you see here? Find more of my work or contact me at the links below.
      </AboutMeInfo>
      <ContactInfo>
        <div className="fa-4x">
        <a href="https://github.com/wmitchel">
          <span className="fa-layers fa-fw" aria-hidden="true">
            <i className="fas fa-circle"></i>
            <i className="fab fa-github fa-inverse " data-fa-transform="shrink-3"></i>
          </span>
        </a>
        <a href="https://www.linkedin.com/in/william-mitchel-17714169/">
          <span className="fa-layers fa-fw" aria-hidden="true">
            <i className="fas fa-circle"></i>
    	      <i className="fab fa-linkedin-in fa-inverse" data-fa-transform="shrink-6"></i>
    	    </span>
        </a>
        <a href="mailto:williamjamesmitchel@gmail.com">
          <span className="fa-layers fa-fw" aria-hidden="true">
            <i className="fas fa-circle"></i>
    	      <i className="far fa-envelope fa-inverse" data-fa-transform="shrink-6"></i>
    	    </span>
        </a>
        </div>
      </ContactInfo>
    </AboutMe>
  </Div>
);



export default Welcome;