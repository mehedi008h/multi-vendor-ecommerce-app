import { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { DropdownMenu } from "../common";

// category data for search
const categories = [
    "Eid Collection",
    "New Collection",
    "Featured",
    "Footwear",
    "Accessories",
    "Clothing",
    "Beauty/Health",
    "Sports",
    "Outdoor",
    "Other",
];

const SearchInput = () => {
    // state
    const [category, setCategory] = useState(categories[0]);
    const [searchInput, setSearchInput] = useState("");
    const [open, setOpen] = useState(false);

    console.log(searchInput);

    // handle category
    const handleCategory = (text: string) => {
        setCategory(text);
        setOpen(false);
    };

    return (
        <div className="xl:flex lg:flex md:flex hidden flex-row items-center border border-gray-500 rounded-full px-4 py-1">
            {/* select category  */}
            <div className="w-[400px] relative">
                <div className="flex items-center justify-between gap-2">
                    <div className="flex gap-2 items-center">
                        <div className="h-6 w-6 rounded-md bg-gray-600"></div>
                        <p className="font-semibold text-sm">{category}</p>
                    </div>
                    {open ? (
                        <BsChevronUp onClick={() => setOpen(!open)} />
                    ) : (
                        <BsChevronDown onClick={() => setOpen(!open)} />
                    )}
                </div>
                {open && (
                    <DropdownMenu open={open} top="top-9" left="-left-2">
                        {categories.map((item, index) => (
                            <div
                                onClick={() => handleCategory(item)}
                                key={index}
                                className="flex gap-2 items-center hover:bg-gray-100 p-2 cursor-pointer"
                            >
                                <div className="h-6 w-6 rounded-md bg-gray-600"></div>
                                <p className="font-semibold text-sm">{item}</p>
                            </div>
                        ))}
                    </DropdownMenu>
                )}
            </div>
            {/* search input  */}
            <input
                className="px-4 py-1 w-full outline-none text-gray-500 font-dmSans"
                type="text"
                name="searchInput"
                placeholder="Search products ..."
                onChange={(e) => setSearchInput(e.target.value)}
            />
            <BiSearchAlt className="text-gray-600" size={30} />
        </div>
    );
};

export default SearchInput;
