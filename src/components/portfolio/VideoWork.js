import { Container, Grid, makeStyles } from '@material-ui/core'
import React from 'react'
import VideoWorkArray from '../data/VideoWorkArray';

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
        fontSize : "48px",
        color : "#3f3849",
        fontWeight : "900",
        textAlign : "center",
        lineHeight : "60px",
        [theme.breakpoints.down('sm')]: {
            fontSize : "38px",
            lineHeight : "50px",
          },
          [theme.breakpoints.down('xs')]: {
            fontSize : "32px",
            lineHeight : "45px",
          },
    },
    video : {
        width : "100%",
        padding : "30px",
        margin : "0 auto",
        [theme.breakpoints.down('xs')]: {
            padding : "10px",
          },
    }
}))

const VideoWork = () => {
    const classes = useStyles()
    return (
        <Container style = {{padding : "100px 0px"}} >
        <div>
            <p className = {classes.textHeader} > PORTFOLIO </p>
        </div>
        <div>
            <p className = {classes.textMain} > See our latest <br /> <span style = {{color : "#7d1eff"}} >Video Projects</span> </p>
        </div>
        
        <div>
            <Grid container style = {{justifyContent : "center"}} >
               {
                   VideoWorkArray.map(video => (
                       <Grid key = {video.id} item md = {6} xs = {12}  >
                             <video className = {classes.video} poster = {video.poster} controls>
                            <source src={video.video} type="video/mp4" />
                        </video>
                       </Grid>
                   ))
               }
            </Grid>
        </div>

    </Container>
    )
}

export default VideoWork