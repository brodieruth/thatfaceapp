import React from 'react';
import Tilt from 'react-tilt';
import flowers from './flower.png'
import './logo.css';

const Logo = () => {
	return (
		<div className= 'ma4 mt0'>
			<Tilt className="Tilt br2 shadow-2" options={{ max : 45 }} style={{ height: 170, width: 170 }} >
	        	<div className="Tilt-inner pa3"> 
	        		<img style={{paddingTop:'20px'}} alt='logo'src={flowers}/>
	        	</div>
	      	</Tilt>
		</div>
	);
}

export default Logo;