// Event details page
export default function EventDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  return <div>Event: {params.slug}</div>;
}
