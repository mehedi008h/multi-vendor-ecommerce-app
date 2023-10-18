import React from "react";
import { Link } from "react-router-dom";

const TopHead = () => {
    return (
        <div className="w-full h-8 border flex justify-between items-center px-8 font-dmSans">
            {/* link  */}
            <div className="flex flex-row gap-4 text-green-700 text-sm">
                <Link className="hover:text-green-500" to={"/admin"}>
                    Admin
                </Link>
                <Link className="hover:text-green-500" to={"/"}>
                    Blog
                </Link>
                <Link className="hover:text-green-500" to={"/"}>
                    About Us
                </Link>
                <Link className="hover:text-green-500" to={"/"}>
                    Career
                </Link>
            </div>
            {/* ad  */}
            <div>
                <p className="font-semibold">
                    60% free delivery for all product
                </p>
            </div>
            {/* info */}
            <div className="flex flex-row gap-4 text-sm">
                <p className="text-green-700">Need help? Call us</p>
                <p className="text-gray-600">+88012345678</p>
            </div>
        </div>
    );
};

export default TopHead;
