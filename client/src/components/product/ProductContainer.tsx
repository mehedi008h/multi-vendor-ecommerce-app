import React from "react";

interface Props {
    title: string;
    subTitle?: string;
    rightHeader?: React.ReactNode;
    children: React.ReactNode;
}

const ProductContainer = ({
    title,
    subTitle,
    rightHeader,
    children,
}: Props) => {
    return (
        <div>
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold text-[#425A8B]">
                        {title}
                    </h1>
                    {subTitle && (
                        <p className="text-sm text-gray-600">
                            Choose your necessary products from this feature
                            categories.
                        </p>
                    )}
                </div>
                {rightHeader}
            </div>
            {children}
        </div>
    );
};

export default ProductContainer;
