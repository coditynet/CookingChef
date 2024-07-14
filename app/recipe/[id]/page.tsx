export default function Recipe({ params }: { params: { id: string } }) {
  return (
    <div>
      <h1>Recipe: {params.id}</h1>
      <p>This is the recipe for {params.id}.</p>
    </div>
  );
}
