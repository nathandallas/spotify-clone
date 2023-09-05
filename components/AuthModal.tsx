'use client';

import {
	useSessionContext,
	useSupabaseClient,
} from '@supabase/auth-helpers-react';
import { useRouter } from 'next/navigation';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { useEffect } from 'react';

import useAuthModal from '@/hooks/useAuthModal';

import Modal from './Modal';

const AuthModal = () => {
	const supabaseClient = useSupabaseClient();
	const router = useRouter();
	const { session } = useSessionContext();
	const { onClose, isOpen } = useAuthModal();

	// Closes once logged in/signed up
	useEffect(() => {
		if (session) {
			router.refresh();
			onClose();
		}
	}, [session, router, onClose]);

	// Close
	const onChange = (open: boolean) => {
		if (!open) {
			onClose();
		}
	};

	return (
		<Modal
			title='Welcome Back!'
			description='Log in to your account.'
			isOpen={isOpen}
			onChange={onChange}
		>
			<Auth
				theme='dark'
				providers={['github', 'google', 'facebook']}
				supabaseClient={supabaseClient}
				appearance={{
					theme: ThemeSupa,
					variables: {
						default: {
							colors: {
								brand: '#334155',
								brandAccent: '#fb7185',
								defaultButtonBackground: '#334155',
								defaultButtonBackgroundHover: '#fb7185',
							},
						},
						dark: {
							colors: {
								brand: '#334155',
								brandAccent: '#fb7185',
								defaultButtonBackground: '#334155',
								defaultButtonBackgroundHover: '#fb7185',
								defaultButtonBorder: '#0f172a',
								dividerBackground: '#0f172a',
								inputBackground: '#020617',
								inputBorder: '#0f172a',
								inputBorderHover: '#64748b',
								inputBorderFocus: '#64748b',
								inputPlaceholder: '#64748b',
								inputLabelText: '#e2e8f0',
								anchorTextColor: '#e2e8f0',
								anchorTextHoverColor: '#64748b',
							},
						},
					},
				}}
			/>
		</Modal>
	);
};

export default AuthModal;
