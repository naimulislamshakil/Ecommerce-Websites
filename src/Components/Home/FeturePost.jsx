import React from 'react';
import FeturePost1 from '../../images/banner3.jpg';
import FeturePost2 from '../../images/banner4.jpg';

const FeturePost = () => {
	return (
		<div className="container mb-5">
			<div className="row">
				<div className="col-md-6">
					<img src={FeturePost1} className="w-100 rounded" alt="" />
				</div>
				<div className="col-md-6">
					<img src={FeturePost2} className="w-100 rounded" alt="" />
				</div>
			</div>
		</div>
	);
};

export default FeturePost;
