
import { COLLECTIONS } from "../constants";
import { fetchData, fetchImages } from "../actions/landingPage";
import LandingPage from "../Screens/LandingPage";

const Home = async ({ searchParams }) => {
    const location = searchParams?.location || "New Delhi";    
    const data = await fetchData(location);
    const filteredImages = await fetchImages() || [];
    const exploreEntityData = data?.exploreEntityData || {
        [COLLECTIONS.STUDIO]: {},
        [COLLECTIONS.WORKSHOPS]: {},    
        [COLLECTIONS.OPEN_CLASSES]: {},
        [COLLECTIONS.COURSES]: {},
      };
    const studioIdName = data?.studioIdNameData || {};    
    return <LandingPage studioIdName={studioIdName} exploreEntity={exploreEntityData} danceImagesUrl={filteredImages} />;
}
export default Home;