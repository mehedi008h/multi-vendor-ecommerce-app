import { BsArrowRightShort } from "react-icons/bs";
import { CategorySlider } from ".";
import { Button } from "../common";
import { ProductContainer } from "../product";

const FeaturedCategories = () => {
    const rightHeader = (
        <Button
            btnText="View All"
            bg="bg-gradient-to-r from-cyan-500 to-blue-500"
            btnStyle=" text-white px-4 py-1 rounded-full font-semibold"
            rightIcon={<BsArrowRightShort size={22} className="next_btn" />}
        />
    );
    return (
        <div className="py-2">
            <ProductContainer
                title=" Featured Categories"
                subTitle="Choose your necessary products from this feature categories."
                rightHeader={rightHeader}
            >
                <CategorySlider />
            </ProductContainer>
        </div>
    );
};

export default FeaturedCategories;
