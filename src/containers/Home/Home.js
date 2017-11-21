import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Nero from '../../assets/our-story.jpg'
import {Image,HeroImage, RevealP} from './Home.style'
import {Container} from '../../themes/grid'
import { Fade, Flip, Rotate, Zoom } from 'react-reveal';
import WhenInView from '../../components/WhenInView/WhenInView'



class Home extends Component{
	

	render(){
		return(
			<Container>
				<HeroImage>
					<h1>Nero Adaware</h1>
					<h2>Front-end Developer</h2>
				</HeroImage>
				<Fade top> 
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis recusandae deserunt saepe reprehenderit, a esse at? Impedit non repellendus omnis officia illum ducimus eaque, ipsa at neque, harum maxime unde!
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis recusandae deserunt saepe reprehenderit, a esse at? Impedit non repellendus omnis officia illum ducimus eaque, ipsa at neque, harum maxime unde!
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis recusandae deserunt saepe reprehenderit, a esse at? Impedit non repellendus omnis officia illum ducimus eaque, ipsa at neque, harum maxime unde!
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis recusandae deserunt saepe reprehenderit, a esse at? Impedit non repellendus omnis officia illum ducimus eaque, ipsa at neque, harum maxime unde!

				</Fade>
				<Fade top> 
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis recusandae deserunt saepe reprehenderit, a esse at? Impedit non repellendus omnis officia illum ducimus eaque, ipsa at neque, harum maxime unde!
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis recusandae deserunt saepe reprehenderit, a esse at? Impedit non repellendus omnis officia illum ducimus eaque, ipsa at neque, harum maxime unde!
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis recusandae deserunt saepe reprehenderit, a esse at? Impedit non repellendus omnis officia illum ducimus eaque, ipsa at neque, harum maxime unde!
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis recusandae deserunt saepe reprehenderit, a esse at? Impedit non repellendus omnis officia illum ducimus eaque, ipsa at neque, harum maxime unde!

				</Fade>
				<Fade top> 
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis recusandae deserunt saepe reprehenderit, a esse at? Impedit non repellendus omnis officia illum ducimus eaque, ipsa at neque, harum maxime unde!
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis recusandae deserunt saepe reprehenderit, a esse at? Impedit non repellendus omnis officia illum ducimus eaque, ipsa at neque, harum maxime unde!
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis recusandae deserunt saepe reprehenderit, a esse at? Impedit non repellendus omnis officia illum ducimus eaque, ipsa at neque, harum maxime unde!
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis recusandae deserunt saepe reprehenderit, a esse at? Impedit non repellendus omnis officia illum ducimus eaque, ipsa at neque, harum maxime unde!

				</Fade>
				<Fade top> 
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis recusandae deserunt saepe reprehenderit, a esse at? Impedit non repellendus omnis officia illum ducimus eaque, ipsa at neque, harum maxime unde!
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis recusandae deserunt saepe reprehenderit, a esse at? Impedit non repellendus omnis officia illum ducimus eaque, ipsa at neque, harum maxime unde!
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis recusandae deserunt saepe reprehenderit, a esse at? Impedit non repellendus omnis officia illum ducimus eaque, ipsa at neque, harum maxime unde!
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis recusandae deserunt saepe reprehenderit, a esse at? Impedit non repellendus omnis officia illum ducimus eaque, ipsa at neque, harum maxime unde!

				</Fade>
				
				
			</Container>
			)
	}
}

export default Home