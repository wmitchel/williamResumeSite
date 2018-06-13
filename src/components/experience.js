import React from 'react';
import styled from "styled-components";

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';


const ExperienceContainer = styled.div`
  margin: 1rem;
  display: flex;
  flex-direction: row;

  flex-wrap: wrap;
  justify-content: space-around;
  align-content: stretch;
  align-items: stretch;

  @media only screen and (min-width: 501px) {
    margin-right: 2rem;
    margin-left: 2rem;
    margin-top: 2rem;
  }
`

const ExperienceCard = styled.div `
  background-color: #3D4C5F;
  color: white;
  position: relative;
  margin-top: 50px;
  margin-bottom: 30px;
  width: 500px;
  border-radius(4px);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  @media (max-width: 700px) {
    width: 100%;
  }
`

const CardHeader = styled.div `
  text-align: center;
`
const CardTitle = styled.h2 `
  width: 100%;
`

const CardCompany = styled.h4 `
  width: 100%
  content-align: center;
`

const CardLogo = styled.img `
 padding-left: 1%;
 padding-right: 1%;
 width: 98%;
 height: auto;
 align-content: center;
 background-color: #fafafa;
`

const CardSummary = styled.div `
  text-align: justify;
  margin-right: 0.6rem;
  margin-left: 0.6rem;
`
const CardTechnologies = styled.p `
  width: 100%;
  text-align: center;
  color: #C588A7;
`

 const styles = {
  card: {
    maxWidth: 400,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  }
};

function Experience(props) {
  const { classes } = props;
  return (
    <ExperienceContainer>
      <ExperienceCard>
        <CardHeader>
          <CardLogo src={require('../images/square9.png')} />
          <CardTitle>GlobalCapture Software Engineer</CardTitle>
          <CardCompany>Square 9 Softworks</CardCompany>
        </CardHeader>
        <CardSummary>
          <p>
            My experience working across Square 9’s product suite taught me the skills necessary to hit the ground running as a valuable 
            member of the GlobalCapture team. In this role, I tackled extending administrative functionalities in GlobalCapture, picking 
            up where a previous developer had left off.  It gave me the opportunity to refactor and continue development using best practices 
            to enhance the usability for both technical and non technical users alike.
          </p>
        </CardSummary>
        <CardTechnologies>C#, AngularJS, ASP.NET, MongoDB</CardTechnologies>
      </ExperienceCard>
      <ExperienceCard>
        <CardHeader>
          <CardLogo src={require('../images/square9.png')} />
          <CardTitle>Associate Software Engineer</CardTitle>
          <CardCompany>Square 9 Softworks</CardCompany>
        </CardHeader>
        <CardSummary>
          <p>
            Pioneering a specially created position on the development team, I took every opportunity to dive deep into all applications and 
            integrations of Square 9’s product suite. In this position, I worked directly with the CTO and Director of Client Services to engineer 
            solutions for escalated customer issues. These issues could range from adapting current hot fixes for a legacy version of a product, to 
            analyzing a customer’s SQL database for causes of performance issues.
          </p>
          <p>
            Utilizing experiences from my time in support, I took the initiative to develop multiple utilities which streamlined troubleshooting 
            for our support and professional services departments. One such utility automated validation of workflows to dramatically reduce support 
            case times on corrupted workflow issues. 
          </p>
        </CardSummary>
        <CardTechnologies>C#, ASP.NET, WPF, SQL SERVER, MongoDB</CardTechnologies>
      </ExperienceCard>
      <ExperienceCard>
        <CardHeader>
          <CardLogo src={require('../images/square9.png')} />
          <CardTitle>Software Support Engineer</CardTitle>
          <CardCompany>Square 9 Softworks</CardCompany>
        </CardHeader>
        <CardSummary>
          <p>
            As a Software Support Engineer at Square 9, I worked directly with customers and re-sellers to identify and resolve customer issues 
            across the GlobalSearch and GlobalCapture products. While in this position I was a liaison to the development teams, making me a leading 
            resource on the support team for third party integration inquiries, or problems customers might have interacting with our API.
          </p>
          <p>
            Beyond resolving customer issues, I also took on the the responsibility of further educating our other technicians on combining templating 
            and regex. When used properly, these regexes could be a powerful asset to sanitize OCR inputs and minimize errored import processes. 
            When used improperly, they could cause the capture engine to sieze up for an extended period of time due to unchecked looping structures 
            within the matches.
          </p>
        </CardSummary>
        <CardTechnologies>Windows Server, SQL Server, MongoDB, IIS</CardTechnologies>
      </ExperienceCard>
    </ExperienceContainer>
  );
}

Experience.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Experience);