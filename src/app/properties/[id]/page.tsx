import { Suspense } from "react";
import PropertyDetailClient from "@/components/PropertyDetailClient";
import { allPropertiesData } from "@/data/properties";

export function generateStaticParams() {
  return allPropertiesData.map((property) => ({
    id: property.id,
  }));
}

export default async function PropertyDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <Suspense fallback={<div className="min-h-screen bg-white" />}>
      <PropertyDetailClient id={id} />
    </Suspense>
  );
}
