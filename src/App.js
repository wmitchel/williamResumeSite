import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';
import Welcome from './components/welcome';
import Experience from './components/experience';

const SectionHeader = styled.h1`
text-align: center;
font-size: 2.5rem;
color: #3D4C5F;
`

const Header = styled.div`
overflow: hidden;
background-color: #3D4C5F;
position: sticky;
top: 0;
width: 100%;
color: white;
z-index: 2;
 > p {
  float: left;
  display: block;
  text-align: center;
  margin: 14px 16px;
  text-decoration: none;
 }
`

class App extends Component {
  render() {
    return (
      <div>
        <Header><p>William Mitchel</p></Header>
        <Welcome />
        <SectionHeader>Professional Experience</SectionHeader>
        <Experience />
      </div>
    );
  }
}

export default App;
