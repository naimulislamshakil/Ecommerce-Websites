import React from 'react';
import Banner1 from '../../images/banner1.jpg';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
const BestSeller = () => {
	return (
		<div className="container">
			<div className="row">
				<div className="col-md-3 mt-4">
					<img src={Banner1} alt="Best Seller Product" className="rounded-2" />
				</div>
				<div className="col-md-9 mt-4">
					<div className="d-flex justify-content-between align-items-center">
						<div>
							<h3 className="secondary-font text-dark">BEST SELLERS</h3>
							<p
								className="text-black-50"
								style={{ fontSize: '14px', lineHeight: '.3px' }}
							>
								Do not miss the current offers until the end of March.
							</p>
						</div>

						<Button className="view-all">
							<Link
								to="/"
								className="text-decoration-none text-black-50 d-flex justify-content-center align-items-center"
							>
								View All
								<ArrowForwardIosOutlinedIcon
									style={{ fontSize: '16px', marginLeft: '5px' }}
								/>
							</Link>
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BestSeller;
