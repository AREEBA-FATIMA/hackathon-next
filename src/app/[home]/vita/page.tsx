import Image from 'next/image';

export default function Vita() {
  return (
    <div className="min-h-[100vh] w-full bg-[#2a7d66] text-white pt-10">
      {/* Header Section */}
      
      {/* Product Section */}
      <div className="flex flex-col md:flex-row items-center justify-center w-full px-6 md:px-12">
        <div className="text-center md:text-left mb-12 md:mb-0">
          <p className="text-lg font-semibold uppercase">SUMMER 2020</p>
          <h1 className="text-6xl font-bold tracking-wide mt-4 py-2 leading-tight">
            Vita Classic <br /> Product
          </h1>
          <p className="text-sm mt-4">We know how large objects will act, We know <br /> how are objects will act, We know</p>
          
          {/* Product Info (Text) */}
          <div className="mt-10 flex items-center justify-center md:justify-start space-x-4">
            <p className="text-xl font-semibold inline pr-8">$16.48</p>
            <button className="bg-[#44c289] text-white px-6 py-2 rounded-sm ">
              Add to Cart
            </button>
          </div>
        </div>

        {/* Product Image */}
        <div className="md:mb-0 md:w-1/2 flex justify-end">
          <Image 
            src="/images/vita.png" 
            alt="Vita Classic Product"
            width={400}
            height={400}
            className="rounded-lg object-cover relative bottom-0 pt-16"
          />
        </div>
      </div>
    </div>
  );
}
