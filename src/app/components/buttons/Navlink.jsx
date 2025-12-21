"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navlink = ({to, children}) => {
    const pathname = usePathname();
    return <Link href={to} className={`${pathname === to && "active"}`}>{children}</Link>;
};

export default Navlink;