import Image from "next/image";

export default async function Page({ params }) {
  const { id } = params;

  return (
    <div className="container mx-auto my-20">
      <div className="flex border-2 border-gray-300 cursor-pointer hover:border-black p-4">
        {/* Image Section on the Left */}
        <div className="relative w-[50%] h-[500px] mr-8">
          <Image
            src="/static"
            layout="fill"
            objectFit="cover"
            alt="Meal Image"
          />
        </div>

        {/* Information Section on the Right */}
        <div className="w-[50%]">
          <h1 className="bg-white py-4 text-gray-500 font-semibold text-2xl text-center mb-4">
            Food
          </h1>

          {/* Ingredients Card */}
          <div className="bg-white p-4 mb-4 border border-gray-300 rounded">
            <h2 className="text-xl font-semibold mb-2">Ingredients:</h2>
            <div className="mb-2">
              <span className="font-semibold">Hallo:</span> 2g
            </div>
          </div>

          {/* Steps Card */}
          <div className="bg-white p-4 mb-4 border border-gray-300 rounded">
            <h2 className="text-xl font-semibold mb-2">Steps:</h2>
            <ol className="list-decimal pl-4">
              <li>1. Kochen</li>
              <li>2. Essen</li>
            </ol>
          </div>

          {/* YouTube Video */}
          <div className="mb-4">
            <iframe
              width="100%"
              height="315"
              src="https://youtube.com/embed/dQw4w9WgXcQ"
              title="YouTube Video"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
