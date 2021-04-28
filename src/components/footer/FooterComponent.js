import { Container, Grid, makeStyles } from '@material-ui/core'
import { Instagram } from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
    root : {
        backgroundColor : "#363636"
    },
    name : {
        fontFamily : "'Poppins', sans-serif",
        fontSize : "32px",
        color : "white",
        fontWeight : "800",
        textAlign : "left",
        lineHeight : "35px",
        marginBottom : "20px",
        marginTop : "0px",
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
        color : "white",
        fontWeight : "400",
        textAlign : "justify",
        lineHeight : "28px",
        margin : "5px 0px",
        [theme.breakpoints.down('xs')]: {
            fontSize : "14px",
            lineHeight : "25px",
          },
     
    },
    desc2 : {
        fontFamily : "'Poppins', sans-serif",
        fontSize : "16px",
        color : "white",
        fontWeight : "400",
        textAlign : "justify",
        lineHeight : "28px",
        margin : "5px 0px",
        TextDecoration : "none",
        [theme.breakpoints.down('xs')]: {
            fontSize : "14px",
            lineHeight : "25px",
          },
          '&:hover' : {
            color : "rgba(255, 255, 255, 0.6)"
        }
    },
    header : {
        fontFamily : "'Poppins', sans-serif",
        fontSize : "22px",
        color : "white",
        fontWeight : "700",
        textAlign : "left",
        lineHeight : "25px",
        marginTop : "0px",
        [theme.breakpoints.down('xs')]: {
            fontSize : "18px",
            lineHeight : "20px",
          },
    },
    socialIcon : {
        color : "white",
        fontSize : "34px"
    },
    linkStyle : {
        textDecoration : "none",
        '&:hover' : {
            // color : "rgba(255, 255, 255, 0.8)"
            color : "red"
        }
    }
}))

const FooterComponent = () => {
    const classes = useStyles()
    return (
        <div className = {classes.root} >
            <Container>
                <Grid container style = {{padding : "100px 0px"}} >
                    <Grid item md = {4} sm = {6} xs = {12} style = {{padding : "15px 20px"}} >
                        <div>
                            <p className = {classes.name} >Jishan Shaikh</p>
                            <p className = {classes.desc}>Let me introduce my Good Self, I am Jishan Shaikh. My right brain works better than the left, so I do what I do best - Create amazing immersive designs with your ideas and give vent to my Creativity. Technically proficient, easy to work with, and deliver apt visual results for my work.</p>
                        </div>
                    </Grid>
                    <Grid item md = {4} sm = {6} xs = {12} style = {{padding : "15px 20px"}} >
                        <div>
                            <p className = {classes.header} >Start a conversation</p>
                            <p className = {classes.desc}> <b>Email - </b> shaikh.jishan@gmail.com</p>
                        </div>
                        <div>
                            <p className = {classes.header} style = {{paddingTop : "30px"}} >Social</p>
                            <Grid container >
                                <Grid item md = {3} sm = {3} xs = {3} >
                                    <Instagram className = {classes.socialIcon} />
                                </Grid>
                                <Grid item md = {3} sm = {3} xs = {3} >
                                    <Instagram className = {classes.socialIcon} />
                                </Grid>
                                <Grid item md = {3} sm = {3} xs = {3} >
                                    <Instagram className = {classes.socialIcon} />
                                </Grid>
                                <Grid item md = {3} sm = {3} xs = {3} >
                                    <Instagram className = {classes.socialIcon} />
                                </Grid>
                            </Grid>
                        </div>
                    </Grid>
                    <Grid item md = {4} sm = {6} xs = {12} style = {{padding : "15px 20px"}} >
                        <div>
                            <p className = {classes.header} >Quick Links</p>
                            <Link to = "/" className = {classes.linkStyle} > 
                                <p className = {classes.desc2}>
                                    Home
                                </p> 
                            </Link>
                            <Link to = "/services" className = {classes.linkStyle} > 
                                <p className = {classes.desc2}>
                                    Services
                                </p> 
                            </Link>
                            <Link to = "/about" className = {classes.linkStyle} > 
                                <p className = {classes.desc2}>
                                    About
                                </p> 
                            </Link>
                            <Link to = "/development" className = {classes.linkStyle} > 
                                <p className = {classes.desc2}>
                                    Development
                                </p> 
                            </Link>
                            <Link to = "/design" className = {classes.linkStyle} > 
                                <p className = {classes.desc2}>
                                    Design
                                </p> 
                            </Link>
                        </div>
                    </Grid>
                </Grid>
                <div style = {{textAlign : "center", paddingBottom : "70px"}} >
                    <p className = {classes.desc} style = {{fontSize : "14px", textAlign : "center"}} >Copyright © 2021 Portfolio - Website by Jishan Shaikh</p>
                </div>
            </Container>
        </div>
    )
}

export default FooterComponent