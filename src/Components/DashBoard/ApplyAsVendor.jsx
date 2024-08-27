import React, { useState } from 'react';
import Header from './Header';
import { Button, Step, StepContent, StepLabel, Stepper } from '@mui/material';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import ThankYou from './ThankYou';

const ApplyAsVendor = () => {
	const [activeStep, setActiveStep] = useState(0);

	return (
		<div className="container">
			<Header
				title="Apply for vendor"
				subTitle="Here you can apply for vendor account"
			/>

			<div className="w-100">
				<Stepper activeStep={activeStep} alternativeLabel>
					<Step className="w-100">
						<StepLabel>Step 1</StepLabel>
					</Step>
					<Step>
						<StepLabel>Step 2</StepLabel>
					</Step>
					<Step>
						<StepLabel>Step 3</StepLabel>
					</Step>
					<Step>
						<StepLabel>Step 4</StepLabel>
					</Step>
				</Stepper>
				<div className="d-flex justify-content-center align-items-center">
					{activeStep === 0 ? (
						<Step1 />
					) : activeStep === 1 ? (
						<Step2 />
					) : activeStep === 2 ? (
						<Step3 />
					) : activeStep === 3 ? (
						<Step4 />
					) : (
						<ThankYou />
					)}
				</div>
			</div>
			<div className="ms-4 d-flex justify-content-center">
				{activeStep > 0 && activeStep < 4 && (
					<Button
						onClick={() => setActiveStep(activeStep - 1)}
						variant="outlined"
						color="error"
						className="me-5"
					>
						BACK
					</Button>
				)}
				{activeStep < 4 && (
					<Button
						onClick={() => setActiveStep(activeStep + 1)}
						variant="outlined"
						color="success"
						className="mb-3"
					>
						{activeStep === 3 ? 'FINISH' : 'NEXT'}
					</Button>
				)}
			</div>
		</div>
	);
};

export default ApplyAsVendor;
