import { useState } from "react";
import { Button, DropdownMenu } from "../common";
import { BiFilterAlt } from "react-icons/bi";
import { TbListTree } from "react-icons/tb";
import { CiGrid41 } from "react-icons/ci";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const FilterBar = () => {
    const [openSortMenu, setOpenSortMenu] = useState<boolean>(false);
    const [openPageMenu, setOpenPageMenu] = useState<boolean>(false);
    return (
        <div className="py-3 flex justify-between items-center">
            <Button
                btnText="All Filters"
                bg="bg-gray-500 bg-opacity-10"
                btnStyle="px-3 py-2 rounded-lg text-primary"
                leftIcon={<BiFilterAlt />}
            />
            <div className="flex items-center gap-2 font-dmSans">
                <div className="flex items-center gap-2 relative">
                    <h3 className="text-gray-400">Sort by: </h3>
                    <div
                        onClick={() => setOpenSortMenu(!openSortMenu)}
                        className="flex items-center gap-2 text-primary cursor-pointer"
                    >
                        <h3 className="font-semibold">Latest Products</h3>
                        {openSortMenu ? (
                            <MdKeyboardArrowUp size={20} />
                        ) : (
                            <MdKeyboardArrowDown size={20} />
                        )}
                    </div>
                    <DropdownMenu
                        open={openSortMenu}
                        hight="138px"
                        top="top-10"
                        right="right-0"
                    >
                        <div className="flex gap-2 items-center hover:bg-gray-100 p-2 cursor-pointer">
                            <div className="h-6 w-6 rounded-md bg-gray-600"></div>
                            <p className="font-semibold text-base">
                                Latest Products
                            </p>
                        </div>
                        <div className="flex gap-2 items-center hover:bg-gray-100 p-2 cursor-pointer">
                            <div className="h-6 w-6 rounded-md bg-gray-600"></div>
                            <p className="font-semibold text-base">
                                Oldest Products
                            </p>
                        </div>
                        <div className="flex gap-2 items-center hover:bg-gray-100 p-2 cursor-pointer">
                            <div className="h-6 w-6 rounded-md bg-gray-600"></div>
                            <p className="font-semibold text-base">
                                Comments Products
                            </p>
                        </div>
                    </DropdownMenu>
                </div>
                <div className="h-6 bg-gray-500 w-[1px]"></div>
                <div className="flex items-center gap-2 relative">
                    <h3 className="text-gray-400">Show: </h3>
                    <div
                        onClick={() => setOpenPageMenu(!openPageMenu)}
                        className="flex items-center gap-2 text-primary cursor-pointer"
                    >
                        <h3 className="font-semibold">30 items</h3>
                        {openPageMenu ? (
                            <MdKeyboardArrowUp size={20} />
                        ) : (
                            <MdKeyboardArrowDown size={20} />
                        )}
                    </div>
                    <DropdownMenu
                        open={openPageMenu}
                        hight="138px"
                        top="top-10"
                        right="right-0"
                    >
                        <div className="flex gap-2 items-center hover:bg-gray-100 p-2 cursor-pointer">
                            <div className="h-6 w-6 rounded-md bg-gray-600"></div>
                            <p className="font-semibold text-base">30 items</p>
                        </div>
                        <div className="flex gap-2 items-center hover:bg-gray-100 p-2 cursor-pointer">
                            <div className="h-6 w-6 rounded-md bg-gray-600"></div>
                            <p className="font-semibold text-base">50 items</p>
                        </div>
                        <div className="flex gap-2 items-center hover:bg-gray-100 p-2 cursor-pointer">
                            <div className="h-6 w-6 rounded-md bg-gray-600"></div>
                            <p className="font-semibold text-base">100 items</p>
                        </div>
                    </DropdownMenu>
                </div>
                <div className="h-6 bg-gray-500 w-[1px]"></div>
                <div className="flex items-center gap-2">
                    <Button
                        bg="bg-gray-500 bg-opacity-10"
                        btnStyle="p-2 rounded-lg text-primary hover:text-orange-500"
                        leftIcon={<CiGrid41 size={20} />}
                    />
                    <Button
                        bg="bg-gray-500 bg-opacity-10"
                        btnStyle="p-2 rounded-lg text-primary hover:text-orange-500"
                        leftIcon={<TbListTree size={20} />}
                    />
                </div>
            </div>
        </div>
    );
};

export default FilterBar;
