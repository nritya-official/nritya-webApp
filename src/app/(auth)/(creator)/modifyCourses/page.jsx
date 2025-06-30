"use client";
import dynamic from "next/dynamic";

const CreatorCourse = dynamic(
  () => import("../../../../Screens/CreatorCourse"),
  { ssr: false }
);

export default function ModifyCoursesPage() {
  return <CreatorCourse />;
} 