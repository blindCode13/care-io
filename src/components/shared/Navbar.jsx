"use client";

import Link from "next/link";
import Navlink from "../buttons/Navlink";
import Logo from "../Logo";
import { signOut, useSession } from "next-auth/react";
import { useState } from "react";
import LogoutConfirmation from "../modals/logoutConfirmation";
import { CgMenuRightAlt } from "react-icons/cg";
import { IoClose } from "react-icons/io5";
import { MdOutlineLibraryBooks } from "react-icons/md";

const Navbar = () => {
    const session = useSession();
    const [showModal, setShowModal] = useState(false);
    const [showDropDown, setShowDropDown] = useState(false);
    return (
        <>
        {
            showModal && <LogoutConfirmation setShowModal={setShowModal} logOut={signOut}/>
        }
        {
            showDropDown && 
                <ul className="fixed w-full bg-white top-20 flex md:hidden border-2 border-x-0 border-y-gray-200 flex-col items-center gap-5 z-50 py-6">
                    <li><Navlink to="/">Home</Navlink></li>
                    <li><Navlink to="/service">Service</Navlink></li>
                    <li><Navlink to="/contact">Contact</Navlink></li>
                    <li>
                        {
                session.status === 'authenticated' ? <button className="btn-primary" onClick={() => setShowModal(true)}>Log Out</button> :
                <Link href="/login" className="btn-primary">Login</Link>
                }
                    </li>
                </ul>
        }
        <div className="fixed w-full flex items-center justify-between global-px py-4 shadow-sm bg-white max-w-480 z-50">
            <div className="flex items-center justify-center gap-12">
                <Logo></Logo>
                <ul className="hidden md:flex items-center gap-5">
                    <li><Navlink to="/">Home</Navlink></li>
                    <li><Navlink to="/service">Service</Navlink></li>
                    <li><Navlink to="/contact">Contact</Navlink></li>
                </ul>
            </div>
            <div className="flex items-center gap-4 text-(--primary-color)">
                {
                    session.status === 'authenticated' && <Link href="/my-bookings"><MdOutlineLibraryBooks size={38} className="cursor-pointer" title="my-bookings"/></Link>
                }
                <div className="cursor-pointer" onClick={() => setShowDropDown(!showDropDown)}>
                {
                    showDropDown ? <IoClose size={38} className="flex md:hidden"/> : <CgMenuRightAlt size={38} className="flex md:hidden"/>
                }
                </div>
                {
                session.status === 'authenticated' ? <button className="btn-primary hidden md:flex" onClick={() => setShowModal(true)}>Log Out</button> :
                <Link href="/login" className="btn-primary hidden md:flex">Login</Link>
                }
            </div>
        </div>
        </>
    );
};

export default Navbar;