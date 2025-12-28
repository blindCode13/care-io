"use client";
import Footer from '@/components/shared/Footer';
import Navbar from '@/components/shared/Navbar';
import { useSession } from 'next-auth/react';
import Loading from '../loading';

const RootLayout = ({children}) => {
	const session = useSession();

	if (session.status === 'loading') return <Loading />
	return (
		<div className="max-w-480 mx-auto">
			<Navbar></Navbar>
			<div className="min-h-[calc(100vh-300px)]">
				{children}
            </div>
			<Footer></Footer>
		</div>
	);
};

export default RootLayout;
