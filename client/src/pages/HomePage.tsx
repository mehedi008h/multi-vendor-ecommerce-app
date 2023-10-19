import { FeaturedCategories } from "../components/category";
import { Banner, Service } from "../components/hero";

const HomePage = () => {
    return (
        <div className="w-full">
            {/* banner  */}
            <Banner />
            {/* service  */}
            <Service />
            {/* categories  */}
            <FeaturedCategories />
        </div>
    );
};

export default HomePage;
