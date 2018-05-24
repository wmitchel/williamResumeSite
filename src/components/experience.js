import React from 'react';
import styled from "styled-components";

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const Container = styled.div`
  margin: 1rem;
  display: flex;
  flex-direction: row;

  flex-wrap: nowrap;
  justify-content: space-around;
  align-content: stretch;
  align-items: stretch;

  @media only screen and (max-width: 500px) {
    flex-wrap: wrap;
  }
  
  @media only screen and (min-width: 501px) {
    margin-right: 2rem;
    margin-left: 2rem;
    margin-top: 2rem;
  }
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
    <Container>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image="https://picsum.photos/345/194/?random"
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            Associate Software Developer
          </Typography>
          <Typography gutterBottom variant="subheading" component="h4">
            Square 9 Softworks
          </Typography>
          <Typography component="p">
            GlobalCapture Developer
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="medium" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image="https://picsum.photos/345/194/?random"
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            Software Support Engineer
          </Typography>
          <Typography gutterBottom variant="subheading" component="h4">
            Square 9 Softworks
          </Typography>
          <Typography component="p">
            Master of Regex
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="medium" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image="https://picsum.photos/345/194/?random"
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            A100 Apprentice
          </Typography>
          <Typography gutterBottom variant="subheading" component="h4">
            Independent Software
          </Typography>
          <Typography component="p">
            Scrum Master for local New Haven Startup Homenucleus.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="medium" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
}

Experience.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Experience);