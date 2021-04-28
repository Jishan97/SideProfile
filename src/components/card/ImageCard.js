import { makeStyles } from '@material-ui/core'
import React, { useState } from 'react'

const useStyles = makeStyles(theme => ({
    imgContainer : {
        textAlign : "center",
        cursor : "pointer",
        position : "relative",
        margin : "0 auto",
        display : "flex",
        justifyContent : "center",
        width : "95%",
        height : "100%",
        overflow : "hidden",
        transition : "0.4s ease-in-out"
    },
    imgShow : {
        width : "100%",
        height : "100%",
        margin : "0px auto",
        textAlign : "center",
        overflow : "hidden",
        // padding : "10px",
        [theme.breakpoints.down('xs')]: {
            width : "100%"
        },
        transition : "0.4s ease-in-out"
    },
    inner : {
        position : "absolute",
        // padding : "10px",
        height : "100%",
        width : "100%",
        display : "flex",
        justifyContent : "center",
        alignItems : "center",
        // backgroundColor : "rgb(125, 30, 255, 0.35)",
        backgroundColor : "rgba(43, 43, 43, 0.4)",
        flexDirection : "column",
        transition : "0.4s ease-in-out"
    },
    textHeader : {
        fontFamily : "'Poppins', sans-serif",
        fontSize : "15px",
        color : "white",
        fontWeight : "700",
        textAlign : "center",
        lineHeight : "17px",
        transition : "0.4s ease-in-out"
    },
    textMain : {
        fontFamily : "'Poppins', sans-serif",
        fontSize : "32px",
        color : "white",
        fontWeight : "800",
        textAlign : "center",
        lineHeight : "35px",
        margin : "0px",
        transition : "0.4s ease-in-out"
    },
}))

const ImageCard = (props) => {
    const classes = useStyles()
    const [hover, setHover] = useState(false)
    
    return (
        <div style = {{margin : "10px 0px"}} >  
           {
               props.img && (
                <div  
                    className = {classes.imgContainer}
                    onMouseEnter = {() => setHover(true)}  
                    onMouseLeave = {() => setHover(false)}
                    onClick = {() => props.openLightbox(props.img.id - 1)}
                    >
                   
                    <img src = {props.img.src} alt = {props.img.name} className = {classes.imgShow} style = {{transform : `${hover ? 'scale(1.1)' : 'scale(1, 1)'}`}} />


                    <div className = {classes.inner} style = {{opacity : `${hover ? '1' : '0'}`}} >
                        <div>
                            <p className = {classes.textMain} >{props.img.name}</p>
                        </div>
                        <div>
                            <p className = {classes.textHeader} >{props.img.tag}</p>
                            </div>
                    </div>
                    </div>
               )
           }
        </div>
    )
}

export default ImageCard