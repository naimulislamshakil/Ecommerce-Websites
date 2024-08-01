import React from 'react';
import SliedBanner1 from '../../images/slideBanner1.jpg';
import SliedBanner2 from '../../images/slideBanner2.jpg';
import SliedBanner3 from '../../images/slideBanner3.jpg';
import SliedBanner4 from '../../images/slideBanner4.jpg';
import SliedBanner5 from '../../images/slideBanner5.jpg';
import SliedBanner6 from '../../images/slideBanner6.jpg';
import SliedBanner7 from '../../images/slideBanner7.jpg';

const Banner = () => {
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
		<div className="container-fluid">
			<img src={SliedBanner5} className="w-100" alt="" />
		</div>
	);
};

export default Banner;
