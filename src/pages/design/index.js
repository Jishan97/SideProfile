import { Container } from '@material-ui/core'
import React from 'react'
import DesignWork from '../../components/portfolio/DesignWork'
import VideoWork from '../../components/portfolio/VideoWork'

const DesignPage = () => {
    return (
        <Container>
            <DesignWork />
            <VideoWork />
        </Container>
    )
}

export default DesignPage