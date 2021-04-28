import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Button, Container } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        height : "80px",
        [theme.breakpoints.down('sm')]: {
          height : "60px",
        },
      },
      toolbar : {
        height : "80px",
        [theme.breakpoints.down('sm')]: {
          height : "60px",
        },
      },
      appBar : {
        height : "80px",
        boxShadow : "none",
        backgroundColor : "#2B2B2B",
        opacity : "1",
        transition : "0.25s ease-in-out",
        zIndex : "10",
        [theme.breakpoints.down('sm')]: {
          height : "60px",
        },
      },
      appBarColor : {
        height : "80px",
        boxShadow : "0px 0px 21px 0px rgb(0 102 157 / 10%)",
        backgroundColor : "white",
        opacity : "1",
        transition : "0.25s ease-in-out",
        zIndex : "10",
        [theme.breakpoints.down('sm')]: {
          height : "60px",
        },
      },
      navLinkDrawer : {
        color : "#2B2B2B",
        textDecoration : "none",
        opacity : "1",
        transition : "0.25s ease-in-out"
      },
      navLink : {
        color : "white",
        textDecoration : "none",
        opacity : "1",
        transition : "0.25s ease-in-out"
      },
      mainNavLink : {
        color : "white",
           fontFamily : "'Poppins', sans-serif",
        fontWeight : "700",
        textDecoration : "none",
        "&:hover":{
            textDecoration : "none"
        },
        opacity : "1",
        transition : "0.25s ease-in-out"
      },
      navLinkColor : {
        color : "#2B2B2B",
        textDecoration : "none",
        opacity : "1",
        transition : "0.25s ease-in-out"
      },
      mainNavLinkColor : {
        color : "#2B2B2B",
           fontFamily : "'Poppins', sans-serif",
        fontWeight : "700",
        textDecoration : "none",
        "&:hover":{
            textDecoration : "none"
        },
        opacity : "1",
        transition : "0.25s ease-in-out"
      },
      title: {
        flexGrow: 1,
      },
      drawer: {
        width: drawerWidth,
        flexShrink: 0,
      },
      drawerPaper: {
        width: drawerWidth,
      },
      drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-start',
      },
      topNavbar : {
        [theme.breakpoints.down('sm')]: {
            display : "none"
          },
      },
      hamburger : {
          color : "rgba(61,61,61,0.69)",
        [theme.breakpoints.down('sm')]: {
            display : "block"
          },
          [theme.breakpoints.up('md')]: {
            display : "none"
          },
      },
    }));

    const drawerWidth = 260;


const NavbarComponent = () => {
    const classes = useStyles()
    const theme = useTheme();
    const [open, setOpen] = React.useState(false)
    const handleDrawerOpen = () => {
        setOpen(true);
      };
    
      const handleDrawerClose = () => {
        setOpen(false);
      };

      const [colorChange, setColorchange] = useState(false);
      const changeNavbarColor = () =>{
         if(window.scrollY >= 80){
           setColorchange(true);
         }
         else{
           setColorchange(false);
         }
      };
      window.addEventListener('scroll', changeNavbarColor);

    return (
      <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={ colorChange ? clsx(classes.appBarColor, {
            [classes.appBarShift]: open,
          }) : clsx(classes.appBar, {
            [classes.appBarShift]: open,
          }) }
        // style={{backgroundColor: window.scrollY > 1000 ? "white" : "transparent"}}
      >
          <Container>
          <Toolbar className = {classes.toolbar} >
          <Typography variant="h6" noWrap className={classes.title}>
              <Link to = "/" className = { colorChange ? classes.mainNavLinkColor : classes.mainNavLink} >
                 Jishan Shaikh
                </Link>
          
          </Typography>
           <div className = {classes.topNavbar} >
            <Button color="inherit">
                    <Link to = "/" className = { colorChange ? classes.mainNavLinkColor : classes.mainNavLink} >
                        Home
                    </Link>
                </Button>
                <Button color="inherit">
                    <Link to = "/services" className = { colorChange ? classes.mainNavLinkColor : classes.mainNavLink} >
                        Services
                    </Link>
                </Button>
                <Button color="inherit">
                    <Link to = "/about" className = { colorChange ? classes.mainNavLinkColor : classes.mainNavLink} >
                        About
                    </Link>
                </Button>
                <Button color="inherit">
                    <Link to = "/development" className = { colorChange ? classes.mainNavLinkColor : classes.mainNavLink} >
                        Development
                    </Link>
                </Button>
                <Button color="inherit">
                    <Link to = "/design" className = { colorChange ? classes.mainNavLinkColor : classes.mainNavLink} >
                        Design
                    </Link>
                </Button>
           </div>
            <div className = {classes.hamburger} >
            <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            className={clsx(open && classes.hide)}
          >
            {/* <MenuIcon/> */}
            {
                colorChange ?  <MenuIcon style = {{color : "#2B2B2B"}} /> :  <MenuIcon style = {{color : "white"}} />
            }
          </IconButton>
            </div>
        </Toolbar>
          </Container>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
            <ListItem button >
              <ListItemText> 
                <Link className = {classes.navLinkDrawer} to = "/" ><b>
                Home
                  </b></Link> 
                </ListItemText>
            </ListItem>
           
            <ListItem button >
              <ListItemText> 
                <Link className = {classes.navLinkDrawer} to = "/services" ><b>Services</b></Link>
                 </ListItemText>
            </ListItem>

            <ListItem button >
              <ListItemText> 
                <Link className = {classes.navLinkDrawer} to = "/about" ><b>
                About
                  </b></Link> 
                </ListItemText>
            </ListItem>

            <ListItem button >
              <ListItemText> 
                <Link className = {classes.navLinkDrawer} to = "/development" ><b>
                Development
                  </b></Link> 
                </ListItemText>
            </ListItem>

            <ListItem button >
              <ListItemText> 
                <Link className = {classes.navLinkDrawer} to = "/design" ><b>
                Design
                  </b></Link> 
                </ListItemText>
            </ListItem>
        </List>
      </Drawer>
    </div>
    )
}

export default NavbarComponent