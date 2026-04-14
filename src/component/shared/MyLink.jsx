"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const MyLink = ({ href, children }) => {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <Link href={href}>
            <div
                className={`flex items-center gap-2 px-3 py-2 rounded-md transition ${
                    isActive ? "bg-green-900 text-white" : "bg-transparent"
                }`}
            >
                {children}
            </div>
        </Link>
    );
};

export default MyLink;