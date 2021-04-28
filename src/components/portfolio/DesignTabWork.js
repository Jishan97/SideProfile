import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ShowGallary from './ShowGallary';
import { business_card, design_all, flyer_design, logo_Design } from '../data/DesignWorkArray';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };

  function a11yProps(index) {
    return {
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
    };
  }

  const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: "transparent",
    //   backgroundColor: theme.palette.background.paper,
      width: "100%"
    },
    tabsBtn : {
        color : "#3f3849",
        boxShadow : "none",
        fontFamily : "'Poppins', sans-serif",
        fontWeight : "700",
        fontSize : "16px",
        '&:hover' : {
          color : "rgb(125, 30, 255)"
        },
          '&:active' : {
              color : "rgb(125, 30, 255)"
          },
          '&:focus' : {
            color : "rgb(125, 30, 255)"
        },
        [theme.breakpoints.down('sm')]: {
          fontSize : "14px",
        },
    }
  }));

const DesignTabWork = () => {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    const handleChangeIndex = (index) => {
      setValue(index);
    };
    
    const tabs = [
        "All",
        "Logo Design",
        "Flyers",
        "Business Card"
    ]
  
    return (
          <div className={classes.root}>
        <AppBar position="static" color="default"  style = {{boxShadow : "none", backgroundColor : "transparent"}}>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            aria-label="full width tabs example"
          >
              {
                  tabs.map((ele, i) => (
                    <Tab key = {i} label={ele} {...a11yProps(i)} className = {classes.tabsBtn} />
                  ))
              }
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            {
                <ShowGallary data = {design_all} />
            }
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
          {
                <ShowGallary data = {logo_Design} />
            }
          </TabPanel>
          <TabPanel value={value} index={2} dir={theme.direction}>
          {
                <ShowGallary data = {flyer_design} />
            }
          </TabPanel>
          <TabPanel value={value} index={3} dir={theme.direction}>
          {
                <ShowGallary data = {business_card} />
            }
          </TabPanel>
        </SwipeableViews>
      </div>
    );
}

export default DesignTabWork