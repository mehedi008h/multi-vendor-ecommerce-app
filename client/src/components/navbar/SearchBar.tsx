import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BiCart, BiUser } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { HiX } from "react-icons/hi";
import { Tooltip } from "react-tooltip";
import logo from "../../assets/logo.png";
import { SearchInput } from ".";

const SearchBar = () => {
    // cart open & close
    const [toggle, setToggle] = useState(false);

    return (
        <div className="w-full h-20 px-8 flex justify-between items-center">
            {/* logo */}
            <Link to="/">
                <div className="w-36 h-16">
                    <img className="w-full h-full" src={logo} alt="" />
                </div>
            </Link>
            {/* search */}
            <SearchInput />
            {/* link  */}
            <div className="flex flex-row gap-4">
                <Link
                    className="h-12 w-12 flex justify-center items-center border-2 rounded-full hover:text-green-500 relative"
                    to={"/"}
                >
                    <AiOutlineHeart size={25} />
                    <div className="h-6 w-6 flex justify-center items-center rounded-full bg-green-500 text-white text-sm font-semibold font-roboto absolute -top-1.5 -right-1.5">
                        4
                    </div>
                </Link>
                {/* toogle cart view  */}
                <div className="relative">
                    <button
                        className="h-12 w-12 flex justify-center items-center border-2 rounded-full hover:text-green-500 hover:border-green-300 relative"
                        onClick={() => setToggle(true)}
                    >
                        <BiCart size={25} />
                        <div className="h-6 w-6 flex justify-center items-center rounded-full bg-amber-500 text-white text-sm font-semibold font-roboto absolute -top-1.5 -right-1.5">
                            4
                        </div>
                    </button>

                    {toggle && (
                        <motion.div
                            whileInView={{ x: [300, 0] }}
                            transition={{ duration: 0.85, ease: "easeOut" }}
                            className="cart_container xl:w-2/5 lg:w-2/5 md:w-2/5 w-full"
                        >
                            <HiX
                                className="text-red-500"
                                size={25}
                                onClick={() => setToggle(false)}
                                id="btn_close"
                            />
                            {/* tooltip  */}
                            <Tooltip
                                anchorId="btn_close"
                                place="top"
                                content="Close Cart"
                            />
                            {/* cart  */}
                            <div>Hello</div>
                        </motion.div>
                    )}
                </div>
                <Link
                    className="h-12 w-12 flex justify-center items-center border-2 rounded-full hover:text-green-500"
                    to={"/login"}
                >
                    <BiUser size={25} />
                </Link>
            </div>
        </div>
    );
};

export default SearchBar;
