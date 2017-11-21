import React, { Component } from 'react';
import {Container,Flex} from '../../themes/grid'
import {Title} from './AboutMe.style'
import ReactPlayer from 'react-player';
import {H2} from '../../themes/types'

class AboutMe extends Component {
    render() {
        return (
            <Container>
                <Title>About me</Title>
                <H2 align="right">Whaa? Do you play sport? Hell yeah I do</H2>
                <Flex>
	                <p >Check this out </p>
	                <ReactPlayer
	                	  
		                controls
		                url={require('../../assets/nero.mp4')}/>
	            </Flex>
            </Container>
        );
    }
}

export default AboutMe;