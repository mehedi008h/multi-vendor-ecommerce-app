import React from "react";
import { placeHolder } from "../../constant/image";
import { categories } from "../../constant/data";

const FilterSidebar = () => {
    return (
        <div>
            <div className="border p-2 rounded-md">
                <h1 className="font-semibold text-xl text-primary font-dmSans">
                    Product Category
                </h1>
                <hr className="my-2" />
                <div className="flex flex-col gap-1 transition-all ease-in-out duration-75">
                    {categories.map((category) => (
                        <div
                            key={category}
                            className="flex justify-between items-center p-2 border rounded-md hover:border-teal-50 hover:shadow-md cursor-pointer group"
                        >
                            <div className="flex gap-2 items-center">
                                <div className="w-7 h-7 rounded-md">
                                    <img
                                        className="w-full h-full rounded-md"
                                        src={placeHolder}
                                        alt=""
                                    />
                                </div>
                                <h1 className="text-base font-medium font-dmSans text-primary group-hover:text-orange-500">
                                    {category}
                                </h1>
                            </div>
                            <div className="bg-primary bg-opacity-10 px-2 py-1 rounded-md text-sm text-primary group-hover:text-white group-hover:bg-orange-500">
                                21
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FilterSidebar;
