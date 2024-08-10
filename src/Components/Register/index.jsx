import React from 'react';

const Register = () => {
	return (
		<section
			className="container d-flex align-items-center justify-content-center"
			style={{ minHeight: '100vh' }}
		>
			<div class="card w-50 mx-auto p-5">
				<h3 className="secondary-font text-uppercase mx-auto text-black-50">
					Register
				</h3>

				<form>
					<div class="d-flex flex-column">
						<label className="primary-font ms-1 input-label">Name *</label>
						<input type="text" class="input primary-font" />
					</div>
					<div class="d-flex flex-column mt-4">
						<label className="primary-font ms-1 input-label">
							Email Address *
						</label>
						<input type="email" class="input primary-font" />
					</div>
					<div class="d-flex flex-column mt-4">
						<label className="primary-font ms-1 input-label">Password *</label>
						<input type="password" class="input primary-font" />
					</div>
				</form>

				<button className="secondary-font input-btn">Register</button>
			</div>
		</section>
	);
};

export default Register;
