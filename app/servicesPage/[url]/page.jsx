"use client";
import { getServiceDetails } from "@/services";
import Link from "next/link";
import { use } from "react";

const ServiceDetails = ({ params }) => {
  const service = use(getServiceDetails(params.url)) || [];
  return (
    <div className="flex max-w-6xl justify-between mx-auto py-14">
      <div className="max-w-2xl bg-white p-7 rounded-lg flex flex-col gap-5 shadow-lg">
        <div className="rounded-lg overflow-hidden w-full h-[400px]">
          <img
            src={service.image.url}
            alt="title imgage"
            className="w-full object-cover"
          />
        </div>
        <h2 className="text-3xl font-semibold">{service.title}</h2>
        <p className="text-xl font-light">
          <span className="font-semibold">Descripcion: </span>
          {service.content}
        </p>
        <p className="text-xl text-green-700">
          <span className="font-semibold text-black">Precio: </span>
          {"$" + service.price}
        </p>
        <Link href={"/servicesPage"}>
          <div className="px-5 py-2 rounded-lg w-fit bg-blue-700 text-white font-semibold text-xl">
            Atras
          </div>
        </Link>
      </div>
      <div className="max-w-md h-fit text-center rounded-lg bg-white flex flex-col gap-5 p-6 shadow-lg">
        <p className="text-xl font-semibold">Encargado del servicio</p>
        <div className="rounded-full overflow-hidden w-32 h-32 mx-auto shadow-lg">
          <img
            src={service.employee.photo.url}
            alt="employee"
            className="object-cover h-full w-full"
          />
        </div>
        <p className="font-semibold text-lg">{service.employee.name}</p>
        <p>
          Porttitor eget dolor morbi non arcu risus quis varius quam. Eleifend
          donec pretium vulputate sapien nec. Sit amet luctus venenatis lectus
          magna.
        </p>
      </div>
    </div>
  );
};

export default ServiceDetails;
