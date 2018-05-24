import React, { Component } from 'react';
import styled, {injectGlobal} from 'styled-components'

injectGlobal`
	h1, h2 {
		font-family: 'Roboto', sans-serif;
	}
`
const Div = styled.div`
	text-align: center;
	vertical-align: center;
	display: flex;
	flex-wrap: nowrap;
	justify-content: center;
  @media only screen and (max-width: 500px) {
    flex-wrap: wrap;
  }
  
  @media only screen and (min-width: 501px) {
    margin-right: 2rem;
    margin-left: 2rem;
    margin-top: 2rem;
  }
`

const AboutMe = styled.div`
  text-align: center;
  margin-left: 2rem;
  margin-right: 2rem;
`
const ProfilePic = styled.div`
  margin: 1rem;
`

const Welcome = () => (
  <Div>
    <ProfilePic>
      <img src={require('../images/profile.PNG')} />
    </ProfilePic>
    <AboutMe>
      <h1>William Mitchel</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tincidunt eros sem, a ultricies urna dapibus vitae. Cras consequat tortor vel tincidunt egestas. Aliquam purus velit, malesuada id nunc eu, luctus congue purus. Quisque maximus eget libero eget vestibulum. Vestibulum sit amet ultricies risus. Vestibulum interdum nulla viverra fringilla varius. Pellentesque eu dui pulvinar, vestibulum sem at, vestibulum orci. In semper ut odio a maximus.</p>
      <p>
        Quisque cursus vulputate massa sed egestas. Integer dui urna, ornare a lacus et, tempor pharetra lorem. Mauris sed odio cursus, dictum neque in, venenatis metus. Proin eleifend neque vel ipsum rhoncus tincidunt nec et purus. Curabitur auctor a neque vel hendrerit. Nam sed metus vitae dui mattis cursus at a tellus. Nam in viverra tellus, a pretium arcu. Maecenas suscipit, urna a facilisis pretium, lacus ante tempor urna, nec mattis metus libero et purus. Pellentesque ac condimentum dolor. Ut in accumsan nisi. Vestibulum non accumsan ipsum, vitae viverra dolor. Curabitur fermentum odio mauris, sed dapibus ante convallis vitae. Aenean dictum justo convallis, luctus elit non, cursus elit. Aenean est mi, placerat eu odio porta, interdum cursus orci.
      </p>
    </AboutMe>
  </Div>
);



export default Welcome;