'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const  NavLink = ({ href, children }: { href: string, children: React.ReactNode }) => {
    const pathname = usePathname();
    const isActive = pathname === href || (href === '/Home' && pathname === '/');

    return (
        <Link
            href={href}
            className={isActive ? 'text-yellow-400 font-bold' : 'text-gray-600'}
        >
            {children}
        </Link>
    );
}

export default  NavLink;
