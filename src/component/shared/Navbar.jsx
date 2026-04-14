import React from 'react';
import MyLink from '@/component/shared/MyLink';

import { RiHome2Line } from "react-icons/ri";
import { IoMdTime } from "react-icons/io";
import { GoGraph } from "react-icons/go";

const Navbar = () => {

    const navItems = [
        { href: "/", label: "Home", icon: RiHome2Line },
        { href: "/timeline", label: "Timeline", icon: IoMdTime },
        { href: "/stats", label: "Stats", icon: GoGraph },
    ];

    return (
        <nav className='container mx-auto'>
            <div className="navbar bg-base-100 ">

                <div className="navbar-start">
                    <h1 className="font-bold  text-3xl">
                        KeenKeeper
                    </h1>
                </div>

                <div className="navbar-end gap-4">
                    {/* use client */}
                    {navItems.map((item) => {
                        const Icon = item.icon;

                        return (
                            <MyLink key={item.href} href={item.href}>
                                <Icon className="text-xl" />
                                {item.label}
                            </MyLink>
                        );
                    })}
                </div>

            </div>
        </nav>
    );
};

export default Navbar;