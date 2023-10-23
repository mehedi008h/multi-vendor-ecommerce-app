import React from "react";

interface Props {
    btnText?: string;
    bg: string;
    btnStyle?: string;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    onClick?: () => void;
}

const Button = ({
    btnText,
    bg,
    btnStyle = "py-2 px-4 rounded-md text-white",
    leftIcon,
    rightIcon,
    onClick,
}: Props) => {
    return (
        <div
            onClick={onClick}
            className={`${btnStyle} ${bg} flex flex-row gap-2 items-center cursor-pointer`}
        >
            {leftIcon}
            {btnText}
            {rightIcon}
        </div>
    );
};

export default Button;
