 import React from 'react';
 import PropTypes from 'prop-types';
 import { withStyles } from 'material-ui/styles';
 import classNames from 'classnames';
 import Drawer from 'material-ui/Drawer';
 import AppBar from 'material-ui/AppBar';
 import Toolbar from 'material-ui/Toolbar';
 import List, { ListItem, ListItemText } from 'material-ui/List';
 import Typography from 'material-ui/Typography';
 import Divider from 'material-ui/Divider';
 import IconButton from 'material-ui/IconButton';
 import MenuIcon from '@material-ui/icons/Menu';
 import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
 import ChevronRightIcon from '@material-ui/icons/ChevronRight';
 import Welcome from './welcome';
 import Experience from './experience';

 const drawerWidth = 240;

 const styles = theme => ({
   root: {
     flexGrow: 1,
   },
   appFrame: {
     zIndex: 1,
     overflow: 'hidden',
     position: 'relative',
     display: 'flex',
     width: '100%',
   },
   appBar: {
     position: 'absolute',
     transition: theme.transitions.create(['margin', 'width'], {
       easing: theme.transitions.easing.sharp,
       duration: theme.transitions.duration.leavingScreen,
     }),
   },
   appBarShift: {
     width: `calc(100% - ${drawerWidth}px)`,
     transition: theme.transitions.create(['margin', 'width'], {
       easing: theme.transitions.easing.easeOut,
       duration: theme.transitions.duration.enteringScreen,
     }),
   },
   'appBarShift-left': {
     marginLeft: drawerWidth,
   },
   'appBarShift-right': {
     marginRight: drawerWidth,
   },
   menuButton: {
     marginLeft: 12,
     marginRight: 20,
   },
   hide: {
     display: 'none',
   },
   drawerPaper: {
     position: 'relative',
     width: drawerWidth,
   },
   drawerHeader: {
     display: 'flex',
     alignItems: 'center',
     justifyContent: 'flex-end',
     padding: '0 8px',
     ...theme.mixins.toolbar,
   },
   content: {
     flexGrow: 1,
     backgroundColor: theme.palette.background.default,
     padding: theme.spacing.unit * 3,
     transition: theme.transitions.create('margin', {
       easing: theme.transitions.easing.sharp,
       duration: theme.transitions.duration.leavingScreen,
     }),
   },
   'content-left': {
     marginLeft: -drawerWidth,
   },
   'content-right': {
     marginRight: -drawerWidth,
   },
   contentShift: {
     transition: theme.transitions.create('margin', {
       easing: theme.transitions.easing.easeOut,
       duration: theme.transitions.duration.enteringScreen,
     }),
   },
   'contentShift-left': {
     marginLeft: 0,
   },
   'contentShift-right': {
     marginRight: 0,
   },
 });

 class Navigation extends React.Component {
   state = {
     open: false,
     anchor: 'left',
   };

   handleDrawerOpen = () => {
     this.setState({ open: true });
   };

   handleDrawerClose = () => {
     this.setState({ open: false });
   };

   render() {
     const { classes, theme } = this.props;
     const { anchor, open } = this.state;

     const drawer = (
       <Drawer
         variant="persistent"
         anchor='left'
         open={open}
         classes={{
           paper: classes.drawerPaper,
         }}
       >
         <div className={classes.drawerHeader}>
           <IconButton onClick={this.handleDrawerClose}>
             {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
           </IconButton>
         </div>
         <Divider />
         <List>
           <ListItem button>
             <ListItemText primary="About Me" />
           </ListItem>
           <ListItem button>
             <ListItemText primary="Experience" />
           </ListItem>
           <ListItem button>
             <ListItemText primary="Projects"/>
           </ListItem>
           <ListItem button>
             <ListItemText primary="Education"/>
           </ListItem>
         </List>
       </Drawer>
     );

     return (
       <div className={classes.root}>
         <div className={classes.appFrame}>
           <AppBar
             className={classNames(classes.appBar, {
               [classes.appBarShift]: open,
               [classes[`appBarShift-${anchor}`]]: open,
             })}
           >
             <Toolbar disableGutters={!open}>
               <IconButton
                 color="inherit"
                 aria-label="open drawer"
                 onClick={this.handleDrawerOpen}
                 className={classNames(classes.menuButton, open && classes.hide)}
               >
                 <MenuIcon />
               </IconButton>
               <Typography variant="title" color="inherit" noWrap>
                 William Mitchel
               </Typography>
             </Toolbar>
           </AppBar>
           {drawer}
           <main
             className={classNames(classes.content, classes[`content-${anchor}`], {
               [classes.contentShift]: open,
               [classes[`contentShift-${anchor}`]]: open,
             })}
           >
             <div className={classes.drawerHeader} />
             <Welcome />
             <Experience />
           </main>
         </div>
       </div>
     );
   }
 }

 Navigation.propTypes = {
   classes: PropTypes.object.isRequired,
   theme: PropTypes.object.isRequired,
 };

 export default withStyles(styles, { withTheme: true })(Navigation);