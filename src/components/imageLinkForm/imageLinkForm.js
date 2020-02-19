import React from 'react';
import './imageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
	return (
		<div>
			<p className='f3'> 
				{`well somehow these flowers detect faces,`}
				<br/>
				{` if you think I'm crazy, try it out yourself!`}
			</p>
			<div className='center'> 
				<div className='form center pa4 br3 shadow-5'>
					<input 
						className='f4 pa1 w-70 bg-silver center' 
						type='text' 
						onChange={onInputChange} 
					/>
					<button 
						className='w-30 grow f4 link ph3 pv2 dib bg-silver' 
						onClick={onButtonSubmit}
					> find mine </button>
				</div>
			</div>
		</div>
	);
}

export default ImageLinkForm;