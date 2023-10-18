import React from "react";
import { motion } from "framer-motion";

interface Props {
    open: boolean;
    width?: string;
    hight?: string;
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
    children: React.ReactNode;
}

const DropdownMenu = ({
    open,
    width = "w-[250px]",
    hight = "400px",
    top,
    left,
    right,
    bottom,
    children,
}: Props) => {
    return (
        <motion.div
            animate={{
                height: open ? hight : "0px",

                transition: {
                    duration: 0.5,
                    type: "spring",
                    damping: 10,
                },
            }}
            className={`glass ${width} absolute ${top} ${right} ${left} ${bottom} z-50 border rounded-md flex flex-col gap-2 overflow-x-hidden overflow-y-scroll hide-scroll-bar`}
        >
            {children}
        </motion.div>
    );
};

export default DropdownMenu;
