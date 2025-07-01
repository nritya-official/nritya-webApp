"use client";
import dynamic from "next/dynamic";

const WorkshopAdd = dynamic(
  () => import("../../../../../Components/WorkshopAdd"),
  { ssr: false }
);

export default function WorkshopCreatePage() {
  return <WorkshopAdd />;
} 