import React from 'react';

const Address = () => {
	return (
		<div>
			<div class="d-flex flex-column mt-4">
				<label className="primary-font ms-1 input-label">
					Address Line 1 *
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
					Address Line 2 *
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

			<div className="d-flex justify-content-center align-items-center">
				<div class="d-flex flex-column mt-4 me-2">
					<label className="primary-font ms-1 input-label">City *</label>
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
					<label className="primary-font ms-1 input-label">State *</label>
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
			</div>

			<div class="d-flex flex-column mt-4">
				<label className="primary-font ms-1 input-label">Zip Code *</label>
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
		</div>
	);
};

export default Address;
