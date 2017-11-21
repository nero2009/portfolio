import React from 'react';
import WayPoint from 'react-waypoint'

class WhenInView extends React.Component{
	constructor(props){
		super(props)
		this.state ={
			isInView:false
		}
	}

	onEnter = ({perviousPosition}) =>{
		if(perviousPosition === WayPoint.below){
			this.setState({
				isInView:true
			})
		}
	}
	render(){
		return(
			<div>
				<WayPoint onEnter={this.onEnter}></WayPoint>
				{this.props.children({isInView: this.state.isInView})}
			</div>
			)
	}
}

export default WhenInView;