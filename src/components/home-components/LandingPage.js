import { Grid, makeStyles } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import bgImage from '../../assets/bg.svg'
import landingImage from '../../assets/landingImage.svg'
import ReactTextTransition, { presets } from "react-text-transition";

const useStyles = makeStyles(theme => ({
    root : {
        width : "100%",
        height : "100vh",
        backgroundColor : "#2B2B2B",
        overflow : "hidden",
        [theme.breakpoints.down('sm')]: {
            height : "100vh",
       },
       
    },
    mainBg : {
        backgroundImage : `url(${bgImage})`,
        height : "100vh",
        width : "100%",
        backgroundRepeat : "no-repeat",
        backgroundSize : "cover",
    },
    textFirst : {
        fontFamily : "'Poppins', sans-serif",
        fontSize : "42px",
        color : "white",
        fontWeight : "600",
        textAlign : "center",
        margin : "0px",
        [theme.breakpoints.down('sm')]: {
            fontSize : "32px",
            paddingTop : "50px",
          },
          [theme.breakpoints.down('xs')]: {
            fontSize : "22px",
            paddingTop : "100px",
          },
    },
    textBig : {
        fontFamily : "'Poppins', sans-serif",
        fontSize : "64px",
        color : "white",
        fontWeight : "700",
        textAlign : "center",
        display : "flex",
        justifyContent : "center",
        [theme.breakpoints.down('sm')]: {
            fontSize : "54px",
          },
          [theme.breakpoints.down('sm')]: {
            fontSize : "34px",
          },
    },
    imgRes : {
        height : "90vh", 
        width : "100%",
        [theme.breakpoints.down('xs')]: {
            height : "70vh", 
          },
    },
}))

const LandingPage = () => {
    const classes = useStyles()

    const [index, setIndex] = useState(0)

    useEffect(() => {
        const intervalId = setInterval(() =>
        setIndex(index => index + 1),
        3000 
      );
      return () => clearTimeout(intervalId);
    }, [])

    const multipleText = [
        "Jishan Shaikh",
        "FULLSTACK DEVELOPER",
        "FULLSTACK DESIGNER"
    ]

    return (
        <div className = {classes.root} > 
            <div className = {classes.mainBg} >
                <Grid container style = {{justifyContent : "center", alignItems : "center"}} >
                    <Grid item md = {6} xs = {12} style = {{justifyContent : "center", textAlign : "center"}} >
                        <div>
                            <p className = {classes.textFirst} >
                                HELLO! I'M
                            </p>
                            <div className={classes.textBig}>
                                <ReactTextTransition 
                                   text={multipleText[index % multipleText.length]}
                                   springConfig={presets.gentle}
                                 
                               />
                            </div>
                        </div>
                    </Grid>
                    <Grid item md = {6} xs = {12} style = {{justifyContent : "center", textAlign : "center"}}>
                        <img src = {landingImage} alt = "landing" className = {classes.imgRes} />
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default LandingPage