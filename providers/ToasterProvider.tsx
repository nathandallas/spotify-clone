'use client';

import { Toaster } from 'react-hot-toast';

const ToasterProvider = () => {
	return (
		<Toaster
			toastOptions={{
				style: {
					background: '#0f172a',
					color: '#9ca3af',
				},
			}}
		/>
	);
};

export default ToasterProvider;
