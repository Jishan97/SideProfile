import { Grid } from '@material-ui/core'
// import { Grid, makeStyles } from '@material-ui/core'
import React, { useState } from 'react'
import Lightbox from 'react-image-lightbox'
import "react-image-lightbox/style.css";
import ImageCard from '../card/ImageCard';

const ShowGallary = (props) => {

    const [currentImage, setCurrentImage] = useState(0)
    const [viewIsOpen, setViewIsOpen] = useState(false)

    const openLightbox = (img) => {
        setCurrentImage(img)
        setViewIsOpen(true)
      }

    const closeLightBox = () => {
        setCurrentImage(0)
        setViewIsOpen(false)
    }

    return (
        <div>
           <Grid container style = {{justifyContent : "center"}} >
                {
                    props.data && props.data.map((img, i) => (
                        <Grid key = {i} item md = {4} sm = {6} xs = {12}  >
                          {
                              img &&  <ImageCard img = {img} index = {i} openLightbox = {openLightbox} />
                          }
                        </Grid>
                    ))
                }
            </Grid>
           {
               props.data &&  viewIsOpen && (
                   <Lightbox 
                        imagePadding = {50}
                        enableZoom = {false}
                        style = {{zIndex : "10"}}
                        mainSrc={props.data[currentImage].src}
                        onCloseRequest={closeLightBox}
                        reactModalStyle = {{zIndex : "10"}}
                   />
               )
           }
           
        </div>
    )
}

export default ShowGallary