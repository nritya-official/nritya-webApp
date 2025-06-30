import StudioFullPage from "../../../Screens/StudioFullPage";
import { fetchStudioData, fetchStudioEntitiesData, fetchStudioImages } from "../../../actions/studioPage";

export default async function StudioPage({ params }) {
  const { studioId } = await params;
  const studioData = await fetchStudioData(studioId);
  const images = await fetchStudioImages(studioId);
  const data = await fetchStudioEntitiesData(studioId);
  const carouselImages = images?.StudioImages || [];
  const announcementImages = images?.StudioAnnouncements || [];
  const [openClasses, workshops, courses] = data;

  return <StudioFullPage
    studioId={studioId}
    studioData={studioData}
    carouselImages={carouselImages}
    announcementImages={announcementImages}
    openClasses={openClasses}
    workshops={workshops}
    courses={courses}
  />;
} 