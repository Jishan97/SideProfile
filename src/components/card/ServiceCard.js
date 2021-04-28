import { makeStyles } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles(theme => ({
    root : {
        width : "95%",
        textAlign : "center",
        padding : "30px",
        margin : "20px auto",
        cursor : "default",
        boxShadow : "none",
        transition : "0.3s ease-in-out",
        borderRadius : "5px",
        '&:hover' : {
            transition : "0.3s ease-in-out",
            backgroundColor : "rgba(125, 30, 255, 0.1)",
            boxShadow : "0 30px 40px 0 rgb(212 217 232 / 20%)",
        }
    },
    title : {
        fontFamily : "'Poppins', sans-serif",
        fontSize : "22px",
        color : "#3f3849",
        fontWeight : "800",
        textAlign : "center",
        lineHeight : "32px",
        [theme.breakpoints.down('xs')]: {
            fontSize : "20px",
            lineHeight : "30px",
          },
    },
    // desc : {
    //     fontFamily : "'Poppins', sans-serif",
    //     fontSize : "16px",
    //     color : "#8d8698",
    //     fontWeight : "400",
    //     textAlign : "center",
    //     lineHeight : "28px",
    //       [theme.breakpoints.down('xs')]: {
    //         fontSize : "14px",
    //         lineHeight : "25px",
    //       },
    // }
}))

const ServiceCard = (props) => {
    const classes = useStyles()
    const {icon, title } = props.data 
    return (
        <div className = {classes.root} >
            <div>
                <img src = {icon} alt = "icon" width = "100px" />
            </div>
            <div>
                <p className = {classes.title} > {title} </p>
            </div>
            {/* <div>
                <p className = {classes.desc} > {desc} </p>
            </div> */}
        </div>
    )
}

export default ServiceCard