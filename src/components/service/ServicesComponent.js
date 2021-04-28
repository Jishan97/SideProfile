import { Container, Grid, makeStyles } from '@material-ui/core'
import React from 'react'
import ServiceCard from '../card/ServiceCard'
import ServiceArray from '../data/ServiceArray'

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
}))

const ServicesComponent = () => {
    const classes = useStyles()
    return (
        <Container style = {{padding : "150px 0px"}} >
            <div>
                <p className = {classes.textHeader} > WHAT I DO </p>
            </div>
            <div>
                <p className = {classes.textMain} > New, Improved <br /> <span style = {{color : "#7d1eff"}} >Design</span> &  <span style = {{color : "#7d1eff"}} >Development</span></p>
            </div>
            <div>
               <Grid container >
               {
                    ServiceArray.map(service => (
                        <Grid key = {service.id} item md = {4} sm = {6} xs = {12} >
                            <ServiceCard data = {service} />
                        </Grid>
                    ))
                }
               </Grid>
            </div>
        </Container>
    )
}

export default ServicesComponent