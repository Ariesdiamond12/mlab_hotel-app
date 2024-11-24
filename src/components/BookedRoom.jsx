import React from "react";
import Room2 from "../assets/paleokrastritsa-1.jpg";
import {
  DatePicker,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Button,
  useDisclosure,
  Select,
  SelectItem,
} from "@nextui-org/react";

import { guests, roomType } from "./data";
import PayPalButton from "./PaypalButton";

function BookedRoom() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-1">
      <div className="flex flex-col justify-center items-center">
        <Button className="text-tiny" radius="full" size="sm" onPress={onOpen}>
          Book
        </Button>

        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
          <ModalContent className="fixed inset-0 flex items-center justify-center w-[90%] md:w-[70%] lg:w-[50%] max-w-[800px] mx-auto bg-white rounded-lg shadow-lg pb-0">
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1 p-10 text-center">
                  Book Your Stay: Let Us Assist You In Planning The Perfect
                  Experience.
                </ModalHeader>
                <ModalBody>
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Image Column */}
                    <div className="md:w-1/2 flex justify-center items-center">
                      <img
                        src={Room2}
                        alt="Greece"
                        className="w-full h-auto object-cover rounded-lg"
                      />

                    </div>
                    {/* Form Column */}
                    <div className="md:w-1/2 flex flex-col gap-4">
                      <div>
                        <DatePicker
                          label="Check-In"
                          className="max-w-[284px]"
                        />
                      </div>
                      <div>
                        <DatePicker
                          label="Check-Out"
                          className="max-w-[284px]"
                        />
                      </div>
                      <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                        <Select label="Room Type" className="max-w-xs">
                          {roomType.map((roomType) => (
                            <SelectItem key={roomType.key}>
                              {roomType.label}
                            </SelectItem>
                          ))}
                        </Select>
                      </div>
                      <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                        <Select label="Guests" className="max-w-xs">
                          {guests.map((guests) => (
                            <SelectItem key={guests.key}>
                              {guests.label}
                            </SelectItem>
                          ))}
                        </Select>
                      </div>
                      <div>
                        <PayPalButton/>
                      </div>
                    </div>
                  </div>
                </ModalBody>
              </>
            )}
          </ModalContent>
        </Modal>
      </div>
    </div>
  );
}

export default BookedRoom;
