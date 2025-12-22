import Link from 'next/link';
import React from 'react';

const Logo = () => {
    return (
        <Link href="/" className="text-3xl"><span className='text-(--primary-color)'>CARE</span>.IO</Link>
    );
};

export default Logo;