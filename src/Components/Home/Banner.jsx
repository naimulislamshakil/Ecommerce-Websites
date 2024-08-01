import React from 'react';
import SliedBanner1 from '../../images/slideBanner1.jpg';
import SliedBanner2 from '../../images/slideBanner2.jpg';
import SliedBanner3 from '../../images/slideBanner3.jpg';
import SliedBanner4 from '../../images/slideBanner4.jpg';
import SliedBanner5 from '../../images/slideBanner5.jpg';
import SliedBanner6 from '../../images/slideBanner6.jpg';
import SliedBanner7 from '../../images/slideBanner7.jpg';
import Slider from 'react-slick';

const Banner = () => {
	var settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
	};
	const banners = [
		{
			img: SliedBanner1,
		},
		{
			img: SliedBanner2,
		},
		{
			img: SliedBanner3,
		},
		{
			img: SliedBanner4,
		},
		{
			img: SliedBanner5,
		},
		{
			img: SliedBanner6,
		},
		{
			img: SliedBanner7,
		},
	];
	return (
		<div className="homeBanner">
			<div className="container-fluid">
				{/* <img src={SliedBanner5} className="w-100" alt="" /> */}

				<Slider {...settings}>
					{banners.map((banner, i) => (
						<div key={i}>
							<img src={banner?.img} className="w-100" alt="" />
						</div>
					))}
				</Slider>
			</div>
		</div>
	);
};

export default Banner;
