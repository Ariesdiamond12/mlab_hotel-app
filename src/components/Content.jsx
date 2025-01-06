import React from "react";
import Room1 from "../assets/suite1.jpg";
import Room2 from "../assets/paleokrastritsa-1.jpg";
import Room3 from "../assets/suite3.jpeg";
import Room4 from "../assets/suite4.jpeg";
import { FaHeart } from "react-icons/fa";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button,
} from "@nextui-org/react";
import BookedRoom from "./BookedRoom";

function Content() {
  const [liked, setLiked] = React.useState([false, false]);

  const handleLikeClick = (index) => {
    const newLiked = [...liked];
    newLiked[index] = !newLiked[index];
    setLiked(newLiked);
  };

  return (
    <div className="flex flex-col mb-44">
      {/* Title Section */}
      <div className="text-center mt-20">
        <h1 className="font-semibold text-2xl">Explore Our Exclusive Rooms</h1>
        <p className="mt-2 text-gray-600">
          Discover a whole new way of living your holidays in Greece, Santorini.
        </p>
      </div>

      {/* Cards Section */}
      <div className="flex w-[100%] justify-around items-center mt-20">
        <Card
          isFooterBlurred
          className="w-80 h-[300px] col-span-12 sm:col-span-5"
        >
          <Image
            removeWrapper
            alt="Card example background"
            className="z-0 w-80 h-80 scale-125 -translate-y-6 object-cover"
            src={Room1}
          />
          <CardFooter className="absolute bg-white/30 bottom-0  z-10 justify-between">
            <div>
              <p className="text-black text-tiny">Single Room</p>
              <p className="text-black text-tiny">Available</p>
              <p className="text-black text-tiny">R1500 per night</p>
            </div>
            <BookedRoom />
          </CardFooter>

          <div onClick={() => handleLikeClick(0)} className="cursor-pointer">
            <FaHeart
              className="z-150 absolute top-2 left-2 text-white"
              size={23}
              color={liked[0] ? "red" : "white"}
            />
          </div>
        </Card>
        <Card
          isFooterBlurred
          className="w-80 h-[300px] col-span-12 sm:col-span-5"
        >
          <Image
            removeWrapper
            alt="Card example background"
            className="z-0 w-80 h-80 scale-125 -translate-y-6 object-cover"
            src={Room2}
          />
          <CardFooter className="absolute bg-white/30 bottom-0 z-10 justify-between">
            <div>
              <p className="text-black text-tiny">Standard Room</p>
              <p className="text-black text-tiny">Available</p>
              <p className="text-black text-tiny">R2000 per night</p>
            </div>
            <BookedRoom />
          </CardFooter>
          <div onClick={() => handleLikeClick(1)} className="cursor-pointer">
            <FaHeart
              className="z-150 absolute top-2 left-2 text-white"
              size={23}
              color={liked[1] ? "red" : "white"}
            />
          </div>
        </Card>

        <Card
          isFooterBlurred
          className="w-80 h-[300px] col-span-12 sm:col-span-5"
        >
          <Image
            removeWrapper
            alt="Card example background"
            className="z-0 w-80 h-80 scale-125 -translate-y-6 object-cover"
            src={Room3}
          />
          <CardFooter className="absolute bg-white/30 bottom-0 z-10 justify-between">
            <div>
              <p className="text-black text-tiny">Presidential Suite</p>
              <p className="text-black text-tiny">Available</p>
              <p className="text-black text-tiny">R5000 per night</p>
            </div>
            <BookedRoom />
          </CardFooter>
          <div onClick={() => handleLikeClick(2)} className="cursor-pointer">
            <FaHeart
              className="z-150 absolute top-2 left-2 text-white"
              size={23}
              color={liked[2] ? "red" : "white"}
            />
          </div>
        </Card>

        <Card
          isFooterBlurred
          className="w-80 h-[300px] col-span-12 sm:col-span-5"
        >
          <Image
            removeWrapper
            alt="Card example background"
            className="z-0 w-80 h-80 scale-125 -translate-y-6 object-cover"
            src={Room4}
          />
          <CardFooter className="absolute bg-white/30 bottom-0 z-10 justify-between">
            <div>
              <p className="text-black text-tiny">Deluxe Suite</p>
              <p className="text-black text-tiny">Available</p>
              <p className="text-black text-tiny">R3000 per night</p>
            </div>
            <BookedRoom />
          </CardFooter>
          <div onClick={() => handleLikeClick(3)} className="cursor-pointer">
            <FaHeart
              className="z-150 absolute top-2 left-2 text-white"
              size={23}
              color={liked[3] ? "red" : "white"}
            />
          </div>
        </Card>
      </div>
    </div>
  );
}

export default Content;
