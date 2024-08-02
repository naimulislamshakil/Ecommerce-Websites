import React from 'react';
import BannerBox from '../../images/banner-box2.jpg';

const TakeCare = () => {
	return (
		<section className="container my-5">
			<div
				className="row rounded px-5 d-flex align-items-center"
				style={{ backgroundColor: '#f8efea' }}
			>
				<div className="col-sm-6">
					<h5 className="text-success">
						<strong>100% Secure delivery</strong> without contacting the courier
					</h5>
				</div>
				<div className="col-sm-3">
					<img src={BannerBox} alt="" className="w-100" />
				</div>
				<div className="col-sm-3 text-center">
					<button
						type="button"
						class="btn btn-success px-5"
						style={{ borderRadius: '45px', fontSize: '12px' }}
					>
						SHOP NOW
					</button>
				</div>
			</div>
		</section>
	);
};

export default TakeCare;
