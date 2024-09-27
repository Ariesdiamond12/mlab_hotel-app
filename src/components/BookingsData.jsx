import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  DatePicker,
  Select,
  SelectItem,
} from "@nextui-org/react";
import { guests } from "./data";
import PayPalButton from "./PaypalButton"; // Import the PayPalButton component

function BookingsData() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [checkout, setCheckOut] = useState(false);
  const [amount, setAmount] = useState("100.00"); // Example booking amount

  return (
    <div className="grid grid-cols-1 sm:grid-cols-1  w-full items-center justify-center">
      <div className="flex flex-col justify-center items-center">
        <>
          <Button color="primary" radius="full" size="sm" onPress={onOpen}>
            Book Now
          </Button>
          <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalHeader className="flex flex-col gap-1 text-center">
                    Make Your Reservations
                  </ModalHeader>
                  <ModalBody className="flex flex-col justify-center items-center gap-4">
                    <div className="flex w-full justify-center items-center">
                      <DatePicker label="Check In" className="max-w-[300px]" />
                    </div>
                    <div className="flex  w-full justify-center items-center">
                      <DatePicker label="Check Out" className="max-w-[300px]" />
                    </div>
                    <div className="flex w-full justify-center items-center gap-4">
                      <Select label="Guests" className="max-w-[300px]">
                        {guests.map((guests) => (
                          <SelectItem key={guests.key}>
                            {guests.label}
                          </SelectItem>
                        ))}
                      </Select>
                    </div>
                    <div>
                      <Button className="bg-[#10659d] text-white rounded-full px-4 py-2 w-32">
                        Book Now
                      </Button>
                    </div>
                    {checkout && <PayPalButton amount={amount} />}{" "}
                    {/* Display PayPalButton */}
                  </ModalBody>
                  <ModalFooter>
                    <Button color="danger" variant="light" onPress={onClose}>
                      Close
                    </Button>
                  </ModalFooter>
                </>
              )}
            </ModalContent>
          </Modal>
        </>
      </div>
    </div>
  );
}

export default BookingsData;
