import React from "react";
import { LinkBar, SearchBar, TopHead } from ".";

const Navbar = () => {
    return (
        <div className="w-full">
            <TopHead />
            <SearchBar />
            <LinkBar />
        </div>
    );
};

export default Navbar;
