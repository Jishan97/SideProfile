import { Container, Grid, makeStyles } from '@material-ui/core'
import React from 'react'
import aboutGif from '../../assets/visual-data-pana.svg'

const useStyles = makeStyles(theme => ({
    textHeader : {
        fontFamily : "'Poppins', sans-serif",
        fontSize : "15px",
        color : "#aca3ba",
        fontWeight : "700",
        textAlign : "center",
        lineHeight : "30px",
        marginBottom : "-30px",
        [theme.breakpoints.down('sm')]: {
            fontSize : "14px",
          },
          [theme.breakpoints.down('sm')]: {
            fontSize : "12px",
          },
    },
    textMain : {
        fontFamily : "'Poppins', sans-serif",
        fontSize : "32px",
        color : "#3f3849",
        fontWeight : "900",
        textAlign : "center",
        lineHeight : "60px",
        [theme.breakpoints.down('sm')]: {
            fontSize : "30px",
            lineHeight : "55px",
          },
          [theme.breakpoints.down('xs')]: {
            fontSize : "28px",
            lineHeight : "50px",
          },
    },
    desc : {
        fontFamily : "'Poppins', sans-serif",
        fontSize : "16px",
        color : "#8d8698",
        fontWeight : "400",
        textAlign : "justify",
        lineHeight : "28px",
        [theme.breakpoints.down('xs')]: {
            fontSize : "14px",
            lineHeight : "25px",
          },
    },
    title : {
        fontFamily : "'Poppins', sans-serif",
        fontSize : "22px",
        color : "#3f3849",
        fontWeight : "700",
        textAlign : "justify",
        lineHeight : "28px",
        paddingTop : "30px",
    },

}))

const AboutComponent = () => {
    const classes = useStyles()
    return (
        <Container>
            <Grid container>
                <Grid item md = {7} xs = {12}>
                    <div>
                        <img src = {aboutGif} alt = "about" width = "100%" />
                    </div>
                </Grid>
                <Grid item md = {5} xs = {12}>
                    <div>
                    <div>
                        <p className = {classes.textHeader} > ABOUT ME </p>
                    </div>
                    <div>
                        <p className = {classes.textMain} > Hi! I'm   <span style = {{color : "#7d1eff"}} >Jishan Shaikh</span></p>
                    </div>
                    <div>
                        <p className = {classes.desc} > 
                        Let me introduce my Good Self, I am Jishan Shaikh. My right brain works better than the left, so I do what I do best - Create amazing immersive designs with your ideas and give vent to my Creativity. Technically proficient, easy to work with, and deliver apt visual results for my work.
                         </p>
                    </div>
                        <div>
                            <p className = {classes.title} >  Feel Free to Contact </p>
                        </div>
                        <div>
                            <p className = {classes.desc} > 
                                <b>Email : </b> shaikh.jishan@gmail.com
                            </p>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </Container>
    )
}

export default AboutComponent