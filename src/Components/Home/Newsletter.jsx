import React from 'react';
import Discount from '../../images/coupon.png';
import { Button } from '@mui/material';

const Newsletter = () => {
	return (
		<section className="container-fluid mb-5" style={{ background: '#233a95' }}>
			<div className="container">
				<div className="row">
					<div
						className="col-md-6 d-flex justify-content-center flex-column
align-items-start text-white"
					>
						<span>$20 discount for your first order</span>
						<h4>Join our newsletter and get...</h4>
						<small style={{ color: '#c9c9d8' }}>
							Join our email subscription now to get updates
						</small>

						<small style={{ color: '#c9c9d8' }}>
							on promotions and coupons.
						</small>

						<div>
							<div className="newsHeaderSearch" style={{ width: '400px' }}>
								<input type="text" placeholder="Enter Your Email...." />
								<Button className="w-100" variant="contained">
									SUBSCRIBE
								</Button>
							</div>
						</div>
					</div>
					<div
						className="col-md-6 d-flex justify-content-center flex-column
align-items-center"
					>
						<img className="w-100 mt-5" src={Discount} alt="" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Newsletter;
