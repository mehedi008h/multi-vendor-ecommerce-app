import { Button } from "../common";
import { BsArrowRightShort } from "react-icons/bs";

const CategoryHeader = () => {
    return (
        <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold">Featured Categories</h1>
            <Button
                btnText="View All"
                bg="bg-gradient-to-r from-cyan-500 to-blue-500"
                btnStyle=" text-white px-4 py-1 rounded-full font-semibold"
                rightIcon={<BsArrowRightShort size={22} className="next_btn" />}
            />
        </div>
    );
};

export default CategoryHeader;
