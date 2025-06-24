'use client';
import StudioFullPage from "../../../Screens/StudioFullPage";

export default function StudioPage({params}) {
  return <StudioFullPage studioId={params?.studioId} />;
} 