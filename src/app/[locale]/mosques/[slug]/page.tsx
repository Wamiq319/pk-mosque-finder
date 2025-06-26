import React from "react";

// Individual mosque profile page
export default function MosqueDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  return <div>Mosque: {params.slug}</div>;
}
