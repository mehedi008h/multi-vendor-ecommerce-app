import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { SiHotjar } from "react-icons/si";
import {
    MdKeyboardArrowDown,
    MdKeyboardArrowUp,
    MdOutlineDashboard,
} from "react-icons/md";

// category data for link
const categories = [
    {
        id: 1,
        name: "Hot Deals",
        icon: <SiHotjar />,
        link: "/",
        color: "text-yellow-900",
    },
    {
        id: 2,
        name: "Home",
        link: "/",
    },
    {
        id: 3,
        name: "Shop",
        link: "/",
    },
    {
        id: 4,
        name: "Vendors",
        link: "/",
    },
    {
        id: 5,
        name: "Mega Menu",
        subMenu: true,
    },
    {
        id: 6,
        name: "Blog",
        link: "/",
        subMenu: true,
    },
    {
        id: 7,
        name: "Pages",
        subMenu: true,
    },
    {
        id: 8,
        name: "Contact",
        link: "/",
    },
    {
        id: 9,
        name: "About",
        link: "/",
    },
];

const LinkBar = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className="w-full linkBar relative">
            <div className="w-full px-8 h-14 xl:flex lg:flex md:flex hidden justify-start items-center gap-8">
                {/* Browse All Category  */}
                <div className="min-w-fit bg-green-700 px-3 py-1.5 rounded-lg text-white flex items-center gap-2 mr-5">
                    <MdOutlineDashboard size={21} />
                    <p className="text-base">Browse All Category</p>
                    {open ? (
                        <MdKeyboardArrowUp
                            size={20}
                            onClick={() => setOpen(!open)}
                        />
                    ) : (
                        <MdKeyboardArrowDown
                            size={20}
                            onClick={() => setOpen(!open)}
                        />
                    )}
                </div>
                {/* links  */}
                {categories.map((category, index) => (
                    <>
                        {category.link ? (
                            <Link
                                to={category.link}
                                key={index}
                                className="min-w-fit font-roboto font-medium hover:text-blue-600 link gap-3"
                            >
                                <div
                                    className={`flex item-center items-center gap-2 ${
                                        category.color && category.color
                                    }`}
                                >
                                    {category.icon && category.icon}
                                    <div>{category.name}</div>
                                </div>
                            </Link>
                        ) : (
                            <button
                                key={index}
                                className="font-roboto font-medium hover:text-blue-600 link gap-3"
                            >
                                <div className="flex item-center items-center gap-2">
                                    {category.icon && category.icon}
                                    <div>{category.name}</div>
                                    {open ? (
                                        <MdKeyboardArrowUp
                                            size={20}
                                            onClick={() => setOpen(!open)}
                                        />
                                    ) : (
                                        <MdKeyboardArrowDown
                                            size={20}
                                            onClick={() => setOpen(!open)}
                                        />
                                    )}
                                </div>
                            </button>
                        )}
                    </>
                ))}
                {/* toogle  */}
                {open && (
                    <motion.div
                        animate={{
                            height: open ? "400px" : "0px",

                            transition: {
                                duration: 0.5,
                                type: "spring",
                                damping: 10,
                            },
                        }}
                        className="glass w-[250px] absolute top-14 left-8 z-50 border rounded-md flex flex-col gap-2 overflow-x-hidden overflow-y-scroll hide-scroll-bar"
                    >
                        {categories.map((item, index) => (
                            <div
                                key={index}
                                className="flex gap-2 items-center hover:bg-gray-100 p-2 cursor-pointer"
                            >
                                <div className="h-6 w-6 rounded-md bg-gray-600"></div>
                                <p className="font-semibold text-sm">
                                    {item.name}
                                </p>
                            </div>
                        ))}
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default LinkBar;
