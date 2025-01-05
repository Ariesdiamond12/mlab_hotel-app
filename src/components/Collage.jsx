import React from "react";
import Seafood from "../assets/seafood.jpeg";
import Platter from "../assets/platter.jpeg";
import Therapy from "../assets/Therapy.jpeg";
import Products from "../assets/Products.jpeg";
import Coastal from "../assets/Coastal.jpeg";
import Indoor from "../assets/Indoor.jpeg";
import { Card, Image } from "@nextui-org/react";

function Collage() {
  return (
    <div className="flex flex-col justify-center items-center m-32">
      <div className="text-center my-8">
        <p className="text-[#10659d] text-3xl font-bold">
          What We Offer At Luviana
        </p>
      </div>
      <div className="max-w-[900px] gap-2 grid grid-cols-12 grid-rows-2 px-8">
        <Card className="col-span-12 sm:col-span-4 h-[300px]">
          <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src={Coastal}
          />
        </Card>
        <Card className="col-span-12 sm:col-span-4 h-[300px]">
          <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src={Seafood}
          />
        </Card>
        <Card className="col-span-12 sm:col-span-4 h-[300px]">
          <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src={Products}
          />
        </Card>
        <Card
          isFooterBlurred
          className="w-full h-[300px] col-span-12 sm:col-span-5"
        >
          <Image
            removeWrapper
            alt="Card example background"
            className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
            src={Indoor}
          />
        </Card>
        <Card
          isFooterBlurred
          className="w-full h-[300px] col-span-12 sm:col-span-7"
        >
          <Image
            removeWrapper
            alt="Relaxing therapy session"
            className="z-0 w-full h-full object-cover"
            src={Therapy}
          />
        </Card>
      </div>
    </div>
  );
}

export default Collage;
