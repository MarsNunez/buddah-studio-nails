const Hero = () => {
  return (
    <>
      <div className="bg-[url('/img/studio.webp')] bg-cover bg-center min-h-[500px] text-white relative">
        <div className="h-full w-full justify-center absolute text-center bg-black bg-opacity-50 flex items-center">
          <div className="flex flex-col gap-8">
            <h1 className="text-7xl">Buddha Studio Nails</h1>
            <div className="max-w-xl mx-auto text-md">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur pharetra malesuada est. Curabitur quis enim dapibus
                lorem molestie pulvinar sit amet a nisi. Fusce at leo a lectus
                tristique tincidunt mattis ac tortor.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" mx-auto max-w-7xl flex gap-32 px-20 mt-28">
        <div className=" flex items-center">
          <div>
            <h2 className="text-3xl mb-8 font-semibold">
              Nam aliquam vehicula ante hendrerit imperdiet.
            </h2>
            <p>
              Maecenas vitae diam sit amet neque consectetur luctus. Donec
              ultrices nisi risus, eu sagittis mauris blandit in. Aenean felis
              massa, posuere interdum lorem id, lacinia venenatis est. Proin
              lobortis suscipit libero vitae pretium. Duis placerat turpis id
              erat auctor, ut semper metus dignissim.
            </p>
          </div>
        </div>
        <img src="/img/main.png" alt="mainImage" className="w-80" />
      </div>
    </>
  );
};

export default Hero;
