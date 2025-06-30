"use client";
import dynamic from "next/dynamic";

const CreatorOpenClass = dynamic(
  () => import("../../../../Screens/CreatorOpenClass"),
  { ssr: false }
);

export default function ModifyOpenClassesPage() {
  return <CreatorOpenClass />;
} 