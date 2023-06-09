const ProductsMainPage = () => {
  return (
    <section className="py-24 mx-auto max-w-6xl">
      <h2 className="text-3xl font-semibold text-center">
        Some of Our Products
      </h2>
      <div className="w-fit mx-auto">
        <div className="min-h-[525px] mt-10 flex gap-10">
          <div className="w-fit relative group cursor-pointer">
            <div className="w-[300px] h-[350px] rounded-xl overflow-hidden z-20 relative top-20 group-hover:top-0 duration-300">
              <img
                src="/img/nailsBuffer.webp"
                alt="brush"
                className="object-cover object-center h-full w-full"
              />
            </div>
            <div className="overflow-hidden bg-[#111111] text-white z-10 w-[300px] h-[350px] rounded-xl absolute top-20 group-hover:top-[33%] duration-300 grid grid-rows-2 ">
              <div className="row-start-2 row-end-auto flex flex-col">
                <h3 className=" pt-3 text-xl font-semibold flex items-center h-fit px-5">
                  Nail Buffer
                  <span className="text-base ml-auto text-green-600">
                    (15 on Stock)
                  </span>
                </h3>
                <p className="px-5 pt-3">
                  Donec nunc nulla, aliquam quis dignissim a, interdum id
                  tortor.
                </p>
                <div className="bg-[#e1ae3e] mt-auto text-center py-3 text-lg font-semibold">
                  See More
                </div>
              </div>
            </div>
          </div>
          <div className="w-fit relative group cursor-pointer">
            <div className="w-[300px] h-[350px] rounded-xl overflow-hidden z-20 relative top-20 group-hover:top-0 duration-300">
              <img
                src="/img/uvNailsLamp.png"
                alt="nails lamp"
                className="object-cover object-center h-full w-full"
              />
            </div>
            <div className="overflow-hidden bg-[#111111] text-white z-10 w-[300px] h-[350px] rounded-xl absolute top-20 group-hover:top-[33%] duration-300 grid grid-rows-2 ">
              <div className="row-start-2 row-end-auto flex flex-col">
                <h3 className=" pt-3 text-xl font-semibold flex items-center h-fit px-5">
                  UV Nails Lamp
                  <span className="text-base ml-auto text-green-600">
                    (3 on Stock)
                  </span>
                </h3>
                <p className="px-5 pt-3">
                  Donec nunc nulla, aliquam quis dignissim a, interdum id
                  tortor.
                </p>
                <div className="bg-[#e1ae3e] mt-auto text-center py-3 text-lg font-semibold">
                  See More
                </div>
              </div>
            </div>
          </div>
          <div className="w-fit relative group cursor-pointer">
            <div className="w-[300px] h-[350px] rounded-xl overflow-hidden z-20 relative top-20 group-hover:top-0 duration-300">
              <img
                src="/img/nailPolishRemover.webp"
                alt="brush"
                className="object-cover object-center h-full w-full"
              />
            </div>
            <div className="overflow-hidden bg-[#111111] text-white z-10 w-[300px] h-[350px] rounded-xl absolute top-20 group-hover:top-[33%] duration-300 grid grid-rows-2 ">
              <div className="row-start-2 row-end-auto flex flex-col">
                <h3 className=" pt-3 text-xl font-semibold flex items-center h-fit px-5">
                  Polish Remover
                  <span className="text-base ml-auto text-red-600">
                    (Out of stock)
                  </span>
                </h3>
                <p className="px-5 pt-3">
                  Donec nunc nulla, aliquam quis dignissim a, interdum id
                  tortor.
                </p>
                <div className="bg-[#e1ae3e] mt-auto text-center py-3 text-lg font-semibold">
                  See More
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsMainPage;
