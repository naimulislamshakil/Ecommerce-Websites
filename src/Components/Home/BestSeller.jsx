import React from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import products from '../../Utils/BestSeller';
import ProductCard from './ProductCard';
import Slider from 'react-slick';

const BestSeller = () => {
	var settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		arrows: true,
	};
	return (
		<div className="container">
			<div className="row">
				{/* <div className="col-md-3 mt-4">
					<img src={Banner1} alt="Best Seller Product" className="rounded-2" />
				</div> */}
				<div className="col-md-12 mt-4">
					<div className="d-flex justify-content-between align-items-center">
						<div>
							<h3 className="secondary-font text-dark">BEST SELLERS</h3>
							<p
								className="text-black-50"
								style={{ fontSize: '14px', lineHeight: '.5px' }}
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

					{/* best seller product using swiper */}
					<Slider {...settings}>
						{products.map((productInfo, i) => (
							<ProductCard key={i} productInfo={productInfo} />
						))}
					</Slider>
				</div>
			</div>
		</div>
	);
};

export default BestSeller;
