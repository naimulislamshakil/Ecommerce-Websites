import ZoomOutMapOutlinedIcon from '@mui/icons-material/ZoomOutMapOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { Rating } from '@mui/material';
import React from 'react';

const ProductCard = ({ productInfo }) => {
	console.log({ productInfo });
	return (
		<div class="card mt-4 me-2 cardWrraper">
			<div className="imgWrraper">
				<img
					class="card-img-top w-100"
					src={productInfo?.img}
					alt={productInfo?.title}
				/>
				<span className="secondary-font custom-badge">28% OFF</span>

				<div className="d-flex flex-column hover-icon-root">
					<ZoomOutMapOutlinedIcon
						className="hover-icon"
						style={{ fontSize: '35px' }}
					/>

					<FavoriteBorderOutlinedIcon
						className="hover-icon mt-3"
						style={{ fontSize: '35px' }}
					/>
				</div>
			</div>
			<div class="card-body d-flex flex-column">
				<h5 class="card-title primary-font title">{productInfo?.title}</h5>
				{productInfo?.inStock === 1 ? (
					<small className="fw-bold secondary-font text-success">
						IN STOCK
					</small>
				) : (
					<small className="fw-bold secondary-font text-warning">
						OUT OF STOCK
					</small>
				)}

				<div className="d-flex align-items-center">
					<Rating
						name="read-only"
						size="small"
						value={productInfo?.ratting}
						readOnly
						className="mt-2"
					/>

					<small className="mt-2 ms-2">{productInfo?.givenRetting}</small>
				</div>

				<div className="d-flex align-items-center mt-3">
					<span
						className="me-5 secondary-font text-secondary"
						style={{ fontSize: '18px', textDecoration: 'line-through' }}
					>
						${productInfo?.oldPrice}
					</span>
					<span
						className=" secondary-font text-success"
						style={{ fontSize: '18px' }}
					>
						${productInfo?.newPrice}
					</span>
				</div>

				<button
					type="button"
					class="btn btn-outline-success mt-4"
					style={{ borderRadius: '45px' }}
				>
					Add To Cart
				</button>
			</div>
		</div>
	);
};

export default ProductCard;
