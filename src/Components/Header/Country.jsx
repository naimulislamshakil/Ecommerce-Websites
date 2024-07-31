import { Button, Dialog, IconButton } from '@mui/material';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import CloseIcon from '@mui/icons-material/Close';
import React, { useEffect, useState } from 'react';

const Country = () => {
	const [open, setOpen] = React.useState(false);
	const [upazilas, setUpazila] = useState([]);
	const [zila, setZila] = useState('');

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const selectZila = (zila) => {
		setZila(zila);
		handleClose();
	};

	// console.log({ keyword });

	useEffect(() => {
		fetch('https://bdapis.com/api/v1.2/districts')
			.then((res) => res.json())
			.then((data) => setUpazila(data?.data));
	}, []);

	const filter = (e) => {
		const keyword = e.target.value;

		if (keyword !== '') {
			const list = upazilas.filter((item) => {
				return item?.district.toLowerCase().includes(keyword);
			});

			console.log({ list });
			setUpazila(list);
		} else {
			fetch('https://bdapis.com/api/v1.2/districts')
				.then((res) => res.json())
				.then((data) => setUpazila(data?.data));
		}
	};

	return (
		<>
			<Button variant="text" className="contry" onClick={handleClickOpen}>
				<div className="info d-flex flex-column">
					<span className="label">Your Location</span>
					<span className="name">{zila ? zila : 'Bangladesh'}</span>
				</div>
				<span className="arrow-Icon">
					<ExpandMoreOutlinedIcon />
				</span>
			</Button>

			{/* Modal */}
			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
				className="dialog"
			>
				<IconButton
					aria-label="close"
					onClick={handleClose}
					sx={{
						position: 'absolute',
						right: 8,
						top: 8,
						// color: (theme) => theme.palette.grey[500],
					}}
				>
					{' '}
					<CloseIcon />
				</IconButton>
				<h4>Choose Your Delivery Location</h4>
				<p>Enter your address and we will specify the offer for you.</p>
				<div className="modalHeaderSearch">
					<input
						type="text"
						placeholder="Search For Area........"
						onChange={filter}
					/>
					<Button>
						<SearchOutlinedIcon
							className="mx-auto text-black"
							style={{ fontSize: '30px' }}
						/>
					</Button>
				</div>

				{/* Upzala */}

				<ul className="upazila">
					{upazilas?.map((upazila, i) => (
						<li>
							<Button onClick={() => selectZila(upazila?.district)}>
								{upazila?.district}
							</Button>
						</li>
					))}
				</ul>
			</Dialog>
		</>
	);
};

export default Country;
