import React from 'react';
import './home.css';
import bannerKids from '../Assets/Frontend_Assets/kids_banner.jpeg';
import bannerMens from '../Assets/Frontend_Assets/men_banner.jpeg';
import bannerWomens from '../Assets/Frontend_Assets/womens_banner.png';
import { Link } from 'react-router-dom';

const Banner = () => {
	const data = [
		{
			text1: 'Kids Fashion',
			text2: 'Collaction!',
			para: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Repellat inventore voluptatibus vitae ipsa commodi odio.',
			button: 'Shop For Kids',
			buttonLink: '/kids',
			bannerImg: bannerKids,
		},
		{
			text1: 'Mens Fashion',
			text2: 'Collaction!',
			para: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Repellat inventore voluptatibus vitae ipsa commodi odio.',
			button: 'Shop For Mens',
			buttonLink: '/mens',
			bannerImg: bannerMens,
		},
		{
			text1: 'Womens Fashion',
			text2: 'Collaction!',
			para: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Repellat inventore voluptatibus vitae ipsa commodi odio.',
			button: 'Shop For Womens',
			buttonLink: '/Womens',
			bannerImg: bannerWomens,
		},
	];
	return (
		<div className="container-fluid">
			<div
				id="carouselExampleAutoplaying"
				class="carousel slide"
				data-bs-ride="carousel"
			>
				<div class="carousel-inner">
					{data.map((item, i) => (
						<div
							class={
								i === 0
									? 'carousel-item active banner_bg'
									: 'carousel-item banner_bg'
							}
						>
							<div className="container">
								<div className="row">
									<div className="col banner_text">
										<h2>{item?.text1}</h2>
										<h2>{item?.text2}</h2>
										<p>{item?.para}</p>

										<Link to={item?.buttonLink}>
											<button>{item?.button}</button>
										</Link>
									</div>
									<div className="col banner_design">
										<img src={item?.bannerImg} alt={item?.text1} />
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
				<button
					class="carousel-control-prev"
					type="button"
					data-bs-target="#carouselExampleAutoplaying"
					data-bs-slide="prev"
				>
					<span
						class="carousel-control-prev-icon black"
						aria-hidden="true"
					></span>
					<span class="visually-hidden">Previous</span>
				</button>
				<button
					class="carousel-control-next"
					type="button"
					data-bs-target="#carouselExampleAutoplaying"
					data-bs-slide="next"
				>
					<span class="carousel-control-next-icon" aria-hidden="true"></span>
					<span class="visually-hidden">Next</span>
				</button>
			</div>
		</div>
	);
};

export default Banner;
