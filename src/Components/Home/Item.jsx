import React from 'react';

const Item = ({ item }) => {
	console.log({ item });
	return (
		<div className="col-lg-3 col-md-6">
			<div class="card mb-3">
				<img class="card-img-top" src={item?.image} alt="Card image cap" />
				<div class="card-body">
					<h5 class="card-title">{item?.name}</h5>
					<span style={{ fontSize: '16px' }}>${item?.new_price}</span>
					<span
						style={{
							fontSize: '16px',
							marginLeft: '25px',
							textDecoration: 'line-through',
							color: 'red',
						}}
					>
						${item?.old_price}
					</span>
				</div>
			</div>
		</div>
	);
};

export default Item;
