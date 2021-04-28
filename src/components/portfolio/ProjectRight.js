import { Container, Grid, makeStyles } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles(theme => ({
    root : {
        cursor : "default",
        padding : "80px 0px"
    },
    textHeader : {
        fontFamily : "'Poppins', sans-serif",
        fontSize : "15px",
        color : "#aca3ba",
        fontWeight : "700",
        textAlign : "center",
        lineHeight : "30px",
        marginBottom : "-40px"
    },
    textMain : {
        fontFamily : "'Poppins', sans-serif",
        fontSize : "32px",
        color : "#3f3849",
        fontWeight : "900",
        textAlign : "center",
        lineHeight : "60px",
    },
    desc : {
        fontFamily : "'Poppins', sans-serif",
        fontSize : "16px",
        color : "#8d8698",
        fontWeight : "400",
        textAlign : "justify",
        lineHeight : "28px",
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
    textSec : {
        padding : "0px 30px 0px 30px",
        marginBottom : "30px",
        [theme.breakpoints.down('xs')]: {
            padding : "0px 10px"
        },
        transition : "0.25s ease-in-out",
        '&:hover' : {
            marginTop : "-10px",
            transition : "0.25s ease-in-out"
        }
    },
    img : {
        width : "95%", 
        textAlign : "center", 
        margin : "0 auto",
        [theme.breakpoints.down('xs')]: {
            width : "100%", 
        }
    },
    imgStyle : {
        width : "90%", 
        textAlign : "center", 
        margin : "0 auto",
        transition : "0.25s ease-in-out",
        '&:hover' : {
            marginTop : "-10px",
            transition : "0.25s ease-in-out"
        }
    }
}))
const ProjectRight = (props) => {
    const classes = useStyles()
    const { title, tag, desc, image } = props.data
    return (
        <Container className = {classes.root} >
            <Grid container >
                <Grid item md = {7} xs = {12}  >
                    <div style = {{textAlign : "center"}}>
                        <img src = {image} alt = 'mockup' className = {classes.imgStyle} />
                    </div>
                </Grid>
                <Grid item md = {5} xs = {12} >
                    <div className = {classes.textSec} >
                        <div>
                            <p className = {classes.textHeader} > {tag} </p>
                        </div>
                        <div>
                            {/* <p className = {classes.textMain} > {title} </p> */}
                            <p className = {classes.textMain} ><span style = {{color : "#7d1eff"}} >{title}</span></p>
                        </div>
                        <div>
                            <p className = {classes.desc} >
                                {desc}
                            </p>
                        </div>
                        <div style = {{marginTop : "50px"}} >
                            <button className = {classes.customBtn} > View Project </button>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </Container>
    )
}
export default ProjectRight