import { Button } from '@mui/material';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import React from 'react';

const Country = () => {
	return (
		<>
			<Button variant="text" className="contry">
				<div className="info d-flex flex-column">
					<span className="label">Your Location</span>
					<span className="name">Bangladesh</span>
				</div>
				<span className="arrow-Icon">
					<ExpandMoreOutlinedIcon />
				</span>
			</Button>
		</>
	);
};

export default Country;
