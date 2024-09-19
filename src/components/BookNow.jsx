import React from "react";
import Santorini from "../assets/santorini.jpg";
import {
  DatePicker,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Select,
  SelectItem,
} from "@nextui-org/react";
import { guests, places } from "./data";

function BookNow() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
      <div className="flex flex-col justify-center">
        <Button onPress={onOpen}>Open Modal</Button>
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
          <ModalContent className="w-[50%] max-w-[1200px]">
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1 p-10">
                  Book Your Stay: Let Us Assist You In Planning The Perfect
                  Experience.
                </ModalHeader>
                <ModalBody>
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Image Column */}
                    <div className="md:w-1/2 flex justify-center items-center">
                      <img
                        src={Santorini}
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
                        <Select label="Place" className="max-w-xs">
                          {places.map((places) => (
                            <SelectItem key={places.key}>
                              {places.label}
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
                        <Button className="bg-[#10659d] text-white rounded-full w-10">
                          Reserve
                        </Button>
                      </div>
                    </div>
                  </div>
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Close
                  </Button>
                  <Button color="primary" onPress={onClose}>
                    Action
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </div>
    </div>
  );
}

export default BookNow;
