import toast from 'react-hot-toast';

export const loadingTost = (success) => {
	toast.loading(success, {
		position: 'top-center',
		reverseOrder: 'false',
		style: {
			borderRadius: '10px',
			background: '#333',
			color: '#fff',
		},
	});
};

export const successToast = (message) => {
	toast.success(message, {
		position: 'top-center',
		reverseOrder: 'false',
		style: {
			borderRadius: '10px',
			background: '#333',
			color: '#fff',
		},
	});
};
export const errorToast = (message) => {
	toast.error(message, {
		position: 'top-center',
		reverseOrder: 'false',
		style: {
			borderRadius: '10px',
			background: '#333',
			color: '#fff',
		},
	});
};
