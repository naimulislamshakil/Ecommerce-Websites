import React from 'react';

const Header = ({ title, subTitle }) => {
	return (
		<div style={{ margin: '27px 20px' }}>
			<h2 className="primary-font text-uppercase fw-bold text-black-50 fs-3">
				{title}
			</h2>
			<h5 className="primary-font text-uppercase fw-bold text-black-50 fs-6">
				{subTitle}
			</h5>
		</div>
	);
};

export default Header;
