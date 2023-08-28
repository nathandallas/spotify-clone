'use client';

import { useRouter } from 'next/navigation';
import { twMerge } from 'tailwind-merge';
import { RxCaretLeft } from 'react-icons/rx';

interface HeaderProps {
	children: React.ReactNode;
	className?: string;
}

const Header: React.FC<HeaderProps> = ({ children, className }) => {
	const router = useRouter();

	const handleLogout = () => {
		//TODO Handle Logout
	};

	return (
		<>
			<div
				className={twMerge(`
            h-fit bg-gradient-to-b from-emerald-800 p-6
            `)}
			>
				<div className='w-full mb-4 flex items-center justify-between'>
					<div className='hidden md:flex gap-x-2 items-center'>
						<button>
							<RxCaretLeft />
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default Header;