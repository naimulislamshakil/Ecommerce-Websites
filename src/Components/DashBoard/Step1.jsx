import React from 'react';
import Address from './Address';

const Step1 = () => {
	return (
		<div className="w-50 rounded shadow p-5 mt-5 mb-3">
			<div>
				<h4 className="secondary-font">Vendor Basic Information</h4>
				<div className="">
					<div class="d-flex flex-column mt-4">
						<label className="primary-font ms-1 input-label">
							Vendor Name *
						</label>
						<input
							type="text"
							class="input primary-font"
							id="email"
							// ref={userRef}
							// autoComplete="off"
							// onChange={(e) => setEmail(e.target.value)}
							// value={email}
							required
						/>
					</div>
					<div class="d-flex flex-column mt-4">
						<label className="primary-font ms-1 input-label">
							Vendor Contact Name *
						</label>
						<input
							type="text"
							class="input primary-font"
							id="email"
							// ref={userRef}
							// autoComplete="off"
							// onChange={(e) => setEmail(e.target.value)}
							// value={email}
							required
						/>
					</div>

					<div class="d-flex flex-column mt-4">
						<label className="primary-font ms-1 input-label">
							Vendor Type *
						</label>
						<select
							type="text"
							class="input primary-font"
							id="email"
							// ref={userRef}
							// autoComplete="off"
							// onChange={(e) => setEmail(e.target.value)}
							// value={email}
							required
						>
							<option value="">Select a Option</option>
							<option value="">Owner</option>
							<option value="">Supplier</option>
							<option value="">Subcontractor</option>
							<option value="">Diller</option>
						</select>
					</div>

					<div class="d-flex flex-column mt-4">
						<label className="primary-font ms-1 input-label">
							Vendor Email Address *
						</label>
						<input
							type="email"
							class="input primary-font"
							id="email"
							// ref={userRef}
							// autoComplete="off"
							// onChange={(e) => setEmail(e.target.value)}
							// value={email}
							required
						/>
					</div>

					<div class="d-flex flex-column mt-4">
						<label className="primary-font ms-1 input-label">
							Vendor Phone Number *
						</label>
						<input
							type="tel"
							class="input primary-font"
							id="email"
							// ref={userRef}
							// autoComplete="off"
							// onChange={(e) => setEmail(e.target.value)}
							// value={email}
							required
						/>
					</div>

					<Address />

					<div class="d-flex flex-column mt-4">
						<label className="primary-font ms-1 input-label">
							Vendor Website *
						</label>
						<input
							type="url"
							class="input primary-font"
							id="email"
							// ref={userRef}
							// autoComplete="off"
							// onChange={(e) => setEmail(e.target.value)}
							// value={email}
							required
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Step1;
