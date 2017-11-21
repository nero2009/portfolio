import React from 'react';
import ReactDOM from 'react-dom';
import Home from './containers/Home/Home.js';
import Projects from './containers/Projects/Projects.js';
import AboutMe from './containers/AboutMe/AboutMe.js';
import { BrowserRouter as Router,withRouter} from 'react-router-dom';
import {Link, Route} from 'react-router-dom';
import {Background} from './containers/App/App.style'
import NavigationBar from './components/NavigationBar/NavigationBar'
import ReallySmoothScroll from 'really-smooth-scroll'

import './themes/globalStyle'

ReallySmoothScroll.shim();

const App=(
	<Router>
		<div>
			<Background/>
			<NavigationBar/>
			<Route path="/" exact component={Home}/>
			<Route path="/projects" component={Projects}/>
			<Route path="/about" component={AboutMe}/>
		</div>
	</Router>
	)


ReactDOM.render(
	App,document.getElementById('root'));

