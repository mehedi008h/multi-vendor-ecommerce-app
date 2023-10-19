import React from "react";

const Banner = () => {
    return (
        <div className="w-full grid grid-cols-3 gap-3">
            <div className="col-span-2 w-full h-[68vh] rounded-md bg-[#E0F2EE]"></div>
            <div className="col-span-1 w-full h-[68vh] flex flex-col justify-between">
                <div className="h-[33vh] rounded-md bg-[#FFF4F6]"></div>
                <div className="h-[33vh] rounded-md bg-[#E0F2EE]"></div>
            </div>
        </div>
    );
};

export default Banner;
