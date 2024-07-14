export default function Recipe({ params }: { params: { id: string } }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1>Recipe: {params.id}</h1>
        <p>This is the recipe for {params.id}.</p>
      </div>
    </main>
  );
}
