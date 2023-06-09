const CustomerComments = () => {
  return (
    <section className="bg-[#111] text-white pt-24">
      <h2 className="text-center font-semibold text-4xl">Customer Comments</h2>
      <div className="text-center flex gap-20 mx-auto max-w-6xl w-fit pt-36 pb-40">
        <div className="border-4 border-[#e1ae3e] max-w-[300px] rounded-lg text-[#111] bg-white relative px-5 pb-7">
          <div className="rounded-full border-4 border-[#e1ae3e] h-32 w-32 overflow-hidden absolute -top-[31%] left-[26%]">
            <img
              src="/img/p1.png"
              alt="customer"
              className="w-full object-cover object-center h-full"
            />
          </div>
          <p className="mt-20 text-xl font-semibold mb-3">Marco Aurelio</p>
          <p>
            La experiencia en el spa de uñas fue excepcional. Un servicio
            impecable y relajante.
          </p>
        </div>
        <div className="border-4 border-[#e1ae3e] max-w-[300px] rounded-lg text-[#111] bg-white relative px-5 pb-7">
          <div className="rounded-full border-4 border-[#e1ae3e] h-32 w-32 overflow-hidden absolute -top-[31%] left-[26%]">
            <img
              src="/img/p2.png"
              alt="customer"
              className="w-full object-cover object-center h-full"
            />
          </div>
          <p className="mt-20 text-xl font-semibold mb-3">Sofia Fernandez</p>
          <p>
            El personal del spa de uñas me trató como una VIP. Resultado
            impresionante y satisfactorio.
          </p>
        </div>
        <div className="border-4 border-[#e1ae3e] max-w-[300px] rounded-lg text-[#111] bg-white relative px-5 pb-7">
          <div className="rounded-full border-4 border-[#e1ae3e] h-32 w-32 overflow-hidden absolute -top-[31%] left-[26%]">
            <img
              src="/img/p3.jpg"
              alt="customer"
              className="w-full object-cover object-center h-full"
            />
          </div>
          <p className="mt-20 text-xl font-semibold mb-3">Diese Kalte Nacht</p>
          <p>
            Me encantó el ambiente relajante y los resultados impecables del spa
            de uñas. ¡Volveré!
          </p>
        </div>
      </div>
    </section>
  );
};

export default CustomerComments;
