import React from 'react';
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';
import { Button } from '@mui/material';

const Footer = () => {
	return (
		<footer className="container-fluid mb-4 border-top mt-1">
			<div className="container">
				<div className="row pt-3">
					<div className="col-md-3 d-flex justify-content-start align-items-center phone">
						<Button>
							<PhoneInTalkOutlinedIcon />
						</Button>

						<div>
							<h4>8 800 555-55</h4>
							<small>Working 8:00 - 22:00</small>
						</div>
					</div>
					<div className="col-md-9 d-flex justify-content-end align-items-center">
						<div
							style={{
								lineHeight: '5px',
								marginRight: '15px',
							}}
						>
							<p>Download App on Mobile :</p>
							<small style={{ color: 'rgb(137, 137, 137)' }}>
								15% discount on your first purchase
							</small>
						</div>

						<img
							className="me-2"
							src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/google-play.png"
							alt=""
						/>
						<img
							src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/app-store.png"
							alt=""
						/>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
