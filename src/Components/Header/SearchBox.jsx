import { Button } from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import React from 'react';

const SearchBox = () => {
	return (
		<>
			<div className="headerSearch">
				<input type="text" placeholder="Search For Products...." />
				<Button>
					<SearchOutlinedIcon
						className="mx-auto text-black"
						style={{ fontSize: '30px' }}
					/>
				</Button>
			</div>
		</>
	);
};

export default SearchBox;
