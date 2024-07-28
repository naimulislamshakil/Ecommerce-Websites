import React from 'react';
import './home.css';
import new_collections from '../Assets/Frontend_Assets/new_collections';
import Item from './Item';
const NewCollaction = () => {
	return (
		<section className="container">
			<div className="d-flex flex-column align-items-center justify-content-center new_collaction">
				<h2 className="mt-4">New Collaction</h2>
				<hr />

				<div className="row">
					{new_collections.map((item) => (
						<Item item={item} />
					))}
				</div>
			</div>
		</section>
	);
};

export default NewCollaction;
