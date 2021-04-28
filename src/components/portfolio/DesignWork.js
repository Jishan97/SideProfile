import { Container, makeStyles } from '@material-ui/core'
import React from 'react'
import DesignTabWork from './DesignTabWork'

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

const DesignWork = () => {
    const classes = useStyles()
    return (
        <Container style = {{padding : "70px 0px"}} >
           <div>
           <div>
                <p className = {classes.textHeader} > PORTFOLIO </p>
            </div>
            <div>
                <p className = {classes.textMain} > See our latest <br /> <span style = {{color : "#7d1eff"}} >Designing Projects</span> </p>
            </div>
           </div>

           <div>
               <DesignTabWork />
           </div>
        </Container>
    )
}

export default DesignWork