import Banner from "./Banner";
import StationeryList from "./StationeryList";
import StoreDescription from "./StoreDescription";
import BannerCarousel from "./BannerCarousel";
import Review from "./Review";

function Home() {
    return (
        <>
        <Banner/>
        <BannerCarousel/>
        <StoreDescription/>
        <StationeryList/>
        <Review/>
        </>
    )
}

export default Home;