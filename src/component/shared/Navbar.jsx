import React from "react";
import MyLink from "@/component/shared/MyLink";

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
        <nav className="container mx-auto">
            <div className="container mx-auto flex justify-between items-center py-3">

                {/* Logo */}
                <h1 className="text-3xl font-bold">
                    KeenKeeper
                </h1>

                {/* Links */}
                <div className="flex gap-3">
                    {navItems.map((item) => {
                        const Icon = item.icon;

                        return (
                            <MyLink key={item.href} href={item.href}>
                                <Icon className="text-xl" />
                                <span>{item.label}</span>
                            </MyLink>
                        );
                    })}
                </div>

            </div>
        </nav>
    );
};

export default Navbar;