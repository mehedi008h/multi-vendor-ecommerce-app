import { EventSlider, FilterBar, FilterSidebar } from "../components/shop";

const ShopPage = () => {
    return (
        <div className="w-full grid grid-cols-12 gap-3 py-3">
            <div className="col-span-3">
                <FilterSidebar />
            </div>
            <div className="col-span-9">
                <EventSlider />
                <FilterBar />
            </div>
        </div>
    );
};

export default ShopPage;
