import { Container, makeStyles } from '@material-ui/core'
import React from 'react'
import DevelopmentProjectArray from '../../components/data/DevelopmentProjectArray'
import ProjectLeft from '../../components/portfolio/ProjectLeft'
// import ProjectRight from '../../components/portfolio/ProjectRight'

const useStyles = makeStyles(theme => ({
    textHeader : {
        fontFamily : "'Poppins', sans-serif",
        fontSize : "15px",
        color : "#aca3ba",
        fontWeight : "700",
        textAlign : "center",
        lineHeight : "30px",
        marginBottom : "-30px"
    },
    textMain : {
        fontFamily : "'Poppins', sans-serif",
        fontSize : "48px",
        color : "#3f3849",
        fontWeight : "900",
        textAlign : "center",
        lineHeight : "60px",
    },
    customBtn : {
        lineHeight : "56px",
        padding : "0px 40px",
        fontSize : "16px",
        fontWeight : "600",
        fontFamily : "'Poppins', sans-serif",
        backgroundColor : "transparent",
        borderRadius : "4px",
        border : "2px solid #7d1eff" ,
        cursor:  "pointer",
        letterSpacing : "0em",
        transition : "0.25s ease-in-out",
        '&:hover' : {
            letterSpacing : "0.2em",
            transition : "0.25s ease-in-out"
        }
     },
}))

const DevelopmentPage = () => {
    const classes = useStyles()
    return (
        <Container style = {{padding : "70px 0px 100px 0px"}} >
            <div>
                <p className = {classes.textHeader} > PORTFOLIO </p>
            </div>
            <div>
                <p className = {classes.textMain} > See our latest <br /> <span style = {{color : "#7d1eff"}} >Development Projects</span> </p>
            </div>
          
          <div>
              {
                  <ProjectLeft data = {DevelopmentProjectArray[0]} />
              }
               
          </div>
          <div>
          </div>
        </Container>
    )
}

export default DevelopmentPage