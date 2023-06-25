"use client";
import { getServices } from "@/services";
import Link from "next/link";
import { use } from "react";

const Services = () => {
  const services = use(getServices()) || [];
  console.log(services);
  return (
    <div>
      <h1 className="text-center font-bold text-4xl my-10">Servicios</h1>
      <div className="max-w-4xl mx-auto flex flex-col gap-7">
        {services.map((service) => (
          <div
            key={service.node.title}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <div className="flex justify-between">
              <div className="w-72">
                <img
                  src={service.node.image.url}
                  alt={service.node.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="max-w-xl py-4 pr-6">
                <div className="flex justify-between">
                  <h2 className="text-xl font-semibold mb-3">
                    {service.node.title}
                  </h2>
                  <p className="text-lg text-green-700 font-semibold">
                    ${service.node.price}
                  </p>
                </div>
                <p className="mb-5">{service.node.description}</p>
                <Link href={`/servicesPage/${service.node.slug}`}>
                  <div className="bg-blue-700 text-white text-center rounded-lg px-3 py-2 mb-3 font-semibold">
                    Ver mas
                  </div>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
