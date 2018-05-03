import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

  //scroll = () => super.Scroll();


  render() {
    return(
      <div>
        <AppBar onLeftIconButtonClick={this.handleToggle} title="William Mitchel"/>
        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
          <MenuItem onClick={this.handleClose}>About Me</MenuItem>
          <MenuItem onClick={this.handleClose}>Experience</MenuItem>
          <MenuItem onClick={this.handleClose}>Projects</MenuItem>
          <MenuItem onClick={this.handleClose}>Education</MenuItem>
        </Drawer>
      </div>
    )
  }
}

export default Navigation;