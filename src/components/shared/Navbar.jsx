"use client";

import Link from "next/link";
import Navlink from "../buttons/Navlink";
import Logo from "../Logo";

const Navbar = () => {
    return (
        <div className="fixed w-full flex items-center justify-between global-px py-4 shadow-sm bg-white max-w-480 z-50">
            <div className="flex items-center justify-center gap-12">
                <Logo></Logo>
                <ul className="flex items-center gap-5">
                    <li><Navlink to="/">Home</Navlink></li>
                    <li><Navlink to="/service">Service</Navlink></li>
                    <li><Navlink to="/contact">Contact</Navlink></li>
                </ul>
            </div>
            <Link href="/login" className="btn-primary">Login</Link>
        </div>
    );
};

export default Navbar;