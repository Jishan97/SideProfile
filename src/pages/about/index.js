import { Container } from '@material-ui/core'
import React from 'react'
import AboutComponent from '../../components/about/AboutComponent'

const AboutPage = () => {
    return (
        <Container style = {{padding : "100px 0px"}} >
            <AboutComponent />
        </Container>
    )
}

export default AboutPage