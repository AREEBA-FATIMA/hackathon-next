import Image from 'next/image'; // Import the Image component

export default function Products() {
  const products = [
    {
      id: 1,
      image: '/images/product-1.png',
      title: 'Graphic Design',
      department: 'English Department',
      price: '16.48',
      discountedPrice: '6.48',
      colors: ['bg-blue-500', 'bg-green-500', 'bg-orange-500', 'bg-black'],
    },
    {
      id: 2,
      image: '/images/product-2.png',
      title: 'Graphic Design',
      department: 'English Department',
      price: '16.48',
      discountedPrice: '6.48',
      colors: ['bg-blue-500', 'bg-green-500', 'bg-orange-500', 'bg-black'],
    },
    {
      id: 3,
      image: '/images/product-3.png',
      title: 'Graphic Design',
      department: 'English Department',
      price: '16.48',
      discountedPrice: '6.48',
      colors: ['bg-blue-500', 'bg-green-500', 'bg-orange-500', 'bg-black'],
    },
    {
      id: 4,
      image: '/images/product-4.png',
      title: 'Graphic Design',
      department: 'English Department',
      price: '16.48',
      discountedPrice: '6.48',
      colors: ['bg-blue-500', 'bg-green-500', 'bg-orange-500', 'bg-black'],
    },
    {
      id: 5,
      image: '/images/product-5.png',
      title: 'Graphic Design',
      department: 'English Department',
      price: '16.48',
      discountedPrice: '6.48',
      colors: ['bg-blue-500', 'bg-green-500', 'bg-orange-500', 'bg-black'],
    },
    {
      id: 6,
      image: '/images/product6.png',
      title: 'Graphic Design',
      department: 'English Department',
      price: '16.48',
      discountedPrice: '6.48',
      colors: ['bg-blue-500', 'bg-green-500', 'bg-orange-500', 'bg-black'],
    },
    {
      id: 7,
      image: '/images/product7.png',
      title: 'Graphic Design',
      department: 'English Department',
      price: '16.48',
      discountedPrice: '6.48',
      colors: ['bg-blue-500', 'bg-green-500', 'bg-orange-500', 'bg-black'],
    },
    {
      id: 8,
      image: '/images/product8.png',
      title: 'Graphic Design',
      department: 'English Department',
      price: '16.48',
      discountedPrice: '6.48',
      colors: ['bg-blue-500', 'bg-green-500', 'bg-orange-500', 'bg-black'],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <div className="text-center my-8">
        <p className="text-gray-500 text-sm mt-2">
          Featured Products
        </p>
        <h1 className="text-2xl font-bold tracking-wide">BESTSELLER PRODUCTS</h1>
        <p className="text-gray-500 text-sm mt-2">
          Problems trying to resolve the conflict between
        </p>
      </div>

      <div className="flex justify-center">
        <div className="w-3/4">
          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
            {products.map((product) => (
              <div
                key={product.id}
                className="transition flex flex-col items-center text-center px-0 py-4"
              >
                <div className="w-full flex justify-center mb-8">
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={200}
                    height={200}
                    className="object-cover"
                  />
                </div>
                <h2 className="text-sm font-semibold">{product.title}</h2>
                <p className="text-gray-500 text-xs">{product.department}</p>
                <div className="flex text-xs items-center justify-center mt-2">
                  <span className="text-gray-400 mr-4">${product.price}</span>
                  <span className="text-green-600 font-bold">${product.discountedPrice}</span>
                </div>
                <div className="flex space-x-2 mt-2">
                  {product.colors.map((color, index) => (
                    <span
                      key={index}
                      className={`w-3 h-3 rounded-full ${color}`}
                    ></span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
