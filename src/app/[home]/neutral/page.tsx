import Image from "next/image";

export default function NeuralUniverse() {
  return (
    <div className="min-h-[100vh] flex flex-col md:flex-row items-center justify-center bg-white px-6 md:px-12">
      {/* Left Section - Image */}
      <div className="md:w-1/2 flex justify-center md:justify-center">
        <Image
          src="/images/neutral.png" 
          alt="Happy couple in plaid scarf"
          width={500}
          height={500}
          className="rounded-lg object-cover ml-20"
        />
      </div>

      {/* Right Section - Text and Buttons */}
      <div className="md:w-1/2 text-center md:text-left mt-12 md:mt-0 md:pl-8">
        <p className="text-gray-500 text-base uppercase font-semibold tracking-wide">
          Summer 2020
        </p>
        <h1 className="text-4xl font-bold text-gray-900 mt-4 leading-tight">
          Part of the Neural <br /> Universe
        </h1>
        <p className="text-gray-600 mt-4 leading-relaxed">
          We know how large objects will act, <br /> but things on a small scale.
        </p>
        <div className="flex justify-center md:justify-start gap-4 mt-8">
          <button className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 transition">
            Buy Now
          </button>
          <button className="border-2 border-green-500 text-green-500 px-6 py-2 rounded-md hover:bg-green-500 hover:text-white transition">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}
