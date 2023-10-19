import { Fragment } from "react";
import { AiFillSafetyCertificate } from "react-icons/ai";
import {
    FcApproval,
    FcAssistant,
    FcAutomotive,
    FcCurrencyExchange,
    FcMakeDecision,
} from "react-icons/fc";

const data = [
    {
        title: "Safe Payment",
        icon: <AiFillSafetyCertificate size={25} color="orange" />,
        divider: true,
    },
    {
        title: "Nationwide Delivery",
        icon: <FcAutomotive size={25} />,
        divider: true,
    },
    {
        title: "Free & Easy Returns",
        icon: <FcMakeDecision size={25} />,
        divider: true,
    },
    {
        title: "Best Price Guaranteed",
        icon: <FcCurrencyExchange size={25} />,
        divider: true,
    },
    {
        title: "100% Authentic Products",
        icon: <FcApproval size={25} />,
        divider: true,
    },
    {
        title: "24/7 Customer Services",
        icon: <FcAssistant size={25} />,
        divider: true,
    },
    {
        title: "Daraz Verified",
        icon: <AiFillSafetyCertificate size={25} color="green" />,
    },
];

const Service = () => {
    return (
        <div className="h-12 rounded-md my-2 border px-2 flex items-center justify-start gap-4 hover:bg-amber-200 hover:bg-opacity-25 cursor-pointer">
            {data.map((item, i) => (
                <Fragment>
                    <div key={i} className="flex items-center gap-3">
                        {item.icon}
                        <p className="font-semibold text-sm">{item.title}</p>
                    </div>
                    {item.divider && (
                        <div className="h-8 bg-orange-500 w-[1px]"></div>
                    )}
                </Fragment>
            ))}
        </div>
    );
};

export default Service;
