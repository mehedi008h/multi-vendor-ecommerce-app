import React from "react";

interface Props {
    children: React.ReactNode;
}

const Container = ({ children }: Props) => {
    return <div className="w-full min-h-screen">{children}</div>;
};

export default Container;
