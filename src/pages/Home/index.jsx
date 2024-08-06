import React from 'react';
import Banner from '../../Components/Home/Banner';
import BestSeller from '../../Components/Home/BestSeller';
import TakeCare from '../../Components/Home/TakeCare';
import SpecelOffer from '../../Components/Home/SpecelOffer';
import FeturePost from '../../Components/Home/FeturePost';
import FetureProduct from '../../Components/Home/FetureProduct';
import Save from '../../Components/Home/Save';

const Home = () => {
	return (
		<>
			<Banner />
			<BestSeller />
			<TakeCare />
			<SpecelOffer />
			<FeturePost />
			<FetureProduct />
			<Save />
		</>
	);
};

export default Home;
