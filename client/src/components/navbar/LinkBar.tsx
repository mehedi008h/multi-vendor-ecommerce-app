import { useState } from "react";
import { SiHotjar } from "react-icons/si";
import {
    MdKeyboardArrowDown,
    MdKeyboardArrowUp,
    MdOutlineDashboard,
} from "react-icons/md";
import { DropdownMenu } from "../common";
import { LinkItem } from ".";

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
    const [open, setOpen] = useState<boolean>(false);
    const [dropdownType, setDropdownType] = useState<string>("");

    const handleDropDown = (type: string) => {
        setDropdownType(type);
        setOpen(!open);
    };

    const toogleCategory = open && dropdownType === "category";
    return (
        <div className="w-full linkBar relative">
            <div className="w-full px-8 h-14 xl:flex lg:flex md:flex hidden justify-start items-center gap-8">
                {/* Browse All Category  */}
                <div
                    onClick={() => handleDropDown("category")}
                    className="cursor-pointer min-w-fit bg-green-700 px-3 py-1.5 rounded-lg text-white flex items-center gap-2 mr-5"
                >
                    <MdOutlineDashboard size={21} />
                    <p className="text-base">Browse All Category</p>
                    {open ? (
                        <MdKeyboardArrowUp size={20} />
                    ) : (
                        <MdKeyboardArrowDown size={20} />
                    )}
                </div>
                {/* links  */}
                {categories.map((category) => (
                    <LinkItem
                        category={category}
                        open={open}
                        handleDropDown={handleDropDown}
                        dropdownType={dropdownType}
                        key={category.id}
                    />
                ))}
                {/* toogle  */}
                {toogleCategory && (
                    <DropdownMenu
                        open={open}
                        top="top-14"
                        left="left-8"
                        width="w-[245px]"
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
                    </DropdownMenu>
                )}
            </div>
        </div>
    );
};

export default LinkBar;
