import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-[100vh] flex flex-col items-center bg-gray-50">
      <header className="text-center py-10">
        <h1 className="text-2xl font-bold text-gray-800">EDITOR&apos;S PICK</h1>
        <p className="text-sm text-gray-500 mt-2">
          Problems trying to resolve the conflict between
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl px-4">
        {/* First Box - Men (Wider) */}
        <div className="relative group col-span-1 md:col-span-2">
          <Image
            width={1000}
            height={1000}
            src="/images/edit-1.png"
            alt="Men"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Second Box - Women */}
        <div className="relative group">
          <Image
            width={1000}
            height={1000}
            src="/images/edit-2.png"
            alt="Women"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Third Box - Accessories */}
        <div className="flex flex-col space-y-6">
          <div className="relative group col-span-1 md:col-span-1 flex flex-col">
            <Image
              width={1000}
              height={1000}
              src="/images/edit-3.png"
              alt="Accessories"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Fourth Box - Kids (below Accessories) */}
          <div className="relative group col-span-1 md:col-span-1 flex flex-col">
            <Image
              width={1000}
              height={1000}
              src="/images/edit-4.png"
              alt="Kids"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
