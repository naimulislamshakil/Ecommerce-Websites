import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import products from '../../Utils/BestSeller';
import ProductCard from './ProductCard';

const SpecelOffer = () => {
	return (
		<section className="container mb-5">
			<div className="row">
				<div className="col-sm-12">
					<div className="d-flex justify-content-between align-items-center">
						<div>
							<h3 className="secondary-font text-dark text-uppercase">
								Special Offers{' '}
								<strong className="text-danger">of the week!</strong>
							</h3>
							<p
								className="text-black-50"
								style={{ fontSize: '14px', lineHeight: '0.8px' }}
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

					{/* Shop Product */}

					<div className="row">
						{products?.slice(0, 8)?.map((productInfo, i) => (
							<div className="col-md-3 mx-auto" key={i}>
								<ProductCard productInfo={productInfo} />
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default SpecelOffer;
